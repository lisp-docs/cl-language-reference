**packagep** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"packagep"}><b>packagep</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"package"}><b>package</b></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(packagep \*package\*) → true 
(packagep ’common-lisp) → false 
(packagep (find-package ’common-lisp)) → true 
```
**Notes:** 



(packagep <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’package) 



