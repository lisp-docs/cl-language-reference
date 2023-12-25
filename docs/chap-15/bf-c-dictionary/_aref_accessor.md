**aref** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks> <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> &amp;rest *subscripts → element* 



<!-- **(setf (aref** <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> &amp;rest *subscripts***)** *new-element<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks>  -->
**(setf (aref** *array* &amp;rest *subscripts***)** *new-element***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*subscripts*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *valid array indices* for the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



<ClLinks styled={true} term={"element"}><i>element</i></ClLinks>, *new-element*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



*Accesses* the *array element* specified by the *subscripts*. If no *subscripts* are supplied and <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is zero rank, <ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks> *accesses* the sole element of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



<ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks> ignores *fill pointers*. It is permissible to use <ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks> to <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> any *array element*, whether <ClLinks styled={true} term={"active"}><i>active</i></ClLinks> or not. 



**Examples:**
```lisp
If the variable foo names a 3-by-5 array, then the first index could be 0, 1, or 2, and then second index could be 0, 1, 2, 3, or 4. The array elements can be referred to by using the *function* **aref**; for example, (aref foo 2 1) refers to element (2, 1) of the array. 
(aref (setq alpha (make-array 4)) 3) → implementation-dependent 
(setf (aref alpha 3) ’sirens) → SIRENS 
(aref alpha 3) → SIRENS 
(aref (setq beta (make-array ’(2 4) 
			      :element-type ’(unsigned-byte 2) 
			      :initial-contents ’((0 1 2 3) (3 2 1 0)))) 
      1 2) → 1 

(setq gamma ’(0 2)) 
(apply #’aref beta gamma) → 2 
(setf (apply #’aref beta gamma) 3) → 3 
(apply #’aref beta gamma) → 3 
(aref beta 0 2) → 3 
```
**See Also:** 



<ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks>, <ClLinks styled={true} term={"char"}><b>char</b></ClLinks>, <ClLinks styled={true} term={"elt"}><b>elt</b></ClLinks>, <ClLinks styled={true} term={"row-major-aref"}><b>row-major-aref</b></ClLinks>, <ClLinks styled={true} term={"svref"}><b>svref</b></ClLinks>, Section 3.2.1 (Compiler Terminology) 



