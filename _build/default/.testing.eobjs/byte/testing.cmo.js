(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_js_wrap_meth_callback=runtime.caml_js_wrap_meth_callback,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst$0=caml_string_of_jsbytes(" "),
     cst$1=caml_string_of_jsbytes(": "),
     cst$2=caml_string_of_jsbytes(""),
     cst=caml_string_of_jsbytes(""),
     cst_asdf=caml_string_of_jsbytes("asdf"),
     cst$4=caml_string_of_jsbytes("_"),
     cst_file$0=caml_string_of_jsbytes("file"),
     cst_no_name_for_range=caml_string_of_jsbytes("no name for range"),
     cst$3=caml_string_of_jsbytes("_"),
     cst_file=caml_string_of_jsbytes("file"),
     cst_lexing_empty_token=caml_string_of_jsbytes("lexing: empty token"),
     cst_Testing_ParseError=caml_string_of_jsbytes("Testing.ParseError"),
     cst_helpers=caml_string_of_jsbytes("helpers"),
     Exprs=global_data.Exprs,
     Stdlib_List=global_data.Stdlib__List,
     Stdlib_Printf=global_data.Stdlib__Printf,
     Stdlib_String=global_data.Stdlib__String,
     Pretty=global_data.Pretty,
     Stdlib_Array=global_data.Stdlib__Array,
     Stdlib=global_data.Stdlib,
     ExtLib=global_data.ExtLib,
     Stdlib_Lexing=global_data.Stdlib__Lexing,
     Lexer=global_data.Lexer,
     Parser=global_data.Parser,
     Stdlib_Printexc=global_data.Stdlib__Printexc,
     Stdlib_Parsing=global_data.Stdlib__Parsing,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     ParseError=[248,cst_Testing_ParseError,runtime.caml_fresh_oo_id(0)],
     _d_=
      [0,
       [4,0,0,0,[12,32,[4,0,0,0,[12,45,[4,0,0,0,[12,32,[4,0,0,0,0]]]]]]],
       caml_string_of_jsbytes("%d %d-%d %d")],
     _h_=
      [0,
       [11,caml_string_of_jsbytes("echoing: "),[2,0,0]],
       caml_string_of_jsbytes("echoing: %s")],
     _e_=
      [0,
       [11,caml_string_of_jsbytes("uses in binds: "),[2,0,0]],
       caml_string_of_jsbytes("uses in binds: %s")],
     _f_=
      [0,
       [11,caml_string_of_jsbytes("uses in binds: "),[2,0,0]],
       caml_string_of_jsbytes("uses in binds: %s")],
     _g_=
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
       {var _aT_=lexbuf[12];
        lexbuf[12] = [0,name,_aT_[2],_aT_[3],_aT_[4]];
        var _aU_=caml_call2(Parser[1],Lexer[3],lexbuf);
        return _aU_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Stdlib[7])
         {var msg=exn[2];
          if(caml_string_equal(msg,cst_lexing_empty_token))
           {var _aS_=caml_call1(Pretty[16],lexbuf[12]);
            throw [0,ParseError,caml_call2(Stdlib_Printf[4],_a_,_aS_)]}
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
      return [0,start[2],start[4] - start[3] | 0,end[2],end[4] - end[3] | 0]}
    function range_equals(param,_aN_)
     {var
       d2=_aN_[4],
       c2=_aN_[3],
       b2=_aN_[2],
       a2=_aN_[1],
       d1=param[4],
       c1=param[3],
       b1=param[2],
       a1=param[1],
       _aO_=a1 === a2?1:0;
      if(_aO_)
       {var _aP_=b1 === b2?1:0;
        if(_aP_)
         var _aQ_=c1 === c2?1:0,_aR_=_aQ_?d1 === d2?1:0:_aQ_;
        else
         var _aR_=_aP_}
      else
       var _aR_=_aO_;
      return _aR_}
    function lookup(name,env)
     {function _aM_(param){var n=param[1];return caml_string_equal(n,name)}
      var found=caml_call2(Stdlib_List[39],_aM_,env);
      if(found){var match=found[1],b=match[2];return [0,b]}
      return 0}
    function lookup_with_name(name,env)
     {function _aL_(param){var n=param[1];return caml_string_equal(n,name)}
      var found=caml_call2(Stdlib_List[39],_aL_,env);
      if(found){var match=found[1],b=match[2],a=match[1];return [0,[0,a,b]]}
      return 0}
    function find_some(list)
     {function _aK_(opt){return opt?1:0}
      var match=caml_call2(Stdlib_List[39],_aK_,list);
      if(match){var s=match[1];return s}
      return 0}
    function helpG(g){return caml_call2(Stdlib_List[19],helpD,g)}
    function desugarP(p)
     {var tag=p[3],body=p[2],decls=p[1];
      function wrap_G(g,body)
       {var _aJ_=caml_call1(Exprs[4],body);return [14,helpG(g),body,_aJ_]}
      return [0,0,caml_call3(Stdlib_List[26],wrap_G,decls,body),tag]}
    function helpD(d)
     {var
       match=d[4],
       b=match[2],
       a=match[1],
       body=d[3],
       args=d[2],
       name=d[1],
       new_pos_start=[0,a[1],a[2],a[3],a[4] + 4 | 0],
       new_pos_end=
        [0,
         a[1],
         a[2],
         a[3],
         (a[4] + 4 | 0) + runtime.caml_ml_string_length(name) | 0],
       new_ss=[0,new_pos_start,new_pos_end];
      return [0,[1,name,0,new_ss],[13,args,body,[0,a,b]],[0,a,b]]}
    function string_of_binding_list(blist)
     {if(blist)
       {var _aG_=blist[1][1];
        if(1 === _aG_[0])
         {var
           rest=blist[2],
           match=_aG_[3],
           b=match[2],
           a=match[1],
           name=_aG_[1],
           _aH_=[0,cst$0,[0,string_of_binding_list(rest),0]],
           _aI_=
            [0,
             name,
             [0,
              cst$1,
              [0,caml_call5(Stdlib_Printf[4],_d_,a[2],a[4],b[2],b[4]),_aH_]]];
          return caml_call2(Stdlib_String[6],cst$2,_aI_)}}
      return cst}
    function get_definition(begin_ln,begin_col,end_ln,end_col,program)
     {var
       prog=desugarP(parse_string(cst_file,caml_string_of_jsstring(program))),
       r=[0,begin_ln,begin_col,end_ln,end_col];
      function help(expr,env)
       {var expr$0=expr;
        for(;;)
         switch(expr$0[0])
          {case 0:
            var
             expr2=expr$0[2],
             expr1=expr$0[1],
             _ac_=[0,help(expr2,env),0],
             _ad_=[0,help(expr1,env),0];
            return find_some(caml_call2(Stdlib[37],_ad_,_ac_));
           case 1:
            var exprs=expr$0[1],_ae_=function(e){return help(e,env)};
            return find_some(caml_call2(Stdlib_List[19],_ae_,exprs));
           case 2:
            var
             e2=expr$0[2],
             e1=expr$0[1],
             _af_=[0,help(e2,env),0],
             _ag_=[0,help(e1,env),0];
            return find_some(caml_call2(Stdlib[37],_ag_,_af_));
           case 3:
            var
             e3=expr$0[3],
             e2$0=expr$0[2],
             e1$0=expr$0[1],
             _ah_=[0,help(e3,env),0],
             _ai_=[0,help(e2$0,env),0],
             _aj_=caml_call2(Stdlib[37],_ai_,_ah_),
             _ak_=[0,help(e1$0,env),0];
            return find_some(caml_call2(Stdlib[37],_ak_,_aj_));
           case 4:
            var
             body=expr$0[2],
             bindings_list=expr$0[1],
             _al_=function(param){var b=param[1];return b},
             new_env=
              env_for_bindings(caml_call2(Stdlib_List[19],_al_,bindings_list)),
             _am_=
              function(param)
               {var range=param[2],n=param[1];
                return range_equals(range,r)?[0,[0,n,r]]:0},
             found_in_env=caml_call2(Stdlib_List[19],_am_,new_env),
             _an_=function(param){var v=param[2];return help(v,env)},
             found_in_bindings=caml_call2(Stdlib_List[19],_an_,bindings_list),
             _ao_=[0,help(body,caml_call2(Stdlib[37],new_env,env)),0],
             _ap_=caml_call2(Stdlib[37],found_in_bindings,_ao_);
            return find_some(caml_call2(Stdlib[37],found_in_env,_ap_));
           case 5:var expr$1=expr$0[2],expr$0=expr$1;continue;
           case 6:
            var
             expr2$0=expr$0[3],
             expr1$0=expr$0[2],
             _aq_=[0,help(expr2$0,env),0],
             _ar_=[0,help(expr1$0,env),0];
            return find_some(caml_call2(Stdlib[37],_ar_,_aq_));
           case 7:
            var
             e=expr$0[3],
             t=expr$0[2],
             c=expr$0[1],
             _as_=[0,help(e,env),0],
             _at_=[0,help(t,env),0],
             _au_=caml_call2(Stdlib[37],_at_,_as_),
             _av_=[0,help(c,env),0];
            return find_some(caml_call2(Stdlib[37],_av_,_au_));
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
             _aw_=function(arg){return help(arg,env)},
             _ax_=caml_call2(Stdlib_List[19],_aw_,args),
             _ay_=[0,help(fn,env),0];
            return find_some(caml_call2(Stdlib[37],_ay_,_ax_));
           case 13:
            var
             body$0=expr$0[2],
             binds=expr$0[1],
             new_env$0=env_for_bindings(binds),
             _az_=
              function(param)
               {var range=param[2],n=param[1];
                return range_equals(range,r)?[0,[0,n,r]]:0},
             found_in_env$0=caml_call2(Stdlib_List[19],_az_,new_env$0),
             _aA_=[0,help(body$0,caml_call2(Stdlib[37],new_env$0,env)),0];
            return find_some(caml_call2(Stdlib[37],found_in_env$0,_aA_));
           default:
            var
             body$1=expr$0[2],
             bindings_list$0=expr$0[1],
             _aB_=function(param){var b=param[1];return b},
             new_env$1=
              env_for_bindings
               (caml_call2(Stdlib_List[19],_aB_,bindings_list$0)),
             _aC_=
              function(param)
               {var range=param[2],n=param[1];
                return range_equals(range,r)?[0,[0,n,r]]:0},
             found_in_env$1=caml_call2(Stdlib_List[19],_aC_,new_env$1),
             _aD_=
              function(param)
               {var v=param[2];
                return help(v,caml_call2(Stdlib[37],new_env$1,env))},
             found_in_bindings$0=
              caml_call2(Stdlib_List[19],_aD_,bindings_list$0),
             _aE_=[0,help(body$1,caml_call2(Stdlib[37],new_env$1,env)),0],
             _aF_=caml_call2(Stdlib[37],found_in_bindings$0,_aE_);
            return find_some(caml_call2(Stdlib[37],found_in_env$1,_aF_))}}
      function env_for_bindings(bind_list)
       {if(bind_list)
         {var _X_=bind_list[1];
          switch(_X_[0])
           {case 0:
             var
              rest=bind_list[2],
              ss=_X_[1],
              _Y_=[0,[0,cst$3,range_of_sourcespan(ss)],0],
              _Z_=env_for_bindings(rest);
             return caml_call2(Stdlib[37],_Z_,_Y_);
            case 1:
             var
              rest$0=bind_list[2],
              ss$0=_X_[3],
              name=_X_[1],
              ___=[0,[0,name,range_of_sourcespan(ss$0)],0],
              _$_=env_for_bindings(rest$0);
             return caml_call2(Stdlib[37],_$_,___);
            default:
             var
              rest$1=bind_list[2],
              binds=_X_[1],
              _aa_=env_for_bindings(binds),
              _ab_=env_for_bindings(rest$1);
             return caml_call2(Stdlib[37],_ab_,_aa_)}}
        return 0}
      var expr=prog[2];
      return help(expr,0)}
    function get_uses(begin_ln,begin_col,end_ln,end_col,program)
     {var
       prog=
        desugarP(parse_string(cst_file$0,caml_string_of_jsstring(program)));
      function env_for_bindings(bind_list)
       {if(bind_list)
         {var _Q_=bind_list[1];
          switch(_Q_[0])
           {case 0:
             var
              rest=bind_list[2],
              ss=_Q_[1],
              _R_=[0,[0,cst$4,range_of_sourcespan(ss)],0],
              _S_=env_for_bindings(rest);
             return caml_call2(Stdlib[37],_S_,_R_);
            case 1:
             var
              rest$0=bind_list[2],
              ss$0=_Q_[3],
              name=_Q_[1],
              _T_=[0,[0,name,range_of_sourcespan(ss$0)],0],
              _U_=env_for_bindings(rest$0);
             return caml_call2(Stdlib[37],_U_,_T_);
            default:
             var
              rest$1=bind_list[2],
              binds=_Q_[1],
              _V_=env_for_bindings(binds),
              _W_=env_for_bindings(rest$1);
             return caml_call2(Stdlib[37],_W_,_V_)}}
        return 0}
      function help(expr,env)
       {var expr$0=expr,env$0=env;
        for(;;)
         {var r=[0,begin_ln,begin_col,end_ln,end_col];
          switch(expr$0[0])
           {case 0:
             var
              e2=expr$0[2],
              e1=expr$0[1],
              _m_=help(e2,env$0),
              _n_=help(e1,env$0);
             return caml_call2(Stdlib[37],_n_,_m_);
            case 1:
             var
              exprs=expr$0[1],
              _o_=function(e){return help(e,env$0)},
              _p_=caml_call2(Stdlib_List[19],_o_,exprs);
             return caml_call1(Stdlib_List[14],_p_);
            case 2:
             var
              e2$0=expr$0[2],
              e1$0=expr$0[1],
              _q_=help(e2$0,env$0),
              _r_=help(e1$0,env$0);
             return caml_call2(Stdlib[37],_r_,_q_);
            case 3:
             var
              e3=expr$0[3],
              e2$1=expr$0[2],
              e1$1=expr$0[1],
              _s_=help(e3,env$0),
              _t_=help(e2$1,env$0),
              _u_=caml_call2(Stdlib[37],_t_,_s_),
              _v_=help(e1$1,env$0);
             return caml_call2(Stdlib[37],_v_,_u_);
            case 4:
             var
              body=expr$0[2],
              bindings_list=expr$0[1],
              _w_=function(param){var b=param[1];return b},
              new_env=
               env_for_bindings(caml_call2(Stdlib_List[19],_w_,bindings_list)),
              _x_=function(param){var v=param[2];return help(v,env$0)},
              _y_=caml_call2(Stdlib_List[19],_x_,bindings_list),
              uses_in_binds=caml_call1(Stdlib_List[14],_y_),
              _z_=caml_call1(ExtLib[13],uses_in_binds);
             caml_call2(Stdlib_Printf[2],_e_,_z_);
             var _A_=help(body,caml_call2(Stdlib[37],new_env,env$0));
             return caml_call2(Stdlib[37],uses_in_binds,_A_);
            case 5:var expr$1=expr$0[2],expr$0=expr$1;continue;
            case 6:
             var
              expr2=expr$0[3],
              expr1=expr$0[2],
              _B_=help(expr2,env$0),
              _C_=help(expr1,env$0);
             return caml_call2(Stdlib[37],_C_,_B_);
            case 7:
             var
              e=expr$0[3],
              t=expr$0[2],
              c=expr$0[1],
              _D_=help(e,env$0),
              _E_=help(t,env$0),
              _F_=caml_call2(Stdlib[37],_E_,_D_),
              _G_=help(c,env$0);
             return caml_call2(Stdlib[37],_G_,_F_);
            case 8:return 0;
            case 9:return 0;
            case 10:return 0;
            case 11:
             var ss=expr$0[2],name=expr$0[1],match=lookup(name,env$0);
             if(match)
              {var range=match[1];
               return range_equals(r,range)?[0,range_of_sourcespan(ss),0]:0}
             return 0;
            case 12:
             var
              args=expr$0[2],
              f=expr$0[1],
              _H_=function(arg){return help(arg,env$0)},
              _I_=caml_call2(Stdlib_List[19],_H_,args),
              _J_=caml_call1(Stdlib_List[14],_I_),
              _K_=help(f,env$0);
             return caml_call2(Stdlib[37],_K_,_J_);
            case 13:
             var
              body$0=expr$0[2],
              binds=expr$0[1],
              new_env$0=env_for_bindings(binds),
              env$1=caml_call2(Stdlib[37],new_env$0,env$0),
              expr$0=body$0,
              env$0=env$1;
             continue;
            default:
             var
              body$1=expr$0[2],
              bindings_list$0=expr$0[1],
              _L_=function(param){var b=param[1];return b},
              new_env$1=
               env_for_bindings
                (caml_call2(Stdlib_List[19],_L_,bindings_list$0)),
              _M_=
               function(param)
                {var v=param[2];
                 return help(v,caml_call2(Stdlib[37],new_env$1,env$0))},
              _N_=caml_call2(Stdlib_List[19],_M_,bindings_list$0),
              uses_in_binds$0=caml_call1(Stdlib_List[14],_N_),
              _O_=caml_call1(ExtLib[13],uses_in_binds$0);
             caml_call2(Stdlib_Printf[2],_f_,_O_);
             var _P_=help(body$1,caml_call2(Stdlib[37],new_env$1,env$0));
             return caml_call2(Stdlib[37],uses_in_binds$0,_P_)}}}
      caml_call1(Stdlib_Printf[2],_g_);
      var
       expr=prog[2],
       match=get_definition(begin_ln,begin_col,end_ln,end_col,program);
      if(match)
       {var
         match$0=match[1],
         r=match$0[2],
         name=match$0[1],
         _l_=
          range_equals
            (range_of_sourcespan([0,Stdlib_Lexing[1],Stdlib_Lexing[1]]),r)
           ?help(expr,[0,[0,name,r],0])
           :help(expr,0);
        return _l_}
      throw [0,Stdlib[7],cst_no_name_for_range]}
    function t15(param,begin_ln,begin_bol,end_ln,end_bol,program)
     {var match=get_definition(begin_ln,begin_bol,end_ln,end_bol,program);
      if(match){var match$0=match[1],b=match$0[2];return [0,b]}
      return [1,"Couldn't find name"]}
    function t14(param,begin_ln,begin_bol,end_ln,end_bol,program)
     {var _k_=get_uses(begin_ln,begin_bol,end_ln,end_bol,program);
      return runtime.caml_js_from_array(caml_call1(Stdlib_Array[12],_k_))}
    function t13(param,s)
     {var _j_=caml_string_of_jsstring(s);
      return caml_call2(Stdlib_Printf[2],_h_,_j_)}
    function t12(param,p)
     {var js_str=caml_string_of_jsstring(p),_i_=parse_string(cst_asdf,js_str);
      return runtime.caml_jsstring_of_string(caml_call1(Pretty[15],_i_))}
    caml_call2
     (Js_of_ocaml_Js[50],
      cst_helpers,
      {"print":caml_js_wrap_meth_callback(t12),
       "echo":caml_js_wrap_meth_callback(t13),
       "viewAllUses":caml_js_wrap_meth_callback(t14),
       "getDefinition":caml_js_wrap_meth_callback(t15)});
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
       desugarP,
       helpG,
       helpD,
       string_of_binding_list,
       get_definition,
       get_uses];
    runtime.caml_register_global(44,Testing,"Testing");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIudGVzdGluZy5lb2Jqcy9ieXRlL3Rlc3RpbmcuY21vLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInBhcnNlIiwibmFtZSIsImxleGJ1ZiIsImV4biIsIm1zZyIsImJ0IiwiY3VyciIsImxpbmUiLCJjbnVtIiwidG9rIiwicGFyc2Vfc3RyaW5nIiwicyIsImdldF9zdGFydHBvcyIsInBvcyIsInAiLCJyYW5nZV9vZl9zb3VyY2VzcGFuIiwiZW5kIiwic3RhcnQiLCJyYW5nZV9lcXVhbHMiLCJkMiIsImMyIiwiYjIiLCJhMiIsImQxIiwiYzEiLCJiMSIsImExIiwibG9va3VwIiwiZW52IiwibiIsImZvdW5kIiwiYiIsImxvb2t1cF93aXRoX25hbWUiLCJhIiwiZmluZF9zb21lIiwibGlzdCIsIm9wdCIsImhlbHBHIiwiZyIsImhlbHBEIiwiZGVzdWdhclAiLCJ0YWciLCJib2R5IiwiZGVjbHMiLCJ3cmFwX0ciLCJkIiwiYXJncyIsIm5ld19wb3Nfc3RhcnQiLCJuZXdfcG9zX2VuZCIsIm5ld19zcyIsInN0cmluZ19vZl9iaW5kaW5nX2xpc3QiLCJibGlzdCIsInJlc3QiLCJnZXRfZGVmaW5pdGlvbiIsImJlZ2luX2xuIiwiYmVnaW5fY29sIiwiZW5kX2xuIiwiZW5kX2NvbCIsInByb2dyYW0iLCJwcm9nIiwiciIsImhlbHAiLCJleHByIiwiZXhwciQwIiwiZXhwcjIiLCJleHByMSIsImV4cHJzIiwiZSIsImUyIiwiZTEiLCJlMyIsImUyJDAiLCJlMSQwIiwiYmluZGluZ3NfbGlzdCIsIm5ld19lbnYiLCJlbnZfZm9yX2JpbmRpbmdzIiwicmFuZ2UiLCJmb3VuZF9pbl9lbnYiLCJ2IiwiZm91bmRfaW5fYmluZGluZ3MiLCJleHByJDEiLCJleHByMiQwIiwiZXhwcjEkMCIsInQiLCJjIiwic3MiLCJyJDAiLCJuYW1lJDAiLCJmbiIsImFyZyIsImJvZHkkMCIsImJpbmRzIiwibmV3X2VudiQwIiwiZm91bmRfaW5fZW52JDAiLCJib2R5JDEiLCJiaW5kaW5nc19saXN0JDAiLCJuZXdfZW52JDEiLCJmb3VuZF9pbl9lbnYkMSIsImZvdW5kX2luX2JpbmRpbmdzJDAiLCJiaW5kX2xpc3QiLCJyZXN0JDAiLCJzcyQwIiwicmVzdCQxIiwiZ2V0X3VzZXMiLCJlbnYkMCIsImUyJDEiLCJlMSQxIiwidXNlc19pbl9iaW5kcyIsImYiLCJlbnYkMSIsInVzZXNfaW5fYmluZHMkMCIsImJlZ2luX2JvbCIsImVuZF9ib2wiLCJqc19zdHIiXSwic291cmNlcyI6WyIvaG9tZS9oYXJyeS9ob21ld29yay9jb21waWxlcnMvZmluYWwtcHJvamVjdC9fYnVpbGQvZGVmYXVsdC90ZXN0aW5nLm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBVUlBLE1BQU9DLEtBQWVDO01BQ3hCO2lCQUR3QkE7d0JBQWZEO1FBR1AsdUNBSHNCQzs7WUFLdEJDOzs7Y0FBUUMsSUFBUkQ7VUFDRyxxQkFES0M7WUFJdUMsK0JBVHpCRjtZQVNOO1VBRUwsSUFBTEcsR0FBSzs2Q0FOWEYsSUFNTUU7VUFBSyxNQU5YRjs7VUFVQTtnQkFmc0JEO1dBZXRCLEtBQUlJO1dBQUosS0FBSUE7V0FHTSxnQ0FsQllKO1VBb0JSLG9EQUpWSyxLQUNBQyxLQUNBQztjQWJKTixJQWVtRjthQUduRk8sYUFBY1QsS0FBZ0JVO01BQ25CLElBQVRULE9BQVMsZ0NBRG1CUyxHQUNuQixhQURHVixLQUNaQyxPQUNhO2FBS2ZVLGFBQWNDLEtBQ2hCLElBQ0VDLEVBRmNELE9BQ2hCLFVBQ0VDLFVBQTZCO2FBRzdCQztVQUE2QkMsYUFBUEM7aURBQU9EO2FBTzdCRTs7T0FBc0RDO09BQUpDO09BQUpDO09BQUpDO09BQWZDO09BQUpDO09BQUpDO09BQUpDO21CQUEyQko7O2lCQUF2QkcsT0FBMkJKOztrQkFBdkJHLE9BQTJCSixpQkFBdkJHLE9BQTJCSjs7Ozs7O2FBSXREUSxPQUFR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O2NBdUJEZ0MsZ0JBdkJDaEM7a0NBd0IrQixJQUFNaEMsV0FBTixPQUFNQSxDQUFjO2NBQS9DOztpQkFBaUIsK0JBRHRCZ0U7Y0FDSzs7aUJBRUgsSUFBU2pCO2lCQUFnQixZQUFoQkEsRUFBZ0Isc0JBRmhDa0IsVUF4QitCUSxPQTBCaUI7Y0FBbEQsbUNBSE9UO2NBR1A7Y0FFeUIsMEJBSHZCZTthQUdKO2FBSmMsUUFLRSxLQU5RaEIsT0FNRSxzQkFMdEJFLFVBeEIrQlE7YUE2Qm5CLDZCQUpaTSxzQkFVUTtNQVNoQjs7WUE3Q0luRDtPQWlETSxxQkF4RFBMLFNBQ0FDLFVBQ0FDLE9BQ0FDLFFBQ0FDO01Bb0RPO1FBR0Q7O1NBRlNFO1NBQU4zRDtTQUVIOzthQUFhLDJEQUZKMkQ7WUFJUCxLQVBHRSxXQUdGN0QsS0FBTTJEO1lBS1AsS0FSR0U7UUFXWjtNQUZZLHlDQUVGO3VCQStCRlIsU0FDQXlELFVBQ0F2RCxPQUNBd0QsUUFDQXREO01BR0QseUJBUENKLFNBQ0F5RCxVQUNBdkQsT0FDQXdELFFBQ0F0RDtNQUdELCtCQU9TM0I7TUFDSywrQkFBZ0M7dUJBOUI3Q3VCLFNBQ0F5RCxVQUNBdkQsT0FDQXdELFFBQ0F0RDtNQUdFLGlCQVBGSixTQUNBeUQsVUFDQXZELE9BQ0F3RCxRQUNBdEQ7TUFRb0Msa0NBTnJDLGlDQU1xQzt1QkFmN0IvQztNQUF5QixnQ0FBekJBO01BQXlCLDJDQUFnQjt1QkFKeENHO01BQ0UsbUNBREZBLEdBRU8sMEJBRGRtRztNQUMwQyx1Q0FBOUMsMkJBQTJEO0lBTGxFOzs7Ozs7Ozs7OztPQXhSRWpIO09BdUJBVTtPQU9BRTtPQUtBRztPQU9BRztPQUlBUztPQU9BSztPQU9BRTtPQWFJTTtPQWtCSkg7T0FFQUU7T0FxQklXO09BZ0JKRztPQThFQWtEO0lBd0VGO1UiLCJzb3VyY2VzQ29udGVudCI6WyJvcGVuIExleGluZ1xub3BlbiBFeHByc1xub3BlbiBQcmludGZcbm9wZW4gUHJldHR5XG5vcGVuIEpzX29mX29jYW1sXG5vcGVuIEV4dExpYlxub3BlbiBTdGRsaWJcblxuZXhjZXB0aW9uIFBhcnNlRXJyb3Igb2Ygc3RyaW5nXG5cbmxldCBwYXJzZSAobmFtZSA6IHN0cmluZykgbGV4YnVmIDogc291cmNlc3BhbiBwcm9ncmFtID1cbiAgdHJ5XG4gICAgbGV4YnVmLmxleF9jdXJyX3AgPC0geyBsZXhidWYubGV4X2N1cnJfcCB3aXRoIHBvc19mbmFtZSA9IG5hbWUgfTtcbiAgICBQYXJzZXIucHJvZ3JhbSBMZXhlci50b2tlbiBsZXhidWZcbiAgd2l0aFxuICB8IEZhaWx1cmUgbXNnIGFzIGV4biAtPlxuICAgIGlmIG1zZyA9IFwibGV4aW5nOiBlbXB0eSB0b2tlblwiXG4gICAgdGhlblxuICAgICAgcmFpc2VcbiAgICAgICAgKFBhcnNlRXJyb3IgKHNwcmludGYgXCJMZXhpY2FsIGVycm9yIGF0ICVzXCIgKHN0cmluZ19vZl9wb3NpdGlvbiBsZXhidWYubGV4X2N1cnJfcCkpKVxuICAgIGVsc2UgKFxuICAgICAgbGV0IGJ0ID0gUHJpbnRleGMuZ2V0X3Jhd19iYWNrdHJhY2UgKCkgaW5cbiAgICAgIFByaW50ZXhjLnJhaXNlX3dpdGhfYmFja3RyYWNlIGV4biBidFxuICAgICAgKCogbWFrZSBzdXJlIHdlIHRocm93IHdpdGggdGhlIHNhbWUgc3RhY2sgdHJhY2UgKikpXG4gIHwgUGFyc2luZy5QYXJzZV9lcnJvciAtPlxuICAgIGxldCBjdXJyID0gbGV4YnVmLkxleGluZy5sZXhfY3Vycl9wIGluXG4gICAgbGV0IGxpbmUgPSBjdXJyLkxleGluZy5wb3NfbG51bSBpblxuICAgIGxldCBjbnVtID0gY3Vyci5MZXhpbmcucG9zX2NudW0gLSBjdXJyLkxleGluZy5wb3NfYm9sIGluXG4gICAgbGV0IHRvayA9IExleGluZy5sZXhlbWUgbGV4YnVmIGluXG4gICAgcmFpc2VcbiAgICAgIChQYXJzZUVycm9yIChzcHJpbnRmIFwiUGFyc2UgZXJyb3IgYXQgbGluZSAlZCwgY29sICVkOiB0b2tlbiBgJXNgXCIgbGluZSBjbnVtIHRvaykpXG47O1xuXG5sZXQgcGFyc2Vfc3RyaW5nIChuYW1lIDogc3RyaW5nKSAocyA6IHN0cmluZykgOiBzb3VyY2VzcGFuIHByb2dyYW0gPVxuICBsZXQgbGV4YnVmID0gTGV4aW5nLmZyb21fc3RyaW5nIH53aXRoX3Bvc2l0aW9uczp0cnVlIHMgaW5cbiAgcGFyc2UgbmFtZSBsZXhidWZcbjs7XG5cbnR5cGUgcmFuZ2UgPSBpbnQgKiBpbnQgKiBpbnQgKiBpbnRcblxubGV0IGdldF9zdGFydHBvcyAocG9zIDogc291cmNlc3BhbikgPVxuICBtYXRjaCBwb3Mgd2l0aFxuICB8IHAsIF8gLT4gcC5wb3NfbG51bSwgcC5wb3NfYm9sXG47O1xuXG5sZXQgcmFuZ2Vfb2Zfc291cmNlc3BhbiAoKHN0YXJ0LCBfZW5kKSA6IHNvdXJjZXNwYW4pIDogcmFuZ2UgPVxuICAoIHN0YXJ0LnBvc19sbnVtXG4gICwgc3RhcnQucG9zX2NudW0gLSBzdGFydC5wb3NfYm9sXG4gICwgX2VuZC5wb3NfbG51bVxuICAsIF9lbmQucG9zX2NudW0gLSBfZW5kLnBvc19ib2wgKVxuOztcblxubGV0IHJhbmdlX2VxdWFscyAoKGExLCBiMSwgYzEsIGQxKSA6IHJhbmdlKSAoKGEyLCBiMiwgYzIsIGQyKSA6IHJhbmdlKSA6IGJvb2wgPVxuICBhMSA9IGEyICYmIGIxID0gYjIgJiYgYzEgPSBjMiAmJiBkMSA9IGQyXG47O1xuXG5sZXQgbG9va3VwIChuYW1lIDogc3RyaW5nKSAoZW52IDogKHN0cmluZyAqICdhKSBsaXN0KSA6ICdhIG9wdGlvbiA9XG4gIGxldCBmb3VuZCA9IExpc3QuZmluZF9vcHQgKGZ1biAobiwgXykgLT4gbiA9IG5hbWUpIGVudiBpblxuICBtYXRjaCBmb3VuZCB3aXRoXG4gIHwgU29tZSAoXywgYikgLT4gU29tZSBiXG4gIHwgTm9uZSAtPiBOb25lXG47O1xuXG5sZXQgbG9va3VwX3dpdGhfbmFtZSAobmFtZSA6IHN0cmluZykgKGVudiA6IChzdHJpbmcgKiAnYSkgbGlzdCkgOiAoc3RyaW5nICogJ2EpIG9wdGlvbiA9XG4gIGxldCBmb3VuZCA9IExpc3QuZmluZF9vcHQgKGZ1biAobiwgXykgLT4gbiA9IG5hbWUpIGVudiBpblxuICBtYXRjaCBmb3VuZCB3aXRoXG4gIHwgU29tZSAoYSwgYikgLT4gU29tZSAoYSwgYilcbiAgfCBOb25lIC0+IE5vbmVcbjs7XG5cbmxldCBmaW5kX3NvbWUgKGxpc3QgOiAnYSBvcHRpb24gbGlzdCkgOiAnYSBvcHRpb24gPVxuICBtYXRjaFxuICAgIExpc3QuZmluZF9vcHRcbiAgICAgIChmdW4gb3B0IC0+XG4gICAgICAgIG1hdGNoIG9wdCB3aXRoXG4gICAgICAgIHwgU29tZSBfIC0+IHRydWVcbiAgICAgICAgfCBOb25lIC0+IGZhbHNlKVxuICAgICAgbGlzdFxuICB3aXRoXG4gIHwgU29tZSBzIC0+IHNcbiAgfCBOb25lIC0+IE5vbmVcbjs7XG5cbmxldCByZWMgZGVzdWdhclAgKHAgOiBzb3VyY2VzcGFuIHByb2dyYW0pID1cbiAgbWF0Y2ggcCB3aXRoXG4gIHwgUHJvZ3JhbSAoZGVjbHMsIGJvZHksIHRhZykgLT5cbiAgICAoKiBUaGlzIHBhcnRpY3VsYXIgZGVzdWdhcmluZyB3aWxsIGNvbnZlcnQgZGVjbGdyb3VwcyBpbnRvIEVMZXRSZWNzICopXG4gICAgbGV0IG1lcmdlX3NvdXJjZXNwYW5zICgoczEsIF8pIDogc291cmNlc3BhbikgKChfLCBzMikgOiBzb3VyY2VzcGFuKSA6IHNvdXJjZXNwYW4gPVxuICAgICAgczEsIHMyXG4gICAgaW5cbiAgICBsZXQgd3JhcF9HIGcgYm9keSA9XG4gICAgICAoKiBtYXRjaCBnIHdpdGhcbiAgICAgIHwgW10gLT4gYm9keVxuICAgICAgfCBmIDo6IHIgLT5cbiAgICAgICAgbGV0IHNwYW4gPVxuICAgICAgICAgIExpc3QuZm9sZF9sZWZ0IG1lcmdlX3NvdXJjZXNwYW5zIChnZXRfdGFnX0QgZikgKExpc3QubWFwIGdldF90YWdfRCByKVxuICAgICAgICBpbiAqKVxuICAgICAgRUxldFJlYyAoaGVscEcgZywgYm9keSwgZ2V0X3RhZ19FIGJvZHkpXG4gICAgaW5cbiAgICBQcm9ncmFtIChbXSwgTGlzdC5mb2xkX3JpZ2h0IHdyYXBfRyBkZWNscyBib2R5LCB0YWcpXG5cbmFuZCBoZWxwRyBnID0gTGlzdC5tYXAgaGVscEQgZ1xuXG5hbmQgaGVscEQgZCA9XG4gIG1hdGNoIGQgd2l0aFxuICB8IERGdW4gKG5hbWUsIGFyZ3MsIGJvZHksIChhLCBiKSkgLT5cbiAgICBsZXQgbmV3X3Bvc19zdGFydCA9XG4gICAgICB7IHBvc19mbmFtZSA9IGEucG9zX2ZuYW1lXG4gICAgICA7IHBvc19ib2wgPSBhLnBvc19ib2xcbiAgICAgIDsgcG9zX2NudW0gPSBhLnBvc19jbnVtICsgNFxuICAgICAgOyBwb3NfbG51bSA9IGEucG9zX2xudW1cbiAgICAgIH1cbiAgICBpblxuICAgIGxldCBuZXdfcG9zX2VuZCA9XG4gICAgICB7IHBvc19mbmFtZSA9IGEucG9zX2ZuYW1lXG4gICAgICA7IHBvc19ib2wgPSBhLnBvc19ib2xcbiAgICAgIDsgcG9zX2NudW0gPSBhLnBvc19jbnVtICsgNCArIFN0cmluZy5sZW5ndGggbmFtZVxuICAgICAgOyBwb3NfbG51bSA9IGEucG9zX2xudW1cbiAgICAgIH1cbiAgICBpblxuICAgIGxldCBuZXdfc3MgPSBuZXdfcG9zX3N0YXJ0LCBuZXdfcG9zX2VuZCBpblxuICAgIEJOYW1lIChuYW1lLCBmYWxzZSwgbmV3X3NzKSwgRUxhbWJkYSAoYXJncywgYm9keSwgKGEsIGIpKSwgKGEsIGIpXG47O1xuXG5sZXQgcmVjIHN0cmluZ19vZl9iaW5kaW5nX2xpc3QgKGJsaXN0IDogc291cmNlc3BhbiBiaW5kaW5nIGxpc3QpIDogc3RyaW5nID1cbiAgbWF0Y2ggYmxpc3Qgd2l0aFxuICB8IChCTmFtZSAobmFtZSwgXywgKGEsIGIpKSwgXywgXykgOjogcmVzdCAtPlxuICAgIFN0cmluZy5jb25jYXRcbiAgICAgIFwiXCJcbiAgICAgIFsgbmFtZVxuICAgICAgOyBcIjogXCJcbiAgICAgIDsgc3ByaW50ZiBcIiVkICVkLSVkICVkXCIgYS5wb3NfbG51bSBhLnBvc19jbnVtIGIucG9zX2xudW0gYi5wb3NfY251bVxuICAgICAgOyBcIiBcIlxuICAgICAgOyBzdHJpbmdfb2ZfYmluZGluZ19saXN0IHJlc3RcbiAgICAgIF1cbiAgfCBfIC0+IFwiXCJcbjs7XG5cbigqIHwgKEJUdXBsZShiaW5kcykpICopXG5cbmxldCBnZXRfZGVmaW5pdGlvblxuICAgIChiZWdpbl9sbiA6IGludClcbiAgICAoYmVnaW5fY29sIDogaW50KVxuICAgIChlbmRfbG4gOiBpbnQpXG4gICAgKGVuZF9jb2wgOiBpbnQpXG4gICAgKHByb2dyYW0gOiBKcy5qc19zdHJpbmcgSnMudClcbiAgICA6IChzdHJpbmcgKiByYW5nZSkgb3B0aW9uXG4gID1cbiAgbGV0IHByb2cgPSBkZXN1Z2FyUCAocGFyc2Vfc3RyaW5nIFwiZmlsZVwiIChKcy50b19zdHJpbmcgcHJvZ3JhbSkpIGluXG4gIGxldCByID0gYmVnaW5fbG4sIGJlZ2luX2NvbCwgZW5kX2xuLCBlbmRfY29sIGluXG4gIGxldCByZWMgaGVscCAoZXhwciA6IHNvdXJjZXNwYW4gZXhwcikgKGVudiA6IChzdHJpbmcgKiByYW5nZSkgbGlzdClcbiAgICAgIDogKHN0cmluZyAqIHJhbmdlKSBvcHRpb25cbiAgICA9XG4gICAgbWF0Y2ggZXhwciB3aXRoXG4gICAgfCBFTGV0IChiaW5kaW5nc19saXN0LCBib2R5LCBfKSAtPlxuICAgICAgbGV0IG5ld19lbnYgPSBlbnZfZm9yX2JpbmRpbmdzIChMaXN0Lm1hcCAoZnVuIChiLCBfLCBfKSAtPiBiKSBiaW5kaW5nc19saXN0KSBpblxuICAgICAgbGV0IGZvdW5kX2luX2VudiA9XG4gICAgICAgIExpc3QubWFwXG4gICAgICAgICAgKGZ1biAobiwgcmFuZ2UpIC0+IGlmIHJhbmdlX2VxdWFscyByYW5nZSByIHRoZW4gU29tZSAobiwgcikgZWxzZSBOb25lKVxuICAgICAgICAgIG5ld19lbnZcbiAgICAgIGluXG4gICAgICBsZXQgZm91bmRfaW5fYmluZGluZ3MgPSBMaXN0Lm1hcCAoZnVuIChfLCB2LCBfKSAtPiBoZWxwIHYgZW52KSBiaW5kaW5nc19saXN0IGluXG4gICAgICBmaW5kX3NvbWUgKGZvdW5kX2luX2VudiBAIGZvdW5kX2luX2JpbmRpbmdzIEAgWyBoZWxwIGJvZHkgKG5ld19lbnYgQCBlbnYpIF0pXG4gICAgfCBFSWQgKG5hbWUsIHNzKSAtPlxuICAgICAgaWYgcmFuZ2VfZXF1YWxzIChyYW5nZV9vZl9zb3VyY2VzcGFuIHNzKSByXG4gICAgICB0aGVuIChcbiAgICAgICAgbWF0Y2ggbG9va3VwX3dpdGhfbmFtZSBuYW1lIGVudiB3aXRoXG4gICAgICAgIHwgU29tZSAobmFtZSwgcikgLT4gU29tZSAobmFtZSwgcilcbiAgICAgICAgfCBOb25lIC0+IFNvbWUgKG5hbWUsIHJhbmdlX29mX3NvdXJjZXNwYW4gKGR1bW15X3BvcywgZHVtbXlfcG9zKSkpXG4gICAgICBlbHNlIE5vbmVcbiAgICB8IEVQcmltMSAoXywgZXhwciwgXykgLT4gaGVscCBleHByIGVudlxuICAgIHwgRVByaW0yIChfLCBleHByMSwgZXhwcjIsIF8pIC0+IGZpbmRfc29tZSAoWyBoZWxwIGV4cHIxIGVudiBdIEAgWyBoZWxwIGV4cHIyIGVudiBdKVxuICAgIHwgRVNlcSAoZXhwcjEsIGV4cHIyLCBfKSAtPiBmaW5kX3NvbWUgKFsgaGVscCBleHByMSBlbnYgXSBAIFsgaGVscCBleHByMiBlbnYgXSlcbiAgICB8IEVMZXRSZWMgKGJpbmRpbmdzX2xpc3QsIGJvZHksIF8pIC0+XG4gICAgICBsZXQgbmV3X2VudiA9IGVudl9mb3JfYmluZGluZ3MgKExpc3QubWFwIChmdW4gKGIsIF8sIF8pIC0+IGIpIGJpbmRpbmdzX2xpc3QpIGluXG4gICAgICBsZXQgZm91bmRfaW5fZW52ID1cbiAgICAgICAgTGlzdC5tYXBcbiAgICAgICAgICAoZnVuIChuLCByYW5nZSkgLT4gaWYgcmFuZ2VfZXF1YWxzIHJhbmdlIHIgdGhlbiBTb21lIChuLCByKSBlbHNlIE5vbmUpXG4gICAgICAgICAgbmV3X2VudlxuICAgICAgaW5cbiAgICAgIGxldCBmb3VuZF9pbl9iaW5kaW5ncyA9XG4gICAgICAgIExpc3QubWFwIChmdW4gKF8sIHYsIF8pIC0+IGhlbHAgdiAobmV3X2VudiBAIGVudikpIGJpbmRpbmdzX2xpc3RcbiAgICAgIGluXG4gICAgICBmaW5kX3NvbWUgKGZvdW5kX2luX2VudiBAIGZvdW5kX2luX2JpbmRpbmdzIEAgWyBoZWxwIGJvZHkgKG5ld19lbnYgQCBlbnYpIF0pXG4gICAgfCBFTGFtYmRhIChiaW5kcywgYm9keSwgXykgLT5cbiAgICAgIGxldCBuZXdfZW52ID0gZW52X2Zvcl9iaW5kaW5ncyBiaW5kcyBpblxuICAgICAgbGV0IGZvdW5kX2luX2VudiA9XG4gICAgICAgIExpc3QubWFwXG4gICAgICAgICAgKGZ1biAobiwgcmFuZ2UpIC0+IGlmIHJhbmdlX2VxdWFscyByYW5nZSByIHRoZW4gU29tZSAobiwgcikgZWxzZSBOb25lKVxuICAgICAgICAgIG5ld19lbnZcbiAgICAgIGluXG4gICAgICBmaW5kX3NvbWUgKGZvdW5kX2luX2VudiBAIFsgaGVscCBib2R5IChuZXdfZW52IEAgZW52KSBdKVxuICAgIHwgRUFwcCAoZm4sIGFyZ3MsIF8sIF8pIC0+XG4gICAgICBmaW5kX3NvbWUgKFsgaGVscCBmbiBlbnYgXSBAIExpc3QubWFwIChmdW4gYXJnIC0+IGhlbHAgYXJnIGVudikgYXJncylcbiAgICB8IEVJZiAoYywgdCwgZSwgXykgLT4gZmluZF9zb21lIChbIGhlbHAgYyBlbnYgXSBAIFsgaGVscCB0IGVudiBdIEAgWyBoZWxwIGUgZW52IF0pXG4gICAgfCBFVHVwbGUgKGV4cHJzLCBfKSAtPiBmaW5kX3NvbWUgKExpc3QubWFwIChmdW4gZSAtPiBoZWxwIGUgZW52KSBleHBycylcbiAgICB8IEVHZXRJdGVtIChlMSwgZTIsIF8pIC0+IGZpbmRfc29tZSAoWyBoZWxwIGUxIGVudiBdIEAgWyBoZWxwIGUyIGVudiBdKVxuICAgIHwgRVNldEl0ZW0gKGUxLCBlMiwgZTMsIF8pIC0+XG4gICAgICBmaW5kX3NvbWUgKFsgaGVscCBlMSBlbnYgXSBAIFsgaGVscCBlMiBlbnYgXSBAIFsgaGVscCBlMyBlbnYgXSlcbiAgICB8IEVOdW1iZXIgXyAtPiBOb25lXG4gICAgfCBFQm9vbCBfIC0+IE5vbmVcbiAgICB8IEVOaWwgXyAtPiBOb25lXG4gICgqIHwgXyAtPiBmYWlsd2l0aCBcIm5haCBhaFwiICopXG4gIGFuZCBlbnZfZm9yX2JpbmRpbmdzIChiaW5kX2xpc3QgOiBzb3VyY2VzcGFuIGJpbmQgbGlzdCkgOiAoc3RyaW5nICogcmFuZ2UpIGxpc3QgPVxuICAgIG1hdGNoIGJpbmRfbGlzdCB3aXRoXG4gICAgfCBCTmFtZSAobmFtZSwgXywgc3MpIDo6IHJlc3QgLT5cbiAgICAgIGVudl9mb3JfYmluZGluZ3MgcmVzdCBAIFsgbmFtZSwgcmFuZ2Vfb2Zfc291cmNlc3BhbiBzcyBdXG4gICAgfCBCVHVwbGUgKGJpbmRzLCBfKSA6OiByZXN0IC0+IGVudl9mb3JfYmluZGluZ3MgcmVzdCBAIGVudl9mb3JfYmluZGluZ3MgYmluZHNcbiAgICB8IEJCbGFuayBzcyA6OiByZXN0IC0+IGVudl9mb3JfYmluZGluZ3MgcmVzdCBAIFsgXCJfXCIsIHJhbmdlX29mX3NvdXJjZXNwYW4gc3MgXVxuICAgIHwgW10gLT4gW11cbiAgaW5cbiAgbWF0Y2ggcHJvZyB3aXRoXG4gICgqIHwgUHJvZ3JhbSAoXywgZXhwciwgXykgLT4gTm9uZSAqKVxuICB8IFByb2dyYW0gKGQsIGV4cHIsIHNzKSAtPlxuICAgICgqIGZhaWx3aXRoIChzdHJpbmdfb2ZfcHJvZ3JhbSAoUHJvZ3JhbSAoZCwgZXhwciwgc3MpKSk7ICopXG4gICAgaGVscCBleHByIFtdXG47O1xuXG5sZXQgZ2V0X3VzZXNcbiAgICAoYmVnaW5fbG4gOiBpbnQpXG4gICAgKGJlZ2luX2NvbCA6IGludClcbiAgICAoZW5kX2xuIDogaW50KVxuICAgIChlbmRfY29sIDogaW50KVxuICAgIChwcm9ncmFtIDogSnMuanNfc3RyaW5nIEpzLnQpXG4gICAgOiByYW5nZSBsaXN0XG4gID1cbiAgbGV0IHByb2cgPSBkZXN1Z2FyUCAocGFyc2Vfc3RyaW5nIFwiZmlsZVwiIChKcy50b19zdHJpbmcgcHJvZ3JhbSkpIGluXG4gIGxldCByZWMgaGVscCAoZXhwciA6IHNvdXJjZXNwYW4gZXhwcikgKGVudiA6IChzdHJpbmcgKiByYW5nZSkgbGlzdCkgOiByYW5nZSBsaXN0ID1cbiAgICBsZXQgciA9IGJlZ2luX2xuLCBiZWdpbl9jb2wsIGVuZF9sbiwgZW5kX2NvbCBpblxuICAgIG1hdGNoIGV4cHIgd2l0aFxuICAgIHwgRUxldCAoYmluZGluZ3NfbGlzdCwgYm9keSwgXykgLT5cbiAgICAgIGxldCBuZXdfZW52ID0gZW52X2Zvcl9iaW5kaW5ncyAoTGlzdC5tYXAgKGZ1biAoYiwgXywgXykgLT4gYikgYmluZGluZ3NfbGlzdCkgaW5cbiAgICAgIGxldCB1c2VzX2luX2JpbmRzID1cbiAgICAgICAgTGlzdC5tYXAgKGZ1biAoXywgdiwgXykgLT4gaGVscCB2IGVudikgYmluZGluZ3NfbGlzdCB8PiBMaXN0LmZsYXR0ZW5cbiAgICAgIGluXG4gICAgICBwcmludGYgXCJ1c2VzIGluIGJpbmRzOiAlc1wiIChkdW1wIHVzZXNfaW5fYmluZHMpO1xuICAgICAgdXNlc19pbl9iaW5kcyBAIGhlbHAgYm9keSAobmV3X2VudiBAIGVudilcbiAgICB8IEVJZCAobmFtZSwgc3MpIC0+XG4gICAgICAobWF0Y2ggbG9va3VwIG5hbWUgZW52IHdpdGhcbiAgICAgIHwgU29tZSByYW5nZSAtPiBpZiByYW5nZV9lcXVhbHMgciByYW5nZSB0aGVuIFsgcmFuZ2Vfb2Zfc291cmNlc3BhbiBzcyBdIGVsc2UgW11cbiAgICAgIHwgTm9uZSAtPiBbXSlcbiAgICB8IEVQcmltMSAoXywgZXhwciwgXykgLT4gaGVscCBleHByIGVudlxuICAgIHwgRVByaW0yIChfLCBleHByMSwgZXhwcjIsIF8pIC0+IGhlbHAgZXhwcjEgZW52IEAgaGVscCBleHByMiBlbnZcbiAgICB8IEVMYW1iZGEgKGJpbmRzLCBib2R5LCBfKSAtPlxuICAgICAgbGV0IG5ld19lbnYgPSBlbnZfZm9yX2JpbmRpbmdzIGJpbmRzIGluXG4gICAgICBoZWxwIGJvZHkgKG5ld19lbnYgQCBlbnYpXG4gICAgfCBFU2VxIChlMSwgZTIsIF8pIC0+IGhlbHAgZTEgZW52IEAgaGVscCBlMiBlbnZcbiAgICB8IEVUdXBsZSAoZXhwcnMsIF8pIC0+IExpc3QubWFwIChmdW4gZSAtPiBoZWxwIGUgZW52KSBleHBycyB8PiBMaXN0LmZsYXR0ZW5cbiAgICB8IEVHZXRJdGVtIChlMSwgZTIsIF8pIC0+IGhlbHAgZTEgZW52IEAgaGVscCBlMiBlbnZcbiAgICB8IEVTZXRJdGVtIChlMSwgZTIsIGUzLCBfKSAtPiBoZWxwIGUxIGVudiBAIGhlbHAgZTIgZW52IEAgaGVscCBlMyBlbnZcbiAgICB8IEVMZXRSZWMgKGJpbmRpbmdzX2xpc3QsIGJvZHksIF8pIC0+XG4gICAgICBsZXQgbmV3X2VudiA9IGVudl9mb3JfYmluZGluZ3MgKExpc3QubWFwIChmdW4gKGIsIF8sIF8pIC0+IGIpIGJpbmRpbmdzX2xpc3QpIGluXG4gICAgICBsZXQgdXNlc19pbl9iaW5kcyA9XG4gICAgICAgIExpc3QubWFwIChmdW4gKF8sIHYsIF8pIC0+IGhlbHAgdiAobmV3X2VudiBAIGVudikpIGJpbmRpbmdzX2xpc3QgfD4gTGlzdC5mbGF0dGVuXG4gICAgICBpblxuICAgICAgcHJpbnRmIFwidXNlcyBpbiBiaW5kczogJXNcIiAoZHVtcCB1c2VzX2luX2JpbmRzKTtcbiAgICAgIHVzZXNfaW5fYmluZHMgQCBoZWxwIGJvZHkgKG5ld19lbnYgQCBlbnYpXG4gICAgfCBFSWYgKGMsIHQsIGUsIF8pIC0+IGhlbHAgYyBlbnYgQCBoZWxwIHQgZW52IEAgaGVscCBlIGVudlxuICAgIHwgRUFwcCAoZiwgYXJncywgXywgXykgLT5cbiAgICAgIGhlbHAgZiBlbnYgQCAoTGlzdC5tYXAgKGZ1biBhcmcgLT4gaGVscCBhcmcgZW52KSBhcmdzIHw+IExpc3QuZmxhdHRlbilcbiAgICB8IEVOdW1iZXIgXyAtPiBbXVxuICAgIHwgRUJvb2wgXyAtPiBbXVxuICAgIHwgRU5pbCBfIC0+IFtdXG4gIGFuZCBlbnZfZm9yX2JpbmRpbmdzIChiaW5kX2xpc3QgOiBzb3VyY2VzcGFuIGJpbmQgbGlzdCkgOiAoc3RyaW5nICogcmFuZ2UpIGxpc3QgPVxuICAgIG1hdGNoIGJpbmRfbGlzdCB3aXRoXG4gICAgfCBCTmFtZSAobmFtZSwgXywgc3MpIDo6IHJlc3QgLT5cbiAgICAgIGVudl9mb3JfYmluZGluZ3MgcmVzdCBAIFsgbmFtZSwgcmFuZ2Vfb2Zfc291cmNlc3BhbiBzcyBdXG4gICAgfCBCVHVwbGUgKGJpbmRzLCBfKSA6OiByZXN0IC0+IGVudl9mb3JfYmluZGluZ3MgcmVzdCBAIGVudl9mb3JfYmluZGluZ3MgYmluZHNcbiAgICB8IEJCbGFuayBzcyA6OiByZXN0IC0+IGVudl9mb3JfYmluZGluZ3MgcmVzdCBAIFsgXCJfXCIsIHJhbmdlX29mX3NvdXJjZXNwYW4gc3MgXVxuICAgIHwgW10gLT4gW11cbiAgaW5cbiAgcHJpbnRmIFwidmlld2luZyB1c2VzXCI7XG4gIG1hdGNoIHByb2cgd2l0aFxuICB8IFByb2dyYW0gKF8sIGV4cHIsIF8pIC0+XG4gICAgbGV0IGRlZmluaXRpb24gPVxuICAgICAgbWF0Y2ggZ2V0X2RlZmluaXRpb24gYmVnaW5fbG4gYmVnaW5fY29sIGVuZF9sbiBlbmRfY29sIHByb2dyYW0gd2l0aFxuICAgICAgfCBTb21lIChuYW1lLCByKSAtPlxuICAgICAgICAoKiBmb3VuZCBhIG5hbWUgZm9yIHRoZSBnaXZlbiByYW5nZSAqKVxuICAgICAgICBpZiByYW5nZV9lcXVhbHMgKHJhbmdlX29mX3NvdXJjZXNwYW4gKGR1bW15X3BvcywgZHVtbXlfcG9zKSkgclxuICAgICAgICAgICAoKiBoYW5kbGUgY2FzZSB3aGVyZSBuYW1lIGlzbid0IHlldCBib3VuZCAqKVxuICAgICAgICB0aGVuIGhlbHAgZXhwciBbIG5hbWUsIHIgXVxuICAgICAgICBlbHNlIGhlbHAgZXhwciBbXVxuICAgICAgfCBOb25lIC0+IHJhaXNlIChGYWlsdXJlIFwibm8gbmFtZSBmb3IgcmFuZ2VcIiAoKiBubyBuYW1lIGZvciBnaXZlbiByYW5nZSAqKSlcbiAgICBpblxuICAgIGRlZmluaXRpb25cbjs7XG5cbigqIGhlbHAgZXhwciBbXSAqKVxuXG5sZXQgXyA9XG4gIEpzLmV4cG9ydFxuICAgIFwiaGVscGVyc1wiXG4gICAgKG9iamVjdCVqc1xuICAgICAgIG1ldGhvZCBwcmludCBwID1cbiAgICAgICAgIGxldCBqc19zdHIgPSBKcy50b19zdHJpbmcgcCBpblxuICAgICAgICAgc3RyaW5nX29mX3Byb2dyYW0gKHBhcnNlX3N0cmluZyBcImFzZGZcIiBqc19zdHIpIHw+IEpzLnN0cmluZ1xuXG4gICAgICAgbWV0aG9kIGVjaG8gcyA9IHByaW50ZiBcImVjaG9pbmc6ICVzXCIgKEpzLnRvX3N0cmluZyBzKVxuXG4gICAgICAgbWV0aG9kIHZpZXdBbGxVc2VzXG4gICAgICAgICAgIChiZWdpbl9sbiA6IGludClcbiAgICAgICAgICAgKGJlZ2luX2JvbCA6IGludClcbiAgICAgICAgICAgKGVuZF9sbiA6IGludClcbiAgICAgICAgICAgKGVuZF9ib2wgOiBpbnQpXG4gICAgICAgICAgIChwcm9ncmFtIDogSnMuanNfc3RyaW5nIEpzLnQpID1cbiAgICAgICAgIEpzLmFycmF5XG4gICAgICAgICAgIChBcnJheS5vZl9saXN0XG4gICAgICAgICAgICAgIChnZXRfdXNlc1xuICAgICAgICAgICAgICAgICAoYmVnaW5fbG4gOiBpbnQpXG4gICAgICAgICAgICAgICAgIChiZWdpbl9ib2wgOiBpbnQpXG4gICAgICAgICAgICAgICAgIChlbmRfbG4gOiBpbnQpXG4gICAgICAgICAgICAgICAgIChlbmRfYm9sIDogaW50KVxuICAgICAgICAgICAgICAgICAocHJvZ3JhbSA6IEpzLmpzX3N0cmluZyBKcy50KSkpXG5cbiAgICAgICBtZXRob2QgZ2V0RGVmaW5pdGlvblxuICAgICAgICAgICAoYmVnaW5fbG4gOiBpbnQpXG4gICAgICAgICAgIChiZWdpbl9ib2wgOiBpbnQpXG4gICAgICAgICAgIChlbmRfbG4gOiBpbnQpXG4gICAgICAgICAgIChlbmRfYm9sIDogaW50KVxuICAgICAgICAgICAocHJvZ3JhbSA6IEpzLmpzX3N0cmluZyBKcy50KVxuICAgICAgICAgICA6IChyYW5nZSwgSnMuanNfc3RyaW5nIEpzLnQpIEVpdGhlci50ID1cbiAgICAgICAgIG1hdGNoXG4gICAgICAgICAgIGdldF9kZWZpbml0aW9uXG4gICAgICAgICAgICAgKGJlZ2luX2xuIDogaW50KVxuICAgICAgICAgICAgIChiZWdpbl9ib2wgOiBpbnQpXG4gICAgICAgICAgICAgKGVuZF9sbiA6IGludClcbiAgICAgICAgICAgICAoZW5kX2JvbCA6IGludClcbiAgICAgICAgICAgICAocHJvZ3JhbSA6IEpzLmpzX3N0cmluZyBKcy50KVxuICAgICAgICAgd2l0aFxuICAgICAgICAgfCBTb21lIChfLCBiKSAtPiBMZWZ0IGJcbiAgICAgICAgIHwgTm9uZSAtPiBSaWdodCAoSnMuc3RyaW5nIFwiQ291bGRuJ3QgZmluZCBuYW1lXCIpXG4gICAgZW5kKVxuOztcbiJdfQ==
