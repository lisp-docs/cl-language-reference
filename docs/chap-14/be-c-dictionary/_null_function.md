**null** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> *object → boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm>. 







 



 



**Description:** 



Returns <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is the *empty list*; otherwise, returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

(null ’()) *→* T 
(null nil) *→* T 
(null t) *→* NIL 
(null 1) *→* NIL 

```
**See Also:** 



<DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> is intended to be used to test for the *empty list* whereas <DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink> is intended to be used to invert a <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm> (or *generalized boolean*). Operationally, <DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> and <DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink> compute the same result; which to use is a matter of style. 



(null <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’null) *≡* (eq <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’()) 



