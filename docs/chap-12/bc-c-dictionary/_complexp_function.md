**complexp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"complexp"}><b>complexp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp

(complexp 1.2d2) → false 
(complexp #c(5/3 7.2)) → true 

```
**See Also:** 



<ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> (<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> and <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>), <ClLinks styled={true} term={"typep"}><b>typep</b></ClLinks> 



**Notes:** 



(complexp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’complex) 



