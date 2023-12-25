 



Boolean combinations of <GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm>, called *feature expressions*, are used by the #+ and #- *reader macros* in order to direct conditional *reading* of <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm> by the *Lisp reader* . 



The rules for interpreting a *feature expression* are as follows: 



<GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> 



If a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> is used as a *feature expression*, the *feature expression* succeeds if that <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm>; otherwise it fails. 



(not *feature-conditional*) 



A <DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink> *feature expression* succeeds if its argument *feature-conditional* fails; otherwise, it succeeds. 



(and *\{feature-conditional\}*\*) 



An <DictionaryLink styled={true} term={"and"}><b>and</b></DictionaryLink> *feature expression* succeeds if all of its argument *feature-conditionals* succeed; otherwise, it fails. 



System 



 



 



(or *\{feature-conditional\}*\*) 



An <DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink> *feature expression* succeeds if any of its argument *feature-conditionals* succeed; otherwise, it fails. 



