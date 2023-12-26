**fill-pointer** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink> *vector → fill-pointer* 



**(setf (fill-pointer** <ClLinks  term={"vector"}><i>vector</i></ClLinks>**)** *new-fill-pointer***)** 



**Arguments and Values:** 



<ClLinks  term={"vector"}><i>vector</i></ClLinks>—a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



*fill-pointer*, *new-fill-pointer*—a <GlossaryTerm styled={true} term={"valid fill pointer"}><i>valid fill pointer</i></GlossaryTerm> for the <ClLinks  term={"vector"}><i>vector</i></ClLinks>. 



**Description:** 



*Accesses* the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> of <ClLinks  term={"vector"}><i>vector</i></ClLinks>. 



**Examples:**
```lisp
(setq a (make-array 8 :fill-pointer 4)) → #(NIL NIL NIL NIL) 
(fill-pointer a) → 4 
(dotimes (i (length a)) (setf (aref a i) (\* i i))) → NIL 
a → #(0 1 4 9) 
(setf (fill-pointer a) 3) → 3 
(fill-pointer a) → 3 
a → #(0 1 4) 
(setf (fill-pointer a) 8) → 8 
a → #(0 1 4 9 NIL NIL NIL NIL) 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"vector"}><i>vector</i></ClLinks> is not a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



 



 



**See Also:** 



<DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"length"}><b>length</b></DictionaryLink> 



**Notes:** 



There is no <ClLinks  term={"operator"}><i>operator</i></ClLinks> that will remove a <ClLinks  term={"vector"}><i>vector</i></ClLinks> ’s <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



