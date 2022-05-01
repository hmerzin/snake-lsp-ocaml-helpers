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
       {var _aG_=lexbuf[12];
        lexbuf[12] = [0,name,_aG_[2],_aG_[3],_aG_[4]];
        var _aH_=caml_call2(Parser[1],Lexer[3],lexbuf);
        return _aH_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Stdlib[7])
         {var msg=exn[2];
          if(caml_string_equal(msg,cst_lexing_empty_token))
           {var _aF_=caml_call1(Pretty[16],lexbuf[12]);
            throw [0,ParseError,caml_call2(Stdlib_Printf[4],_a_,_aF_)]}
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
    function range_equals(param,_aA_)
     {var
       d2=_aA_[4],
       c2=_aA_[3],
       b2=_aA_[2],
       a2=_aA_[1],
       d1=param[4],
       c1=param[3],
       b1=param[2],
       a1=param[1],
       _aB_=a1 === a2?1:0;
      if(_aB_)
       {var _aC_=b1 === b2?1:0;
        if(_aC_)
         var _aD_=c1 === c2?1:0,_aE_=_aD_?d1 === d2?1:0:_aD_;
        else
         var _aE_=_aC_}
      else
       var _aE_=_aB_;
      return _aE_}
    function lookup(name,env)
     {function _az_(param){var n=param[1];return caml_string_equal(n,name)}
      var found=caml_call2(Stdlib_List[39],_az_,env);
      if(found){var match=found[1],b=match[2];return [0,b]}
      return 0}
    function lookup_with_name(name,env)
     {function _ay_(param){var n=param[1];return caml_string_equal(n,name)}
      var found=caml_call2(Stdlib_List[39],_ay_,env);
      if(found){var match=found[1],b=match[2],a=match[1];return [0,[0,a,b]]}
      return 0}
    function find_some(list)
     {function _ax_(opt){return opt?1:0}
      var match=caml_call2(Stdlib_List[39],_ax_,list);
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
          {case 0:
            var
             expr2=expr$0[2],
             expr1=expr$0[1],
             _V_=[0,help(expr2,env),0],
             _W_=[0,help(expr1,env),0];
            return find_some(caml_call2(Stdlib[37],_W_,_V_));
           case 1:
            var exprs=expr$0[1],_X_=function(e){return help(e,env)};
            return find_some(caml_call2(Stdlib_List[19],_X_,exprs));
           case 2:
            var
             e2=expr$0[2],
             e1=expr$0[1],
             _Y_=[0,help(e2,env),0],
             _Z_=[0,help(e1,env),0];
            return find_some(caml_call2(Stdlib[37],_Z_,_Y_));
           case 3:
            var
             e3=expr$0[3],
             e2$0=expr$0[2],
             e1$0=expr$0[1],
             ___=[0,help(e3,env),0],
             _$_=[0,help(e2$0,env),0],
             _aa_=caml_call2(Stdlib[37],_$_,___),
             _ab_=[0,help(e1$0,env),0];
            return find_some(caml_call2(Stdlib[37],_ab_,_aa_));
           case 4:
            var
             body=expr$0[2],
             bindings_list=expr$0[1],
             _ac_=function(param){var b=param[1];return b},
             new_env=
              env_for_bindings(caml_call2(Stdlib_List[19],_ac_,bindings_list)),
             _ad_=
              function(param)
               {var range=param[2],n=param[1];
                return range_equals(range,r)?[0,[0,n,r]]:0},
             found_in_env=caml_call2(Stdlib_List[19],_ad_,new_env),
             _ae_=function(param){var v=param[2];return help(v,env)},
             found_in_bindings=caml_call2(Stdlib_List[19],_ae_,bindings_list),
             _af_=[0,help(body,caml_call2(Stdlib[37],new_env,env)),0],
             _ag_=caml_call2(Stdlib[37],found_in_bindings,_af_);
            return find_some(caml_call2(Stdlib[37],found_in_env,_ag_));
           case 5:var expr$1=expr$0[2],expr$0=expr$1;continue;
           case 6:
            var
             expr2$0=expr$0[3],
             expr1$0=expr$0[2],
             _ah_=[0,help(expr2$0,env),0],
             _ai_=[0,help(expr1$0,env),0];
            return find_some(caml_call2(Stdlib[37],_ai_,_ah_));
           case 7:
            var
             e=expr$0[3],
             t=expr$0[2],
             c=expr$0[1],
             _aj_=[0,help(e,env),0],
             _ak_=[0,help(t,env),0],
             _al_=caml_call2(Stdlib[37],_ak_,_aj_),
             _am_=[0,help(c,env),0];
            return find_some(caml_call2(Stdlib[37],_am_,_al_));
           case 8:return 0;
           case 9:return 0;
           case 10:return 0;
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
           case 12:
            var
             args=expr$0[2],
             fn=expr$0[1],
             _an_=function(arg){return help(arg,env)},
             _ao_=caml_call2(Stdlib_List[19],_an_,args),
             _ap_=[0,help(fn,env),0];
            return find_some(caml_call2(Stdlib[37],_ap_,_ao_));
           case 13:
            var
             body$0=expr$0[2],
             binds=expr$0[1],
             new_env$0=env_for_bindings(binds),
             _aq_=
              function(param)
               {var range=param[2],n=param[1];
                return range_equals(range,r)?[0,[0,n,r]]:0},
             found_in_env$0=caml_call2(Stdlib_List[19],_aq_,new_env$0),
             _ar_=[0,help(body$0,caml_call2(Stdlib[37],new_env$0,env)),0];
            return find_some(caml_call2(Stdlib[37],found_in_env$0,_ar_));
           default:
            var
             body$1=expr$0[2],
             bindings_list$0=expr$0[1],
             _as_=function(param){var b=param[1];return b},
             new_env$1=
              env_for_bindings
               (caml_call2(Stdlib_List[19],_as_,bindings_list$0)),
             _at_=
              function(param)
               {var range=param[2],n=param[1];
                return range_equals(range,r)?[0,[0,n,r]]:0},
             found_in_env$1=caml_call2(Stdlib_List[19],_at_,new_env$1),
             _au_=
              function(param)
               {var v=param[2];
                return help(v,caml_call2(Stdlib[37],new_env$1,env))},
             found_in_bindings$0=
              caml_call2(Stdlib_List[19],_au_,bindings_list$0),
             _av_=[0,help(body$1,caml_call2(Stdlib[37],new_env$1,env)),0],
             _aw_=caml_call2(Stdlib[37],found_in_bindings$0,_av_);
            return find_some(caml_call2(Stdlib[37],found_in_env$1,_aw_))}}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIudGVzdGluZy5lb2Jqcy9ieXRlL3Rlc3RpbmcuY21vLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInBhcnNlIiwibmFtZSIsImxleGJ1ZiIsImV4biIsIm1zZyIsImJ0IiwiY3VyciIsImxpbmUiLCJjbnVtIiwidG9rIiwicGFyc2Vfc3RyaW5nIiwicyIsImdldF9zdGFydHBvcyIsInBvcyIsInAiLCJyYW5nZV9vZl9zb3VyY2VzcGFuIiwiZW5kIiwic3RhcnQiLCJyYW5nZV9lcXVhbHMiLCJkMiIsImMyIiwiYjIiLCJhMiIsImQxIiwiYzEiLCJiMSIsImExIiwibG9va3VwIiwiZW52IiwibiIsImZvdW5kIiwiYiIsImxvb2t1cF93aXRoX25hbWUiLCJhIiwiZmluZF9zb21lIiwibGlzdCIsIm9wdCIsImdldF9kZWZpbml0aW9uIiwiYmVnaW5fbG4iLCJiZWdpbl9jb2wiLCJlbmRfbG4iLCJlbmRfY29sIiwicHJvZ3JhbSIsInByb2ciLCJyIiwiaGVscCIsImV4cHIiLCJleHByJDAiLCJleHByMiIsImV4cHIxIiwiZXhwcnMiLCJlIiwiZTIiLCJlMSIsImUzIiwiZTIkMCIsImUxJDAiLCJib2R5IiwiYmluZGluZ3NfbGlzdCIsIm5ld19lbnYiLCJlbnZfZm9yX2JpbmRpbmdzIiwicmFuZ2UiLCJmb3VuZF9pbl9lbnYiLCJ2IiwiZm91bmRfaW5fYmluZGluZ3MiLCJleHByJDEiLCJleHByMiQwIiwiZXhwcjEkMCIsInQiLCJjIiwic3MiLCJyJDAiLCJuYW1lJDAiLCJhcmdzIiwiZm4iLCJhcmciLCJib2R5JDAiLCJiaW5kcyIsIm5ld19lbnYkMCIsImZvdW5kX2luX2VudiQwIiwiYm9keSQxIiwiYmluZGluZ3NfbGlzdCQwIiwibmV3X2VudiQxIiwiZm91bmRfaW5fZW52JDEiLCJmb3VuZF9pbl9iaW5kaW5ncyQwIiwiYmluZF9saXN0IiwicmVzdCIsInJlc3QkMCIsInNzJDAiLCJyZXN0JDEiLCJ2aWV3X2FsbF91c2VzIiwidXNlc19pbl9iaW5kcyIsImJ1aWxkX2VudiIsImJpbmRzX2VudiIsImJlZ2luX2JvbCIsImVuZF9ib2wiLCJqc19zdHIiXSwic291cmNlcyI6WyIvaG9tZS9oYXJyeS9ob21ld29yay9jb21waWxlcnMvZmluYWwtcHJvamVjdC9fYnVpbGQvZGVmYXVsdC90ZXN0aW5nLm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQVVJQSxNQUFPQyxLQUFlQztNQUN4QjtpQkFEd0JBO3dCQUFmRDtRQUdQLHVDQUhzQkM7O1lBS3RCQzs7O2NBQVFDLElBQVJEO1VBQ0cscUJBREtDO1lBSXVDLCtCQVR6QkY7WUFTTjtVQUVMLElBQUxHLEdBQUs7NkNBTlhGLElBTU1FO1VBQUssTUFOWEY7O1VBVUE7Z0JBZnNCRDtXQWV0QixLQUFJSTtXQUFKLEtBQUlBO1dBR00sZ0NBbEJZSjtVQW9CUixvREFKVkssS0FDQUMsS0FDQUM7Y0FiSk4sSUFlbUY7YUFHbkZPLGFBQWNULEtBQWdCVTtNQUNuQixJQUFUVCxPQUFTLGdDQURtQlMsR0FDbkIsYUFER1YsS0FDWkMsT0FDYTthQUtmVSxhQUFjQyxLQUNoQixJQUNFQyxFQUZjRCxPQUNoQixVQUNFQyxVQUE2QjthQUc3QkM7VUFBNkJDLGFBQVBDO2tDQUFPRDthQUk3QkU7O09BQXNEQztPQUFKQztPQUFKQztPQUFKQztPQUFmQztPQUFKQztPQUFKQztPQUFKQzttQkFBMkJKOztpQkFBdkJHLE9BQTJCSjs7a0JBQXZCRyxPQUEyQkosaUJBQXZCRyxPQUEyQko7Ozs7OzthQUl0RFEsT0FBUTFCLEtBQWdCMkI7TUFDMUIscUJBQTBCLElBQU1DLFdBQVMseUJBQVRBLEVBRHRCNUIsS0FDd0M7TUFBdEMsSUFBUjZCLE1BQVEsZ0NBRGNGO01BQ2QsR0FBUkUsMEJBRU9DO01BQ0QsUUFBSTthQUdaQyxpQkFBa0IvQixLQUFnQjJCO01BQ3BDLHFCQUEwQixJQUFNQyxXQUFTLHlCQUFU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QUFxQixxQkFBUlk7YUFBUTtRQUV2QixRQUFFO01BRVo7YUFwQkk5QyxRQW9CSixLQXBCSUE7TUFvQkosWUFFY0csb0JBQU13QixPQUErQjt1QkFnRDdCNUI7TUFRUCxrQkFST0E7TUFRUDtRQUpBO1FBQ0k7d0NBREUvQjttQkFBSXNCLGVBQUdGLGdCQUdUO01BSlA7TUFLOEMsMEJBTmpELGlDQU1pRDt1QkF6QmhETyxTQUNBd0QsVUFDQXRELE9BQ0F1RCxRQUNBckQ7TUFHRCx5QkFQQ0osU0FDQXdELFVBQ0F0RCxPQUNBdUQsUUFDQXJEO01BR0QsK0JBT1NYO01BQ0ssK0JBQWdDO3VCQTlCN0NPLFNBQ0F3RCxVQUNBdEQsT0FDQXVELFFBQ0FyRDtNQUdFLHNCQVBGSixTQUNBd0QsVUFDQXRELE9BQ0F1RCxRQUNBckQ7TUFRb0MsMEJBTnJDLGlDQU1xQzt1QkFmN0IvQjtNQUF5QixnQ0FBekJBO01BQXlCLDJDQUFnQjt1QkFKeENHO01BQ0UsbUNBREZBLEdBRU8sMEJBRGRrRjtNQUMwQywrQkFBOUMsMkJBQTJEO0lBTGxFOzs7Ozs7Ozs7Ozs7T0F2TkVoRztPQXVCQVU7T0FPQUU7T0FLQUc7T0FJQUc7T0FJQVM7T0FPQUs7T0FPQUU7T0FhQUc7T0E0RUFxRDtPQXdDQUU7SUE2QkY7VSIsInNvdXJjZXNDb250ZW50IjpbIm9wZW4gTGV4aW5nXG5vcGVuIEV4cHJzXG5vcGVuIFByaW50Zlxub3BlbiBQcmV0dHlcbm9wZW4gSnNfb2Zfb2NhbWxcbm9wZW4gRXh0TGliXG5vcGVuIFN0ZGxpYlxuXG5leGNlcHRpb24gUGFyc2VFcnJvciBvZiBzdHJpbmdcblxubGV0IHBhcnNlIChuYW1lIDogc3RyaW5nKSBsZXhidWYgOiBzb3VyY2VzcGFuIHByb2dyYW0gPVxuICB0cnlcbiAgICBsZXhidWYubGV4X2N1cnJfcCA8LSB7IGxleGJ1Zi5sZXhfY3Vycl9wIHdpdGggcG9zX2ZuYW1lID0gbmFtZSB9O1xuICAgIFBhcnNlci5wcm9ncmFtIExleGVyLnRva2VuIGxleGJ1ZlxuICB3aXRoXG4gIHwgRmFpbHVyZSBtc2cgYXMgZXhuIC0+XG4gICAgaWYgbXNnID0gXCJsZXhpbmc6IGVtcHR5IHRva2VuXCJcbiAgICB0aGVuXG4gICAgICByYWlzZVxuICAgICAgICAoUGFyc2VFcnJvciAoc3ByaW50ZiBcIkxleGljYWwgZXJyb3IgYXQgJXNcIiAoc3RyaW5nX29mX3Bvc2l0aW9uIGxleGJ1Zi5sZXhfY3Vycl9wKSkpXG4gICAgZWxzZSAoXG4gICAgICBsZXQgYnQgPSBQcmludGV4Yy5nZXRfcmF3X2JhY2t0cmFjZSAoKSBpblxuICAgICAgUHJpbnRleGMucmFpc2Vfd2l0aF9iYWNrdHJhY2UgZXhuIGJ0XG4gICAgICAoKiBtYWtlIHN1cmUgd2UgdGhyb3cgd2l0aCB0aGUgc2FtZSBzdGFjayB0cmFjZSAqKSlcbiAgfCBQYXJzaW5nLlBhcnNlX2Vycm9yIC0+XG4gICAgbGV0IGN1cnIgPSBsZXhidWYuTGV4aW5nLmxleF9jdXJyX3AgaW5cbiAgICBsZXQgbGluZSA9IGN1cnIuTGV4aW5nLnBvc19sbnVtIGluXG4gICAgbGV0IGNudW0gPSBjdXJyLkxleGluZy5wb3NfY251bSAtIGN1cnIuTGV4aW5nLnBvc19ib2wgaW5cbiAgICBsZXQgdG9rID0gTGV4aW5nLmxleGVtZSBsZXhidWYgaW5cbiAgICByYWlzZVxuICAgICAgKFBhcnNlRXJyb3IgKHNwcmludGYgXCJQYXJzZSBlcnJvciBhdCBsaW5lICVkLCBjb2wgJWQ6IHRva2VuIGAlc2BcIiBsaW5lIGNudW0gdG9rKSlcbjs7XG5cbmxldCBwYXJzZV9zdHJpbmcgKG5hbWUgOiBzdHJpbmcpIChzIDogc3RyaW5nKSA6IHNvdXJjZXNwYW4gcHJvZ3JhbSA9XG4gIGxldCBsZXhidWYgPSBMZXhpbmcuZnJvbV9zdHJpbmcgfndpdGhfcG9zaXRpb25zOnRydWUgcyBpblxuICBwYXJzZSBuYW1lIGxleGJ1ZlxuOztcblxudHlwZSByYW5nZSA9IGludCAqIGludCAqIGludCAqIGludFxuXG5sZXQgZ2V0X3N0YXJ0cG9zIChwb3MgOiBzb3VyY2VzcGFuKSA9XG4gIG1hdGNoIHBvcyB3aXRoXG4gIHwgcCwgXyAtPiBwLnBvc19sbnVtLCBwLnBvc19ib2xcbjs7XG5cbmxldCByYW5nZV9vZl9zb3VyY2VzcGFuICgoc3RhcnQsIF9lbmQpIDogc291cmNlc3BhbikgOiByYW5nZSA9XG4gIHN0YXJ0LnBvc19sbnVtLCBzdGFydC5wb3NfY251bSwgX2VuZC5wb3NfbG51bSwgX2VuZC5wb3NfY251bVxuOztcblxubGV0IHJhbmdlX2VxdWFscyAoKGExLCBiMSwgYzEsIGQxKSA6IHJhbmdlKSAoKGEyLCBiMiwgYzIsIGQyKSA6IHJhbmdlKSA6IGJvb2wgPVxuICBhMSA9IGEyICYmIGIxID0gYjIgJiYgYzEgPSBjMiAmJiBkMSA9IGQyXG47O1xuXG5sZXQgbG9va3VwIChuYW1lIDogc3RyaW5nKSAoZW52IDogKHN0cmluZyAqICdhKSBsaXN0KSA6ICdhIG9wdGlvbiA9XG4gIGxldCBmb3VuZCA9IExpc3QuZmluZF9vcHQgKGZ1biAobiwgXykgLT4gbiA9IG5hbWUpIGVudiBpblxuICBtYXRjaCBmb3VuZCB3aXRoXG4gIHwgU29tZSAoXywgYikgLT4gU29tZSBiXG4gIHwgTm9uZSAtPiBOb25lXG47O1xuXG5sZXQgbG9va3VwX3dpdGhfbmFtZSAobmFtZSA6IHN0cmluZykgKGVudiA6IChzdHJpbmcgKiAnYSkgbGlzdCkgOiAoc3RyaW5nICogJ2EpIG9wdGlvbiA9XG4gIGxldCBmb3VuZCA9IExpc3QuZmluZF9vcHQgKGZ1biAobiwgXykgLT4gbiA9IG5hbWUpIGVudiBpblxuICBtYXRjaCBmb3VuZCB3aXRoXG4gIHwgU29tZSAoYSwgYikgLT4gU29tZSAoYSwgYilcbiAgfCBOb25lIC0+IE5vbmVcbjs7XG5cbmxldCBmaW5kX3NvbWUgKGxpc3QgOiAnYSBvcHRpb24gbGlzdCkgOiAnYSBvcHRpb24gPVxuICBtYXRjaFxuICAgIExpc3QuZmluZF9vcHRcbiAgICAgIChmdW4gb3B0IC0+XG4gICAgICAgIG1hdGNoIG9wdCB3aXRoXG4gICAgICAgIHwgU29tZSBfIC0+IHRydWVcbiAgICAgICAgfCBOb25lIC0+IGZhbHNlKVxuICAgICAgbGlzdFxuICB3aXRoXG4gIHwgU29tZSBzIC0+IHNcbiAgfCBOb25lIC0+IE5vbmVcbjs7XG5cbmxldCBnZXRfZGVmaW5pdGlvblxuICAgIChiZWdpbl9sbiA6IGludClcbiAgICAoYmVnaW5fY29sIDogaW50KVxuICAgIChlbmRfbG4gOiBpbnQpXG4gICAgKGVuZF9jb2wgOiBpbnQpXG4gICAgKHByb2dyYW0gOiBKcy5qc19zdHJpbmcgSnMudClcbiAgICA6IChzdHJpbmcgKiByYW5nZSkgb3B0aW9uXG4gID1cbiAgbGV0IHByb2cgPSBwYXJzZV9zdHJpbmcgXCJmaWxlXCIgKEpzLnRvX3N0cmluZyBwcm9ncmFtKSBpblxuICBsZXQgciA9IGJlZ2luX2xuLCBiZWdpbl9jb2wsIGVuZF9sbiwgZW5kX2NvbCBpblxuICBsZXQgcmVjIGhlbHAgKGV4cHIgOiBzb3VyY2VzcGFuIGV4cHIpIChlbnYgOiAoc3RyaW5nICogcmFuZ2UpIGxpc3QpXG4gICAgICA6IChzdHJpbmcgKiByYW5nZSkgb3B0aW9uXG4gICAgPVxuICAgIG1hdGNoIGV4cHIgd2l0aFxuICAgIHwgRUxldCAoYmluZGluZ3NfbGlzdCwgYm9keSwgXykgLT5cbiAgICAgIGxldCBuZXdfZW52ID0gZW52X2Zvcl9iaW5kaW5ncyAoTGlzdC5tYXAgKGZ1biAoYiwgXywgXykgLT4gYikgYmluZGluZ3NfbGlzdCkgaW5cbiAgICAgIGxldCBmb3VuZF9pbl9lbnYgPVxuICAgICAgICBMaXN0Lm1hcFxuICAgICAgICAgIChmdW4gKG4sIHJhbmdlKSAtPiBpZiByYW5nZV9lcXVhbHMgcmFuZ2UgciB0aGVuIFNvbWUgKG4sIHIpIGVsc2UgTm9uZSlcbiAgICAgICAgICBuZXdfZW52XG4gICAgICBpblxuICAgICAgbGV0IGZvdW5kX2luX2JpbmRpbmdzID0gTGlzdC5tYXAgKGZ1biAoXywgdiwgXykgLT4gaGVscCB2IGVudikgYmluZGluZ3NfbGlzdCBpblxuICAgICAgZmluZF9zb21lIChmb3VuZF9pbl9lbnYgQCBmb3VuZF9pbl9iaW5kaW5ncyBAIFsgaGVscCBib2R5IChuZXdfZW52IEAgZW52KSBdKVxuICAgIHwgRUlkIChuYW1lLCBzcykgLT5cbiAgICAgIGlmIHJhbmdlX2VxdWFscyAocmFuZ2Vfb2Zfc291cmNlc3BhbiBzcykgclxuICAgICAgdGhlbiAoXG4gICAgICAgIG1hdGNoIGxvb2t1cF93aXRoX25hbWUgbmFtZSBlbnYgd2l0aFxuICAgICAgICB8IFNvbWUgKG5hbWUsIHIpIC0+IFNvbWUgKG5hbWUsIHIpXG4gICAgICAgIHwgTm9uZSAtPiBTb21lIChuYW1lLCByYW5nZV9vZl9zb3VyY2VzcGFuIChkdW1teV9wb3MsIGR1bW15X3BvcykpKVxuICAgICAgZWxzZSBOb25lXG4gICAgfCBFUHJpbTEgKF8sIGV4cHIsIF8pIC0+IGhlbHAgZXhwciBlbnZcbiAgICB8IEVQcmltMiAoXywgZXhwcjEsIGV4cHIyLCBfKSAtPiBmaW5kX3NvbWUgKFsgaGVscCBleHByMSBlbnYgXSBAIFsgaGVscCBleHByMiBlbnYgXSlcbiAgICB8IEVTZXEgKGV4cHIxLCBleHByMiwgXykgLT4gZmluZF9zb21lIChbIGhlbHAgZXhwcjEgZW52IF0gQCBbIGhlbHAgZXhwcjIgZW52IF0pXG4gICAgfCBFTGV0UmVjIChiaW5kaW5nc19saXN0LCBib2R5LCBfKSAtPlxuICAgICAgbGV0IG5ld19lbnYgPSBlbnZfZm9yX2JpbmRpbmdzIChMaXN0Lm1hcCAoZnVuIChiLCBfLCBfKSAtPiBiKSBiaW5kaW5nc19saXN0KSBpblxuICAgICAgbGV0IGZvdW5kX2luX2VudiA9XG4gICAgICAgIExpc3QubWFwXG4gICAgICAgICAgKGZ1biAobiwgcmFuZ2UpIC0+IGlmIHJhbmdlX2VxdWFscyByYW5nZSByIHRoZW4gU29tZSAobiwgcikgZWxzZSBOb25lKVxuICAgICAgICAgIG5ld19lbnZcbiAgICAgIGluXG4gICAgICBsZXQgZm91bmRfaW5fYmluZGluZ3MgPVxuICAgICAgICBMaXN0Lm1hcCAoZnVuIChfLCB2LCBfKSAtPiBoZWxwIHYgKG5ld19lbnYgQCBlbnYpKSBiaW5kaW5nc19saXN0XG4gICAgICBpblxuICAgICAgZmluZF9zb21lIChmb3VuZF9pbl9lbnYgQCBmb3VuZF9pbl9iaW5kaW5ncyBAIFsgaGVscCBib2R5IChuZXdfZW52IEAgZW52KSBdKVxuICAgIHwgRUxhbWJkYSAoYmluZHMsIGJvZHksIF8pIC0+XG4gICAgICBsZXQgbmV3X2VudiA9IGVudl9mb3JfYmluZGluZ3MgYmluZHMgaW5cbiAgICAgIGxldCBmb3VuZF9pbl9lbnYgPVxuICAgICAgICBMaXN0Lm1hcFxuICAgICAgICAgIChmdW4gKG4sIHJhbmdlKSAtPiBpZiByYW5nZV9lcXVhbHMgcmFuZ2UgciB0aGVuIFNvbWUgKG4sIHIpIGVsc2UgTm9uZSlcbiAgICAgICAgICBuZXdfZW52XG4gICAgICBpblxuICAgICAgZmluZF9zb21lIChmb3VuZF9pbl9lbnYgQCBbIGhlbHAgYm9keSAobmV3X2VudiBAIGVudikgXSlcbiAgICB8IEVBcHAgKGZuLCBhcmdzLCBfLCBfKSAtPlxuICAgICAgZmluZF9zb21lIChbIGhlbHAgZm4gZW52IF0gQCBMaXN0Lm1hcCAoZnVuIGFyZyAtPiBoZWxwIGFyZyBlbnYpIGFyZ3MpXG4gICAgfCBFSWYgKGMsIHQsIGUsIF8pIC0+IGZpbmRfc29tZSAoWyBoZWxwIGMgZW52IF0gQCBbIGhlbHAgdCBlbnYgXSBAIFsgaGVscCBlIGVudiBdKVxuICAgIHwgRVR1cGxlIChleHBycywgXykgLT4gZmluZF9zb21lIChMaXN0Lm1hcCAoZnVuIGUgLT4gaGVscCBlIGVudikgZXhwcnMpXG4gICAgfCBFR2V0SXRlbSAoZTEsIGUyLCBfKSAtPiBmaW5kX3NvbWUgKFsgaGVscCBlMSBlbnYgXSBAIFsgaGVscCBlMiBlbnYgXSlcbiAgICB8IEVTZXRJdGVtIChlMSwgZTIsIGUzLCBfKSAtPlxuICAgICAgZmluZF9zb21lIChbIGhlbHAgZTEgZW52IF0gQCBbIGhlbHAgZTIgZW52IF0gQCBbIGhlbHAgZTMgZW52IF0pXG4gICAgfCBFTnVtYmVyIF8gLT4gTm9uZVxuICAgIHwgRUJvb2wgXyAtPiBOb25lXG4gICAgfCBFTmlsIF8gLT4gTm9uZVxuICAoKiB8IF8gLT4gZmFpbHdpdGggXCJuYWggYWhcIiAqKVxuICBhbmQgZW52X2Zvcl9iaW5kaW5ncyAoYmluZF9saXN0IDogc291cmNlc3BhbiBiaW5kIGxpc3QpIDogKHN0cmluZyAqIHJhbmdlKSBsaXN0ID1cbiAgICBtYXRjaCBiaW5kX2xpc3Qgd2l0aFxuICAgIHwgQk5hbWUgKG5hbWUsIF8sIHNzKSA6OiByZXN0IC0+XG4gICAgICBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBbIG5hbWUsIHJhbmdlX29mX3NvdXJjZXNwYW4gc3MgXVxuICAgIHwgQlR1cGxlIChiaW5kcywgXykgOjogcmVzdCAtPiBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBlbnZfZm9yX2JpbmRpbmdzIGJpbmRzXG4gICAgfCBCQmxhbmsgc3MgOjogcmVzdCAtPiBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBbIFwiX1wiLCByYW5nZV9vZl9zb3VyY2VzcGFuIHNzIF1cbiAgICB8IFtdIC0+IFtdXG4gIGluXG4gIG1hdGNoIHByb2cgd2l0aFxuICAoKiB8IFByb2dyYW0gKF8sIGV4cHIsIF8pIC0+IE5vbmUgKilcbiAgfCBQcm9ncmFtIChfLCBleHByLCBfKSAtPiBoZWxwIGV4cHIgW11cbjs7XG5cbmxldCB2aWV3X2FsbF91c2VzXG4gICAgKGJlZ2luX2xuIDogaW50KVxuICAgIChiZWdpbl9jb2wgOiBpbnQpXG4gICAgKGVuZF9sbiA6IGludClcbiAgICAoZW5kX2NvbCA6IGludClcbiAgICAocHJvZ3JhbSA6IEpzLmpzX3N0cmluZyBKcy50KVxuICAgIDogcmFuZ2UgbGlzdFxuICA9XG4gIGxldCBwcm9nID0gcGFyc2Vfc3RyaW5nIFwiZmlsZVwiIChKcy50b19zdHJpbmcgcHJvZ3JhbSkgaW5cbiAgbGV0IHJlYyBoZWxwIChleHByIDogc291cmNlc3BhbiBleHByKSAoZW52IDogKHN0cmluZyAqIHJhbmdlKSBsaXN0KSA6IHJhbmdlIGxpc3QgPVxuICAgIGxldCByID0gYmVnaW5fbG4sIGJlZ2luX2NvbCwgZW5kX2xuLCBlbmRfY29sIGluXG4gICAgbWF0Y2ggZXhwciB3aXRoXG4gICAgfCBFTGV0IChiaW5kaW5nc19saXN0LCBib2R5LCBfKSAtPlxuICAgICAgbGV0IG5ld19lbnYgPSBlbnZfZm9yX2JpbmRpbmdzIChMaXN0Lm1hcCAoZnVuIChiLCBfLCBfKSAtPiBiKSBiaW5kaW5nc19saXN0KSBpblxuICAgICAgbGV0IHVzZXNfaW5fYmluZHMgPVxuICAgICAgICBMaXN0Lm1hcCAoZnVuIChfLCB2LCBfKSAtPiBoZWxwIHYgZW52KSBiaW5kaW5nc19saXN0IHw+IExpc3QuZmxhdHRlblxuICAgICAgaW5cbiAgICAgIHByaW50ZiBcInVzZXMgaW4gYmluZHM6ICVzXCIgKGR1bXAgdXNlc19pbl9iaW5kcyk7XG4gICAgICB1c2VzX2luX2JpbmRzIEAgaGVscCBib2R5IChuZXdfZW52IEAgZW52KVxuICAgIHwgRUlkIChuYW1lLCBzcykgLT5cbiAgICAgIChtYXRjaCBsb29rdXAgbmFtZSBlbnYgd2l0aFxuICAgICAgfCBTb21lIHJhbmdlIC0+IGlmIHJhbmdlX2VxdWFscyByIHJhbmdlIHRoZW4gWyByYW5nZV9vZl9zb3VyY2VzcGFuIHNzIF0gZWxzZSBbXVxuICAgICAgfCBOb25lIC0+IFtdKVxuICAgIHwgRVByaW0xIChfLCBleHByLCBfKSAtPiBoZWxwIGV4cHIgZW52XG4gICAgfCBFUHJpbTIgKF8sIGV4cHIxLCBleHByMiwgXykgLT4gaGVscCBleHByMSBlbnYgQCBoZWxwIGV4cHIyIGVudlxuICAgIHwgXyAtPiBbXVxuICAgIHwgXyAtPiBmYWlsd2l0aCBcInVuaW1wbGVtZW50ZWRcIlxuICBhbmQgZW52X2Zvcl9iaW5kaW5ncyAoYmluZF9saXN0IDogc291cmNlc3BhbiBiaW5kIGxpc3QpIDogKHN0cmluZyAqIHJhbmdlKSBsaXN0ID1cbiAgICBtYXRjaCBiaW5kX2xpc3Qgd2l0aFxuICAgIHwgQk5hbWUgKG5hbWUsIF8sIHNzKSA6OiByZXN0IC0+XG4gICAgICBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBbIG5hbWUsIHJhbmdlX29mX3NvdXJjZXNwYW4gc3MgXVxuICAgIHwgQlR1cGxlIChiaW5kcywgXykgOjogcmVzdCAtPiBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBlbnZfZm9yX2JpbmRpbmdzIGJpbmRzXG4gICAgfCBCQmxhbmsgc3MgOjogcmVzdCAtPiBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBbIFwiX1wiLCByYW5nZV9vZl9zb3VyY2VzcGFuIHNzIF1cbiAgICB8IFtdIC0+IFtdXG4gIGluXG4gIHByaW50ZiBcInZpZXdpbmcgdXNlc1wiO1xuICBtYXRjaCBwcm9nIHdpdGhcbiAgfCBQcm9ncmFtIChfLCBleHByLCBfKSAtPiBoZWxwIGV4cHIgW11cbjs7XG5cbmxldCBidWlsZF9lbnYgKHByb2dyYW0gOiBKcy5qc19zdHJpbmcgSnMudCkgOiAoc3RyaW5nICogc291cmNlc3BhbikgbGlzdCA9XG4gIGxldCBwcm9nID0gcGFyc2Vfc3RyaW5nIFwiYW55XCIgKEpzLnRvX3N0cmluZyBwcm9ncmFtKSBpblxuICBsZXQgcmVjIGhlbHAgKGV4cHIgOiBzb3VyY2VzcGFuIGV4cHIpIChlbnYgOiAoc3RyaW5nICogc291cmNlc3BhbikgbGlzdClcbiAgICAgIDogKHN0cmluZyAqIHNvdXJjZXNwYW4pIGxpc3RcbiAgICA9XG4gICAgbWF0Y2ggZXhwciB3aXRoXG4gICAgfCBFTGV0IChiaW5kaW5nc19saXN0LCBib2R5LCBzcykgLT5cbiAgICAgIGxldCBuZXdfZW52ID0gZW52X2Zvcl9iaW5kaW5ncyAoTGlzdC5tYXAgKGZ1biAoYiwgXywgXykgLT4gYikgYmluZGluZ3NfbGlzdCkgaW5cbiAgICAgIGxldCBiaW5kc19lbnYgPVxuICAgICAgICBMaXN0Lm1hcCAoZnVuIChfLCB2LCBfKSAtPiBoZWxwIHYgZW52KSBiaW5kaW5nc19saXN0IHw+IExpc3QuZmxhdHRlblxuICAgICAgaW5cbiAgICAgIHByaW50ZiBcImJpbmRzX2VudjogJXNcIiAoZHVtcCBiaW5kc19lbnYpO1xuICAgICAgZW52IEAgYmluZHNfZW52IEAgaGVscCBib2R5IGVudiBAIG5ld19lbnZcbiAgICB8IF8gLT4gW11cbiAgYW5kIGVudl9mb3JfYmluZGluZ3MgKGJpbmRfbGlzdCA6IHNvdXJjZXNwYW4gYmluZCBsaXN0KSA6IChzdHJpbmcgKiBzb3VyY2VzcGFuKSBsaXN0ID1cbiAgICBtYXRjaCBiaW5kX2xpc3Qgd2l0aFxuICAgIHwgQk5hbWUgKG5hbWUsIF8sIHNzKSA6OiByZXN0IC0+IGVudl9mb3JfYmluZGluZ3MgcmVzdCBAIFsgbmFtZSwgc3MgXVxuICAgIHwgQlR1cGxlIChiaW5kcywgXykgOjogcmVzdCAtPiBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBlbnZfZm9yX2JpbmRpbmdzIGJpbmRzXG4gICAgfCBCQmxhbmsgc3MgOjogcmVzdCAtPiBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBbIFwiX1wiLCBzcyBdXG4gICAgfCBbXSAtPiBbXVxuICBpblxuICBwcmludGYgXCJ2aWV3aW5nIHVzZXNcIjtcbiAgbWF0Y2ggcHJvZyB3aXRoXG4gIHwgUHJvZ3JhbSAoXywgZXhwciwgc3MpIC0+IGhlbHAgZXhwciBbIFwicHJvZ1wiLCBzcyBdXG47O1xuXG4oKiBoZWxwIGV4cHIgW10gKilcblxubGV0IF8gPVxuICBKcy5leHBvcnRcbiAgICBcImhlbHBlcnNcIlxuICAgIChvYmplY3QlanNcbiAgICAgICBtZXRob2QgcHJpbnQgcCA9XG4gICAgICAgICBsZXQganNfc3RyID0gSnMudG9fc3RyaW5nIHAgaW5cbiAgICAgICAgIHN0cmluZ19vZl9wcm9ncmFtIChwYXJzZV9zdHJpbmcgXCJhc2RmXCIganNfc3RyKSB8PiBKcy5zdHJpbmdcblxuICAgICAgIG1ldGhvZCBlY2hvIHMgPSBwcmludGYgXCJlY2hvaW5nOiAlc1wiIChKcy50b19zdHJpbmcgcylcblxuICAgICAgIG1ldGhvZCB2aWV3QWxsVXNlc1xuICAgICAgICAgICAoYmVnaW5fbG4gOiBpbnQpXG4gICAgICAgICAgIChiZWdpbl9ib2wgOiBpbnQpXG4gICAgICAgICAgIChlbmRfbG4gOiBpbnQpXG4gICAgICAgICAgIChlbmRfYm9sIDogaW50KVxuICAgICAgICAgICAocHJvZ3JhbSA6IEpzLmpzX3N0cmluZyBKcy50KSA9XG4gICAgICAgICBKcy5hcnJheVxuICAgICAgICAgICAoQXJyYXkub2ZfbGlzdFxuICAgICAgICAgICAgICAodmlld19hbGxfdXNlc1xuICAgICAgICAgICAgICAgICAoYmVnaW5fbG4gOiBpbnQpXG4gICAgICAgICAgICAgICAgIChiZWdpbl9ib2wgOiBpbnQpXG4gICAgICAgICAgICAgICAgIChlbmRfbG4gOiBpbnQpXG4gICAgICAgICAgICAgICAgIChlbmRfYm9sIDogaW50KVxuICAgICAgICAgICAgICAgICAocHJvZ3JhbSA6IEpzLmpzX3N0cmluZyBKcy50KSkpXG5cbiAgICAgICBtZXRob2QgZ2V0RGVmaW5pdGlvblxuICAgICAgICAgICAoYmVnaW5fbG4gOiBpbnQpXG4gICAgICAgICAgIChiZWdpbl9ib2wgOiBpbnQpXG4gICAgICAgICAgIChlbmRfbG4gOiBpbnQpXG4gICAgICAgICAgIChlbmRfYm9sIDogaW50KVxuICAgICAgICAgICAocHJvZ3JhbSA6IEpzLmpzX3N0cmluZyBKcy50KVxuICAgICAgICAgICA6IChyYW5nZSwgSnMuanNfc3RyaW5nIEpzLnQpIEVpdGhlci50ID1cbiAgICAgICAgIG1hdGNoXG4gICAgICAgICAgIGdldF9kZWZpbml0aW9uXG4gICAgICAgICAgICAgKGJlZ2luX2xuIDogaW50KVxuICAgICAgICAgICAgIChiZWdpbl9ib2wgOiBpbnQpXG4gICAgICAgICAgICAgKGVuZF9sbiA6IGludClcbiAgICAgICAgICAgICAoZW5kX2JvbCA6IGludClcbiAgICAgICAgICAgICAocHJvZ3JhbSA6IEpzLmpzX3N0cmluZyBKcy50KVxuICAgICAgICAgd2l0aFxuICAgICAgICAgfCBTb21lIChfLCBiKSAtPiBMZWZ0IGJcbiAgICAgICAgIHwgTm9uZSAtPiBSaWdodCAoSnMuc3RyaW5nIFwiQ291bGRuJ3QgZmluZCBuYW1lXCIpXG5cbiAgICAgICBtZXRob2QgYnVpbGRFbnYgKHByb2dyYW0gOiBKcy5qc19zdHJpbmcgSnMudCkgPVxuICAgICAgICAgSnMuYXJyYXlcbiAgICAgICAgICAgKEFycmF5Lm9mX2xpc3RcbiAgICAgICAgICAgICAgKExpc3QubWFwXG4gICAgICAgICAgICAgICAgIChmdW4gKHMsIChhLCBiKSkgLT5cbiAgICAgICAgICAgICAgICAgICAoIEpzLnN0cmluZyBzXG4gICAgICAgICAgICAgICAgICAgLCAoYS5wb3NfbG51bSwgYS5wb3NfYm9sLCBhLnBvc19jbnVtLCBiLnBvc19sbnVtLCBiLnBvc19ib2wsIGIucG9zX2NudW0pXG4gICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgKGJ1aWxkX2VudiAocHJvZ3JhbSA6IEpzLmpzX3N0cmluZyBKcy50KSkpKVxuICAgIGVuZClcbjs7XG4iXX0=
