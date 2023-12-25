**makunbound** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"makunbound"}><b>makunbound</b></ClLinks> *symbol → symbol* 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> 



**Description:** 



Makes the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> be <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks>, regardless of whether it was previously <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks>. 



**Examples:**
```lisp
(setf (symbol-value ’a) 1) 
(boundp ’a) → true 
a → 1 
(makunbound ’a) → A 
(boundp ’a) → false 
```
**Side Effects:** 



The *value cell* of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is modified. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 







 



 



**See Also:** 



<ClLinks styled={true} term={"boundp"}><b>boundp</b></ClLinks>, <ClLinks styled={true} term={"fmakunbound"}><b>fmakunbound</b></ClLinks> 



