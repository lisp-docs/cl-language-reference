**find-symbol** is operationally equivalent to **intern**, except that it never creates a new *symbol*. **find-package** *Function* 

**Syntax:** 

**find-package** *name → package* 

**Arguments and Values:** 

*name*—a *string designator* or a *package object*. 

*package*—a *package object* or **nil**. 

**Description:** 

If *name* is a *string designator* , **find-package** locates and returns the *package* whose name or nickname is *name*. This search is case sensitive. If there is no such *package*, **find-package** returns **nil**. 

If *name* is a *package object*, that *package object* is returned. 

**Examples:** 

(find-package ’common-lisp) *→* #&#60;PACKAGE "COMMON-LISP"&#62; 

(find-package "COMMON-LISP-USER") *→* #&#60;PACKAGE "COMMON-LISP-USER"&#62; 

(find-package ’not-there) *→* NIL 

**Affected By:** 

The set of *packages* created by the *implementation*. 

**defpackage**, **delete-package**, **make-package**, **rename-package** 

**See Also:** 

**make-package** 



 

 

