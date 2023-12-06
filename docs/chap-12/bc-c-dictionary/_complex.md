**complex** *Function* 



**Syntax:** 



**complex** *realpart* &amp;optional *imagpart → complex* 



**Arguments and Values:** 



*realpart*—a *real*. 



*imagpart*—a *real*. 



*complex*—a *rational* or a *complex* . 



**Description:** 



**complex** returns a *number* whose real part is *realpart* and whose imaginary part is *imagpart*. 



If *realpart* is a *rational* and *imagpart* is the *rational* number zero, the result of **complex** is *realpart*, a *rational*. Otherwise, the result is a *complex* . 



If either *realpart* or *imagpart* is a *float*, the non-*float* is converted to a *float* before the *complex* is created. If *imagpart* is not supplied, the imaginary part is a zero of the same *type* as *realpart*; *i.e.*, (coerce 0 (type-of *realpart*)) is effectively used. 



Type upgrading implies a movement upwards in the type hierarchy lattice. In the case of *complexes*, the *type-specifier* must be a subtype of (upgraded-complex-part-type *type-specifier*). If *type-specifier1* is a subtype of *type-specifier2*, then (upgraded-complex-element-type ’*type specifier1*) must also be a subtype of (upgraded-complex-element-type ’*type-specifier2*). Two disjoint types can be upgraded into the same thing. 



**Examples:**
```lisp
 

(complex 0) *→* 0 

(complex 0.0) *→* #C(0.0 0.0) 

(complex 1 1/2) *→* #C(1 1/2) 

(complex 1 .99) *→* #C(1.0 0.99) 

(complex 3/2 0.0) *→* #C(1.5 0.0) 


```
**See Also:** 



**realpart**, **imagpart**, Section 2.4.8.11 (Sharpsign C) 







 



 



