open Lexing
open Exprs
open Printf
open Pretty
open Js_of_ocaml
open ExtLib
open Stdlib

exception ParseError of string

let parse (name : string) lexbuf : sourcespan program =
  try
    lexbuf.lex_curr_p <- { lexbuf.lex_curr_p with pos_fname = name };
    Parser.program Lexer.token lexbuf
  with
  | Failure msg as exn ->
    if msg = "lexing: empty token"
    then
      raise
        (ParseError (sprintf "Lexical error at %s" (string_of_position lexbuf.lex_curr_p)))
    else (
      let bt = Printexc.get_raw_backtrace () in
      Printexc.raise_with_backtrace exn bt
      (* make sure we throw with the same stack trace *))
  | Parsing.Parse_error ->
    let curr = lexbuf.Lexing.lex_curr_p in
    let line = curr.Lexing.pos_lnum in
    let cnum = curr.Lexing.pos_cnum - curr.Lexing.pos_bol in
    let tok = Lexing.lexeme lexbuf in
    raise
      (ParseError (sprintf "Parse error at line %d, col %d: token `%s`" line cnum tok))
;;

let parse_string (name : string) (s : string) : sourcespan program =
  let lexbuf = Lexing.from_string ~with_positions:true s in
  parse name lexbuf
;;

type range = int * int * int * int

let get_startpos (pos : sourcespan) =
  match pos with
  | p, _ -> p.pos_lnum, p.pos_bol
;;

let range_of_sourcespan ((start, _end) : sourcespan) : range =
  ( start.pos_lnum
  , start.pos_cnum - start.pos_bol
  , _end.pos_lnum
  , _end.pos_cnum - _end.pos_bol )
;;

let range_equals ((a1, b1, c1, d1) : range) ((a2, b2, c2, d2) : range) : bool =
  a1 = a2 && b1 = b2 && c1 = c2 && d1 = d2
;;

