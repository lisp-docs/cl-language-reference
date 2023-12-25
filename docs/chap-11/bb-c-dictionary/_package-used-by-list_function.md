**package-used-by-list** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"package-used-by-list"}><b>package-used-by-list</b></ClLinks> *package → used-by-list* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a *package designator* . 



*used-by-list*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *package objects*. 



**Description:** 



<ClLinks  term={"package-used-by-list"}><b>package-used-by-list</b></ClLinks> returns a <ClLinks  term={"list"}><i>list</i></ClLinks> of other <ClLinks  term={"package"}><i>packages</i></ClLinks> that use <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**Examples:**
```lisp
(package-used-by-list (make-package ’temp)) → () 
(make-package ’trash :use ’(temp)) → #<PACKAGE "TRASH"> 
(package-used-by-list ’temp) → (#<PACKAGE "TRASH">) 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"package"}><i>package</i></ClLinks> is not a <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"use-package"}><b>use-package</b></ClLinks>, <ClLinks  term={"unuse-package"}><b>unuse-package</b></ClLinks> 







 



 



