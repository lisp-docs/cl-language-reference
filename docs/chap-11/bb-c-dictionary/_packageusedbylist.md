**package-used-by-list** *Function* 



**Syntax:** 



**package-used-by-list** *package → used-by-list* 



**Arguments and Values:** 



*package*—a *package designator* . 



*used-by-list*—a *list* of *package objects*. 



**Description:** 



**package-used-by-list** returns a *list* of other *packages* that use *package*. 



**Examples:**
```lisp
 



(package-used-by-list (make-package ’temp)) *→* () 



(make-package ’trash :use ’(temp)) *→* #<PACKAGE "TRASH"> 



(package-used-by-list ’temp) *→* (#<PACKAGE "TRASH">) 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *package* is not a *package*. 



**See Also:** 



**use-package**, **unuse-package** 







 



 



