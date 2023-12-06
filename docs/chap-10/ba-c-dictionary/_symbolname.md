**symbol-name** *Function* 



**Syntax:** 



**symbol-name** *symbol → name* 



**Arguments and Values:** 



*symbol*—a *symbol*. 



*name*—a *string*. 



**Description:** 



**symbol-name** returns the *name* of *symbol*. The consequences are undefined if *name* is ever modified. 



**Examples:**
```lisp
 

(symbol-name ’temp) *→* "TEMP" 

(symbol-name :start) *→* "START" 

(symbol-name (gensym)) *→* "G1234" ;for example 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *symbol* is not a *symbol*. 







 



 



**symbol-package** 



