**symbolp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"symbolp"}><b>symbolp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp

(symbolp ’elephant) → true 
(symbolp 12) → false 
(symbolp nil) → true 
(symbolp ’()) → true 
(symbolp :test) → true 
(symbolp "hello") → false 

```
**See Also:** 



<ClLinks styled={true} term={"keywordp"}><b>keywordp</b></ClLinks>, <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>, <ClLinks styled={true} term={"typep"}><b>typep</b></ClLinks> 







 



 



**Notes:** 



(symbolp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’symbol) 



