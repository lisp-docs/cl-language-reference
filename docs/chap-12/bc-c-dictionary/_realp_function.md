**realp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"realp"}><b>realp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"real"}><b>real</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp

(realp 12) → true 



(realp #c(5/3 7.2)) → false 
(realp nil) → false 
(realp (cons 1 2)) → false 

```
**Notes:** 



(realp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’real) 



