**compiled-function-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"compiled-function-p"}><b>compiled-function-p</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"compiled-function"}><b>compiled-function</b></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 















**Examples:**
```lisp
(defun f (x) x) → F 
(compiled-function-p #’f) 
→ false 
<i><sup>or</sup>→ true</i> 
(compiled-function-p ’f) → false 
(compile ’f) → F 
(compiled-function-p #’f) → true 
(compiled-function-p ’f) → false 
(compiled-function-p (compile nil ’(lambda (x) x))) 
→ true 
(compiled-function-p #’(lambda (x) x)) 
→ false 
<i><sup>or</sup>→ true</i> 
(compiled-function-p ’(lambda (x) x)) → false 
```
**See Also:** 



<ClLinks  term={"compile"}><b>compile</b></ClLinks>, <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks  term={"compiled-function"}><b>compiled-function</b></ClLinks> 



**Notes:** 



(compiled-function-p <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’compiled-function) 



