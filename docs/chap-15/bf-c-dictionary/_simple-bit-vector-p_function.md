**simple-bit-vector-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"simple-bit-vector-p"}><b>simple-bit-vector-p</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-bit-vector"}><b>simple-bit-vector</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"simple-bit-vector-p"}><b>simple-bit-vector-p</b></DictionaryLink> 



**Examples:**
```lisp

(simple-bit-vector-p (make-array 6)) *→ false* 
(simple-bit-vector-p #\*) *→ true* 

```
**See Also:** 



<DictionaryLink styled={true} term={"simple-vector-p"}><b>simple-vector-p</b></DictionaryLink> 



**Notes:** 



(simple-bit-vector-p <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’simple-bit-vector) 

