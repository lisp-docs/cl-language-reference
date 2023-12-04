**atom** *Function* 



**Syntax:** 



**atom** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **atom**; otherwise, returns *false*. 



**Examples:**
```lisp
 



(atom ’sss) *→ true* 



(atom (cons 1 2)) *→ false* 



(atom nil) *→ true* 



(atom ’()) *→ true* 



(atom 3) *→ true* 







 



 




```
**Notes:** 



(atom *object*) *≡* (typep *object* ’atom) *≡* (not (consp *object*)) 



*≡* (not (typep *object* ’cons)) *≡* (typep *object* ’(not cons)) 