let lookup (name : string) (env : (string * 'a) list) : 'a option =
  let found = List.find_opt (fun (n, _) -> n = name) env in
  match found with
  | Some (_, b) -> Some b
  | None -> None
;;

let lookup_with_name (name : string) (env : (string * 'a) list) : (string * 'a) option =
  let found = List.find_opt (fun (n, _) -> n = name) env in
  match found with
  | Some (a, b) -> Some (a, b)
  | None -> None
;;

let find_some (list : 'a option list) : 'a option =
  match
    List.find_opt
      (fun opt ->
        match opt with
        | Some _ -> true
        | None -> false)
      list
  with
  | Some s -> s
  | None -> None
;;

let rec desugarP (p : sourcespan program) =
  match p with
  | Program (decls, body, tag) ->
    (* This particular desugaring will convert declgroups into ELetRecs *)
    let merge_sourcespans ((s1, _) : sourcespan) ((_, s2) : sourcespan) : sourcespan =
      s1, s2
    in
    let wrap_G g body =
      (* match g with
      | [] -> body
      | f :: r ->
        let span =
          List.fold_left merge_sourcespans (get_tag_D f) (List.map get_tag_D r)
        in *)
      ELetRec (helpG g, body, get_tag_E body)
    in
    Program ([], List.fold_right wrap_G decls body, tag)

and helpG g = List.map helpD g

and helpD d =
  match d with
  | DFun (name, args, body, (a, b)) ->
    let new_pos_start =
      { pos_fname = a.pos_fname
      ; pos_bol = a.pos_bol
      ; pos_cnum = a.pos_cnum + 4
      ; pos_lnum = a.pos_lnum
      }
    in
    let new_pos_end =
      { pos_fname = a.pos_fname
      ; pos_bol = a.pos_bol
      ; pos_cnum = a.pos_cnum + 4 + String.length name
      ; pos_lnum = a.pos_lnum
      }
    in
    let new_ss = new_pos_start, new_pos_end in
    BName (name, false, new_ss), ELambda (args, body, (a, b)), (a, b)
;;

let rec string_of_binding_list (blist : sourcespan binding list) : string =
  match blist with
  | (BName (name, _, (a, b)), _, _) :: rest ->
    String.concat
      ""
      [ name
      ; ": "
      ; sprintf "%d %d-%d %d" a.pos_lnum a.pos_cnum b.pos_lnum b.pos_cnum
      ; " "
      ; string_of_binding_list rest
      ]
  | _ -> ""
;;

(* | (BTuple(binds)) *)

let get_definition
    (begin_ln : int)
    (begin_col : int)
    (end_ln : int)
    (end_col : int)
    (program : Js.js_string Js.t)
    : (string * range) option
  =
  let prog = desugarP (parse_string "file" (Js.to_string program)) in
  let r = begin_ln, begin_col, end_ln, end_col in
  let rec help (expr : sourcespan expr) (env : (string * range) list)
      : (string * range) option
    =
    match expr with
    | ELet (bindings_list, body, _) ->
      let new_env = env_for_bindings (List.map (fun (b, _, _) -> b) bindings_list) in
      let found_in_env =
        List.map
          (fun (n, range) -> if range_equals range r then Some (n, r) else None)
          new_env
      in
      let found_in_bindings = List.map (fun (_, v, _) -> help v env) bindings_list in
      find_some (found_in_env @ found_in_bindings @ [ help body (new_env @ env) ])
    | EId (name, ss) ->
      if range_equals (range_of_sourcespan ss) r
      then (
        match lookup_with_name name env with
        | Some (name, r) -> Some (name, r)
        | None -> Some (name, range_of_sourcespan (dummy_pos, dummy_pos)))
      else None
    | EPrim1 (_, expr, _) -> help expr env
    | EPrim2 (_, expr1, expr2, _) -> find_some ([ help expr1 env ] @ [ help expr2 env ])
    | ESeq (expr1, expr2, _) -> find_some ([ help expr1 env ] @ [ help expr2 env ])
    | ELetRec (bindings_list, body, _) ->
      let new_env = env_for_bindings (List.map (fun (b, _, _) -> b) bindings_list) in
      let found_in_env =
        List.map
          (fun (n, range) -> if range_equals range r then Some (n, r) else None)
          new_env
      in
      let found_in_bindings =
        List.map (fun (_, v, _) -> help v (new_env @ env)) bindings_list
      in
      find_some (found_in_env @ found_in_bindings @ [ help body (new_env @ env) ])
    | ELambda (binds, body, _) ->
      let new_env = env_for_bindings binds in
      let found_in_env =
        List.map
          (fun (n, range) -> if range_equals range r then Some (n, r) else None)
          new_env
      in
      find_some (found_in_env @ [ help body (new_env @ env) ])
    | EApp (fn, args, _, _) ->
      find_some ([ help fn env ] @ List.map (fun arg -> help arg env) args)
    | EIf (c, t, e, _) -> find_some ([ help c env ] @ [ help t env ] @ [ help e env ])
    | ETuple (exprs, _) -> find_some (List.map (fun e -> help e env) exprs)
    | EGetItem (e1, e2, _) -> find_some ([ help e1 env ] @ [ help e2 env ])
    | ESetItem (e1, e2, e3, _) ->
      find_some ([ help e1 env ] @ [ help e2 env ] @ [ help e3 env ])
    | ENumber _ -> None
    | EBool _ -> None
    | ENil _ -> None
  (* | _ -> failwith "nah ah" *)
  and env_for_bindings (bind_list : sourcespan bind list) : (string * range) list =
    match bind_list with
    | BName (name, _, ss) :: rest ->
      env_for_bindings rest @ [ name, range_of_sourcespan ss ]
    | BTuple (binds, _) :: rest -> env_for_bindings rest @ env_for_bindings binds
    | BBlank ss :: rest -> env_for_bindings rest @ [ "_", range_of_sourcespan ss ]
    | [] -> []
  in
  match prog with
  (* | Program (_, expr, _) -> None *)
  | Program (d, expr, ss) ->
    (* failwith (string_of_program (Program (d, expr, ss))); *)
    help expr []
;;

let get_uses
    (begin_ln : int)
    (begin_col : int)
    (end_ln : int)
    (end_col : int)
    (program : Js.js_string Js.t)
    : range list
  =
  let prog = desugarP (parse_string "file" (Js.to_string program)) in
  let rec help (expr : sourcespan expr) (env : (string * range) list) (r : range)
      : range list
    =
    (* let r = begin_ln, begin_col, end_ln, end_col in *)
    match expr with
    | ELet (bindings_list, body, _) ->
      let new_env = env_for_bindings (List.map (fun (b, _, _) -> b) bindings_list) in
      let uses_in_binds =
        List.map (fun (_, v, _) -> help v env r) bindings_list |> List.flatten
      in
      printf "uses in binds: %s" (dump uses_in_binds);
      uses_in_binds @ help body (new_env @ env) r
    | EId (name, ss) ->
      (match lookup name env with
      | Some range -> if range_equals r range then [ range_of_sourcespan ss ] else []
      | None -> [])
    | EPrim1 (_, expr, _) -> help expr env r
    | EPrim2 (_, expr1, expr2, _) -> help expr1 env r @ help expr2 env r
    | ELambda (binds, body, _) ->
      let new_env = env_for_bindings binds in
      help body (new_env @ env) r
    | ESeq (e1, e2, _) -> help e1 env r @ help e2 env r
    | ETuple (exprs, _) -> List.map (fun e -> help e env r) exprs |> List.flatten
    | EGetItem (e1, e2, _) -> help e1 env r @ help e2 env r
    | ESetItem (e1, e2, e3, _) -> help e1 env r @ help e2 env r @ help e3 env r
    | ELetRec (bindings_list, body, _) ->
      let new_env = env_for_bindings (List.map (fun (b, _, _) -> b) bindings_list) in
      let uses_in_binds =
        List.map (fun (_, v, _) -> help v (new_env @ env) r) bindings_list |> List.flatten
      in
      printf "uses in binds: %s" (dump uses_in_binds);
      uses_in_binds @ help body (new_env @ env) r
    | EIf (c, t, e, _) -> help c env r @ help t env r @ help e env r
    | EApp (f, args, _, _) ->
      help f env r @ (List.map (fun arg -> help arg env r) args |> List.flatten)
    | ENumber _ -> []
    | EBool _ -> []
    | ENil _ -> []
  and env_for_bindings (bind_list : sourcespan bind list) : (string * range) list =
    match bind_list with
    | BName (name, _, ss) :: rest ->
      env_for_bindings rest @ [ name, range_of_sourcespan ss ]
    | BTuple (binds, _) :: rest -> env_for_bindings rest @ env_for_bindings binds
    | BBlank ss :: rest -> env_for_bindings rest @ [ "_", range_of_sourcespan ss ]
    | [] -> []
  in
  printf "viewing uses";
  match prog with
  | Program (_, expr, _) ->
    let definition =
      match get_definition begin_ln begin_col end_ln end_col program with
      | Some (name, r) ->
        (* found a name for the given range *)
        if range_equals (range_of_sourcespan (dummy_pos, dummy_pos)) r
           (* handle case where name isn't yet bound *)
        then help expr [ name, r ] r
        else help expr [] r
      | None -> raise (Failure "no name for range" (* no name for given range *))
    in
    definition
;;

(* help expr [] *)

let _ =
  Js.export
    "helpers"
    (object%js
       method print p =
         let js_str = Js.to_string p in
         string_of_program (parse_string "asdf" js_str) |> Js.string

       method echo s = printf "echoing: %s" (Js.to_string s)

       method viewAllUses
           (begin_ln : int)
           (begin_bol : int)
           (end_ln : int)
           (end_bol : int)
           (program : Js.js_string Js.t) =
         Js.array
           (Array.of_list
              (get_uses
                 (begin_ln : int)
                 (begin_bol : int)
                 (end_ln : int)
                 (end_bol : int)
                 (program : Js.js_string Js.t)))

       method getDefinition
           (begin_ln : int)
           (begin_bol : int)
           (end_ln : int)
           (end_bol : int)
           (program : Js.js_string Js.t)
           : (range, Js.js_string Js.t) Either.t =
         match
           get_definition
             (begin_ln : int)
             (begin_bol : int)
             (end_ln : int)
             (end_bol : int)
             (program : Js.js_string Js.t)
         with
         | Some (_, b) -> Left b
         | None -> Right (Js.string "Couldn't find name")
    end)
;;
