**fill-pointer** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink> *vector → fill-pointer* 



**(setf (fill-pointer** <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>**)** *new-fill-pointer***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* . 



*fill-pointer*, *new-fill-pointer*—a *valid fill pointer* for the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>. 



**Description:** 



*Accesses* the *fill pointer* of <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>. 



**Examples:**
```lisp

(setq a (make-array 8 :fill-pointer 4)) *→* #(NIL NIL NIL NIL) 
(fill-pointer a) *→* 4 
(dotimes (i (length a)) (setf (aref a i) (\* i i))) *→* NIL 
a *→* #(0 1 4 9) 
(setf (fill-pointer a) 3) *→* 3 
(fill-pointer a) *→* 3 
a *→* #(0 1 4) 
(setf (fill-pointer a) 8) *→* 8 
a *→* #(0 1 4 9 NIL NIL NIL NIL) 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* . 



 



 



**See Also:** 



<DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"length"}><b>length</b></DictionaryLink> 



**Notes:** 



There is no <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> that will remove a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> ’s *fill pointer* . 



