**package-used-by-list** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"package-used-by-list"}><b>package-used-by-list</b></ClLinks> *package → used-by-list* 



**Arguments and Values:** 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . 



*used-by-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *package objects*. 



**Description:** 



<ClLinks styled={true} term={"package-used-by-list"}><b>package-used-by-list</b></ClLinks> returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of other <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> that use <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**Examples:**
```lisp

(package-used-by-list (make-package ’temp)) → () 
(make-package ’trash :use ’(temp)) → #<PACKAGE "TRASH"> 
(package-used-by-list ’temp) → (#<PACKAGE "TRASH">) 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is not a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>, <ClLinks styled={true} term={"unuse-package"}><b>unuse-package</b></ClLinks> 







 



 



