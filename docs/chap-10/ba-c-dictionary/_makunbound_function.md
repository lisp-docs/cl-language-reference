**makunbound** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"makunbound"}><b>makunbound</b></ClLinks> *symbol → symbol* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> 



**Description:** 



Makes the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> be <ClLinks  term={"unbound"}><i>unbound</i></ClLinks>, regardless of whether it was previously <ClLinks  term={"bound"}><i>bound</i></ClLinks>. 



**Examples:**
```lisp
(setf (symbol-value ’a) 1) 
(boundp ’a) → true 
a → 1 
(makunbound ’a) → A 
(boundp ’a) → false 
```
**Side Effects:** 



The *value cell* of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is modified. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 







 



 



**See Also:** 



<ClLinks  term={"boundp"}><b>boundp</b></ClLinks>, <ClLinks  term={"fmakunbound"}><b>fmakunbound</b></ClLinks> 



