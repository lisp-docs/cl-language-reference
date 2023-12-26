**simple-bit-vector-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"simple-bit-vector-p"}><b>simple-bit-vector-p</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"simple-bit-vector"}><b>simple-bit-vector</b></DictionaryLink>; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 







 



 



<DictionaryLink  term={"simple-bit-vector-p"}><b>simple-bit-vector-p</b></DictionaryLink> 



**Examples:**
```lisp
(simple-bit-vector-p (make-array 6)) → false 
(simple-bit-vector-p #\*) → true 
```
**See Also:** 



<DictionaryLink  term={"simple-vector-p"}><b>simple-vector-p</b></DictionaryLink> 



**Notes:** 



(simple-bit-vector-p <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> ’simple-bit-vector) 

