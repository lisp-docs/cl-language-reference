**functionp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"functionp"}><b>functionp</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(functionp ’append) → false 
(functionp #’append) → true 
(functionp (symbol-function ’append)) → true 
(flet ((f () 1)) (functionp #’f)) → true 
(functionp (compile nil ’(lambda () 259))) → true 
(functionp nil) → false 
(functionp 12) → false 
(functionp ’(lambda (x) (\* x x))) → false 
(functionp #’(lambda (x) (\* x x))) → true 
```
**Notes:** 



(functionp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’function) 



