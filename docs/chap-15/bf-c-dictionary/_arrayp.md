**arrayp** *Function* 



**Syntax:** 



**arrayp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **array**; otherwise, returns *false*. 



**Examples:**
```lisp
 

(arrayp (make-array ’(2 3 4) :adjustable t)) *→ true* 

(arrayp (make-array 6)) *→ true* 

(arrayp #\*1011) *→ true* 



 

 

(arrayp "hi") *→ true* 

(arrayp ’hi) *→ false* 

(arrayp 12) *→ false* 


```
**See Also:** 



**typep** 



**Notes:** 



(arrayp *object*) *≡* (typep *object* ’array) 



