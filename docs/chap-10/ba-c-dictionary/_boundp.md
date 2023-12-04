**boundp** *Function* 



**Syntax:** 



**boundp** *symbol → generalized-boolean* 



**Arguments and Values:** 



*symbol*—a *symbol*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *symbol* is *bound*; otherwise, returns *false*. 







 



 



**Examples:**
```lisp
 



(setq x 1) *→* 1 



(boundp ’x) *→ true* 



(makunbound ’x) *→* X 



(boundp ’x) *→ false* 



(let ((x 2)) (boundp ’x)) *→ false* 



(let ((x 2)) (declare (special x)) (boundp ’x)) *→ true* 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *symbol* is not a *symbol*. 



**See Also:** 



**set**, **setq**, **symbol-value**, **makunbound** 



**Notes:** 



The *function* **bound** determines only whether a *symbol* has a value in the *global environment*; any *lexical bindings* are ignored. 



