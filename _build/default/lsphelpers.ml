open Lexing
open Exprs
open ExtLib
open Printf
open Pretty
open Js_of_ocaml

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

let _ =
  Js.export
    "parser"
    (object%js
       method parse_string (name : string) (s : string) : sourcespan program =
         let lexbuf = Lexing.from_string s in
         parse name lexbuf
    end)
;;

(* Read a file into a string *)
