**complex** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> *realpart* &amp;optional *imagpart → complex* 



**Arguments and Values:** 



*realpart*—a *real*. 



*imagpart*—a *real*. 



<GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm>—a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> or a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> returns a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> whose real part is *realpart* and whose imaginary part is *imagpart*. 



If *realpart* is a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> and *imagpart* is the <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> number zero, the result of <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> is *realpart*, a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>. Otherwise, the result is a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> . 



If either *realpart* or *imagpart* is a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>, the non-<GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> is converted to a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> before the <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> is created. If *imagpart* is not supplied, the imaginary part is a zero of the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> as *realpart*; *i.e.*, (coerce 0 (type-of *realpart*)) is effectively used. 



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



<DictionaryLink  term={"realpart"}><b>realpart</b></DictionaryLink>, <DictionaryLink  term={"imagpart"}><b>imagpart</b></DictionaryLink>, Section 2.4.8.11 (Sharpsign C) 







 



 



