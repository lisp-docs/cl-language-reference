**simple-vector-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"simple-vector-p"}><b>simple-vector-p</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"simple-vector"}><b>simple-vector</b></DictionaryLink>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>.. 



**Examples:**
```lisp
(simple-vector-p (make-array 6)) → true 
(simple-vector-p "aaaaaa") → false 
(simple-vector-p (make-array 6 :fill-pointer t)) → false 
```
**See Also:** 



<DictionaryLink  term={"simple-vector"}><b>simple-vector</b></DictionaryLink> 



**Notes:** 



(simple-vector-p <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’simple-vector) 



