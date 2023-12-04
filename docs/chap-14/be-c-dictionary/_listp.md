**listp** *Function* 



**Syntax:** 



**listp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **list**; otherwise, returns *false*. 



**Examples:**
```lisp
 



(listp nil) *→ true* 



(listp (cons 1 2)) *→ true* 



(listp (make-array 6)) *→ false* 



(listp t) *→ false* 




```
**See Also:** 



**consp** 



**Notes:** 



If *object* is a *cons*, **listp** does not check whether *object* is a *proper list*; it returns *true* for any kind of *list*. 



(listp *object*) *≡* (typep *object* ’list) *≡* (typep *object* ’(or cons null)) 







 



 



