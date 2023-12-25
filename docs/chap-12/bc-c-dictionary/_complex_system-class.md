**complex** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink>, <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> includes all mathematical complex numbers other than those included in the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink>. *Complexes* are expressed in Cartesian form with a real part and an imaginary part, each of which is a *real*. The real part and imaginary part are either both <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> or both of the same *float type*. The imaginary part can be a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> zero, but can never be a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> zero, for such a number is always represented by Common Lisp as a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> rather than a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> . 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(complex [*typespec |* **\***]) 







 



 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* that denotes a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink>. 



**Compound Type Specifier Description:** 



Every element of this <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> whose real part and imaginary part are each of type (upgraded-complex-part-type *typespec*). This <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> encompasses those *complexes* that can result by giving numbers of *type typespec* to <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink>. 



(complex *type-specifier*) refers to all *complexes* that can result from giving <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> of *type type specifier* to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink>, plus all other *complexes* of the same specialized representation. 



**See Also:** 



Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals), Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.4 (Printing Complexes) 



**Notes:** 



The input syntax for a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> with real part *r* and imaginary part *i* is #C(*r i*). For further details, see Section 2.4 (Standard Macro Characters). 



For every <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>, *n*, there is a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> which represents the same mathematical number and which can be obtained by (COERCE *n* ’COMPLEX). 



