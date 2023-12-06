**rationalp** *Function* 



**Syntax:** 



**rationalp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **rational**; otherwise, returns *false*. 



**Examples:**
```lisp
 

(rationalp 12) *→ true* 

(rationalp 6/5) *→ true* 

(rationalp 1.212) *→ false* 


```
**See Also:** 



**rational** 



**Notes:** 



(rationalp *object*) *≡* (typep *object* ’rational) 







 



 



