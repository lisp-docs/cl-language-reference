**compiled-function-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"compiled-function-p"}><b>compiled-function-p</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"compiled-function"}><b>compiled-function</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 















**Examples:**
```lisp

(defun f (x) x) *→* F 
(compiled-function-p #’f) 
*→ false* 
<i><sup>or</sup>→ true</i> 
(compiled-function-p ’f) *→ false* 
(compile ’f) *→* F 
(compiled-function-p #’f) *→ true* 
(compiled-function-p ’f) *→ false* 
(compiled-function-p (compile nil ’(lambda (x) x))) 
*→ true* 
(compiled-function-p #’(lambda (x) x)) 
*→ false* 
<i><sup>or</sup>→ true</i> 
(compiled-function-p ’(lambda (x) x)) *→ false* 

```
**See Also:** 



<DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>, <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"compiled-function"}><b>compiled-function</b></DictionaryLink> 



**Notes:** 



(compiled-function-p <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’compiled-function) 



