**integerp** *Function* 



**Syntax:** 



**integerp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **integer**; otherwise, returns *false*. 



**Examples:**
```lisp
 

(integerp 1) *→ true* 

(integerp (expt 2 130)) *→ true* 

(integerp 6/5) *→ false* 

(integerp nil) *→ false* 


```
**Notes:** 



(integerp *object*) *≡* (typep *object* ’integer) 



