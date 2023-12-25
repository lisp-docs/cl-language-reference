**atom** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"atom"}><b>atom</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"atom"}><b>atom</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(atom ’sss) → true 
(atom (cons 1 2)) → false 
(atom nil) → true 
(atom ’()) → true 
(atom 3) → true 


```
**Notes:** 



(atom <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’atom) *≡* (not (consp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>)) 



*≡* (not (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’cons)) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’(not cons)) 



