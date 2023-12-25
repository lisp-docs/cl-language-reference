**list-all-packages** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"list-all-packages"}><b>list-all-packages</b></ClLinks> *⟨no arguments⟩ → packages* 



**Arguments and Values:** 



<ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *package objects*. 



**Description:** 



<ClLinks styled={true} term={"list-all-packages"}><b>list-all-packages</b></ClLinks> returns a *fresh list* of all *registered packages*. 



**Examples:**
```lisp
(let ((before (list-all-packages))) 
  (make-package ’temp) 
  (set-difference (list-all-packages) before)) → (#<PACKAGE "TEMP">) 
```
**Affected By:** 



<ClLinks styled={true} term={"defpackage"}><b>defpackage</b></ClLinks>, <ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks>, <ClLinks styled={true} term={"make-package"}><b>make-package</b></ClLinks> 



