**package-error-package** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"package-error-package"}><b>package-error-package</b></ClLinks> *condition → package* 



**Arguments and Values:** 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks>. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . 



**Description:** 



Returns a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for the offending <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> in the <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> represented by the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 

**Examples:**
```lisp
(package-error-package 
 (make-condition ’package-error 
		  :package (find-package "COMMON-LISP"))) 
→ #<Package "COMMON-LISP"> 
```
**See Also:** 



<ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> 





