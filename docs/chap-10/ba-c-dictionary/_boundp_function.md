**boundp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"boundp"}><b>boundp</b></ClLinks> *symbol → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 







 



 



**Examples:**
```lisp

(setq x 1) → 1 
(boundp ’x) → true 
(makunbound ’x) → X 
(boundp ’x) → false 
(let ((x 2)) (boundp ’x)) → false 
(let ((x 2)) (declare (special x)) (boundp ’x)) → true 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"set"}><b>set</b></ClLinks>, <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks>, <ClLinks styled={true} term={"symbol-value"}><b>symbol-value</b></ClLinks>, <ClLinks styled={true} term={"makunbound"}><b>makunbound</b></ClLinks> 



**Notes:** 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **bound** determines only whether a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> has a value in the *global environment*; any *lexical bindings* are ignored. 



