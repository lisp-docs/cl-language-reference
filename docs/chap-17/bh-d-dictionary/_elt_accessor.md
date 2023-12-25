**elt** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"elt"}><b>elt</b></ClLinks> *sequence index → object* 



<!-- **(setf (elt** *sequence index***)** *new-object<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks>  -->
**(setf (elt** *sequence index***)** *new-object***)** 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*index*—a *valid sequence index* for *sequence*. 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*new-object*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



*Accesses* the <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of *sequence* specified by *index*. 



**Examples:**
```lisp
(setq str (copy-seq "0123456789")) → "0123456789" 
(elt str 6) → #\6 
(setf (elt str 0) #\#) → #\# 
str → "#123456789" 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*. Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *index* is not a *valid sequence index* for *sequence*. 



**See Also:** 



<ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks>, <ClLinks styled={true} term={"nth"}><b>nth</b></ClLinks>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



<ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks> may be used to *access vector* elements that are beyond the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> ’s *fill pointer* . 



 



 



