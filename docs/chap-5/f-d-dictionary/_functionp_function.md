**functionp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"functionp"}><b>functionp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(functionp ’append) *→ false* 
(functionp #’append) *→ true* 
(functionp (symbol-function ’append)) *→ true* 
(flet ((f () 1)) (functionp #’f)) *→ true* 
(functionp (compile nil ’(lambda () 259))) *→ true* 
(functionp nil) *→ false* 
(functionp 12) *→ false* 
(functionp ’(lambda (x) (\* x x))) *→ false* 
(functionp #’(lambda (x) (\* x x))) *→ true* 

```
**Notes:** 



(functionp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’function) 



