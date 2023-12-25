**vector-pop** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"vector-pop"}><b>vector-pop</b></ClLinks> *vector → element* 



**Arguments and Values:** 



<ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>—a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* . 



<ClLinks styled={true} term={"element"}><i>element</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



Decreases the *fill pointer* of <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> by one, and retrieves the <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> that is designated by the new *fill pointer* . 



**Examples:**
```lisp
(vector-push (setq fable (list ’fable)) 
	     (setq fa (make-array 8 
				  :fill-pointer 2 
				  :initial-element ’sisyphus))) → 2 
(fill-pointer fa) → 3 
(eq (vector-pop fa) fable) → true 
(vector-pop fa) → SISYPHUS 
(fill-pointer fa) → 1 
```
**Side Effects:** 



The *fill pointer* is decreased by one. 



**Affected By:** 



The value of the *fill pointer* . 







 



 



**Exceptional Situations:** 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> is signaled if <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> does not have a *fill pointer* . 



If the *fill pointer* is zero, <ClLinks styled={true} term={"vector-pop"}><b>vector-pop</b></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"vector-push"}><b>vector-push</b></ClLinks>, <ClLinks styled={true} term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks>, <ClLinks styled={true} term={"fill-pointer"}><b>fill-pointer</b></ClLinks> 



