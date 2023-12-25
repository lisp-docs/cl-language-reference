**bit-vector-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"bit-vector-p"}><b>bit-vector-p</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"bit-vector"}><b>bit-vector</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(bit-vector-p (make-array 6 
			  :element-type ’bit 
			  :fill-pointer t)) → true 
(bit-vector-p #\*) → true 
(bit-vector-p (make-array 6)) → false 
```
**See Also:** 



<ClLinks styled={true} term={"typep"}><b>typep</b></ClLinks> 



**Notes:** 



(bit-vector-p <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’bit-vector) 



