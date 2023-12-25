**array-in-bounds-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"array-in-bounds-p"}><b>array-in-bounds-p</b></DictionaryLink> <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> &amp;rest *subscripts → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*subscripts*—a list of *integers* of length equal to the <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the *subscripts* are all in bounds for <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>; otherwise returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. (If <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* , that *fill pointer* is ignored.) 



**Examples:**
```lisp

(setq a (make-array ’(7 11) :element-type ’string-char)) 
(array-in-bounds-p a 0 0) *→ true* 
(array-in-bounds-p a 6 10) *→ true* 
(array-in-bounds-p a 0 -1) *→ false* 
(array-in-bounds-p a 0 11) *→ false* 
(array-in-bounds-p a 7 0) *→ false* 

```
**See Also:** 



<DictionaryLink styled={true} term={"array-dimensions"}><b>array-dimensions</b></DictionaryLink> 



**Notes:** 



(array-in-bounds-p array subscripts) 



*≡* (and (not (some #’minusp (list subscripts))) 



(every #’&lt; (list subscripts) (array-dimensions array))) 







 



 



