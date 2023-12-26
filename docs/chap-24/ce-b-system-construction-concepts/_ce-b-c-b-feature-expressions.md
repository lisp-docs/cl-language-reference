 



Boolean combinations of <ClLinks styled={true} term={"feature"}><i>features</i></ClLinks>, called <GlossaryTerm styled={true} term={"feature expression"}><i>feature expressions</i></GlossaryTerm>, are used by the #+ and #- <GlossaryTerm styled={true} term={"reader macro"}><i>reader macros</i></GlossaryTerm> in order to direct conditional *reading* of <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks> by the *Lisp reader* . 



The rules for interpreting a <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> are as follows: 



<ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> 



If a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming a <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> is used as a <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> succeeds if that <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks>; otherwise it fails. 



(not *feature-conditional*) 



A <ClLinks styled={true} term={"not"}><b>not</b></ClLinks> <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> succeeds if its argument *feature-conditional* fails; otherwise, it succeeds. 



(and *\{feature-conditional\}*\*) 



An <ClLinks styled={true} term={"and"}><b>and</b></ClLinks> <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> succeeds if all of its argument *feature-conditionals* succeed; otherwise, it fails. 



System 



 



 



(or *\{feature-conditional\}*\*) 



An <ClLinks styled={true} term={"or"}><b>or</b></ClLinks> <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> succeeds if any of its argument *feature-conditionals* succeed; otherwise, it fails. 



