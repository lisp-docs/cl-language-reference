**boundp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"boundp"}><b>boundp</b></ClLinks> *symbol → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"bound"}><i>bound</i></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 







 



 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"set"}><b>set</b></ClLinks>, <ClLinks  term={"setq"}><b>setq</b></ClLinks>, <ClLinks  term={"symbol-value"}><b>symbol-value</b></ClLinks>, <ClLinks  term={"makunbound"}><b>makunbound</b></ClLinks> 



**Notes:** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> **bound** determines only whether a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> has a value in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>; any <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical bindings</i></GlossaryTerm> are ignored. 



