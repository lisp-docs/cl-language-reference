**compiled-function-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"compiled-function-p"}><b>compiled-function-p</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 















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



<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink>, <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink> 



**Notes:** 



(compiled-function-p <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’compiled-function) 



