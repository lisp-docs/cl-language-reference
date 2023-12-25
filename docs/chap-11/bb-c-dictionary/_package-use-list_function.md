**package-use-list** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"package-use-list"}><b>package-use-list</b></DictionaryLink> *package → use-list* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . 



*use-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *package objects*. 







 



 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of other <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> used by <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**Examples:**
```lisp

(package-use-list (make-package ’temp)) *→* (#<PACKAGE "COMMON-LISP">) 
(use-package ’common-lisp-user ’temp) *→* T 
(package-use-list ’temp) *→* (#<PACKAGE "COMMON-LISP"> #<PACKAGE "COMMON-LISP-USER">) 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is not a *package designator* . 



**See Also:** 



<DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"unuse-package"}><b>unuse-package</b></DictionaryLink> 



