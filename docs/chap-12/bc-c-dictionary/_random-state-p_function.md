**random-state-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"random-state-p"}><b>random-state-p</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"random-state"}><b>random-state</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(random-state-p \*random-state\*) → true 
(random-state-p (make-random-state)) → true 
(random-state-p ’test-function) → false 
```
**See Also:** 



<ClLinks styled={true} term={"make-random-state"}><b>make-random-state</b></ClLinks>, <ClLinks styled={true} term={"random-state"}><b>\*random-state\*</b></ClLinks> 



**Notes:** 



(random-state-p <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’random-state) 



