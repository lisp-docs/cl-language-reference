 



A <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> *macro form* expands into a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> containing one or more binding forms (that *establish bindings* of loop variables) and a <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> and a <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> (that express a looping control structure). The variables established in <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> are bound as if by <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink> or <DictionaryLink styled={true} term={"lambda"}><b>lambda</b></DictionaryLink>. 



Implementations can interleave the setting of initial values with the <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. However, the assignment of the initial values is always calculated in the order specified by the user. A variable is thus sometimes bound to a meaningless value of the correct <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, and then later in the prologue it is set to the true initial value by using <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink>. One implication of this interleaving is that it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether the *lexical environment* in which the initial value <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> (variously called the *form1*, *form2*, *form3*, *step-fun*, <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>, *hash-table*, and <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) in any *for-as-subclause*, except *for-as-equals-then*, are *evaluated* includes only the loop variables preceding that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> or includes more or all of the loop variables; the *form1* and *form2* in a *for-as-equals-then* form includes the *lexical environment* of all the loop variables. 



After the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is expanded, it consists of three basic parts in the <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink>: the loop prologue, the loop body, and the loop epilogue. 



**Loop prologue** 



The loop prologue contains <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that are executed before iteration begins, such as any automatic variable initializations prescribed by the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> clauses, along with any 







 



 



initially clauses in the order they appear in the source. 



**Loop body** 



The loop body contains those <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that are executed during iteration, including application-specific calculations, termination tests, and variable *stepping*<sub>1</sub>. 



**Loop epilogue** 



The loop epilogue contains <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that are executed after iteration terminates, such as finally clauses, if any, along with any implicit return value from an *accumulation* clause or an *termination-test* clause. 



Some clauses from the source <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> contribute code only to the loop prologue; these clauses must come before other clauses that are in the main body of the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> form. Others contribute code only to the loop epilogue. All other clauses contribute to the final translated <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in the same order given in the original source <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> of the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>. 



Expansion of the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> macro produces an *implicit block* named <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> unless named is supplied. Thus, <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> (and sometimes <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink>) can be used to return values from <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> or to exit <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>. 



