**not** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink> *x → boolean* 



**Arguments and Values:** 



*x*—a *generalized boolean* (*i.e.*, any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>). 



<GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm>. 



**Description:** 



Returns <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> if *x* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>; otherwise, returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

(not nil) *→* T 
(not ’()) *→* T 
(not (integerp ’sss)) *→* T 
(not (integerp 1)) *→* NIL 
(not 3.7) *→* NIL 
(not ’apple) *→* NIL 

```
**See Also:** 



<DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink> is intended to be used to invert the ‘truth value’ of a <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm> (or *generalized boolean*) whereas <DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> is intended to be used to test for the *empty list*. Operationally, <DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink> and <DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> compute the same result; which to use is a matter of style. 



