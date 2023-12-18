**random-state-p** *Function* 



**Syntax:** 



**random-state-p** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **random-state**; otherwise, returns *false*. 



**Examples:**
```lisp

(random-state-p \*random-state\*) → true 
(random-state-p (make-random-state)) → true 
(random-state-p ’test-function) → false 
```
**See Also:** 



**make-random-state**, **\*random-state\*** 



**Notes:** 



(random-state-p *object*) *≡* (typep *object* ’random-state) 



