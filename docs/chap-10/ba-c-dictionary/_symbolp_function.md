**symbolp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"symbolp"}><b>symbolp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"symbol"}><b>symbol</b></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



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



<ClLinks  term={"keywordp"}><b>keywordp</b></ClLinks>, <ClLinks  term={"symbol"}><b>symbol</b></ClLinks>, <ClLinks  term={"typep"}><b>typep</b></ClLinks> 







 



 



**Notes:** 



(symbolp <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’symbol) 



