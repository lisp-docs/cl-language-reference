**packagep** *Function* 



**Syntax:** 



**packagep** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **package**; otherwise, returns *false*. 



**Examples:**
```lisp

(packagep \*package\*) → true 
(packagep ’common-lisp) → false 
(packagep (find-package ’common-lisp)) → true 

```
**Notes:** 



(packagep *object*) *≡* (typep *object* ’package) 



