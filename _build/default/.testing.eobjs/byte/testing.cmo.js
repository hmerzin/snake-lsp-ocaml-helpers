(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_js_from_array=runtime.caml_js_from_array,
     caml_js_wrap_meth_callback=runtime.caml_js_wrap_meth_callback,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_asdf=caml_string_of_jsbytes("asdf"),
     cst$1=caml_string_of_jsbytes("_"),
     cst_any=caml_string_of_jsbytes("any"),
     cst_prog=caml_string_of_jsbytes("prog"),
     cst$0=caml_string_of_jsbytes("_"),
     cst_file$0=caml_string_of_jsbytes("file"),
     cst=caml_string_of_jsbytes("_"),
     cst_file=caml_string_of_jsbytes("file"),
     cst_lexing_empty_token=caml_string_of_jsbytes("lexing: empty token"),
     cst_Testing_ParseError=caml_string_of_jsbytes("Testing.ParseError"),
     cst_helpers=caml_string_of_jsbytes("helpers"),
     Pretty=global_data.Pretty,
     Stdlib_Printf=global_data.Stdlib__Printf,
     Stdlib_Array=global_data.Stdlib__Array,
     Stdlib_List=global_data.Stdlib__List,
     ExtLib=global_data.ExtLib,
     Stdlib=global_data.Stdlib,
     Stdlib_Lexing=global_data.Stdlib__Lexing,
     Lexer=global_data.Lexer,
     Parser=global_data.Parser,
     Stdlib_Printexc=global_data.Stdlib__Printexc,
     Stdlib_Parsing=global_data.Stdlib__Parsing,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     ParseError=[248,cst_Testing_ParseError,runtime.caml_fresh_oo_id(0)],
     _h_=
      [0,
       [11,caml_string_of_jsbytes("echoing: "),[2,0,0]],
       caml_string_of_jsbytes("echoing: %s")],
     _f_=
      [0,
       [11,caml_string_of_jsbytes("binds_env: "),[2,0,0]],
       caml_string_of_jsbytes("binds_env: %s")],
     _g_=
      [0,
       [11,caml_string_of_jsbytes("viewing uses"),0],
       caml_string_of_jsbytes("viewing uses")],
     _d_=
      [0,
       [11,caml_string_of_jsbytes("uses in binds: "),[2,0,0]],
       caml_string_of_jsbytes("uses in binds: %s")],
     _e_=
      [0,
       [11,caml_string_of_jsbytes("viewing uses"),0],
       caml_string_of_jsbytes("viewing uses")],
     _c_=[0,1],
     _a_=
      [0,
       [11,caml_string_of_jsbytes("Lexical error at "),[2,0,0]],
       caml_string_of_jsbytes("Lexical error at %s")],
     _b_=
      [0,
       [11,
        caml_string_of_jsbytes("Parse error at line "),
        [4,
         0,
         0,
         0,
         [11,
          caml_string_of_jsbytes(", col "),
          [4,0,0,0,[11,caml_string_of_jsbytes(": token `"),[2,0,[12,96,0]]]]]]],
       caml_string_of_jsbytes("Parse error at line %d, col %d: token `%s`")];
    function parse(name,lexbuf)
     {try
       {var _aj_=lexbuf[12];
        lexbuf[12] = [0,name,_aj_[2],_aj_[3],_aj_[4]];
        var _ak_=caml_call2(Parser[1],Lexer[3],lexbuf);
        return _ak_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Stdlib[7])
         {var msg=exn[2];
          if(caml_string_equal(msg,cst_lexing_empty_token))
           {var _ai_=caml_call1(Pretty[16],lexbuf[12]);
            throw [0,ParseError,caml_call2(Stdlib_Printf[4],_a_,_ai_)]}
          var bt=caml_call1(Stdlib_Printexc[12],0);
          runtime.caml_restore_raw_backtrace(exn,bt);
          throw exn}
        if(exn === Stdlib_Parsing[10])
         {var
           curr=lexbuf[12],
           line=curr[2],
           cnum=curr[4] - curr[3] | 0,
           tok=caml_call1(Stdlib_Lexing[8],lexbuf);
          throw [0,ParseError,caml_call4(Stdlib_Printf[4],_b_,line,cnum,tok)]}
        throw exn}}
    function parse_string(name,s)
     {var lexbuf=caml_call2(Stdlib_Lexing[3],_c_,s);return parse(name,lexbuf)}
    function get_startpos(pos){var p=pos[1];return [0,p[2],p[3]]}
    function range_of_sourcespan(param)
     {var end=param[2],start=param[1];
      return [0,start[2],start[4],end[2],end[4]]}
    function range_equals(param,_ad_)
     {var
       d2=_ad_[4],
       c2=_ad_[3],
       b2=_ad_[2],
       a2=_ad_[1],
       d1=param[4],
       c1=param[3],
       b1=param[2],
       a1=param[1],
       _ae_=a1 === a2?1:0;
      if(_ae_)
       {var _af_=b1 === b2?1:0;
        if(_af_)
         var _ag_=c1 === c2?1:0,_ah_=_ag_?d1 === d2?1:0:_ag_;
        else
         var _ah_=_af_}
      else
       var _ah_=_ae_;
      return _ah_}
    function lookup(name,env)
     {function _ac_(param){var n=param[1];return caml_string_equal(n,name)}
      var found=caml_call2(Stdlib_List[39],_ac_,env);
      if(found){var match=found[1],b=match[2];return [0,b]}
      return 0}
    function lookup_with_name(name,env)
     {function _ab_(param){var n=param[1];return caml_string_equal(n,name)}
      var found=caml_call2(Stdlib_List[39],_ab_,env);
      if(found){var match=found[1],b=match[2],a=match[1];return [0,[0,a,b]]}
      return 0}
    function find_some(list)
     {function _aa_(opt){return opt?1:0}
      var match=caml_call2(Stdlib_List[39],_aa_,list);
      if(match){var s=match[1];return s}
      return 0}
    function get_definition(begin_ln,begin_col,end_ln,end_col,program)
     {var
       prog=parse_string(cst_file,caml_string_of_jsstring(program)),
       r=[0,begin_ln,begin_col,end_ln,end_col];
      function help(expr,env)
       {var expr$0=expr;
        for(;;)
         switch(expr$0[0])
          {case 4:
            var
             body=expr$0[2],
             bindings_list=expr$0[1],
             _V_=function(param){var b=param[1];return b},
             new_env=
              env_for_bindings(caml_call2(Stdlib_List[19],_V_,bindings_list)),
             _W_=
              function(param)
               {var range=param[2],n=param[1];
                return range_equals(range,r)?[0,[0,n,r]]:0},
             found_in_env=caml_call2(Stdlib_List[19],_W_,new_env),
             _X_=function(param){var v=param[2];return help(v,env)},
             found_in_bindings=caml_call2(Stdlib_List[19],_X_,bindings_list),
             _Y_=[0,help(body,caml_call2(Stdlib[37],new_env,env)),0],
             _Z_=caml_call2(Stdlib[37],found_in_bindings,_Y_);
            return find_some(caml_call2(Stdlib[37],found_in_env,_Z_));
           case 5:var expr$1=expr$0[2],expr$0=expr$1;continue;
           case 6:
            var
             expr2=expr$0[3],
             expr1=expr$0[2],
             ___=[0,help(expr2,env),0],
             _$_=[0,help(expr1,env),0];
            return find_some(caml_call2(Stdlib[37],_$_,___));
           case 11:
            var ss=expr$0[2],name=expr$0[1];
            if(range_equals(range_of_sourcespan(ss),r))
             {var match=lookup_with_name(name,env);
              if(match)
               {var match$0=match[1],r$0=match$0[2],name$0=match$0[1];
                return [0,[0,name$0,r$0]]}
              return [0,
                      [0,
                       name,
                       range_of_sourcespan([0,Stdlib_Lexing[1],Stdlib_Lexing[1]])]]}
            return 0;
           default:return 0}}
      function env_for_bindings(bind_list)
       {if(bind_list)
         {var _O_=bind_list[1];
          switch(_O_[0])
           {case 0:
             var
              rest=bind_list[2],
              ss=_O_[1],
              _P_=[0,[0,cst,range_of_sourcespan(ss)],0],
              _Q_=env_for_bindings(rest);
             return caml_call2(Stdlib[37],_Q_,_P_);
            case 1:
             var
              rest$0=bind_list[2],
              ss$0=_O_[3],
              name=_O_[1],
              _R_=[0,[0,name,range_of_sourcespan(ss$0)],0],
              _S_=env_for_bindings(rest$0);
             return caml_call2(Stdlib[37],_S_,_R_);
            default:
             var
              rest$1=bind_list[2],
              binds=_O_[1],
              _T_=env_for_bindings(binds),
              _U_=env_for_bindings(rest$1);
             return caml_call2(Stdlib[37],_U_,_T_)}}
        return 0}
      var expr=prog[2];
      return help(expr,0)}
    function view_all_uses(begin_ln,begin_col,end_ln,end_col,program)
     {var prog=parse_string(cst_file$0,caml_string_of_jsstring(program));
      function help(expr,env)
       {var expr$0=expr;
        for(;;)
         {var r=[0,begin_ln,begin_col,end_ln,end_col];
          switch(expr$0[0])
           {case 4:
             var
              body=expr$0[2],
              bindings_list=expr$0[1],
              _H_=function(param){var b=param[1];return b},
              new_env=
               env_for_bindings(caml_call2(Stdlib_List[19],_H_,bindings_list)),
              _I_=function(param){var v=param[2];return help(v,env)},
              _J_=caml_call2(Stdlib_List[19],_I_,bindings_list),
              uses_in_binds=caml_call1(Stdlib_List[14],_J_),
              _K_=caml_call1(ExtLib[13],uses_in_binds);
             caml_call2(Stdlib_Printf[2],_d_,_K_);
             var _L_=help(body,caml_call2(Stdlib[37],new_env,env));
             return caml_call2(Stdlib[37],uses_in_binds,_L_);
            case 5:var expr$1=expr$0[2],expr$0=expr$1;continue;
            case 6:
             var
              expr2=expr$0[3],
              expr1=expr$0[2],
              _M_=help(expr2,env),
              _N_=help(expr1,env);
             return caml_call2(Stdlib[37],_N_,_M_);
            case 11:
             var ss=expr$0[2],name=expr$0[1],match=lookup(name,env);
             if(match)
              {var range=match[1];
               return range_equals(r,range)?[0,range_of_sourcespan(ss),0]:0}
             return 0;
            default:return 0}}}
      function env_for_bindings(bind_list)
       {if(bind_list)
         {var _A_=bind_list[1];
          switch(_A_[0])
           {case 0:
             var
              rest=bind_list[2],
              ss=_A_[1],
              _B_=[0,[0,cst$0,range_of_sourcespan(ss)],0],
              _C_=env_for_bindings(rest);
             return caml_call2(Stdlib[37],_C_,_B_);
            case 1:
             var
              rest$0=bind_list[2],
              ss$0=_A_[3],
              name=_A_[1],
              _D_=[0,[0,name,range_of_sourcespan(ss$0)],0],
              _E_=env_for_bindings(rest$0);
             return caml_call2(Stdlib[37],_E_,_D_);
            default:
             var
              rest$1=bind_list[2],
              binds=_A_[1],
              _F_=env_for_bindings(binds),
              _G_=env_for_bindings(rest$1);
             return caml_call2(Stdlib[37],_G_,_F_)}}
        return 0}
      caml_call1(Stdlib_Printf[2],_e_);
      var expr=prog[2];
      return help(expr,0)}
    function build_env(program)
     {var prog=parse_string(cst_any,caml_string_of_jsstring(program));
      function help(expr,env)
       {if(4 === expr[0])
         {var
           body=expr[2],
           bindings_list=expr[1],
           _t_=function(param){var b=param[1];return b},
           new_env=
            env_for_bindings(caml_call2(Stdlib_List[19],_t_,bindings_list)),
           _u_=function(param){var v=param[2];return help(v,env)},
           _v_=caml_call2(Stdlib_List[19],_u_,bindings_list),
           binds_env=caml_call1(Stdlib_List[14],_v_),
           _w_=caml_call1(ExtLib[13],binds_env);
          caml_call2(Stdlib_Printf[2],_f_,_w_);
          var
           _x_=help(body,env),
           _y_=caml_call2(Stdlib[37],_x_,new_env),
           _z_=caml_call2(Stdlib[37],binds_env,_y_);
          return caml_call2(Stdlib[37],env,_z_)}
        return 0}
      function env_for_bindings(bind_list)
       {if(bind_list)
         {var _o_=bind_list[1];
          switch(_o_[0])
           {case 0:
             var rest=bind_list[2],ss=_o_[1],_p_=env_for_bindings(rest);
             return caml_call2(Stdlib[37],_p_,[0,[0,cst$1,ss],0]);
            case 1:
             var
              rest$0=bind_list[2],
              ss$0=_o_[3],
              name=_o_[1],
              _q_=env_for_bindings(rest$0);
             return caml_call2(Stdlib[37],_q_,[0,[0,name,ss$0],0]);
            default:
             var
              rest$1=bind_list[2],
              binds=_o_[1],
              _r_=env_for_bindings(binds),
              _s_=env_for_bindings(rest$1);
             return caml_call2(Stdlib[37],_s_,_r_)}}
        return 0}
      caml_call1(Stdlib_Printf[2],_g_);
      var ss=prog[3],expr=prog[2];
      return help(expr,[0,[0,cst_prog,ss],0])}
    function t17(param,program)
     {var _l_=build_env(program);
      function _m_(param)
       {var match=param[2],b=match[2],a=match[1],s=param[1];
        return [0,
                caml_jsstring_of_string(s),
                [0,a[2],a[3],a[4],b[2],b[3],b[4]]]}
      var _n_=caml_call2(Stdlib_List[19],_m_,_l_);
      return caml_js_from_array(caml_call1(Stdlib_Array[12],_n_))}
    function t16(param,begin_ln,begin_bol,end_ln,end_bol,program)
     {var match=get_definition(begin_ln,begin_bol,end_ln,end_bol,program);
      if(match){var match$0=match[1],b=match$0[2];return [0,b]}
      return [1,"Couldn't find name"]}
    function t15(param,begin_ln,begin_bol,end_ln,end_bol,program)
     {var _k_=view_all_uses(begin_ln,begin_bol,end_ln,end_bol,program);
      return caml_js_from_array(caml_call1(Stdlib_Array[12],_k_))}
    function t14(param,s)
     {var _j_=caml_string_of_jsstring(s);
      return caml_call2(Stdlib_Printf[2],_h_,_j_)}
    function t13(param,p)
     {var js_str=caml_string_of_jsstring(p),_i_=parse_string(cst_asdf,js_str);
      return caml_jsstring_of_string(caml_call1(Pretty[15],_i_))}
    caml_call2
     (Js_of_ocaml_Js[50],
      cst_helpers,
      {"print":caml_js_wrap_meth_callback(t13),
       "echo":caml_js_wrap_meth_callback(t14),
       "viewAllUses":caml_js_wrap_meth_callback(t15),
       "getDefinition":caml_js_wrap_meth_callback(t16),
       "buildEnv":caml_js_wrap_meth_callback(t17)});
    var
     Testing=
      [0,
       ParseError,
       parse,
       parse_string,
       get_startpos,
       range_of_sourcespan,
       range_equals,
       lookup,
       lookup_with_name,
       find_some,
       get_definition,
       view_all_uses,
       build_env];
    runtime.caml_register_global(41,Testing,"Testing");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIudGVzdGluZy5lb2Jqcy9ieXRlL3Rlc3RpbmcuY21vLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInBhcnNlIiwibmFtZSIsImxleGJ1ZiIsImV4biIsIm1zZyIsImJ0IiwiY3VyciIsImxpbmUiLCJjbnVtIiwidG9rIiwicGFyc2Vfc3RyaW5nIiwicyIsImdldF9zdGFydHBvcyIsInBvcyIsInAiLCJyYW5nZV9vZl9zb3VyY2VzcGFuIiwiZW5kIiwic3RhcnQiLCJyYW5nZV9lcXVhbHMiLCJkMiIsImMyIiwiYjIiLCJhMiIsImQxIiwiYzEiLCJiMSIsImExIiwibG9va3VwIiwiZW52IiwibiIsImZvdW5kIiwiYiIsImxvb2t1cF93aXRoX25hbWUiLCJhIiwiZmluZF9zb21lIiwibGlzdCIsIm9wdCIsImdldF9kZWZpbml0aW9uIiwiYmVnaW5fbG4iLCJiZWdpbl9jb2wiLCJlbmRfbG4iLCJlbmRfY29sIiwicHJvZ3JhbSIsInByb2ciLCJyIiwiaGVscCIsImV4cHIiLCJleHByJDAiLCJib2R5IiwiYmluZGluZ3NfbGlzdCIsIm5ld19lbnYiLCJlbnZfZm9yX2JpbmRpbmdzIiwicmFuZ2UiLCJmb3VuZF9pbl9lbnYiLCJ2IiwiZm91bmRfaW5fYmluZGluZ3MiLCJleHByJDEiLCJleHByMiIsImV4cHIxIiwic3MiLCJyJDAiLCJuYW1lJDAiLCJiaW5kX2xpc3QiLCJyZXN0IiwicmVzdCQwIiwic3MkMCIsInJlc3QkMSIsImJpbmRzIiwidmlld19hbGxfdXNlcyIsInVzZXNfaW5fYmluZHMiLCJidWlsZF9lbnYiLCJiaW5kc19lbnYiLCJiZWdpbl9ib2wiLCJlbmRfYm9sIiwianNfc3RyIl0sInNvdXJjZXMiOlsiL2hvbWUvaGFycnkvaG9tZXdvcmsvY29tcGlsZXJzL2ZpbmFsLXByb2plY3QvX2J1aWxkL2RlZmF1bHQvdGVzdGluZy5tbCJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QURkNEQ7TUFDMEMsK0JBQTlDLDJCQUEyRDtJQUxsRTs7Ozs7Ozs7Ozs7O09BOVJFMUU7T0F1QkFVO09BT0FFO09Bc0dBRztPQUlBRztPQUlBUztPQU9BSztPQU9BRTtPQWFBRztPQWtEQStCO09Bd0NBRTtJQTZCRjtVIiwic291cmNlc0NvbnRlbnQiOlsib3BlbiBMZXhpbmdcbm9wZW4gRXhwcnNcbm9wZW4gUHJpbnRmXG5vcGVuIFByZXR0eVxub3BlbiBKc19vZl9vY2FtbFxub3BlbiBFeHRMaWJcbm9wZW4gU3RkbGliXG5cbmV4Y2VwdGlvbiBQYXJzZUVycm9yIG9mIHN0cmluZ1xuXG5sZXQgcGFyc2UgKG5hbWUgOiBzdHJpbmcpIGxleGJ1ZiA6IHNvdXJjZXNwYW4gcHJvZ3JhbSA9XG4gIHRyeVxuICAgIGxleGJ1Zi5sZXhfY3Vycl9wIDwtIHsgbGV4YnVmLmxleF9jdXJyX3Agd2l0aCBwb3NfZm5hbWUgPSBuYW1lIH07XG4gICAgUGFyc2VyLnByb2dyYW0gTGV4ZXIudG9rZW4gbGV4YnVmXG4gIHdpdGhcbiAgfCBGYWlsdXJlIG1zZyBhcyBleG4gLT5cbiAgICBpZiBtc2cgPSBcImxleGluZzogZW1wdHkgdG9rZW5cIlxuICAgIHRoZW5cbiAgICAgIHJhaXNlXG4gICAgICAgIChQYXJzZUVycm9yIChzcHJpbnRmIFwiTGV4aWNhbCBlcnJvciBhdCAlc1wiIChzdHJpbmdfb2ZfcG9zaXRpb24gbGV4YnVmLmxleF9jdXJyX3ApKSlcbiAgICBlbHNlIChcbiAgICAgIGxldCBidCA9IFByaW50ZXhjLmdldF9yYXdfYmFja3RyYWNlICgpIGluXG4gICAgICBQcmludGV4Yy5yYWlzZV93aXRoX2JhY2t0cmFjZSBleG4gYnRcbiAgICAgICgqIG1ha2Ugc3VyZSB3ZSB0aHJvdyB3aXRoIHRoZSBzYW1lIHN0YWNrIHRyYWNlICopKVxuICB8IFBhcnNpbmcuUGFyc2VfZXJyb3IgLT5cbiAgICBsZXQgY3VyciA9IGxleGJ1Zi5MZXhpbmcubGV4X2N1cnJfcCBpblxuICAgIGxldCBsaW5lID0gY3Vyci5MZXhpbmcucG9zX2xudW0gaW5cbiAgICBsZXQgY251bSA9IGN1cnIuTGV4aW5nLnBvc19jbnVtIC0gY3Vyci5MZXhpbmcucG9zX2JvbCBpblxuICAgIGxldCB0b2sgPSBMZXhpbmcubGV4ZW1lIGxleGJ1ZiBpblxuICAgIHJhaXNlXG4gICAgICAoUGFyc2VFcnJvciAoc3ByaW50ZiBcIlBhcnNlIGVycm9yIGF0IGxpbmUgJWQsIGNvbCAlZDogdG9rZW4gYCVzYFwiIGxpbmUgY251bSB0b2spKVxuOztcblxubGV0IHBhcnNlX3N0cmluZyAobmFtZSA6IHN0cmluZykgKHMgOiBzdHJpbmcpIDogc291cmNlc3BhbiBwcm9ncmFtID1cbiAgbGV0IGxleGJ1ZiA9IExleGluZy5mcm9tX3N0cmluZyB+d2l0aF9wb3NpdGlvbnM6dHJ1ZSBzIGluXG4gIHBhcnNlIG5hbWUgbGV4YnVmXG47O1xuXG50eXBlIHJhbmdlID0gaW50ICogaW50ICogaW50ICogaW50XG5cbmxldCBnZXRfc3RhcnRwb3MgKHBvcyA6IHNvdXJjZXNwYW4pID1cbiAgbWF0Y2ggcG9zIHdpdGhcbiAgfCBwLCBfIC0+IHAucG9zX2xudW0sIHAucG9zX2JvbFxuOztcblxuKCogbGV0IHJlYyBuYW1lX2Zvcl9yYW5nZSAocmFuZ2UgOiByYW5nZSkgKGV4cHIgOiBzb3VyY2VzcGFuIGV4cHIpIDogc3RyaW5nIG9wdGlvbiA9XG4gIG1hdGNoIGV4cHIgd2l0aFxuICB8IEVMZXQoYmluZGluZ3MsIGJvZHksIF8pIC0+IGhlbHBfYmluZGluZ3MgYmluZGluZ3MgcmFuZ2VcbiAgXG4gIGFuZCBoZWxwX2JpbmRpbmdzIChiaW5kaW5nczogc291cmNlc3BhbiBiaW5kaW5nIGxpc3QpIChyYW5nZSA6IHJhbmdlKSA6IHN0cmluZyBvcHRpb24gPVxuICBtYXRjaCBiaW5kaW5ncyB3aXRoXG4gIHwgW10gLT4gTm9uZVxuICB8IGJpbmRpbmc6OnJlc3QgLT4gKG1hdGNoIGhlbHBfYmluZGluZyBiaW5kaW5nIHJhbmdlIHdpdGggXG4gIHwgU29tZSAobmFtZSkgLT4gU29tZShuYW1lKVxuICB8IE5vbmUgLT4gaGVscF9iaW5kaW5ncyByZXN0IHJhbmdlXG4gIClcblxuICBhbmQgaGVscF9iaW5kaW5nIChiaW5kaW5nIDogc291cmNlc3BhbiBiaW5kaW5nKSAocmFuZ2UgOiByYW5nZSkgOiBzdHJpbmcgb3B0aW9uID1cbiAgbWF0Y2ggYmluZGluZyB3aXRoXG4gIHwgICopXG5cbigqIGxldCB2aWV3X2FsbF91c2VzXG4gICAgKGJlZ2luX2xuIDogaW50KVxuICAgIChiZWdpbl9ib2wgOiBpbnQpXG4gICAgKGVuZF9sbiA6IGludClcbiAgICAoZW5kX2JvbCA6IGludClcbiAgICAocHJvZ3JhbSA6IHN0cmluZylcbiAgICA6IChwb3NuICogcG9zbikgbGlzdFxuICA9XG4gIGxldCBwcm9nID0gcGFyc2Vfc3RyaW5nIFwiYW55XCIgcHJvZ3JhbSBpblxuXG5cbiAgbGV0IHJlYyBoZWxwIChleHByIDogc291cmNlc3BhbiBleHByKSAoaXNfc2NvcGVkIDogYm9vbCkgKG5hbWUgOiBzdHJpbmcpIDogcG9zbiAqIHBvc24gbGlzdFxuICAgID1cbiAgICBtYXRjaCBleHByIHdpdGhcbiAgICB8IEVMZXQgKGJpbmRpbmdzX2xpc3QsIGJvZHksIF8pIC0+XG4gICAgICBsZXQgaXNfYmluZGluZyA9IExpc3QubWFwIChmdW4gYmluZGluZyAtPiBiaW5kaW5nX2hlbHAgYmluZGluZykgYmluZGluZ3NfbGlzdCBpblxuICAgICAgW11cbiAgICB8IEVJZCAobmFtZSwgcG9zKSAtPiBpZiBuYW1lID0gbmFtZSB0aGVuIFsgZ2V0X3N0YXJ0cG9zIHBvcyBdIGVsc2UgW11cbiAgICB8IF8gLT4gZmFpbHdpdGggXCJ1bmltcGxpbWVudGVkXCJcbiAgYW5kIGJpbmRpbmdfaGVscCAoYmluZGluZyA6IHNvdXJjZXNwYW4gYmluZGluZykgOiBib29sICogKHBvc24gKiBwb3NuIGxpc3QpID1cbiAgICBtYXRjaCBiaW5kaW5nIHdpdGhcbiAgICB8IEJOYW1lIChuLCBfLCBwKSwgXywgXyAtPiBuID0gbmFtZSwgZ2V0X3N0YXJ0cG9zIHBcbiAgICAoKiB8IEJUdXBsZShiaW5kcywgXyksIF8sIF8gKilcbiAgICB8IF8gLT4gZmFpbHdpdGggXCJlcnJvclwiXG4gICAgKCogYW5kIGJpbmRzX2hlbHAgKGJpbmRzIDogc291cmNlc3BhbiBiaW5kIGxpc3QpIDogYm9vbCAqIHN0YXJ0cG9zID0gXG4gIG1hdGNoIGJpbmRzIHdpdGhcbiAgfCAgKilcbiAgaW5cbiAgbWF0Y2ggcHJvZyB3aXRoXG4gIHwgUHJvZ3JhbSAoXywgZXhwciwgXykgLT4gaGVscCBleHByIGZhbHNlIFwiXCIgKilcbigqIGxldCB2aWV3X2FsbF91c2VzXG4gICAgKGJlZ2luX2xuIDogaW50KVxuICAgIChiZWdpbl9ib2wgOiBpbnQpXG4gICAgKGVuZF9sbiA6IGludClcbiAgICAoZW5kX2JvbCA6IGludClcbiAgICAocHJvZ3JhbSA6IHN0cmluZylcbiAgICA6IHJhbmdlIGxpc3RcbiAgPVxuICBsZXQgcHJvZyA9IHBhcnNlX3N0cmluZyBcImFueVwiIHByb2dyYW0gaW5cbiAgbGV0IHJlYyBoZWxwXG4gICAgICAoZXhwciA6IHNvdXJjZXNwYW4gZXhwcilcbiAgICAgIChkZWNsYXJlX3JhbmdlIDogcmFuZ2UpXG4gICAgICAobmFtZSA6IHN0cmluZylcbiAgICAgIChpc19zY29wZWQgOiBib29sKVxuICAgICAgOiByYW5nZSBsaXN0XG4gICAgPVxuICAgIGxldCByID0gYmVnaW5fbG4sIGJlZ2luX2JvbCwgZW5kX2xuLCBlbmRfYm9sIGluXG4gICAgbWF0Y2ggZXhwciB3aXRoXG4gICAgfCBFTGV0IChiaW5kaW5nc19saXN0LCBib2R5LCBfKSAtPlxuICAgICAgbGV0IG1hdGNoZXMgPVxuICAgICAgICBMaXN0Lm1hcCAoZnVuIChiaW5kLCBfLCBfKSAtPiBnZXRfbWF0Y2hfZm9yX2JpbmQgYmluZCkgYmluZGluZ3NfbGlzdFxuICAgICAgaW5cbiAgICAgIGxldCBmb3VuZCA9XG4gICAgICAgIExpc3QuZm9sZF9yaWdodCAoZnVuIGEgYiAtPlxuICAgICAgICAgICAgbWF0Y2ggYSwgYiB3aXRoXG4gICAgICAgICAgICB8IE5vbmUsIFNvbWUgXyAtPiBiXG4gICAgICAgICAgICB8IFNvbWUgXywgTm9uZSAtPiBhXG4gICAgICAgICAgICB8IFNvbWUgXywgU29tZSBfIC0+IGJcbiAgICAgICAgICAgIHwgTm9uZSwgTm9uZSAtPiBOb25lKVxuICAgICAgaW5cbiAgICAgIHhcbiAgYW5kIGdldF9tYXRjaF9mb3JfYmluZCAoYmluZCA6IHNvdXJjZXNwYW4gYmluZCkgKChzbCwgc2MsIGVsLCBlYykgOiByYW5nZSlcbiAgICAgIDogc3RyaW5nIG9wdGlvblxuICAgID1cbiAgICBtYXRjaCBiaW5kIHdpdGhcbiAgICB8IEJOYW1lIChuLCBfLCAoYSwgYikpIC0+XG4gICAgICBpZiBhLnBvc19sbnVtID0gc2wgJiYgYS5wb3NfYm9sID0gc2MgJiYgYi5wb3NfbG51bSA9IGVsICYmIGIucG9zX2JvbCA9IGVjXG4gICAgICB0aGVuIFNvbWUgblxuICAgICAgZWxzZSBOb25lXG4gICAgfCBCVHVwbGUgKGJpbmRzLCBzcykgLT5cbiAgICAgIExpc3QubWFwIChmdW4gYmluZCAtPiBnZXRfbWF0Y2hfZm9yX2JpbmQgYmluZCAoc2wsIHNjLCBlbCwgZWMpKSBiaW5kc1xuICAgICAgfD4gTGlzdC5mb2xkX2xlZnRcbiAgICAgICAgICAgKGZ1biBvcCBhY2MgLT5cbiAgICAgICAgICAgICBtYXRjaCBvcCB3aXRoXG4gICAgICAgICAgICAgfCBTb21lIF8gLT4gb3BcbiAgICAgICAgICAgICB8IE5vbmUgLT4gYWNjKVxuICAgICAgICAgICBOb25lXG4gICAgfCBCQmxhbmsgXyAtPiBOb25lXG4gIGluXG4gIG1hdGNoIHByb2cgd2l0aFxuICB8IFByb2dyYW0gKF8sIGV4cHIsIF8pIC0+IGhlbHAgZXhwciBmYWxzZSBcIlwiICopXG5sZXQgcmFuZ2Vfb2Zfc291cmNlc3BhbiAoKHN0YXJ0LCBfZW5kKSA6IHNvdXJjZXNwYW4pIDogcmFuZ2UgPVxuICBzdGFydC5wb3NfbG51bSwgc3RhcnQucG9zX2NudW0sIF9lbmQucG9zX2xudW0sIF9lbmQucG9zX2NudW1cbjs7XG5cbmxldCByYW5nZV9lcXVhbHMgKChhMSwgYjEsIGMxLCBkMSkgOiByYW5nZSkgKChhMiwgYjIsIGMyLCBkMikgOiByYW5nZSkgOiBib29sID1cbiAgYTEgPSBhMiAmJiBiMSA9IGIyICYmIGMxID0gYzIgJiYgZDEgPSBkMlxuOztcblxubGV0IGxvb2t1cCAobmFtZSA6IHN0cmluZykgKGVudiA6IChzdHJpbmcgKiAnYSkgbGlzdCkgOiAnYSBvcHRpb24gPVxuICBsZXQgZm91bmQgPSBMaXN0LmZpbmRfb3B0IChmdW4gKG4sIF8pIC0+IG4gPSBuYW1lKSBlbnYgaW5cbiAgbWF0Y2ggZm91bmQgd2l0aFxuICB8IFNvbWUgKF8sIGIpIC0+IFNvbWUgYlxuICB8IE5vbmUgLT4gTm9uZVxuOztcblxubGV0IGxvb2t1cF93aXRoX25hbWUgKG5hbWUgOiBzdHJpbmcpIChlbnYgOiAoc3RyaW5nICogJ2EpIGxpc3QpIDogKHN0cmluZyAqICdhKSBvcHRpb24gPVxuICBsZXQgZm91bmQgPSBMaXN0LmZpbmRfb3B0IChmdW4gKG4sIF8pIC0+IG4gPSBuYW1lKSBlbnYgaW5cbiAgbWF0Y2ggZm91bmQgd2l0aFxuICB8IFNvbWUgKGEsIGIpIC0+IFNvbWUgKGEsIGIpXG4gIHwgTm9uZSAtPiBOb25lXG47O1xuXG5sZXQgZmluZF9zb21lIChsaXN0IDogJ2Egb3B0aW9uIGxpc3QpIDogJ2Egb3B0aW9uID1cbiAgbWF0Y2hcbiAgICBMaXN0LmZpbmRfb3B0XG4gICAgICAoZnVuIG9wdCAtPlxuICAgICAgICBtYXRjaCBvcHQgd2l0aFxuICAgICAgICB8IFNvbWUgXyAtPiB0cnVlXG4gICAgICAgIHwgTm9uZSAtPiBmYWxzZSlcbiAgICAgIGxpc3RcbiAgd2l0aFxuICB8IFNvbWUgcyAtPiBzXG4gIHwgTm9uZSAtPiBOb25lXG47O1xuXG5sZXQgZ2V0X2RlZmluaXRpb25cbiAgICAoYmVnaW5fbG4gOiBpbnQpXG4gICAgKGJlZ2luX2NvbCA6IGludClcbiAgICAoZW5kX2xuIDogaW50KVxuICAgIChlbmRfY29sIDogaW50KVxuICAgIChwcm9ncmFtIDogSnMuanNfc3RyaW5nIEpzLnQpXG4gICAgOiAoc3RyaW5nICogcmFuZ2UpIG9wdGlvblxuICA9XG4gIGxldCBwcm9nID0gcGFyc2Vfc3RyaW5nIFwiZmlsZVwiIChKcy50b19zdHJpbmcgcHJvZ3JhbSkgaW5cbiAgbGV0IHIgPSBiZWdpbl9sbiwgYmVnaW5fY29sLCBlbmRfbG4sIGVuZF9jb2wgaW5cbiAgbGV0IHJlYyBoZWxwIChleHByIDogc291cmNlc3BhbiBleHByKSAoZW52IDogKHN0cmluZyAqIHJhbmdlKSBsaXN0KVxuICAgICAgOiAoc3RyaW5nICogcmFuZ2UpIG9wdGlvblxuICAgID1cbiAgICBtYXRjaCBleHByIHdpdGhcbiAgICB8IEVMZXQgKGJpbmRpbmdzX2xpc3QsIGJvZHksIF8pIC0+XG4gICAgICBsZXQgbmV3X2VudiA9IGVudl9mb3JfYmluZGluZ3MgKExpc3QubWFwIChmdW4gKGIsIF8sIF8pIC0+IGIpIGJpbmRpbmdzX2xpc3QpIGluXG4gICAgICBsZXQgZm91bmRfaW5fZW52ID1cbiAgICAgICAgTGlzdC5tYXBcbiAgICAgICAgICAoZnVuIChuLCByYW5nZSkgLT4gaWYgcmFuZ2VfZXF1YWxzIHJhbmdlIHIgdGhlbiBTb21lIChuLCByKSBlbHNlIE5vbmUpXG4gICAgICAgICAgbmV3X2VudlxuICAgICAgaW5cbiAgICAgIGxldCBmb3VuZF9pbl9iaW5kaW5ncyA9IExpc3QubWFwIChmdW4gKF8sIHYsIF8pIC0+IGhlbHAgdiBlbnYpIGJpbmRpbmdzX2xpc3QgaW5cbiAgICAgIGZpbmRfc29tZSAoZm91bmRfaW5fZW52IEAgZm91bmRfaW5fYmluZGluZ3MgQCBbIGhlbHAgYm9keSAobmV3X2VudiBAIGVudikgXSlcbiAgICAgICgqIGxldCBmb3VuZF9pbl9iaW5kaW5ncyA9IExpc3QubWFwIChmdW4gKF8sIHYsIF8pIC0+IGhlbHAgdiBlbnYpIGJpbmRpbmdzX2xpc3QgaW4gKilcbiAgICAgICgqIGZpbmRfc29tZSAoZm91bmRfaW5fZW52IEAgWyBoZWxwIGJvZHkgKG5ld19lbnYgQCBlbnYpIF0pICopXG4gICAgICAoKiBmaW5kX3NvbWUgWyBoZWxwIGJvZHkgZW52IF0gKilcbiAgICB8IEVJZCAobmFtZSwgc3MpIC0+XG4gICAgICBpZiByYW5nZV9lcXVhbHMgKHJhbmdlX29mX3NvdXJjZXNwYW4gc3MpIHJcbiAgICAgIHRoZW4gKFxuICAgICAgICBtYXRjaCBsb29rdXBfd2l0aF9uYW1lIG5hbWUgZW52IHdpdGhcbiAgICAgICAgfCBTb21lIChuYW1lLCByKSAtPiBTb21lIChuYW1lLCByKVxuICAgICAgICB8IE5vbmUgLT4gU29tZSAobmFtZSwgcmFuZ2Vfb2Zfc291cmNlc3BhbiAoZHVtbXlfcG9zLCBkdW1teV9wb3MpKSlcbiAgICAgIGVsc2UgTm9uZVxuICAgIHwgRVByaW0xIChfLCBleHByLCBfKSAtPiBoZWxwIGV4cHIgZW52XG4gICAgfCBFUHJpbTIgKF8sIGV4cHIxLCBleHByMiwgXykgLT4gZmluZF9zb21lIChbIGhlbHAgZXhwcjEgZW52IF0gQCBbIGhlbHAgZXhwcjIgZW52IF0pXG4gICAgfCBfIC0+IE5vbmVcbiAgICB8IF8gLT4gZmFpbHdpdGggXCJ1bmltcGxlbWVudGVkXCJcbiAgYW5kIGVudl9mb3JfYmluZGluZ3MgKGJpbmRfbGlzdCA6IHNvdXJjZXNwYW4gYmluZCBsaXN0KSA6IChzdHJpbmcgKiByYW5nZSkgbGlzdCA9XG4gICAgbWF0Y2ggYmluZF9saXN0IHdpdGhcbiAgICB8IEJOYW1lIChuYW1lLCBfLCBzcykgOjogcmVzdCAtPlxuICAgICAgZW52X2Zvcl9iaW5kaW5ncyByZXN0IEAgWyBuYW1lLCByYW5nZV9vZl9zb3VyY2VzcGFuIHNzIF1cbiAgICB8IEJUdXBsZSAoYmluZHMsIF8pIDo6IHJlc3QgLT4gZW52X2Zvcl9iaW5kaW5ncyByZXN0IEAgZW52X2Zvcl9iaW5kaW5ncyBiaW5kc1xuICAgIHwgQkJsYW5rIHNzIDo6IHJlc3QgLT4gZW52X2Zvcl9iaW5kaW5ncyByZXN0IEAgWyBcIl9cIiwgcmFuZ2Vfb2Zfc291cmNlc3BhbiBzcyBdXG4gICAgfCBbXSAtPiBbXVxuICBpblxuICBtYXRjaCBwcm9nIHdpdGhcbiAgKCogfCBQcm9ncmFtIChfLCBleHByLCBfKSAtPiBOb25lICopXG4gIHwgUHJvZ3JhbSAoXywgZXhwciwgXykgLT4gaGVscCBleHByIFtdXG47O1xuXG5sZXQgdmlld19hbGxfdXNlc1xuICAgIChiZWdpbl9sbiA6IGludClcbiAgICAoYmVnaW5fY29sIDogaW50KVxuICAgIChlbmRfbG4gOiBpbnQpXG4gICAgKGVuZF9jb2wgOiBpbnQpXG4gICAgKHByb2dyYW0gOiBKcy5qc19zdHJpbmcgSnMudClcbiAgICA6IHJhbmdlIGxpc3RcbiAgPVxuICBsZXQgcHJvZyA9IHBhcnNlX3N0cmluZyBcImZpbGVcIiAoSnMudG9fc3RyaW5nIHByb2dyYW0pIGluXG4gIGxldCByZWMgaGVscCAoZXhwciA6IHNvdXJjZXNwYW4gZXhwcikgKGVudiA6IChzdHJpbmcgKiByYW5nZSkgbGlzdCkgOiByYW5nZSBsaXN0ID1cbiAgICBsZXQgciA9IGJlZ2luX2xuLCBiZWdpbl9jb2wsIGVuZF9sbiwgZW5kX2NvbCBpblxuICAgIG1hdGNoIGV4cHIgd2l0aFxuICAgIHwgRUxldCAoYmluZGluZ3NfbGlzdCwgYm9keSwgXykgLT5cbiAgICAgIGxldCBuZXdfZW52ID0gZW52X2Zvcl9iaW5kaW5ncyAoTGlzdC5tYXAgKGZ1biAoYiwgXywgXykgLT4gYikgYmluZGluZ3NfbGlzdCkgaW5cbiAgICAgIGxldCB1c2VzX2luX2JpbmRzID1cbiAgICAgICAgTGlzdC5tYXAgKGZ1biAoXywgdiwgXykgLT4gaGVscCB2IGVudikgYmluZGluZ3NfbGlzdCB8PiBMaXN0LmZsYXR0ZW5cbiAgICAgIGluXG4gICAgICBwcmludGYgXCJ1c2VzIGluIGJpbmRzOiAlc1wiIChkdW1wIHVzZXNfaW5fYmluZHMpO1xuICAgICAgdXNlc19pbl9iaW5kcyBAIGhlbHAgYm9keSAobmV3X2VudiBAIGVudilcbiAgICB8IEVJZCAobmFtZSwgc3MpIC0+XG4gICAgICAobWF0Y2ggbG9va3VwIG5hbWUgZW52IHdpdGhcbiAgICAgIHwgU29tZSByYW5nZSAtPiBpZiByYW5nZV9lcXVhbHMgciByYW5nZSB0aGVuIFsgcmFuZ2Vfb2Zfc291cmNlc3BhbiBzcyBdIGVsc2UgW11cbiAgICAgIHwgTm9uZSAtPiBbXSlcbiAgICB8IEVQcmltMSAoXywgZXhwciwgXykgLT4gaGVscCBleHByIGVudlxuICAgIHwgRVByaW0yIChfLCBleHByMSwgZXhwcjIsIF8pIC0+IGhlbHAgZXhwcjEgZW52IEAgaGVscCBleHByMiBlbnZcbiAgICB8IF8gLT4gW11cbiAgICB8IF8gLT4gZmFpbHdpdGggXCJ1bmltcGxlbWVudGVkXCJcbiAgYW5kIGVudl9mb3JfYmluZGluZ3MgKGJpbmRfbGlzdCA6IHNvdXJjZXNwYW4gYmluZCBsaXN0KSA6IChzdHJpbmcgKiByYW5nZSkgbGlzdCA9XG4gICAgbWF0Y2ggYmluZF9saXN0IHdpdGhcbiAgICB8IEJOYW1lIChuYW1lLCBfLCBzcykgOjogcmVzdCAtPlxuICAgICAgZW52X2Zvcl9iaW5kaW5ncyByZXN0IEAgWyBuYW1lLCByYW5nZV9vZl9zb3VyY2VzcGFuIHNzIF1cbiAgICB8IEJUdXBsZSAoYmluZHMsIF8pIDo6IHJlc3QgLT4gZW52X2Zvcl9iaW5kaW5ncyByZXN0IEAgZW52X2Zvcl9iaW5kaW5ncyBiaW5kc1xuICAgIHwgQkJsYW5rIHNzIDo6IHJlc3QgLT4gZW52X2Zvcl9iaW5kaW5ncyByZXN0IEAgWyBcIl9cIiwgcmFuZ2Vfb2Zfc291cmNlc3BhbiBzcyBdXG4gICAgfCBbXSAtPiBbXVxuICBpblxuICBwcmludGYgXCJ2aWV3aW5nIHVzZXNcIjtcbiAgbWF0Y2ggcHJvZyB3aXRoXG4gIHwgUHJvZ3JhbSAoXywgZXhwciwgXykgLT4gaGVscCBleHByIFtdXG47O1xuXG5sZXQgYnVpbGRfZW52IChwcm9ncmFtIDogSnMuanNfc3RyaW5nIEpzLnQpIDogKHN0cmluZyAqIHNvdXJjZXNwYW4pIGxpc3QgPVxuICBsZXQgcHJvZyA9IHBhcnNlX3N0cmluZyBcImFueVwiIChKcy50b19zdHJpbmcgcHJvZ3JhbSkgaW5cbiAgbGV0IHJlYyBoZWxwIChleHByIDogc291cmNlc3BhbiBleHByKSAoZW52IDogKHN0cmluZyAqIHNvdXJjZXNwYW4pIGxpc3QpXG4gICAgICA6IChzdHJpbmcgKiBzb3VyY2VzcGFuKSBsaXN0XG4gICAgPVxuICAgIG1hdGNoIGV4cHIgd2l0aFxuICAgIHwgRUxldCAoYmluZGluZ3NfbGlzdCwgYm9keSwgc3MpIC0+XG4gICAgICBsZXQgbmV3X2VudiA9IGVudl9mb3JfYmluZGluZ3MgKExpc3QubWFwIChmdW4gKGIsIF8sIF8pIC0+IGIpIGJpbmRpbmdzX2xpc3QpIGluXG4gICAgICBsZXQgYmluZHNfZW52ID1cbiAgICAgICAgTGlzdC5tYXAgKGZ1biAoXywgdiwgXykgLT4gaGVscCB2IGVudikgYmluZGluZ3NfbGlzdCB8PiBMaXN0LmZsYXR0ZW5cbiAgICAgIGluXG4gICAgICBwcmludGYgXCJiaW5kc19lbnY6ICVzXCIgKGR1bXAgYmluZHNfZW52KTtcbiAgICAgIGVudiBAIGJpbmRzX2VudiBAIGhlbHAgYm9keSBlbnYgQCBuZXdfZW52XG4gICAgfCBfIC0+IFtdXG4gIGFuZCBlbnZfZm9yX2JpbmRpbmdzIChiaW5kX2xpc3QgOiBzb3VyY2VzcGFuIGJpbmQgbGlzdCkgOiAoc3RyaW5nICogc291cmNlc3BhbikgbGlzdCA9XG4gICAgbWF0Y2ggYmluZF9saXN0IHdpdGhcbiAgICB8IEJOYW1lIChuYW1lLCBfLCBzcykgOjogcmVzdCAtPiBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBbIG5hbWUsIHNzIF1cbiAgICB8IEJUdXBsZSAoYmluZHMsIF8pIDo6IHJlc3QgLT4gZW52X2Zvcl9iaW5kaW5ncyByZXN0IEAgZW52X2Zvcl9iaW5kaW5ncyBiaW5kc1xuICAgIHwgQkJsYW5rIHNzIDo6IHJlc3QgLT4gZW52X2Zvcl9iaW5kaW5ncyByZXN0IEAgWyBcIl9cIiwgc3MgXVxuICAgIHwgW10gLT4gW11cbiAgaW5cbiAgcHJpbnRmIFwidmlld2luZyB1c2VzXCI7XG4gIG1hdGNoIHByb2cgd2l0aFxuICB8IFByb2dyYW0gKF8sIGV4cHIsIHNzKSAtPiBoZWxwIGV4cHIgWyBcInByb2dcIiwgc3MgXVxuOztcblxuKCogaGVscCBleHByIFtdICopXG5cbmxldCBfID1cbiAgSnMuZXhwb3J0XG4gICAgXCJoZWxwZXJzXCJcbiAgICAob2JqZWN0JWpzXG4gICAgICAgbWV0aG9kIHByaW50IHAgPVxuICAgICAgICAgbGV0IGpzX3N0ciA9IEpzLnRvX3N0cmluZyBwIGluXG4gICAgICAgICBzdHJpbmdfb2ZfcHJvZ3JhbSAocGFyc2Vfc3RyaW5nIFwiYXNkZlwiIGpzX3N0cikgfD4gSnMuc3RyaW5nXG5cbiAgICAgICBtZXRob2QgZWNobyBzID0gcHJpbnRmIFwiZWNob2luZzogJXNcIiAoSnMudG9fc3RyaW5nIHMpXG5cbiAgICAgICBtZXRob2Qgdmlld0FsbFVzZXNcbiAgICAgICAgICAgKGJlZ2luX2xuIDogaW50KVxuICAgICAgICAgICAoYmVnaW5fYm9sIDogaW50KVxuICAgICAgICAgICAoZW5kX2xuIDogaW50KVxuICAgICAgICAgICAoZW5kX2JvbCA6IGludClcbiAgICAgICAgICAgKHByb2dyYW0gOiBKcy5qc19zdHJpbmcgSnMudCkgPVxuICAgICAgICAgSnMuYXJyYXlcbiAgICAgICAgICAgKEFycmF5Lm9mX2xpc3RcbiAgICAgICAgICAgICAgKHZpZXdfYWxsX3VzZXNcbiAgICAgICAgICAgICAgICAgKGJlZ2luX2xuIDogaW50KVxuICAgICAgICAgICAgICAgICAoYmVnaW5fYm9sIDogaW50KVxuICAgICAgICAgICAgICAgICAoZW5kX2xuIDogaW50KVxuICAgICAgICAgICAgICAgICAoZW5kX2JvbCA6IGludClcbiAgICAgICAgICAgICAgICAgKHByb2dyYW0gOiBKcy5qc19zdHJpbmcgSnMudCkpKVxuXG4gICAgICAgbWV0aG9kIGdldERlZmluaXRpb25cbiAgICAgICAgICAgKGJlZ2luX2xuIDogaW50KVxuICAgICAgICAgICAoYmVnaW5fYm9sIDogaW50KVxuICAgICAgICAgICAoZW5kX2xuIDogaW50KVxuICAgICAgICAgICAoZW5kX2JvbCA6IGludClcbiAgICAgICAgICAgKHByb2dyYW0gOiBKcy5qc19zdHJpbmcgSnMudClcbiAgICAgICAgICAgOiAocmFuZ2UsIEpzLmpzX3N0cmluZyBKcy50KSBFaXRoZXIudCA9XG4gICAgICAgICBtYXRjaFxuICAgICAgICAgICBnZXRfZGVmaW5pdGlvblxuICAgICAgICAgICAgIChiZWdpbl9sbiA6IGludClcbiAgICAgICAgICAgICAoYmVnaW5fYm9sIDogaW50KVxuICAgICAgICAgICAgIChlbmRfbG4gOiBpbnQpXG4gICAgICAgICAgICAgKGVuZF9ib2wgOiBpbnQpXG4gICAgICAgICAgICAgKHByb2dyYW0gOiBKcy5qc19zdHJpbmcgSnMudClcbiAgICAgICAgIHdpdGhcbiAgICAgICAgIHwgU29tZSAoXywgYikgLT4gTGVmdCBiXG4gICAgICAgICB8IE5vbmUgLT4gUmlnaHQgKEpzLnN0cmluZyBcIkNvdWxkbid0IGZpbmQgbmFtZVwiKVxuXG4gICAgICAgbWV0aG9kIGJ1aWxkRW52IChwcm9ncmFtIDogSnMuanNfc3RyaW5nIEpzLnQpID1cbiAgICAgICAgIEpzLmFycmF5XG4gICAgICAgICAgIChBcnJheS5vZl9saXN0XG4gICAgICAgICAgICAgIChMaXN0Lm1hcFxuICAgICAgICAgICAgICAgICAoZnVuIChzLCAoYSwgYikpIC0+XG4gICAgICAgICAgICAgICAgICAgKCBKcy5zdHJpbmcgc1xuICAgICAgICAgICAgICAgICAgICwgKGEucG9zX2xudW0sIGEucG9zX2JvbCwgYS5wb3NfY251bSwgYi5wb3NfbG51bSwgYi5wb3NfYm9sLCBiLnBvc19jbnVtKVxuICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgIChidWlsZF9lbnYgKHByb2dyYW0gOiBKcy5qc19zdHJpbmcgSnMudCkpKSlcbiAgICBlbmQpXG47O1xuIl19
