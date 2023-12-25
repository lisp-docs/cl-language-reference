**find-package** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"find-package"}><b>find-package</b></ClLinks> *name → package* 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a *string designator* or a *package object*. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package object* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



If <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is a *string designator* , <ClLinks styled={true} term={"find-package"}><b>find-package</b></ClLinks> locates and returns the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> whose name or nickname is <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. This search is case sensitive. If there is no such <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, <ClLinks styled={true} term={"find-package"}><b>find-package</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



If <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is a *package object*, that *package object* is returned. 



**Examples:**
```lisp
(find-package ’common-lisp) → #<PACKAGE "COMMON-LISP"> 
(find-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(find-package ’not-there) → NIL 
```
**Affected By:** 



The set of <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> created by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



<ClLinks styled={true} term={"defpackage"}><b>defpackage</b></ClLinks>, <ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks>, <ClLinks styled={true} term={"make-package"}><b>make-package</b></ClLinks>, <ClLinks styled={true} term={"rename-package"}><b>rename-package</b></ClLinks> 



**See Also:** 



<ClLinks styled={true} term={"make-package"}><b>make-package</b></ClLinks> 







 



 



