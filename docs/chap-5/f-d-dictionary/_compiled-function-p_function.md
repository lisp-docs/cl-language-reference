**compiled-function-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"compiled-function-p"}><b>compiled-function-p</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 















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



(compiled-function-p <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> ’compiled-function) 



