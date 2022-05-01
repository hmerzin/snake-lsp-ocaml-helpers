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

(* let rec name_for_range (range : range) (expr : sourcespan expr) : string option =
  match expr with
  | ELet(bindings, body, _) -> help_bindings bindings range
  
  and help_bindings (bindings: sourcespan binding list) (range : range) : string option =
  match bindings with
  | [] -> None
  | binding::rest -> (match help_binding binding range with 
  | Some (name) -> Some(name)
  | None -> help_bindings rest range
  )

  and help_binding (binding : sourcespan binding) (range : range) : string option =
  match binding with
  |  *)

(* let view_all_uses
    (begin_ln : int)
    (begin_bol : int)
    (end_ln : int)
    (end_bol : int)
    (program : string)
    : (posn * posn) list
  =
  let prog = parse_string "any" program in


  let rec help (expr : sourcespan expr) (is_scoped : bool) (name : string) : posn * posn list
    =
    match expr with
    | ELet (bindings_list, body, _) ->
      let is_binding = List.map (fun binding -> binding_help binding) bindings_list in
      []
    | EId (name, pos) -> if name = name then [ get_startpos pos ] else []
    | _ -> failwith "unimplimented"
  and binding_help (binding : sourcespan binding) : bool * (posn * posn list) =
    match binding with
    | BName (n, _, p), _, _ -> n = name, get_startpos p
    (* | BTuple(binds, _), _, _ *)
    | _ -> failwith "error"
    (* and binds_help (binds : sourcespan bind list) : bool * startpos = 
  match binds with
  |  *)
  in
  match prog with
  | Program (_, expr, _) -> help expr false "" *)
(* let view_all_uses
    (begin_ln : int)
    (begin_bol : int)
    (end_ln : int)
    (end_bol : int)
    (program : string)
    : range list
  =
  let prog = parse_string "any" program in
  let rec help
      (expr : sourcespan expr)
      (declare_range : range)
      (name : string)
      (is_scoped : bool)
      : range list
    =
    let r = begin_ln, begin_bol, end_ln, end_bol in
    match expr with
    | ELet (bindings_list, body, _) ->
      let matches =
        List.map (fun (bind, _, _) -> get_match_for_bind bind) bindings_list
      in
      let found =
        List.fold_right (fun a b ->
            match a, b with
            | None, Some _ -> b
            | Some _, None -> a
            | Some _, Some _ -> b
            | None, None -> None)
      in
      x
  and get_match_for_bind (bind : sourcespan bind) ((sl, sc, el, ec) : range)
      : string option
    =
    match bind with
    | BName (n, _, (a, b)) ->
      if a.pos_lnum = sl && a.pos_bol = sc && b.pos_lnum = el && b.pos_bol = ec
      then Some n
      else None
    | BTuple (binds, ss) ->
      List.map (fun bind -> get_match_for_bind bind (sl, sc, el, ec)) binds
      |> List.fold_left
           (fun op acc ->
             match op with
             | Some _ -> op
             | None -> acc)
           None
    | BBlank _ -> None
  in
  match prog with
  | Program (_, expr, _) -> help expr false "" *)
let range_of_sourcespan ((start, _end) : sourcespan) : range =
  start.pos_lnum, start.pos_cnum, _end.pos_lnum, _end.pos_cnum
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

let get_definition
    (begin_ln : int)
    (begin_col : int)
    (end_ln : int)
    (end_col : int)
    (program : Js.js_string Js.t)
    : (string * range) option
  =
  let prog = parse_string "file" (Js.to_string program) in
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
      (* let found_in_bindings = List.map (fun (_, v, _) -> help v env) bindings_list in *)
      (* find_some (found_in_env @ [ help body (new_env @ env) ]) *)
      (* find_some [ help body env ] *)
    | EId (name, ss) ->
      if range_equals (range_of_sourcespan ss) r
      then (
        match lookup_with_name name env with
        | Some (name, r) -> Some (name, r)
        | None -> Some (name, range_of_sourcespan (dummy_pos, dummy_pos)))
      else None
    | EPrim1 (_, expr, _) -> help expr env
    | EPrim2 (_, expr1, expr2, _) -> find_some ([ help expr1 env ] @ [ help expr2 env ])
    | _ -> None
    | _ -> failwith "unimplemented"
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
  | Program (_, expr, _) -> help expr []
;;

let view_all_uses
    (begin_ln : int)
    (begin_col : int)
    (end_ln : int)
    (end_col : int)
    (program : Js.js_string Js.t)
    : range list
  =
  let prog = parse_string "file" (Js.to_string program) in
  let rec help (expr : sourcespan expr) (env : (string * range) list) : range list =
    let r = begin_ln, begin_col, end_ln, end_col in
    match expr with
    | ELet (bindings_list, body, _) ->
      let new_env = env_for_bindings (List.map (fun (b, _, _) -> b) bindings_list) in
      let uses_in_binds =
        List.map (fun (_, v, _) -> help v env) bindings_list |> List.flatten
      in
      printf "uses in binds: %s" (dump uses_in_binds);
      uses_in_binds @ help body (new_env @ env)
    | EId (name, ss) ->
      (match lookup name env with
      | Some range -> if range_equals r range then [ range_of_sourcespan ss ] else []
      | None -> [])
    | EPrim1 (_, expr, _) -> help expr env
    | EPrim2 (_, expr1, expr2, _) -> help expr1 env @ help expr2 env
    | _ -> []
    | _ -> failwith "unimplemented"
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
  | Program (_, expr, _) -> help expr []
;;

let build_env (program : Js.js_string Js.t) : (string * sourcespan) list =
  let prog = parse_string "any" (Js.to_string program) in
  let rec help (expr : sourcespan expr) (env : (string * sourcespan) list)
      : (string * sourcespan) list
    =
    match expr with
    | ELet (bindings_list, body, ss) ->
      let new_env = env_for_bindings (List.map (fun (b, _, _) -> b) bindings_list) in
      let binds_env =
        List.map (fun (_, v, _) -> help v env) bindings_list |> List.flatten
      in
      printf "binds_env: %s" (dump binds_env);
      env @ binds_env @ help body env @ new_env
    | _ -> []
  and env_for_bindings (bind_list : sourcespan bind list) : (string * sourcespan) list =
    match bind_list with
    | BName (name, _, ss) :: rest -> env_for_bindings rest @ [ name, ss ]
    | BTuple (binds, _) :: rest -> env_for_bindings rest @ env_for_bindings binds
    | BBlank ss :: rest -> env_for_bindings rest @ [ "_", ss ]
    | [] -> []
  in
  printf "viewing uses";
  match prog with
  | Program (_, expr, ss) -> help expr [ "prog", ss ]
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
              (view_all_uses
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

       method buildEnv (program : Js.js_string Js.t) =
         Js.array
           (Array.of_list
              (List.map
                 (fun (s, (a, b)) ->
                   ( Js.string s
                   , (a.pos_lnum, a.pos_bol, a.pos_cnum, b.pos_lnum, b.pos_bol, b.pos_cnum)
                   ))
                 (build_env (program : Js.js_string Js.t))))
    end)
;;
