**elt** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"elt"}><b>elt</b></ClLinks> *sequence index → object* 



<!-- **(setf (elt** *sequence index***)** *new-object<ClLinks  term={"t"}><b>*)</b></ClLinks>  -->
**(setf (elt** *sequence index***)** *new-object***)** 



**Arguments and Values:** 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



*index*—a <GlossaryTerm styled={true} term={"valid sequence index"}><i>valid sequence index</i></GlossaryTerm> for *sequence*. 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*new-object*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



*Accesses* the <ClLinks  term={"element"}><i>element</i></ClLinks> of *sequence* specified by *index*. 



**Examples:**
```lisp
(setq str (copy-seq "0123456789")) → "0123456789" 
(elt str 6) → #\6 
(setf (elt str 0) #\#) → #\# 
str → "#123456789" 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *index* is not a <GlossaryTerm styled={true} term={"valid sequence index"}><i>valid sequence index</i></GlossaryTerm> for *sequence*. 



**See Also:** 



<ClLinks  term={"aref"}><b>aref</b></ClLinks>, <ClLinks  term={"nth"}><b>nth</b></ClLinks>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



<ClLinks  term={"aref"}><b>aref</b></ClLinks> may be used to *access vector* elements that are beyond the <ClLinks  term={"vector"}><i>vector</i></ClLinks> ’s <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



 



 



