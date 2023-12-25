**package-use-list** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"package-use-list"}><b>package-use-list</b></ClLinks> *package → use-list* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a *package designator* . 



*use-list*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *package objects*. 







 



 



**Description:** 



Returns a <ClLinks  term={"list"}><i>list</i></ClLinks> of other <ClLinks  term={"package"}><i>packages</i></ClLinks> used by <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**Examples:**
```lisp
(package-use-list (make-package ’temp)) → (#<PACKAGE "COMMON-LISP">) 
(use-package ’common-lisp-user ’temp) → T 
(package-use-list ’temp) → (#<PACKAGE "COMMON-LISP"> #<PACKAGE "COMMON-LISP-USER">) 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"package"}><i>package</i></ClLinks> is not a *package designator* . 



**See Also:** 



<ClLinks  term={"use-package"}><b>use-package</b></ClLinks>, <ClLinks  term={"unuse-package"}><b>unuse-package</b></ClLinks> 



