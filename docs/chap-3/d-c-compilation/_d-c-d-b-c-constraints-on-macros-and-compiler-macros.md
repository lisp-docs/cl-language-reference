 



Except where explicitly stated otherwise, no <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> defined in the Common Lisp standard produces an expansion that could cause any of the <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the *macro form* to be treated as *top level forms*. If an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> also provides a *special operator* definition of a Common Lisp <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, the *special operator* definition must be semantically equivalent in this respect. 



*Compiler macro* expansions must also have the same top level evaluation semantics as the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> which they replace. This is of concern both to *conforming implementations* and to *conforming programs*. 



