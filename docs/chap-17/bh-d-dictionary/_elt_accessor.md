**elt** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"elt"}><b>elt</b></DictionaryLink> *sequence index → object* 



<!-- **(setf (elt** *sequence index***)** *new-object<DictionaryLink  term={"t"}><b>*)</b></DictionaryLink>  -->
**(setf (elt** *sequence index***)** *new-object***)** 



**Arguments and Values:** 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



*index*—a <GlossaryTerm styled={true} term={"valid sequence index"}><i>valid sequence index</i></GlossaryTerm> for *sequence*. 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*new-object*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



*Accesses* the <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of *sequence* specified by *index*. 



**Examples:**
```lisp
(setq str (copy-seq "0123456789")) → "0123456789" 
(elt str 6) → #\6 
(setf (elt str 0) #\#) → #\# 
str → "#123456789" 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *index* is not a <GlossaryTerm styled={true} term={"valid sequence index"}><i>valid sequence index</i></GlossaryTerm> for *sequence*. 



**See Also:** 



<DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink  term={"nth"}><b>nth</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



<DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink> may be used to *access vector* elements that are beyond the <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> ’s <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



 



 



