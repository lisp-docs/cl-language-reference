**bit-vector-p** *Function* 



**Syntax:** 



**bit-vector-p** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **bit-vector**; otherwise, returns *false*. 



**Examples:**
```lisp
 

(bit-vector-p (make-array 6 

:element-type ’bit 

:fill-pointer t)) *→ true* 

(bit-vector-p #\*) *→ true* 

(bit-vector-p (make-array 6)) *→ false* 


```
**See Also:** 



**typep** 



**Notes:** 



(bit-vector-p *object*) *≡* (typep *object* ’bit-vector) 



