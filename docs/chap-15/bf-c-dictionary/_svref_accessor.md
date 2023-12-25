**svref** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"svref"}><b>svref</b></DictionaryLink> *simple-vector index → element* 



**(setf (svref** *simple-vector index***)** *new-element<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> 



**Arguments and Values:** 



*simple-vector*—a *simple vector* . 



*index*—a *valid array index* for the *simple-vector*. 







 



 



<GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>, *new-element*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> (whose <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of the *array element type* of the *simple-vector*). 



**Description:** 



*Accesses* the <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of *simple-vector* specified by *index*. 



**Examples:**
```lisp

(simple-vector-p (setq v (vector 1 2 ’sirens))) *→ true* 
(svref v 0) *→* 1 
(svref v 2) *→* SIRENS 
(setf (svref v 1) ’newcomer) *→* NEWCOMER 
v *→* #(1 NEWCOMER SIRENS) 

```
**See Also:** 



<DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink styled={true} term={"sbit"}><b>sbit</b></DictionaryLink>, <DictionaryLink styled={true} term={"schar"}><b>schar</b></DictionaryLink>, <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



<DictionaryLink styled={true} term={"svref"}><b>svref</b></DictionaryLink> is identical to <DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink> except that it requires its first argument to be a *simple vector* . (svref *v i*) *≡* (aref (the simple-vector *v*) *i*) 



