**package-used-by-list** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"package-used-by-list"}><b>package-used-by-list</b></DictionaryLink> *package → used-by-list* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . 



*used-by-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *package objects*. 



**Description:** 



<DictionaryLink styled={true} term={"package-used-by-list"}><b>package-used-by-list</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of other <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> that use <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**Examples:**
```lisp

(package-used-by-list (make-package ’temp)) *→* () 
(make-package ’trash :use ’(temp)) *→* #<PACKAGE "TRASH"> 
(package-used-by-list ’temp) *→* (#<PACKAGE "TRASH">) 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"unuse-package"}><b>unuse-package</b></DictionaryLink> 







 



 



