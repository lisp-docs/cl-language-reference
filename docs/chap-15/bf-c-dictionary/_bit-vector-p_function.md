**bit-vector-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"bit-vector-p"}><b>bit-vector-p</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"bit-vector"}><b>bit-vector</b></DictionaryLink>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(bit-vector-p (make-array 6 
			  :element-type ’bit 
			  :fill-pointer t)) → true 
(bit-vector-p #\*) → true 
(bit-vector-p (make-array 6)) → false 
```
**See Also:** 



<DictionaryLink  term={"typep"}><b>typep</b></DictionaryLink> 



**Notes:** 



(bit-vector-p <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’bit-vector) 



