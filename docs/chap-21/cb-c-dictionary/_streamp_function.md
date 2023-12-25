**streamp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"streamp"}><b>streamp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"stream"}><b>stream</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"streamp"}><b>streamp</b></ClLinks> is unaffected by whether <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, if it is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, is <ClLinks styled={true} term={"open"}><i>open</i></ClLinks> or closed. 



**Examples:**
```lisp
(streamp \*terminal-io\*) → true 
(streamp 1) → false 
```
**Notes:** 



(streamp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’stream) 







 



 



