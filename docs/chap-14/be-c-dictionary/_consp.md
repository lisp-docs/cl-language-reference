**consp** *Function* 



**Syntax:** 



**consp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 







 



 



**Description:** 



Returns *true* if *object* is of *type* **cons**; otherwise, returns *false*. 



**Examples:**
```lisp
 



(consp nil) *→ false* 



(consp (cons 1 2)) *→ true* 



The *empty list* is not a *cons*, so 



(consp ’()) *≡* (consp ’nil) *→ false* 




```
**See Also:** 



**listp** 



**Notes:** 



(consp *object*) *≡* (typep *object* ’cons) *≡* (not (typep *object* ’atom)) *≡* (typep *object* ’(not atom)) 



