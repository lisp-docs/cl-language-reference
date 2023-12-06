**stringp** *Function* 



**Syntax:** 



**stringp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **string**; otherwise, returns *false*. 







 



 



**Examples:**
```lisp
 

(stringp "aaaaaa") *→ true* 

(stringp #\a) *→ false* 


```
**See Also:** 



**typep**, **string** (*type*) 



**Notes:** 



(stringp *object*) *≡* (typep *object* ’string) 



