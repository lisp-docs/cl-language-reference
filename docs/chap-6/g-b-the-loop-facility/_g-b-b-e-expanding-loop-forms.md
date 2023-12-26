 



A <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> expands into a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> containing one or more binding forms (that *establish bindings* of loop variables) and a <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> and a <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> (that express a looping control structure). The variables established in <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> are bound as if by <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> or <ClLinks styled={true} term={"lambda"}><b>lambda</b></ClLinks>. 



Implementations can interleave the setting of initial values with the <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks>. However, the assignment of the initial values is always calculated in the order specified by the user. A variable is thus sometimes bound to a meaningless value of the correct <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, and then later in the prologue it is set to the true initial value by using <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks>. One implication of this interleaving is that it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which the initial value <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> (variously called the *form1*, *form2*, *form3*, *step-fun*, <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>, *hash-table*, and <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) in any *for-as-subclause*, except *for-as-equals-then*, are *evaluated* includes only the loop variables preceding that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> or includes more or all of the loop variables; the *form1* and *form2* in a *for-as-equals-then* form includes the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> of all the loop variables. 



After the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is expanded, it consists of three basic parts in the <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks>: the loop prologue, the loop body, and the loop epilogue. 



**Loop prologue** 



The loop prologue contains <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that are executed before iteration begins, such as any automatic variable initializations prescribed by the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> clauses, along with any 







 



 



initially clauses in the order they appear in the source. 



**Loop body** 



The loop body contains those <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that are executed during iteration, including application-specific calculations, termination tests, and variable *stepping*<sub>1</sub>. 



**Loop epilogue** 



The loop epilogue contains <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that are executed after iteration terminates, such as finally clauses, if any, along with any implicit return value from an *accumulation* clause or an *termination-test* clause. 



Some clauses from the source <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> contribute code only to the loop prologue; these clauses must come before other clauses that are in the main body of the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> form. Others contribute code only to the loop epilogue. All other clauses contribute to the final translated <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in the same order given in the original source <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> of the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. 



Expansion of the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> macro produces an <GlossaryTerm styled={true} term={"implicit block"}><i>implicit block</i></GlossaryTerm> named <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> unless named is supplied. Thus, <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> (and sometimes <ClLinks styled={true} term={"return"}><b>return</b></ClLinks>) can be used to return values from <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> or to exit <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. 



