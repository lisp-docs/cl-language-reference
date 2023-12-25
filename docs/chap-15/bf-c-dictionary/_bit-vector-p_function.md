**bit-vector-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"bit-vector-p"}><b>bit-vector-p</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"bit-vector"}><b>bit-vector</b></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(bit-vector-p (make-array 6 
			  :element-type ’bit 
			  :fill-pointer t)) → true 
(bit-vector-p #\*) → true 
(bit-vector-p (make-array 6)) → false 
```
**See Also:** 



<ClLinks  term={"typep"}><b>typep</b></ClLinks> 



**Notes:** 



(bit-vector-p <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’bit-vector) 



