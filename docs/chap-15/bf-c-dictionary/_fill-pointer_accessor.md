**fill-pointer** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"fill-pointer"}><b>fill-pointer</b></ClLinks> *vector → fill-pointer* 



**(setf (fill-pointer** <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>**)** *new-fill-pointer***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>—a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* . 



*fill-pointer*, *new-fill-pointer*—a *valid fill pointer* for the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>. 



**Description:** 



*Accesses* the *fill pointer* of <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>. 



**Examples:**
```lisp

(setq a (make-array 8 :fill-pointer 4)) → #(NIL NIL NIL NIL) 
(fill-pointer a) → 4 
(dotimes (i (length a)) (setf (aref a i) (\* i i))) → NIL 
a → #(0 1 4 9) 
(setf (fill-pointer a) 3) → 3 
(fill-pointer a) → 3 
a → #(0 1 4) 
(setf (fill-pointer a) 8) → 8 
a → #(0 1 4 9 NIL NIL NIL NIL) 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> is not a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* . 



 



 



**See Also:** 



<ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks>, <ClLinks styled={true} term={"length"}><b>length</b></ClLinks> 



**Notes:** 



There is no <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> that will remove a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> ’s *fill pointer* . 



