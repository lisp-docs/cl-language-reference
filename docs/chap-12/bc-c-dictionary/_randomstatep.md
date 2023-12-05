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
 



(random-state-p \*random-state\*) *→ true* 



(random-state-p (make-random-state)) *→ true* 



(random-state-p ’test-function) *→ false* 




```
**See Also:** 



**make-random-state**, **\*random-state\*** 



**Notes:** 



(random-state-p *object*) *≡* (typep *object* ’random-state) 



*∗***random-state***∗ Variable* 



**Value Type:** 



a *random state*. 



**Initial Value:** 



*implementation-dependent*. 



**Description:** 



The *current random state*, which is used, for example, by the *function* **random** when a *random state* is not explicitly supplied. 







 



 



**Examples:**
```lisp
 



(random-state-p \*random-state\*) *→ true* 



(setq snap-shot (make-random-state)) 



;; The series from any given point is random, 



;; but if you backtrack to that point, you get the same series. 



(list (loop for i from 1 to 10 collect (random)) 



(let ((\*random-state\* snap-shot)) 



(loop for i from 1 to 10 collect (random))) 



(loop for i from 1 to 10 collect (random)) 



(let ((\*random-state\* snap-shot)) 



(loop for i from 1 to 10 collect (random)))) 



*→* ((19 16 44 19 96 15 76 96 13 61) 



(19 16 44 19 96 15 76 96 13 61) 



(16 67 0 43 70 79 58 5 63 50) 



(16 67 0 43 70 79 58 5 63 50)) 




```
**Affected By:** 



The *implementation*. 



**random**. 



**See Also:** 



**make-random-state**, **random**, **random-state** 



**Notes:** 



*Binding* **\*random-state\*** to a different *random state object* correctly saves and restores the old *random state object*. 



