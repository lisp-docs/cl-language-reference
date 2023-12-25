**complexp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"complexp"}><b>complexp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(complexp 1.2d2) *→ false* 
(complexp #c(5/3 7.2)) *→ true* 

```
**See Also:** 



<DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> (<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>), <DictionaryLink styled={true} term={"typep"}><b>typep</b></DictionaryLink> 



**Notes:** 



(complexp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’complex) 



