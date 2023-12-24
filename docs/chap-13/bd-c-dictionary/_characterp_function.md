**characterp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"characterp"}><b>characterp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp

(characterp #\a) → true 
(characterp ’a) → false 
(characterp "a") → false 
(characterp 65.) → false 
(characterp #\Newline) → true 
;; This next example presupposes an implementation 
;; in which #\Rubout is an implementation-defined character. 
(characterp #\Rubout) → true 




```
**See Also:** 



<ClLinks styled={true} term={"character"}><b>character</b></ClLinks> (<ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>), <ClLinks styled={true} term={"typep"}><b>typep</b></ClLinks> 



**Notes:** 



(characterp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’character) 



