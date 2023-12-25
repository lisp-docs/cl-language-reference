**arrayp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"arrayp"}><b>arrayp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"array"}><b>array</b></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(arrayp (make-array ’(2 3 4) :adjustable t)) → true 
(arrayp (make-array 6)) → true 
(arrayp #\*1011) → true 

(arrayp "hi") → true 
(arrayp ’hi) → false 
(arrayp 12) → false 
```
**See Also:** 



<ClLinks  term={"typep"}><b>typep</b></ClLinks> 



**Notes:** 



(arrayp <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’array) 



