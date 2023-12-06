**package-shadowing-symbols** *Function* 



**Syntax:** 



**package-shadowing-symbols** *package → symbols* 



**Arguments and Values:** 



*package*—a *package designator* . 



*symbols*—a *list* of *symbols*. 



**Description:** 



Returns a *list* of *symbols* that have been declared as *shadowing symbols* in *package* by **shadow** or **shadowing-import** (or the equivalent **defpackage** options). All *symbols* on this *list* are *present* in *package*. 



**Examples:**
```lisp
 

(package-shadowing-symbols (make-package ’temp)) *→* () 

(shadow ’cdr ’temp) *→* T 

(package-shadowing-symbols ’temp) *→* (TEMP::CDR) 

(intern "PILL" ’temp) *→* TEMP::PILL, NIL 

(shadowing-import ’pill ’temp) *→* T 

(package-shadowing-symbols ’temp) *→* (PILL TEMP::CDR) 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *package* is not a *package designator* . 



**See Also:** 



**shadow**, **shadowing-import** 



**Notes:** 



Whether the list of *symbols* is *fresh* is *implementation-dependent*. 



