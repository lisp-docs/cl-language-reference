**symbolp** *Function* 



**Syntax:** 



**symbolp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **symbol**; otherwise, returns *false*. 



**Examples:**
```lisp
 



(symbolp ’elephant) *→ true* 



(symbolp 12) *→ false* 



(symbolp nil) *→ true* 



(symbolp ’()) *→ true* 



(symbolp :test) *→ true* 



(symbolp "hello") *→ false* 




```
**See Also:** 



**keywordp**, **symbol**, **typep** 







 



 



**Notes:** 



(symbolp *object*) *≡* (typep *object* ’symbol) 



