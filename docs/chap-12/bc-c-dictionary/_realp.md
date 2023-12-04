**realp** *Function* 



**Syntax:** 



**realp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **real**; otherwise, returns *false*. 



**Examples:**
```lisp
 



(realp 12) *→ true* 







 



 



(realp #c(5/3 7.2)) *→ false* 



(realp nil) *→ false* 



(realp (cons 1 2)) *→ false* 




```
**Notes:** 



(realp *object*) *≡* (typep *object* ’real) 



