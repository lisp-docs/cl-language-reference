**streamp** *Function* 



**Syntax:** 



**streamp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **stream**; otherwise, returns *false*. 



**streamp** is unaffected by whether *object*, if it is a *stream*, is *open* or closed. 



**Examples:**
```lisp
 



(streamp \*terminal-io\*) *→ true* 



(streamp 1) *→ false* 




```
**Notes:** 



(streamp *object*) *≡* (typep *object* ’stream) 







 



 



