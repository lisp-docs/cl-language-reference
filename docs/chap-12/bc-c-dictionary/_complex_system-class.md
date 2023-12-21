**complex** *System Class* 



**Class Precedence List:** 



**complex**, **number**, **t** 



**Description:** 



The *type* **complex** includes all mathematical complex numbers other than those included in the *type* **rational**. *Complexes* are expressed in Cartesian form with a real part and an imaginary part, each of which is a *real*. The real part and imaginary part are either both *rational* or both of the same *float type*. The imaginary part can be a *float* zero, but can never be a *rational* zero, for such a number is always represented by Common Lisp as a *rational* rather than a *complex* . 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(complex [*typespec |* **\***]) 







 



 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* that denotes a *subtype* of *type* **real**. 



**Compound Type Specifier Description:** 



Every element of this *type* is a *complex* whose real part and imaginary part are each of type (upgraded-complex-part-type *typespec*). This *type* encompasses those *complexes* that can result by giving numbers of *type typespec* to **complex**. 



(complex *type-specifier*) refers to all *complexes* that can result from giving *numbers* of *type type specifier* to the *function* **complex**, plus all other *complexes* of the same specialized representation. 



**See Also:** 



Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals), Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.4 (Printing Complexes) 



**Notes:** 



The input syntax for a *complex* with real part *r* and imaginary part *i* is #C(*r i*). For further details, see Section 2.4 (Standard Macro Characters). 



For every *float*, *n*, there is a *complex* which represents the same mathematical number and which can be obtained by (COERCE *n* ’COMPLEX). 



