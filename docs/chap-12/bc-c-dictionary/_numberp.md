**numberp** *Function* 



**Syntax:** 



**numberp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **number**; otherwise, returns *false*. 







 



 



**Examples:**
```lisp
 

(numberp 12) *→ true* 

(numberp (expt 2 130)) *→ true* 

(numberp #c(5/3 7.2)) *→ true* 

(numberp nil) *→ false* 

(numberp (cons 1 2)) *→ false* 


```
**Notes:** 



(numberp *object*) *≡* (typep *object* ’number) 



