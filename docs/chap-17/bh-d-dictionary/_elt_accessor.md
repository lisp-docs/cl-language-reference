**elt** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"elt"}><b>elt</b></DictionaryLink> *sequence index → object* 



**(setf (elt** *sequence index***)** *new-object<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*index*—a *valid sequence index* for *sequence*. 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*new-object*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



*Accesses* the <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of *sequence* specified by *index*. 



**Examples:**
```lisp

(setq str (copy-seq "0123456789")) *→* "0123456789" 
(elt str 6) *→* #\6 
(setf (elt str 0) #\#) *→* #\# 
str *→* "#123456789" 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *index* is not a *valid sequence index* for *sequence*. 



**See Also:** 



<DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink styled={true} term={"nth"}><b>nth</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



<DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink> may be used to *access vector* elements that are beyond the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> ’s *fill pointer* . 



 



 



