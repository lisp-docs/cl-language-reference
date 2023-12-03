**package-use-list** *Function* 

**Syntax:** 

**package-use-list** *package → use-list* 

**Arguments and Values:** 

*package*—a *package designator* . 

*use-list*—a *list* of *package objects*. 



 

 

**Description:** 

Returns a *list* of other *packages* used by *package*. 

**Examples:** 

(package-use-list (make-package ’temp)) *→* (#&#60;PACKAGE "COMMON-LISP"&#62;) 

(use-package ’common-lisp-user ’temp) *→* T 

(package-use-list ’temp) *→* (#&#60;PACKAGE "COMMON-LISP"&#62; #&#60;PACKAGE "COMMON-LISP-USER"&#62;) 

**Exceptional Situations:** 

Should signal an error of *type* **type-error** if *package* is not a *package designator* . 

**See Also:** 

**use-package**, **unuse-package** 

