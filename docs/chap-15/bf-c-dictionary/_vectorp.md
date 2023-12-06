**vectorp** *Function* 



**Syntax:** 



**vectorp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **vector**; otherwise, returns *false*. 







 



 



**Examples:**
```lisp
 

(vectorp "aaaaaa") *→ true* 

(vectorp (make-array 6 :fill-pointer t)) *→ true* 

(vectorp (make-array ’(2 3 4))) *→ false* 

(vectorp #\*11) *→ true* 

(vectorp #b11) *→ false* 


```
**Notes:** 



(vectorp *object*) *≡* (typep *object* ’vector) 



