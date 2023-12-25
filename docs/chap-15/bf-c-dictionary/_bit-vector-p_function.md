**bit-vector-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"bit-vector-p"}><b>bit-vector-p</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"bit-vector"}><b>bit-vector</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(bit-vector-p (make-array 6 
			  :element-type ’bit 
			  :fill-pointer t)) *→ true* 
(bit-vector-p #\*) *→ true* 
(bit-vector-p (make-array 6)) *→ false* 

```
**See Also:** 



<DictionaryLink styled={true} term={"typep"}><b>typep</b></DictionaryLink> 



**Notes:** 



(bit-vector-p <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’bit-vector) 



