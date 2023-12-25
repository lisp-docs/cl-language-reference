**svref** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"svref"}><b>svref</b></ClLinks> *simple-vector index → element* 



<!-- **(setf (svref** *simple-vector index***)** *new-element<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks>  -->
**(setf (svref** *simple-vector index***)** *new-element***)** 



**Arguments and Values:** 



*simple-vector*—a *simple vector* . 



*index*—a *valid array index* for the *simple-vector*. 







 



 



<ClLinks styled={true} term={"element"}><i>element</i></ClLinks>, *new-element*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> (whose <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of the *array element type* of the *simple-vector*). 



**Description:** 



*Accesses* the <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of *simple-vector* specified by *index*. 



**Examples:**
```lisp
(simple-vector-p (setq v (vector 1 2 ’sirens))) → true 
(svref v 0) → 1 
(svref v 2) → SIRENS 
(setf (svref v 1) ’newcomer) → NEWCOMER 
v → #(1 NEWCOMER SIRENS) 
```
**See Also:** 



<ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks>, <ClLinks styled={true} term={"sbit"}><b>sbit</b></ClLinks>, <ClLinks styled={true} term={"schar"}><b>schar</b></ClLinks>, <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



<ClLinks styled={true} term={"svref"}><b>svref</b></ClLinks> is identical to <ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks> except that it requires its first argument to be a *simple vector* . (svref *v i*) *≡* (aref (the simple-vector *v*) *i*) 



