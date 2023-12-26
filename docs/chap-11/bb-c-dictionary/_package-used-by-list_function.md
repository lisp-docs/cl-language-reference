**package-used-by-list** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"package-used-by-list"}><b>package-used-by-list</b></DictionaryLink> *package → used-by-list* 



**Arguments and Values:** 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



*used-by-list*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of *package objects*. 



**Description:** 



<DictionaryLink  term={"package-used-by-list"}><b>package-used-by-list</b></DictionaryLink> returns a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of other <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> that use <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**Examples:**
```lisp
(package-used-by-list (make-package ’temp)) → () 
(make-package ’trash :use ’(temp)) → #<PACKAGE "TRASH"> 
(package-used-by-list ’temp) → (#<PACKAGE "TRASH">) 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is not a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> 







 



 



