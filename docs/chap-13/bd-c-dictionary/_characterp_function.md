**characterp** *Function* 



**Syntax:** 



**characterp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **character**; otherwise, returns *false*. 



**Examples:**
```lisp

(characterp #\a) → true 
(characterp ’a) → false 
(characterp "a") → false 
(characterp 65.) → false 
(characterp #\Newline) → true 
;; This next example presupposes an implementation 
;; in which #\Rubout is an implementation-defined character. 
(characterp #\Rubout) → true 




```
**See Also:** 



**character** (*type* and *function*), **typep** 



**Notes:** 



(characterp *object*) *≡* (typep *object* ’character) 



