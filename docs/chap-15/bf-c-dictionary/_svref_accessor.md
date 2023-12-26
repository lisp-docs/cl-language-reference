**svref** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"svref"}><b>svref</b></DictionaryLink> *simple-vector index → element* 



<!-- **(setf (svref** *simple-vector index***)** *new-element<ClLinks  term={"t"}><b>*)</b></ClLinks>  -->
**(setf (svref** *simple-vector index***)** *new-element***)** 



**Arguments and Values:** 



*simple-vector*—a <GlossaryTerm styled={true} term={"simple vector"}><i>simple vector</i></GlossaryTerm> . 



*index*—a <GlossaryTerm styled={true} term={"valid array index"}><i>valid array index</i></GlossaryTerm> for the *simple-vector*. 







 



 



<GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>, *new-element*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> (whose <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array element type"}><i>array element type</i></GlossaryTerm> of the *simple-vector*). 



**Description:** 



*Accesses* the <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of *simple-vector* specified by *index*. 



**Examples:**
```lisp
(simple-vector-p (setq v (vector 1 2 ’sirens))) → true 
(svref v 0) → 1 
(svref v 2) → SIRENS 
(setf (svref v 1) ’newcomer) → NEWCOMER 
v → #(1 NEWCOMER SIRENS) 
```
**See Also:** 



<DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink  term={"sbit"}><b>sbit</b></DictionaryLink>, <DictionaryLink  term={"schar"}><b>schar</b></DictionaryLink>, <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



<DictionaryLink  term={"svref"}><b>svref</b></DictionaryLink> is identical to <DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink> except that it requires its first argument to be a <GlossaryTerm styled={true} term={"simple vector"}><i>simple vector</i></GlossaryTerm> . (svref *v i*) *≡* (aref (the simple-vector *v*) *i*) 



