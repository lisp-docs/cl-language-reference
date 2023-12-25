**complex** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> *realpart* &amp;optional *imagpart → complex* 



**Arguments and Values:** 



*realpart*—a *real*. 



*imagpart*—a *real*. 



<ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks>—a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> or a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> . 



**Description:** 



<ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> returns a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> whose real part is *realpart* and whose imaginary part is *imagpart*. 



If *realpart* is a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> and *imagpart* is the <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> number zero, the result of <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> is *realpart*, a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks>. Otherwise, the result is a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> . 



If either *realpart* or *imagpart* is a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>, the non-<ClLinks styled={true} term={"float"}><i>float</i></ClLinks> is converted to a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> before the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> is created. If *imagpart* is not supplied, the imaginary part is a zero of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> as *realpart*; *i.e.*, (coerce 0 (type-of *realpart*)) is effectively used. 



Type upgrading implies a movement upwards in the type hierarchy lattice. In the case of *complexes*, the *type-specifier* must be a subtype of (upgraded-complex-part-type *type-specifier*). If *type-specifier1* is a subtype of *type-specifier2*, then (upgraded-complex-element-type ’*type specifier1*) must also be a subtype of (upgraded-complex-element-type ’*type-specifier2*). Two disjoint types can be upgraded into the same thing. 



**Examples:**
```lisp
(complex 0) → 0 
(complex 0.0) → #C(0.0 0.0) 
(complex 1 1/2) → #C(1 1/2) 
(complex 1 .99) → #C(1.0 0.99) 
(complex 3/2 0.0) → #C(1.5 0.0) 
```
**See Also:** 



<ClLinks styled={true} term={"realpart"}><b>realpart</b></ClLinks>, <ClLinks styled={true} term={"imagpart"}><b>imagpart</b></ClLinks>, Section 2.4.8.11 (Sharpsign C) 







 



 



