**fill-pointer** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink> *vector → fill-pointer* 



**(setf (fill-pointer** <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>**)** *new-fill-pointer***)** 



**Arguments and Values:** 



<GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>—a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



*fill-pointer*, *new-fill-pointer*—a <GlossaryTerm styled={true} term={"valid fill pointer"}><i>valid fill pointer</i></GlossaryTerm> for the <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>. 



**Description:** 



*Accesses* the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> of <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm>. 



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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> is not a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



 



 



**See Also:** 



<DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"length"}><b>length</b></DictionaryLink> 



**Notes:** 



There is no <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> that will remove a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> ’s <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



