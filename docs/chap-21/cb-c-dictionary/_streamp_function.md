**streamp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"streamp"}><b>streamp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"stream"}><b>stream</b></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<ClLinks  term={"streamp"}><b>streamp</b></ClLinks> is unaffected by whether <ClLinks  term={"object"}><i>object</i></ClLinks>, if it is a <ClLinks  term={"stream"}><i>stream</i></ClLinks>, is <ClLinks  term={"open"}><i>open</i></ClLinks> or closed. 



**Examples:**
```lisp
(streamp \*terminal-io\*) → true 
(streamp 1) → false 
```
**Notes:** 



(streamp <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’stream) 







 



 



