**listp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"listp"}><b>listp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(listp nil) → true 
(listp (cons 1 2)) → true 
(listp (make-array 6)) → false 
(listp t) → false 
```
**See Also:** 



<ClLinks styled={true} term={"consp"}><b>consp</b></ClLinks> 



**Notes:** 



If <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>, <ClLinks styled={true} term={"listp"}><b>listp</b></ClLinks> does not check whether <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *proper list*; it returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> for any kind of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



(listp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’list) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’(or cons null)) 







 



 



