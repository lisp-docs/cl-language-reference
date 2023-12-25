**numberp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"numberp"}><b>numberp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 







 



 



**Examples:**
```lisp

(numberp 12) *→ true* 
(numberp (expt 2 130)) *→ true* 
(numberp #c(5/3 7.2)) *→ true* 
(numberp nil) *→ false* 
(numberp (cons 1 2)) *→ false* 

```
**Notes:** 



(numberp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’number) 



