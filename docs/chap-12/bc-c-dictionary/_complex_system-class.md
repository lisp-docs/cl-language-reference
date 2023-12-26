**complex** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<ClLinks  term={"complex"}><b>complex</b></ClLinks>, <ClLinks  term={"number"}><b>number</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"complex"}><b>complex</b></ClLinks> includes all mathematical complex numbers other than those included in the <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"rational"}><b>rational</b></ClLinks>. *Complexes* are expressed in Cartesian form with a real part and an imaginary part, each of which is a *real*. The real part and imaginary part are either both <ClLinks  term={"rational"}><i>rational</i></ClLinks> or both of the same *float type*. The imaginary part can be a <ClLinks  term={"float"}><i>float</i></ClLinks> zero, but can never be a <ClLinks  term={"rational"}><i>rational</i></ClLinks> zero, for such a number is always represented by Common Lisp as a <ClLinks  term={"rational"}><i>rational</i></ClLinks> rather than a <ClLinks  term={"complex"}><i>complex</i></ClLinks> . 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(complex [*typespec |* **\***]) 







 



 



**Compound Type Specifier Arguments:** 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> that denotes a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"real"}><b>real</b></ClLinks>. 



**Compound Type Specifier Description:** 



Every element of this <ClLinks  term={"type"}><i>type</i></ClLinks> is a <ClLinks  term={"complex"}><i>complex</i></ClLinks> whose real part and imaginary part are each of type (upgraded-complex-part-type *typespec*). This <ClLinks  term={"type"}><i>type</i></ClLinks> encompasses those *complexes* that can result by giving numbers of *type typespec* to <ClLinks  term={"complex"}><b>complex</b></ClLinks>. 



(complex *type-specifier*) refers to all *complexes* that can result from giving <ClLinks  term={"number"}><i>numbers</i></ClLinks> of *type type specifier* to the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"complex"}><b>complex</b></ClLinks>, plus all other *complexes* of the same specialized representation. 



**See Also:** 



Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals), Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.4 (Printing Complexes) 



**Notes:** 



The input syntax for a <ClLinks  term={"complex"}><i>complex</i></ClLinks> with real part *r* and imaginary part *i* is #C(*r i*). For further details, see Section 2.4 (Standard Macro Characters). 



For every <ClLinks  term={"float"}><i>float</i></ClLinks>, *n*, there is a <ClLinks  term={"complex"}><i>complex</i></ClLinks> which represents the same mathematical number and which can be obtained by (COERCE *n* ’COMPLEX). 



