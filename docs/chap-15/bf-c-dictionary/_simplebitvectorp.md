**simple-bit-vector-p** *Function* 



**Syntax:** 



**simple-bit-vector-p** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **simple-bit-vector**; otherwise, returns *false*. 







 



 



**simple-bit-vector-p** 



**Examples:**
```lisp
 



(simple-bit-vector-p (make-array 6)) *→ false* 



(simple-bit-vector-p #\*) *→ true* 




```
**See Also:** 



**simple-vector-p** 



**Notes:** 



(simple-bit-vector-p *object*) *≡* (typep *object* ’simple-bit-vector) 

