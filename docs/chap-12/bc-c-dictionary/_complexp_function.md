**complexp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"complexp"}><b>complexp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"complex"}><b>complex</b></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(complexp 1.2d2) → false 
(complexp #c(5/3 7.2)) → true 
```
**See Also:** 



<ClLinks  term={"complex"}><b>complex</b></ClLinks> (<ClLinks  term={"function"}><i>function</i></ClLinks> and <ClLinks  term={"type"}><i>type</i></ClLinks>), <ClLinks  term={"typep"}><b>typep</b></ClLinks> 



**Notes:** 



(complexp <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’complex) 



