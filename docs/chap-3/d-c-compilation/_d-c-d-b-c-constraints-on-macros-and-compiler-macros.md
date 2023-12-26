 



Except where explicitly stated otherwise, no <ClLinks  term={"macro"}><i>macro</i></ClLinks> defined in the Common Lisp standard produces an expansion that could cause any of the <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> to be treated as <GlossaryTerm styled={true} term={"top level form"}><i>top level forms</i></GlossaryTerm>. If an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> also provides a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> definition of a Common Lisp <ClLinks  term={"macro"}><i>macro</i></ClLinks>, the <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> definition must be semantically equivalent in this respect. 



<GlossaryTerm styled={true} term={"compiler macro"}><i>Compiler macro</i></GlossaryTerm> expansions must also have the same top level evaluation semantics as the <ClLinks  term={"form"}><i>form</i></ClLinks> which they replace. This is of concern both to <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementations</i></GlossaryTerm> and to <GlossaryTerm styled={true} term={"conforming program"}><i>conforming programs</i></GlossaryTerm>. 



