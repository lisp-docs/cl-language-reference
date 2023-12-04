**compiled-function-p** *Function* 



**Syntax:** 



**compiled-function-p** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **compiled-function**; otherwise, returns *false*. 















**Examples:**
```lisp
 



(defun f (x) x) *→* F 



(compiled-function-p #’f) 



*→ false* 



<i><sup>or</sup>→ true</i> 



(compiled-function-p ’f) *→ false* 



(compile ’f) *→* F 



(compiled-function-p #’f) *→ true* 



(compiled-function-p ’f) *→ false* 



(compiled-function-p (compile nil ’(lambda (x) x))) 



*→ true* 



(compiled-function-p #’(lambda (x) x)) 



*→ false* 



<i><sup>or</sup>→ true</i> 



(compiled-function-p ’(lambda (x) x)) *→ false* 




```
**See Also:** 



**compile**, **compile-file**, **compiled-function** 



**Notes:** 



(compiled-function-p *object*) *≡* (typep *object* ’compiled-function) 



