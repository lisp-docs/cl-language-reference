**package-error-package** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"package-error-package"}><b>package-error-package</b></ClLinks> *condition → package* 



**Arguments and Values:** 



<ClLinks  term={"condition"}><i>condition</i></ClLinks>—a <ClLinks  term={"condition"}><i>condition</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"package-error"}><b>package-error</b></ClLinks>. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a *package designator* . 



**Description:** 



Returns a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for the offending <ClLinks  term={"package"}><i>package</i></ClLinks> in the <ClLinks  term={"situation"}><i>situation</i></ClLinks> represented by the <ClLinks  term={"condition"}><i>condition</i></ClLinks>. 

**Examples:**
```lisp
(package-error-package 
 (make-condition ’package-error 
		  :package (find-package "COMMON-LISP"))) 
→ #<Package "COMMON-LISP"> 
```
**See Also:** 



<ClLinks  term={"package-error"}><b>package-error</b></ClLinks> 





