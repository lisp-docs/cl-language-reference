 



Boolean combinations of <ClLinks styled={true} term={"feature"}><i>features</i></ClLinks>, called *feature expressions*, are used by the #+ and #- *reader macros* in order to direct conditional *reading* of <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks> by the *Lisp reader* . 



The rules for interpreting a *feature expression* are as follows: 



<ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> 



If a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming a <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> is used as a *feature expression*, the *feature expression* succeeds if that <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks>; otherwise it fails. 



(not *feature-conditional*) 



A <ClLinks styled={true} term={"not"}><b>not</b></ClLinks> *feature expression* succeeds if its argument *feature-conditional* fails; otherwise, it succeeds. 



(and *\{feature-conditional\}*\*) 



An <ClLinks styled={true} term={"and"}><b>and</b></ClLinks> *feature expression* succeeds if all of its argument *feature-conditionals* succeed; otherwise, it fails. 



System 



 



 



(or *\{feature-conditional\}*\*) 



An <ClLinks styled={true} term={"or"}><b>or</b></ClLinks> *feature expression* succeeds if any of its argument *feature-conditionals* succeed; otherwise, it fails. 



