**package-use-list** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"package-use-list"}><b>package-use-list</b></ClLinks> *package → use-list* 



**Arguments and Values:** 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . 



*use-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *package objects*. 







 



 



**Description:** 



Returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of other <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> used by <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**Examples:**
```lisp

(package-use-list (make-package ’temp)) → (#<PACKAGE "COMMON-LISP">) 
(use-package ’common-lisp-user ’temp) → T 
(package-use-list ’temp) → (#<PACKAGE "COMMON-LISP"> #<PACKAGE "COMMON-LISP-USER">) 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is not a *package designator* . 



**See Also:** 



<ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>, <ClLinks styled={true} term={"unuse-package"}><b>unuse-package</b></ClLinks> 



