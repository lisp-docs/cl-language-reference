 



Boolean combinations of <GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm>, called <GlossaryTerm styled={true} term={"feature expression"}><i>feature expressions</i></GlossaryTerm>, are used by the #+ and #- <GlossaryTerm styled={true} term={"reader macro"}><i>reader macros</i></GlossaryTerm> in order to direct conditional *reading* of <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm> by the *Lisp reader* . 



The rules for interpreting a <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> are as follows: 



<GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> 



If a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> is used as a <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> succeeds if that <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm>; otherwise it fails. 



(not *feature-conditional*) 



A <DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink> <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> succeeds if its argument *feature-conditional* fails; otherwise, it succeeds. 



(and *\{feature-conditional\}*\*) 



An <DictionaryLink styled={true} term={"and"}><b>and</b></DictionaryLink> <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> succeeds if all of its argument *feature-conditionals* succeed; otherwise, it fails. 



System 



 



 



(or *\{feature-conditional\}*\*) 



An <DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink> <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> succeeds if any of its argument *feature-conditionals* succeed; otherwise, it fails. 



