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
      function help(expr,env,r)
       {var expr$0=expr,env$0=env;
        for(;;)
         switch(expr$0[0])
          {case 0:
            var
             e2=expr$0[2],
             e1=expr$0[1],
             _m_=help(e2,env$0,r),
             _n_=help(e1,env$0,r);
            return caml_call2(Stdlib[37],_n_,_m_);
           case 1:
            var
             exprs=expr$0[1],
             _o_=function(e){return help(e,env$0,r)},
             _p_=caml_call2(Stdlib_List[19],_o_,exprs);
            return caml_call1(Stdlib_List[14],_p_);
           case 2:
            var
             e2$0=expr$0[2],
             e1$0=expr$0[1],
             _q_=help(e2$0,env$0,r),
             _r_=help(e1$0,env$0,r);
            return caml_call2(Stdlib[37],_r_,_q_);
           case 3:
            var
             e3=expr$0[3],
             e2$1=expr$0[2],
             e1$1=expr$0[1],
             _s_=help(e3,env$0,r),
             _t_=help(e2$1,env$0,r),
             _u_=caml_call2(Stdlib[37],_t_,_s_),
             _v_=help(e1$1,env$0,r);
            return caml_call2(Stdlib[37],_v_,_u_);
           case 4:
            var
             body=expr$0[2],
             bindings_list=expr$0[1],
             _w_=function(param){var b=param[1];return b},
             new_env=
              env_for_bindings(caml_call2(Stdlib_List[19],_w_,bindings_list)),
             _x_=function(param){var v=param[2];return help(v,env$0,r)},
             _y_=caml_call2(Stdlib_List[19],_x_,bindings_list),
             uses_in_binds=caml_call1(Stdlib_List[14],_y_),
             _z_=caml_call1(ExtLib[13],uses_in_binds);
            caml_call2(Stdlib_Printf[2],_e_,_z_);
            var _A_=help(body,caml_call2(Stdlib[37],new_env,env$0),r);
            return caml_call2(Stdlib[37],uses_in_binds,_A_);
           case 5:var expr$1=expr$0[2],expr$0=expr$1;continue;
           case 6:
            var
             expr2=expr$0[3],
             expr1=expr$0[2],
             _B_=help(expr2,env$0,r),
             _C_=help(expr1,env$0,r);
            return caml_call2(Stdlib[37],_C_,_B_);
           case 7:
            var
             e=expr$0[3],
             t=expr$0[2],
             c=expr$0[1],
             _D_=help(e,env$0,r),
             _E_=help(t,env$0,r),
             _F_=caml_call2(Stdlib[37],_E_,_D_),
             _G_=help(c,env$0,r);
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
             _H_=function(arg){return help(arg,env$0,r)},
             _I_=caml_call2(Stdlib_List[19],_H_,args),
             _J_=caml_call1(Stdlib_List[14],_I_),
             _K_=help(f,env$0,r);
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
                return help(v,caml_call2(Stdlib[37],new_env$1,env$0),r)},
             _N_=caml_call2(Stdlib_List[19],_M_,bindings_list$0),
             uses_in_binds$0=caml_call1(Stdlib_List[14],_N_),
             _O_=caml_call1(ExtLib[13],uses_in_binds$0);
            caml_call2(Stdlib_Printf[2],_f_,_O_);
            var _P_=help(body$1,caml_call2(Stdlib[37],new_env$1,env$0),r);
            return caml_call2(Stdlib[37],uses_in_binds$0,_P_)}}
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
           ?help(expr,[0,[0,name,r],0],r)
           :help(expr,0,r);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIudGVzdGluZy5lb2Jqcy9ieXRlL3Rlc3RpbmcuY21vLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInBhcnNlIiwibmFtZSIsImxleGJ1ZiIsImV4biIsIm1zZyIsImJ0IiwiY3VyciIsImxpbmUiLCJjbnVtIiwidG9rIiwicGFyc2Vfc3RyaW5nIiwicyIsImdldF9zdGFydHBvcyIsInBvcyIsInAiLCJyYW5nZV9vZl9zb3VyY2VzcGFuIiwiZW5kIiwic3RhcnQiLCJyYW5nZV9lcXVhbHMiLCJkMiIsImMyIiwiYjIiLCJhMiIsImQxIiwiYzEiLCJiMSIsImExIiwibG9va3VwIiwiZW52IiwibiIsImZvdW5kIiwiYiIsImxvb2t1cF93aXRoX25hbWUiLCJhIiwiZmluZF9zb21lIiwibGlzdCIsIm9wdCIsImhlbHBHIiwiZyIsImhlbHBEIiwiZGVzdWdhclAiLCJ0YWciLCJib2R5IiwiZGVjbHMiLCJ3cmFwX0ciLCJkIiwiYXJncyIsIm5ld19wb3Nfc3RhcnQiLCJuZXdfcG9zX2VuZCIsIm5ld19zcyIsInN0cmluZ19vZl9iaW5kaW5nX2xpc3QiLCJibGlzdCIsInJlc3QiLCJnZXRfZGVmaW5pdGlvbiIsImJlZ2luX2xuIiwiYmVnaW5fY29sIiwiZW5kX2xuIiwiZW5kX2NvbCIsInByb2dyYW0iLCJwcm9nIiwiciIsImhlbHAiLCJleHByIiwiZXhwciQwIiwiZXhwcjIiLCJleHByMSIsImV4cHJzIiwiZSIsImUyIiwiZTEiLCJlMyIsImUyJDAiLCJlMSQwIiwiYmluZGluZ3NfbGlzdCIsIm5ld19lbnYiLCJlbnZfZm9yX2JpbmRpbmdzIiwicmFuZ2UiLCJmb3VuZF9pbl9lbnYiLCJ2IiwiZm91bmRfaW5fYmluZGluZ3MiLCJleHByJDEiLCJleHByMiQwIiwiZXhwcjEkMCIsInQiLCJjIiwic3MiLCJyJDAiLCJuYW1lJDAiLCJmbiIsImFyZyIsImJvZHkkMCIsImJpbmRzIiwibmV3X2VudiQwIiwiZm91bmRfaW5fZW52JDAiLCJib2R5JDEiLCJiaW5kaW5nc19saXN0JDAiLCJuZXdfZW52JDEiLCJmb3VuZF9pbl9lbnYkMSIsImZvdW5kX2luX2JpbmRpbmdzJDAiLCJiaW5kX2xpc3QiLCJyZXN0JDAiLCJzcyQwIiwicmVzdCQxIiwiZ2V0X3VzZXMiLCJlbnYkMCIsImUyJDEiLCJlMSQxIiwidXNlc19pbl9iaW5kcyIsImYiLCJlbnYkMSIsInVzZXNfaW5fYmluZHMkMCIsImJlZ2luX2JvbCIsImVuZF9ib2wiLCJqc19zdHIiXSwic291cmNlcyI6WyIvaG9tZS9oYXJyeS9ob21ld29yay9jb21waWxlcnMvZmluYWwtcHJvamVjdC9fYnVpbGQvZGVmYXVsdC90ZXN0aW5nLm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBVUlBLE1BQU9DLEtBQWVDO01BQ3hCO2lCQUR3QkE7d0JBQWZEO1FBR1AsdUNBSHNCQzs7WUFLdEJDOzs7Y0FBUUMsSUFBUkQ7VUFDRyxxQkFES0M7WUFJdUMsK0JBVHpCRjtZQVNOO1VBRUwsSUFBTEcsR0FBSzs2Q0FOWEYsSUFNTUU7VUFBSyxNQU5YRjs7VUFVQTtnQkFmc0JEO1dBZXRCLEtBQUlJO1dBQUosS0FBSUE7V0FHTSxnQ0FsQllKO1VBb0JSLG9EQUpWSyxLQUNBQyxLQUNBQztjQWJKTixJQWVtRjthQUduRk8sYUFBY1QsS0FBZ0JVO01BQ25CLElBQVRULE9BQVMsZ0NBRG1CUyxHQUNuQixhQURHVixLQUNaQyxPQUNhO2FBS2ZVLGFBQWNDLEtBQ2hCLElBQ0VDLEVBRmNELE9BQ2hCLFVBQ0VDLFVBQTZCO2FBRzdCQztVQUE2QkMsYUFBUEM7aURBQU9EO2FBTzdCRTs7T0FBc0RDO09BQUpDO09BQUpDO09BQUpDO09BQWZDO09BQUpDO09BQUpDO09BQUpDO21CQUEyQko7O2lCQUF2QkcsT0FBMkJKOztrQkFBdkJHLE9BQTJCSixpQkFBdkJHLE9BQTJCSjs7Ozs7O2FBSXREUSxPQUFR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O09BRUFFO09BcUJJVztPQWdCSkc7T0E4RUFrRDtJQTBFRjtVIiwic291cmNlc0NvbnRlbnQiOlsib3BlbiBMZXhpbmdcbm9wZW4gRXhwcnNcbm9wZW4gUHJpbnRmXG5vcGVuIFByZXR0eVxub3BlbiBKc19vZl9vY2FtbFxub3BlbiBFeHRMaWJcbm9wZW4gU3RkbGliXG5cbmV4Y2VwdGlvbiBQYXJzZUVycm9yIG9mIHN0cmluZ1xuXG5sZXQgcGFyc2UgKG5hbWUgOiBzdHJpbmcpIGxleGJ1ZiA6IHNvdXJjZXNwYW4gcHJvZ3JhbSA9XG4gIHRyeVxuICAgIGxleGJ1Zi5sZXhfY3Vycl9wIDwtIHsgbGV4YnVmLmxleF9jdXJyX3Agd2l0aCBwb3NfZm5hbWUgPSBuYW1lIH07XG4gICAgUGFyc2VyLnByb2dyYW0gTGV4ZXIudG9rZW4gbGV4YnVmXG4gIHdpdGhcbiAgfCBGYWlsdXJlIG1zZyBhcyBleG4gLT5cbiAgICBpZiBtc2cgPSBcImxleGluZzogZW1wdHkgdG9rZW5cIlxuICAgIHRoZW5cbiAgICAgIHJhaXNlXG4gICAgICAgIChQYXJzZUVycm9yIChzcHJpbnRmIFwiTGV4aWNhbCBlcnJvciBhdCAlc1wiIChzdHJpbmdfb2ZfcG9zaXRpb24gbGV4YnVmLmxleF9jdXJyX3ApKSlcbiAgICBlbHNlIChcbiAgICAgIGxldCBidCA9IFByaW50ZXhjLmdldF9yYXdfYmFja3RyYWNlICgpIGluXG4gICAgICBQcmludGV4Yy5yYWlzZV93aXRoX2JhY2t0cmFjZSBleG4gYnRcbiAgICAgICgqIG1ha2Ugc3VyZSB3ZSB0aHJvdyB3aXRoIHRoZSBzYW1lIHN0YWNrIHRyYWNlICopKVxuICB8IFBhcnNpbmcuUGFyc2VfZXJyb3IgLT5cbiAgICBsZXQgY3VyciA9IGxleGJ1Zi5MZXhpbmcubGV4X2N1cnJfcCBpblxuICAgIGxldCBsaW5lID0gY3Vyci5MZXhpbmcucG9zX2xudW0gaW5cbiAgICBsZXQgY251bSA9IGN1cnIuTGV4aW5nLnBvc19jbnVtIC0gY3Vyci5MZXhpbmcucG9zX2JvbCBpblxuICAgIGxldCB0b2sgPSBMZXhpbmcubGV4ZW1lIGxleGJ1ZiBpblxuICAgIHJhaXNlXG4gICAgICAoUGFyc2VFcnJvciAoc3ByaW50ZiBcIlBhcnNlIGVycm9yIGF0IGxpbmUgJWQsIGNvbCAlZDogdG9rZW4gYCVzYFwiIGxpbmUgY251bSB0b2spKVxuOztcblxubGV0IHBhcnNlX3N0cmluZyAobmFtZSA6IHN0cmluZykgKHMgOiBzdHJpbmcpIDogc291cmNlc3BhbiBwcm9ncmFtID1cbiAgbGV0IGxleGJ1ZiA9IExleGluZy5mcm9tX3N0cmluZyB+d2l0aF9wb3NpdGlvbnM6dHJ1ZSBzIGluXG4gIHBhcnNlIG5hbWUgbGV4YnVmXG47O1xuXG50eXBlIHJhbmdlID0gaW50ICogaW50ICogaW50ICogaW50XG5cbmxldCBnZXRfc3RhcnRwb3MgKHBvcyA6IHNvdXJjZXNwYW4pID1cbiAgbWF0Y2ggcG9zIHdpdGhcbiAgfCBwLCBfIC0+IHAucG9zX2xudW0sIHAucG9zX2JvbFxuOztcblxubGV0IHJhbmdlX29mX3NvdXJjZXNwYW4gKChzdGFydCwgX2VuZCkgOiBzb3VyY2VzcGFuKSA6IHJhbmdlID1cbiAgKCBzdGFydC5wb3NfbG51bVxuICAsIHN0YXJ0LnBvc19jbnVtIC0gc3RhcnQucG9zX2JvbFxuICAsIF9lbmQucG9zX2xudW1cbiAgLCBfZW5kLnBvc19jbnVtIC0gX2VuZC5wb3NfYm9sIClcbjs7XG5cbmxldCByYW5nZV9lcXVhbHMgKChhMSwgYjEsIGMxLCBkMSkgOiByYW5nZSkgKChhMiwgYjIsIGMyLCBkMikgOiByYW5nZSkgOiBib29sID1cbiAgYTEgPSBhMiAmJiBiMSA9IGIyICYmIGMxID0gYzIgJiYgZDEgPSBkMlxuOztcblxubGV0IGxvb2t1cCAobmFtZSA6IHN0cmluZykgKGVudiA6IChzdHJpbmcgKiAnYSkgbGlzdCkgOiAnYSBvcHRpb24gPVxuICBsZXQgZm91bmQgPSBMaXN0LmZpbmRfb3B0IChmdW4gKG4sIF8pIC0+IG4gPSBuYW1lKSBlbnYgaW5cbiAgbWF0Y2ggZm91bmQgd2l0aFxuICB8IFNvbWUgKF8sIGIpIC0+IFNvbWUgYlxuICB8IE5vbmUgLT4gTm9uZVxuOztcblxubGV0IGxvb2t1cF93aXRoX25hbWUgKG5hbWUgOiBzdHJpbmcpIChlbnYgOiAoc3RyaW5nICogJ2EpIGxpc3QpIDogKHN0cmluZyAqICdhKSBvcHRpb24gPVxuICBsZXQgZm91bmQgPSBMaXN0LmZpbmRfb3B0IChmdW4gKG4sIF8pIC0+IG4gPSBuYW1lKSBlbnYgaW5cbiAgbWF0Y2ggZm91bmQgd2l0aFxuICB8IFNvbWUgKGEsIGIpIC0+IFNvbWUgKGEsIGIpXG4gIHwgTm9uZSAtPiBOb25lXG47O1xuXG5sZXQgZmluZF9zb21lIChsaXN0IDogJ2Egb3B0aW9uIGxpc3QpIDogJ2Egb3B0aW9uID1cbiAgbWF0Y2hcbiAgICBMaXN0LmZpbmRfb3B0XG4gICAgICAoZnVuIG9wdCAtPlxuICAgICAgICBtYXRjaCBvcHQgd2l0aFxuICAgICAgICB8IFNvbWUgXyAtPiB0cnVlXG4gICAgICAgIHwgTm9uZSAtPiBmYWxzZSlcbiAgICAgIGxpc3RcbiAgd2l0aFxuICB8IFNvbWUgcyAtPiBzXG4gIHwgTm9uZSAtPiBOb25lXG47O1xuXG5sZXQgcmVjIGRlc3VnYXJQIChwIDogc291cmNlc3BhbiBwcm9ncmFtKSA9XG4gIG1hdGNoIHAgd2l0aFxuICB8IFByb2dyYW0gKGRlY2xzLCBib2R5LCB0YWcpIC0+XG4gICAgKCogVGhpcyBwYXJ0aWN1bGFyIGRlc3VnYXJpbmcgd2lsbCBjb252ZXJ0IGRlY2xncm91cHMgaW50byBFTGV0UmVjcyAqKVxuICAgIGxldCBtZXJnZV9zb3VyY2VzcGFucyAoKHMxLCBfKSA6IHNvdXJjZXNwYW4pICgoXywgczIpIDogc291cmNlc3BhbikgOiBzb3VyY2VzcGFuID1cbiAgICAgIHMxLCBzMlxuICAgIGluXG4gICAgbGV0IHdyYXBfRyBnIGJvZHkgPVxuICAgICAgKCogbWF0Y2ggZyB3aXRoXG4gICAgICB8IFtdIC0+IGJvZHlcbiAgICAgIHwgZiA6OiByIC0+XG4gICAgICAgIGxldCBzcGFuID1cbiAgICAgICAgICBMaXN0LmZvbGRfbGVmdCBtZXJnZV9zb3VyY2VzcGFucyAoZ2V0X3RhZ19EIGYpIChMaXN0Lm1hcCBnZXRfdGFnX0QgcilcbiAgICAgICAgaW4gKilcbiAgICAgIEVMZXRSZWMgKGhlbHBHIGcsIGJvZHksIGdldF90YWdfRSBib2R5KVxuICAgIGluXG4gICAgUHJvZ3JhbSAoW10sIExpc3QuZm9sZF9yaWdodCB3cmFwX0cgZGVjbHMgYm9keSwgdGFnKVxuXG5hbmQgaGVscEcgZyA9IExpc3QubWFwIGhlbHBEIGdcblxuYW5kIGhlbHBEIGQgPVxuICBtYXRjaCBkIHdpdGhcbiAgfCBERnVuIChuYW1lLCBhcmdzLCBib2R5LCAoYSwgYikpIC0+XG4gICAgbGV0IG5ld19wb3Nfc3RhcnQgPVxuICAgICAgeyBwb3NfZm5hbWUgPSBhLnBvc19mbmFtZVxuICAgICAgOyBwb3NfYm9sID0gYS5wb3NfYm9sXG4gICAgICA7IHBvc19jbnVtID0gYS5wb3NfY251bSArIDRcbiAgICAgIDsgcG9zX2xudW0gPSBhLnBvc19sbnVtXG4gICAgICB9XG4gICAgaW5cbiAgICBsZXQgbmV3X3Bvc19lbmQgPVxuICAgICAgeyBwb3NfZm5hbWUgPSBhLnBvc19mbmFtZVxuICAgICAgOyBwb3NfYm9sID0gYS5wb3NfYm9sXG4gICAgICA7IHBvc19jbnVtID0gYS5wb3NfY251bSArIDQgKyBTdHJpbmcubGVuZ3RoIG5hbWVcbiAgICAgIDsgcG9zX2xudW0gPSBhLnBvc19sbnVtXG4gICAgICB9XG4gICAgaW5cbiAgICBsZXQgbmV3X3NzID0gbmV3X3Bvc19zdGFydCwgbmV3X3Bvc19lbmQgaW5cbiAgICBCTmFtZSAobmFtZSwgZmFsc2UsIG5ld19zcyksIEVMYW1iZGEgKGFyZ3MsIGJvZHksIChhLCBiKSksIChhLCBiKVxuOztcblxubGV0IHJlYyBzdHJpbmdfb2ZfYmluZGluZ19saXN0IChibGlzdCA6IHNvdXJjZXNwYW4gYmluZGluZyBsaXN0KSA6IHN0cmluZyA9XG4gIG1hdGNoIGJsaXN0IHdpdGhcbiAgfCAoQk5hbWUgKG5hbWUsIF8sIChhLCBiKSksIF8sIF8pIDo6IHJlc3QgLT5cbiAgICBTdHJpbmcuY29uY2F0XG4gICAgICBcIlwiXG4gICAgICBbIG5hbWVcbiAgICAgIDsgXCI6IFwiXG4gICAgICA7IHNwcmludGYgXCIlZCAlZC0lZCAlZFwiIGEucG9zX2xudW0gYS5wb3NfY251bSBiLnBvc19sbnVtIGIucG9zX2NudW1cbiAgICAgIDsgXCIgXCJcbiAgICAgIDsgc3RyaW5nX29mX2JpbmRpbmdfbGlzdCByZXN0XG4gICAgICBdXG4gIHwgXyAtPiBcIlwiXG47O1xuXG4oKiB8IChCVHVwbGUoYmluZHMpKSAqKVxuXG5sZXQgZ2V0X2RlZmluaXRpb25cbiAgICAoYmVnaW5fbG4gOiBpbnQpXG4gICAgKGJlZ2luX2NvbCA6IGludClcbiAgICAoZW5kX2xuIDogaW50KVxuICAgIChlbmRfY29sIDogaW50KVxuICAgIChwcm9ncmFtIDogSnMuanNfc3RyaW5nIEpzLnQpXG4gICAgOiAoc3RyaW5nICogcmFuZ2UpIG9wdGlvblxuICA9XG4gIGxldCBwcm9nID0gZGVzdWdhclAgKHBhcnNlX3N0cmluZyBcImZpbGVcIiAoSnMudG9fc3RyaW5nIHByb2dyYW0pKSBpblxuICBsZXQgciA9IGJlZ2luX2xuLCBiZWdpbl9jb2wsIGVuZF9sbiwgZW5kX2NvbCBpblxuICBsZXQgcmVjIGhlbHAgKGV4cHIgOiBzb3VyY2VzcGFuIGV4cHIpIChlbnYgOiAoc3RyaW5nICogcmFuZ2UpIGxpc3QpXG4gICAgICA6IChzdHJpbmcgKiByYW5nZSkgb3B0aW9uXG4gICAgPVxuICAgIG1hdGNoIGV4cHIgd2l0aFxuICAgIHwgRUxldCAoYmluZGluZ3NfbGlzdCwgYm9keSwgXykgLT5cbiAgICAgIGxldCBuZXdfZW52ID0gZW52X2Zvcl9iaW5kaW5ncyAoTGlzdC5tYXAgKGZ1biAoYiwgXywgXykgLT4gYikgYmluZGluZ3NfbGlzdCkgaW5cbiAgICAgIGxldCBmb3VuZF9pbl9lbnYgPVxuICAgICAgICBMaXN0Lm1hcFxuICAgICAgICAgIChmdW4gKG4sIHJhbmdlKSAtPiBpZiByYW5nZV9lcXVhbHMgcmFuZ2UgciB0aGVuIFNvbWUgKG4sIHIpIGVsc2UgTm9uZSlcbiAgICAgICAgICBuZXdfZW52XG4gICAgICBpblxuICAgICAgbGV0IGZvdW5kX2luX2JpbmRpbmdzID0gTGlzdC5tYXAgKGZ1biAoXywgdiwgXykgLT4gaGVscCB2IGVudikgYmluZGluZ3NfbGlzdCBpblxuICAgICAgZmluZF9zb21lIChmb3VuZF9pbl9lbnYgQCBmb3VuZF9pbl9iaW5kaW5ncyBAIFsgaGVscCBib2R5IChuZXdfZW52IEAgZW52KSBdKVxuICAgIHwgRUlkIChuYW1lLCBzcykgLT5cbiAgICAgIGlmIHJhbmdlX2VxdWFscyAocmFuZ2Vfb2Zfc291cmNlc3BhbiBzcykgclxuICAgICAgdGhlbiAoXG4gICAgICAgIG1hdGNoIGxvb2t1cF93aXRoX25hbWUgbmFtZSBlbnYgd2l0aFxuICAgICAgICB8IFNvbWUgKG5hbWUsIHIpIC0+IFNvbWUgKG5hbWUsIHIpXG4gICAgICAgIHwgTm9uZSAtPiBTb21lIChuYW1lLCByYW5nZV9vZl9zb3VyY2VzcGFuIChkdW1teV9wb3MsIGR1bW15X3BvcykpKVxuICAgICAgZWxzZSBOb25lXG4gICAgfCBFUHJpbTEgKF8sIGV4cHIsIF8pIC0+IGhlbHAgZXhwciBlbnZcbiAgICB8IEVQcmltMiAoXywgZXhwcjEsIGV4cHIyLCBfKSAtPiBmaW5kX3NvbWUgKFsgaGVscCBleHByMSBlbnYgXSBAIFsgaGVscCBleHByMiBlbnYgXSlcbiAgICB8IEVTZXEgKGV4cHIxLCBleHByMiwgXykgLT4gZmluZF9zb21lIChbIGhlbHAgZXhwcjEgZW52IF0gQCBbIGhlbHAgZXhwcjIgZW52IF0pXG4gICAgfCBFTGV0UmVjIChiaW5kaW5nc19saXN0LCBib2R5LCBfKSAtPlxuICAgICAgbGV0IG5ld19lbnYgPSBlbnZfZm9yX2JpbmRpbmdzIChMaXN0Lm1hcCAoZnVuIChiLCBfLCBfKSAtPiBiKSBiaW5kaW5nc19saXN0KSBpblxuICAgICAgbGV0IGZvdW5kX2luX2VudiA9XG4gICAgICAgIExpc3QubWFwXG4gICAgICAgICAgKGZ1biAobiwgcmFuZ2UpIC0+IGlmIHJhbmdlX2VxdWFscyByYW5nZSByIHRoZW4gU29tZSAobiwgcikgZWxzZSBOb25lKVxuICAgICAgICAgIG5ld19lbnZcbiAgICAgIGluXG4gICAgICBsZXQgZm91bmRfaW5fYmluZGluZ3MgPVxuICAgICAgICBMaXN0Lm1hcCAoZnVuIChfLCB2LCBfKSAtPiBoZWxwIHYgKG5ld19lbnYgQCBlbnYpKSBiaW5kaW5nc19saXN0XG4gICAgICBpblxuICAgICAgZmluZF9zb21lIChmb3VuZF9pbl9lbnYgQCBmb3VuZF9pbl9iaW5kaW5ncyBAIFsgaGVscCBib2R5IChuZXdfZW52IEAgZW52KSBdKVxuICAgIHwgRUxhbWJkYSAoYmluZHMsIGJvZHksIF8pIC0+XG4gICAgICBsZXQgbmV3X2VudiA9IGVudl9mb3JfYmluZGluZ3MgYmluZHMgaW5cbiAgICAgIGxldCBmb3VuZF9pbl9lbnYgPVxuICAgICAgICBMaXN0Lm1hcFxuICAgICAgICAgIChmdW4gKG4sIHJhbmdlKSAtPiBpZiByYW5nZV9lcXVhbHMgcmFuZ2UgciB0aGVuIFNvbWUgKG4sIHIpIGVsc2UgTm9uZSlcbiAgICAgICAgICBuZXdfZW52XG4gICAgICBpblxuICAgICAgZmluZF9zb21lIChmb3VuZF9pbl9lbnYgQCBbIGhlbHAgYm9keSAobmV3X2VudiBAIGVudikgXSlcbiAgICB8IEVBcHAgKGZuLCBhcmdzLCBfLCBfKSAtPlxuICAgICAgZmluZF9zb21lIChbIGhlbHAgZm4gZW52IF0gQCBMaXN0Lm1hcCAoZnVuIGFyZyAtPiBoZWxwIGFyZyBlbnYpIGFyZ3MpXG4gICAgfCBFSWYgKGMsIHQsIGUsIF8pIC0+IGZpbmRfc29tZSAoWyBoZWxwIGMgZW52IF0gQCBbIGhlbHAgdCBlbnYgXSBAIFsgaGVscCBlIGVudiBdKVxuICAgIHwgRVR1cGxlIChleHBycywgXykgLT4gZmluZF9zb21lIChMaXN0Lm1hcCAoZnVuIGUgLT4gaGVscCBlIGVudikgZXhwcnMpXG4gICAgfCBFR2V0SXRlbSAoZTEsIGUyLCBfKSAtPiBmaW5kX3NvbWUgKFsgaGVscCBlMSBlbnYgXSBAIFsgaGVscCBlMiBlbnYgXSlcbiAgICB8IEVTZXRJdGVtIChlMSwgZTIsIGUzLCBfKSAtPlxuICAgICAgZmluZF9zb21lIChbIGhlbHAgZTEgZW52IF0gQCBbIGhlbHAgZTIgZW52IF0gQCBbIGhlbHAgZTMgZW52IF0pXG4gICAgfCBFTnVtYmVyIF8gLT4gTm9uZVxuICAgIHwgRUJvb2wgXyAtPiBOb25lXG4gICAgfCBFTmlsIF8gLT4gTm9uZVxuICAoKiB8IF8gLT4gZmFpbHdpdGggXCJuYWggYWhcIiAqKVxuICBhbmQgZW52X2Zvcl9iaW5kaW5ncyAoYmluZF9saXN0IDogc291cmNlc3BhbiBiaW5kIGxpc3QpIDogKHN0cmluZyAqIHJhbmdlKSBsaXN0ID1cbiAgICBtYXRjaCBiaW5kX2xpc3Qgd2l0aFxuICAgIHwgQk5hbWUgKG5hbWUsIF8sIHNzKSA6OiByZXN0IC0+XG4gICAgICBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBbIG5hbWUsIHJhbmdlX29mX3NvdXJjZXNwYW4gc3MgXVxuICAgIHwgQlR1cGxlIChiaW5kcywgXykgOjogcmVzdCAtPiBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBlbnZfZm9yX2JpbmRpbmdzIGJpbmRzXG4gICAgfCBCQmxhbmsgc3MgOjogcmVzdCAtPiBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBbIFwiX1wiLCByYW5nZV9vZl9zb3VyY2VzcGFuIHNzIF1cbiAgICB8IFtdIC0+IFtdXG4gIGluXG4gIG1hdGNoIHByb2cgd2l0aFxuICAoKiB8IFByb2dyYW0gKF8sIGV4cHIsIF8pIC0+IE5vbmUgKilcbiAgfCBQcm9ncmFtIChkLCBleHByLCBzcykgLT5cbiAgICAoKiBmYWlsd2l0aCAoc3RyaW5nX29mX3Byb2dyYW0gKFByb2dyYW0gKGQsIGV4cHIsIHNzKSkpOyAqKVxuICAgIGhlbHAgZXhwciBbXVxuOztcblxubGV0IGdldF91c2VzXG4gICAgKGJlZ2luX2xuIDogaW50KVxuICAgIChiZWdpbl9jb2wgOiBpbnQpXG4gICAgKGVuZF9sbiA6IGludClcbiAgICAoZW5kX2NvbCA6IGludClcbiAgICAocHJvZ3JhbSA6IEpzLmpzX3N0cmluZyBKcy50KVxuICAgIDogcmFuZ2UgbGlzdFxuICA9XG4gIGxldCBwcm9nID0gZGVzdWdhclAgKHBhcnNlX3N0cmluZyBcImZpbGVcIiAoSnMudG9fc3RyaW5nIHByb2dyYW0pKSBpblxuICBsZXQgcmVjIGhlbHAgKGV4cHIgOiBzb3VyY2VzcGFuIGV4cHIpIChlbnYgOiAoc3RyaW5nICogcmFuZ2UpIGxpc3QpIChyIDogcmFuZ2UpXG4gICAgICA6IHJhbmdlIGxpc3RcbiAgICA9XG4gICAgKCogbGV0IHIgPSBiZWdpbl9sbiwgYmVnaW5fY29sLCBlbmRfbG4sIGVuZF9jb2wgaW4gKilcbiAgICBtYXRjaCBleHByIHdpdGhcbiAgICB8IEVMZXQgKGJpbmRpbmdzX2xpc3QsIGJvZHksIF8pIC0+XG4gICAgICBsZXQgbmV3X2VudiA9IGVudl9mb3JfYmluZGluZ3MgKExpc3QubWFwIChmdW4gKGIsIF8sIF8pIC0+IGIpIGJpbmRpbmdzX2xpc3QpIGluXG4gICAgICBsZXQgdXNlc19pbl9iaW5kcyA9XG4gICAgICAgIExpc3QubWFwIChmdW4gKF8sIHYsIF8pIC0+IGhlbHAgdiBlbnYgcikgYmluZGluZ3NfbGlzdCB8PiBMaXN0LmZsYXR0ZW5cbiAgICAgIGluXG4gICAgICBwcmludGYgXCJ1c2VzIGluIGJpbmRzOiAlc1wiIChkdW1wIHVzZXNfaW5fYmluZHMpO1xuICAgICAgdXNlc19pbl9iaW5kcyBAIGhlbHAgYm9keSAobmV3X2VudiBAIGVudikgclxuICAgIHwgRUlkIChuYW1lLCBzcykgLT5cbiAgICAgIChtYXRjaCBsb29rdXAgbmFtZSBlbnYgd2l0aFxuICAgICAgfCBTb21lIHJhbmdlIC0+IGlmIHJhbmdlX2VxdWFscyByIHJhbmdlIHRoZW4gWyByYW5nZV9vZl9zb3VyY2VzcGFuIHNzIF0gZWxzZSBbXVxuICAgICAgfCBOb25lIC0+IFtdKVxuICAgIHwgRVByaW0xIChfLCBleHByLCBfKSAtPiBoZWxwIGV4cHIgZW52IHJcbiAgICB8IEVQcmltMiAoXywgZXhwcjEsIGV4cHIyLCBfKSAtPiBoZWxwIGV4cHIxIGVudiByIEAgaGVscCBleHByMiBlbnYgclxuICAgIHwgRUxhbWJkYSAoYmluZHMsIGJvZHksIF8pIC0+XG4gICAgICBsZXQgbmV3X2VudiA9IGVudl9mb3JfYmluZGluZ3MgYmluZHMgaW5cbiAgICAgIGhlbHAgYm9keSAobmV3X2VudiBAIGVudikgclxuICAgIHwgRVNlcSAoZTEsIGUyLCBfKSAtPiBoZWxwIGUxIGVudiByIEAgaGVscCBlMiBlbnYgclxuICAgIHwgRVR1cGxlIChleHBycywgXykgLT4gTGlzdC5tYXAgKGZ1biBlIC0+IGhlbHAgZSBlbnYgcikgZXhwcnMgfD4gTGlzdC5mbGF0dGVuXG4gICAgfCBFR2V0SXRlbSAoZTEsIGUyLCBfKSAtPiBoZWxwIGUxIGVudiByIEAgaGVscCBlMiBlbnYgclxuICAgIHwgRVNldEl0ZW0gKGUxLCBlMiwgZTMsIF8pIC0+IGhlbHAgZTEgZW52IHIgQCBoZWxwIGUyIGVudiByIEAgaGVscCBlMyBlbnYgclxuICAgIHwgRUxldFJlYyAoYmluZGluZ3NfbGlzdCwgYm9keSwgXykgLT5cbiAgICAgIGxldCBuZXdfZW52ID0gZW52X2Zvcl9iaW5kaW5ncyAoTGlzdC5tYXAgKGZ1biAoYiwgXywgXykgLT4gYikgYmluZGluZ3NfbGlzdCkgaW5cbiAgICAgIGxldCB1c2VzX2luX2JpbmRzID1cbiAgICAgICAgTGlzdC5tYXAgKGZ1biAoXywgdiwgXykgLT4gaGVscCB2IChuZXdfZW52IEAgZW52KSByKSBiaW5kaW5nc19saXN0IHw+IExpc3QuZmxhdHRlblxuICAgICAgaW5cbiAgICAgIHByaW50ZiBcInVzZXMgaW4gYmluZHM6ICVzXCIgKGR1bXAgdXNlc19pbl9iaW5kcyk7XG4gICAgICB1c2VzX2luX2JpbmRzIEAgaGVscCBib2R5IChuZXdfZW52IEAgZW52KSByXG4gICAgfCBFSWYgKGMsIHQsIGUsIF8pIC0+IGhlbHAgYyBlbnYgciBAIGhlbHAgdCBlbnYgciBAIGhlbHAgZSBlbnYgclxuICAgIHwgRUFwcCAoZiwgYXJncywgXywgXykgLT5cbiAgICAgIGhlbHAgZiBlbnYgciBAIChMaXN0Lm1hcCAoZnVuIGFyZyAtPiBoZWxwIGFyZyBlbnYgcikgYXJncyB8PiBMaXN0LmZsYXR0ZW4pXG4gICAgfCBFTnVtYmVyIF8gLT4gW11cbiAgICB8IEVCb29sIF8gLT4gW11cbiAgICB8IEVOaWwgXyAtPiBbXVxuICBhbmQgZW52X2Zvcl9iaW5kaW5ncyAoYmluZF9saXN0IDogc291cmNlc3BhbiBiaW5kIGxpc3QpIDogKHN0cmluZyAqIHJhbmdlKSBsaXN0ID1cbiAgICBtYXRjaCBiaW5kX2xpc3Qgd2l0aFxuICAgIHwgQk5hbWUgKG5hbWUsIF8sIHNzKSA6OiByZXN0IC0+XG4gICAgICBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBbIG5hbWUsIHJhbmdlX29mX3NvdXJjZXNwYW4gc3MgXVxuICAgIHwgQlR1cGxlIChiaW5kcywgXykgOjogcmVzdCAtPiBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBlbnZfZm9yX2JpbmRpbmdzIGJpbmRzXG4gICAgfCBCQmxhbmsgc3MgOjogcmVzdCAtPiBlbnZfZm9yX2JpbmRpbmdzIHJlc3QgQCBbIFwiX1wiLCByYW5nZV9vZl9zb3VyY2VzcGFuIHNzIF1cbiAgICB8IFtdIC0+IFtdXG4gIGluXG4gIHByaW50ZiBcInZpZXdpbmcgdXNlc1wiO1xuICBtYXRjaCBwcm9nIHdpdGhcbiAgfCBQcm9ncmFtIChfLCBleHByLCBfKSAtPlxuICAgIGxldCBkZWZpbml0aW9uID1cbiAgICAgIG1hdGNoIGdldF9kZWZpbml0aW9uIGJlZ2luX2xuIGJlZ2luX2NvbCBlbmRfbG4gZW5kX2NvbCBwcm9ncmFtIHdpdGhcbiAgICAgIHwgU29tZSAobmFtZSwgcikgLT5cbiAgICAgICAgKCogZm91bmQgYSBuYW1lIGZvciB0aGUgZ2l2ZW4gcmFuZ2UgKilcbiAgICAgICAgaWYgcmFuZ2VfZXF1YWxzIChyYW5nZV9vZl9zb3VyY2VzcGFuIChkdW1teV9wb3MsIGR1bW15X3BvcykpIHJcbiAgICAgICAgICAgKCogaGFuZGxlIGNhc2Ugd2hlcmUgbmFtZSBpc24ndCB5ZXQgYm91bmQgKilcbiAgICAgICAgdGhlbiBoZWxwIGV4cHIgWyBuYW1lLCByIF0gclxuICAgICAgICBlbHNlIGhlbHAgZXhwciBbXSByXG4gICAgICB8IE5vbmUgLT4gcmFpc2UgKEZhaWx1cmUgXCJubyBuYW1lIGZvciByYW5nZVwiICgqIG5vIG5hbWUgZm9yIGdpdmVuIHJhbmdlICopKVxuICAgIGluXG4gICAgZGVmaW5pdGlvblxuOztcblxuKCogaGVscCBleHByIFtdICopXG5cbmxldCBfID1cbiAgSnMuZXhwb3J0XG4gICAgXCJoZWxwZXJzXCJcbiAgICAob2JqZWN0JWpzXG4gICAgICAgbWV0aG9kIHByaW50IHAgPVxuICAgICAgICAgbGV0IGpzX3N0ciA9IEpzLnRvX3N0cmluZyBwIGluXG4gICAgICAgICBzdHJpbmdfb2ZfcHJvZ3JhbSAocGFyc2Vfc3RyaW5nIFwiYXNkZlwiIGpzX3N0cikgfD4gSnMuc3RyaW5nXG5cbiAgICAgICBtZXRob2QgZWNobyBzID0gcHJpbnRmIFwiZWNob2luZzogJXNcIiAoSnMudG9fc3RyaW5nIHMpXG5cbiAgICAgICBtZXRob2Qgdmlld0FsbFVzZXNcbiAgICAgICAgICAgKGJlZ2luX2xuIDogaW50KVxuICAgICAgICAgICAoYmVnaW5fYm9sIDogaW50KVxuICAgICAgICAgICAoZW5kX2xuIDogaW50KVxuICAgICAgICAgICAoZW5kX2JvbCA6IGludClcbiAgICAgICAgICAgKHByb2dyYW0gOiBKcy5qc19zdHJpbmcgSnMudCkgPVxuICAgICAgICAgSnMuYXJyYXlcbiAgICAgICAgICAgKEFycmF5Lm9mX2xpc3RcbiAgICAgICAgICAgICAgKGdldF91c2VzXG4gICAgICAgICAgICAgICAgIChiZWdpbl9sbiA6IGludClcbiAgICAgICAgICAgICAgICAgKGJlZ2luX2JvbCA6IGludClcbiAgICAgICAgICAgICAgICAgKGVuZF9sbiA6IGludClcbiAgICAgICAgICAgICAgICAgKGVuZF9ib2wgOiBpbnQpXG4gICAgICAgICAgICAgICAgIChwcm9ncmFtIDogSnMuanNfc3RyaW5nIEpzLnQpKSlcblxuICAgICAgIG1ldGhvZCBnZXREZWZpbml0aW9uXG4gICAgICAgICAgIChiZWdpbl9sbiA6IGludClcbiAgICAgICAgICAgKGJlZ2luX2JvbCA6IGludClcbiAgICAgICAgICAgKGVuZF9sbiA6IGludClcbiAgICAgICAgICAgKGVuZF9ib2wgOiBpbnQpXG4gICAgICAgICAgIChwcm9ncmFtIDogSnMuanNfc3RyaW5nIEpzLnQpXG4gICAgICAgICAgIDogKHJhbmdlLCBKcy5qc19zdHJpbmcgSnMudCkgRWl0aGVyLnQgPVxuICAgICAgICAgbWF0Y2hcbiAgICAgICAgICAgZ2V0X2RlZmluaXRpb25cbiAgICAgICAgICAgICAoYmVnaW5fbG4gOiBpbnQpXG4gICAgICAgICAgICAgKGJlZ2luX2JvbCA6IGludClcbiAgICAgICAgICAgICAoZW5kX2xuIDogaW50KVxuICAgICAgICAgICAgIChlbmRfYm9sIDogaW50KVxuICAgICAgICAgICAgIChwcm9ncmFtIDogSnMuanNfc3RyaW5nIEpzLnQpXG4gICAgICAgICB3aXRoXG4gICAgICAgICB8IFNvbWUgKF8sIGIpIC0+IExlZnQgYlxuICAgICAgICAgfCBOb25lIC0+IFJpZ2h0IChKcy5zdHJpbmcgXCJDb3VsZG4ndCBmaW5kIG5hbWVcIilcbiAgICBlbmQpXG47O1xuIl19
