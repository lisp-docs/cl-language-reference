**vectorp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"vectorp"}><b>vectorp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 







 



 



**Examples:**
```lisp
(vectorp "aaaaaa") → true 
(vectorp (make-array 6 :fill-pointer t)) → true 
(vectorp (make-array ’(2 3 4))) → false 
(vectorp #\*11) → true 
(vectorp #b11) → false 
```
**Notes:** 



(vectorp <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’vector) 



