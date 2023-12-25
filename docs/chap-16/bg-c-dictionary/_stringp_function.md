**stringp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"stringp"}><b>stringp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 







 



 



**Examples:**
```lisp

(stringp "aaaaaa") *→ true* 
(stringp #\a) *→ false* 

```
**See Also:** 



<DictionaryLink styled={true} term={"typep"}><b>typep</b></DictionaryLink>, <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink> (<GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) 



**Notes:** 



(stringp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’string) 



