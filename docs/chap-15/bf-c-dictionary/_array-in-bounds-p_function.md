**array-in-bounds-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"array-in-bounds-p"}><b>array-in-bounds-p</b></ClLinks> <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> &amp;rest *subscripts → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*subscripts*—a list of *integers* of length equal to the <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the *subscripts* are all in bounds for <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>; otherwise returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. (If <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* , that *fill pointer* is ignored.) 



**Examples:**
```lisp
(setq a (make-array ’(7 11) :element-type ’string-char)) 
(array-in-bounds-p a 0 0) → true 
(array-in-bounds-p a 6 10) → true 
(array-in-bounds-p a 0 -1) → false 
(array-in-bounds-p a 0 11) → false 
(array-in-bounds-p a 7 0) → false 
```
**See Also:** 



<ClLinks styled={true} term={"array-dimensions"}><b>array-dimensions</b></ClLinks> 



**Notes:** 



(array-in-bounds-p array subscripts) 



*≡* (and (not (some #’minusp (list subscripts))) 



(every #’&lt; (list subscripts) (array-dimensions array))) 







 



 



