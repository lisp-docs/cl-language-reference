**simple-vector-p** *Function* 



**Syntax:** 



**simple-vector-p** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **simple-vector**; otherwise, returns *false*.. 



**Examples:**
```lisp
 



(simple-vector-p (make-array 6)) *→ true* 



(simple-vector-p "aaaaaa") *→ false* 



(simple-vector-p (make-array 6 :fill-pointer t)) *→ false* 




```
**See Also:** 



**simple-vector** 



**Notes:** 



(simple-vector-p *object*) *≡* (typep *object* ’simple-vector) 



