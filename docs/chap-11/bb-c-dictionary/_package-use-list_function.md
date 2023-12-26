**package-use-list** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"package-use-list"}><b>package-use-list</b></DictionaryLink> *package → use-list* 



**Arguments and Values:** 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



*use-list*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of *package objects*. 







 



 



**Description:** 



Returns a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of other <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> used by <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**Examples:**
```lisp
(package-use-list (make-package ’temp)) → (#<PACKAGE "COMMON-LISP">) 
(use-package ’common-lisp-user ’temp) → T 
(package-use-list ’temp) → (#<PACKAGE "COMMON-LISP"> #<PACKAGE "COMMON-LISP-USER">) 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> 



