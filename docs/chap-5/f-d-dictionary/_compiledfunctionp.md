**compiled-function-p** *Function* 

**Syntax:** 

**compiled-function-p** *object → generalized-boolean* 

**Arguments and Values:** 

*object*—an *object*. 

*generalized-boolean*—a *generalized boolean*. 

**Description:** 

Returns *true* if *object* is of *type* **compiled-function**; otherwise, returns *false*. 







**Examples:** 

(defun f (x) x) *→* F 

(compiled-function-p #’f) 

*→ false* 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→ true&#60;/i&#62; 

(compiled-function-p ’f) *→ false* 

(compile ’f) *→* F 

(compiled-function-p #’f) *→ true* 

(compiled-function-p ’f) *→ false* 

(compiled-function-p (compile nil ’(lambda (x) x))) 

*→ true* 

(compiled-function-p #’(lambda (x) x)) 

*→ false* 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→ true&#60;/i&#62; 

(compiled-function-p ’(lambda (x) x)) *→ false* 

**See Also:** 

**compile**, **compile-file**, **compiled-function** 

**Notes:** 

(compiled-function-p *object*) *≡* (typep *object* ’compiled-function) 

