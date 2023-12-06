**null** *Function* 



**Syntax:** 



**null** *object → boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*boolean*—a *boolean*. 







 



 



**Description:** 



Returns **t** if *object* is the *empty list*; otherwise, returns **nil**. 



**Examples:**
```lisp
 

(null ’()) *→* T 

(null nil) *→* T 

(null t) *→* NIL 

(null 1) *→* NIL 


```
**See Also:** 



**not** 



**Notes:** 



**null** is intended to be used to test for the *empty list* whereas **not** is intended to be used to invert a *boolean* (or *generalized boolean*). Operationally, **null** and **not** compute the same result; which to use is a matter of style. 



(null *object*) *≡* (typep *object* ’null) *≡* (eq *object* ’()) 



