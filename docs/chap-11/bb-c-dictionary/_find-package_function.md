**find-package** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"find-package"}><b>find-package</b></ClLinks> *name → package* 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a *string designator* or a *package object*. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a *package object* or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



If <ClLinks  term={"name"}><i>name</i></ClLinks> is a *string designator* , <ClLinks  term={"find-package"}><b>find-package</b></ClLinks> locates and returns the <ClLinks  term={"package"}><i>package</i></ClLinks> whose name or nickname is <ClLinks  term={"name"}><i>name</i></ClLinks>. This search is case sensitive. If there is no such <ClLinks  term={"package"}><i>package</i></ClLinks>, <ClLinks  term={"find-package"}><b>find-package</b></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



If <ClLinks  term={"name"}><i>name</i></ClLinks> is a *package object*, that *package object* is returned. 



**Examples:**
```lisp
(find-package ’common-lisp) → #<PACKAGE "COMMON-LISP"> 
(find-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(find-package ’not-there) → NIL 
```
**Affected By:** 



The set of <ClLinks  term={"package"}><i>packages</i></ClLinks> created by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 



<ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks>, <ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks>, <ClLinks  term={"make-package"}><b>make-package</b></ClLinks>, <ClLinks  term={"rename-package"}><b>rename-package</b></ClLinks> 



**See Also:** 



<ClLinks  term={"make-package"}><b>make-package</b></ClLinks> 







 



 



