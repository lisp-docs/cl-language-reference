**simple-bit-vector-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"simple-bit-vector-p"}><b>simple-bit-vector-p</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-bit-vector"}><b>simple-bit-vector</b></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 







 



 



<ClLinks  term={"simple-bit-vector-p"}><b>simple-bit-vector-p</b></ClLinks> 



**Examples:**
```lisp
(simple-bit-vector-p (make-array 6)) → false 
(simple-bit-vector-p #\*) → true 
```
**See Also:** 



<ClLinks  term={"simple-vector-p"}><b>simple-vector-p</b></ClLinks> 



**Notes:** 



(simple-bit-vector-p <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’simple-bit-vector) 

