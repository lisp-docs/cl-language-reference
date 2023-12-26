**rationalp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"rationalp"}><b>rationalp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"rational"}><b>rational</b></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(rationalp 12) → true 
(rationalp 6/5) → true 
(rationalp 1.212) → false 
```
**See Also:** 



<ClLinks  term={"rational"}><b>rational</b></ClLinks> 



**Notes:** 



(rationalp <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’rational) 







 



 



