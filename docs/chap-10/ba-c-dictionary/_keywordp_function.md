**keywordp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"keywordp"}><b>keywordp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a <ClLinks styled={true} term={"keyword"}><i>keyword</i></ClLinks> <sub>1</sub>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(keywordp ’elephant) → false 
(keywordp 12) → false 
(keywordp :test) → true 
(keywordp ’:test) → true 
(keywordp nil) → false 
(keywordp :nil) → true 
(keywordp ’(:test)) → false 
(keywordp "hello") → false 
(keywordp ":hello") → false 
(keywordp ’&optional) → false 
```
**See Also:** 



<ClLinks styled={true} term={"constantp"}><b>constantp</b></ClLinks>, <ClLinks styled={true} term={"keyword"}><b>keyword</b></ClLinks>, <ClLinks styled={true} term={"symbolp"}><b>symbolp</b></ClLinks>, <ClLinks styled={true} term={"symbol-package"}><b>symbol-package</b></ClLinks> 







 



 



