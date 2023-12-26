**consp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"consp"}><b>consp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 







 



 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(consp nil) → false 
(consp (cons 1 2)) → true 
The *empty list* is not a *cons*, so 
(consp ’()) *≡* (consp ’nil) → false 
```
**See Also:** 



<ClLinks styled={true} term={"listp"}><b>listp</b></ClLinks> 



**Notes:** 



(consp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’cons) *≡* (not (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’atom)) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’(not atom)) 



