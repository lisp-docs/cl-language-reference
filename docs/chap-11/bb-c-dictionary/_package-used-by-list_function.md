**package-used-by-list** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"package-used-by-list"}><b>package-used-by-list</b></DictionaryLink> *package → used-by-list* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



*used-by-list*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *package objects*. 



**Description:** 



<DictionaryLink  term={"package-used-by-list"}><b>package-used-by-list</b></DictionaryLink> returns a <ClLinks  term={"list"}><i>list</i></ClLinks> of other <ClLinks  term={"package"}><i>packages</i></ClLinks> that use <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**Examples:**
```lisp
(package-used-by-list (make-package ’temp)) → () 
(make-package ’trash :use ’(temp)) → #<PACKAGE "TRASH"> 
(package-used-by-list ’temp) → (#<PACKAGE "TRASH">) 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"package"}><i>package</i></ClLinks> is not a <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> 







 



 



