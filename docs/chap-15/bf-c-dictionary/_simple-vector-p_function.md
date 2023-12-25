**simple-vector-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"simple-vector-p"}><b>simple-vector-p</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-vector"}><b>simple-vector</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>.. 



**Examples:**
```lisp

(simple-vector-p (make-array 6)) *→ true* 
(simple-vector-p "aaaaaa") *→ false* 
(simple-vector-p (make-array 6 :fill-pointer t)) *→ false* 

```
**See Also:** 



<DictionaryLink styled={true} term={"simple-vector"}><b>simple-vector</b></DictionaryLink> 



**Notes:** 



(simple-vector-p <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’simple-vector) 



