**complexp** *Function* 



**Syntax:** 



**complexp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **complex**; otherwise, returns *false*. 



**Examples:**
```lisp
 



(complexp 1.2d2) *→ false* 



(complexp #c(5/3 7.2)) *→ true* 




```
**See Also:** 



**complex** (*function* and *type*), **typep** 



**Notes:** 



(complexp *object*) *≡* (typep *object* ’complex) 



