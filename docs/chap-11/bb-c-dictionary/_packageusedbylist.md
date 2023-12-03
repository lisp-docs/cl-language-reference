**package-used-by-list** *Function* 

**Syntax:** 

**package-used-by-list** *package → used-by-list* 

**Arguments and Values:** 

*package*—a *package designator* . 

*used-by-list*—a *list* of *package objects*. 

**Description:** 

**package-used-by-list** returns a *list* of other *packages* that use *package*. 

**Examples:** 

(package-used-by-list (make-package ’temp)) *→* () 

(make-package ’trash :use ’(temp)) *→* #&#60;PACKAGE "TRASH"&#62; 

(package-used-by-list ’temp) *→* (#&#60;PACKAGE "TRASH"&#62;) 

**Exceptional Situations:** 

Should signal an error of *type* **type-error** if *package* is not a *package*. 

**See Also:** 

**use-package**, **unuse-package** 



 

 

