**simple-vector-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"simple-vector-p"}><b>simple-vector-p</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-vector"}><b>simple-vector</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>.. 



**Examples:**
```lisp

(simple-vector-p (make-array 6)) → true 
(simple-vector-p "aaaaaa") → false 
(simple-vector-p (make-array 6 :fill-pointer t)) → false 

```
**See Also:** 



<ClLinks styled={true} term={"simple-vector"}><b>simple-vector</b></ClLinks> 



**Notes:** 



(simple-vector-p <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’simple-vector) 



