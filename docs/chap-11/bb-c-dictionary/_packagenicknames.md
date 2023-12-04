**package-nicknames** *Function* 



**Syntax:** 



**package-nicknames** *package → nicknames* 



**Arguments and Values:** 



*package*—a *package designator* . 



*nicknames*—a *list* of *strings*. 



**Description:** 



Returns the *list* of nickname *strings* for *package*, not including the name of *package*. **Examples:**
```lisp
 



(package-nicknames (make-package ’temporary 



:nicknames ’("TEMP" "temp"))) 



*→* ("temp" "TEMP") 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *package* is not a *package designator* . 







 



 



