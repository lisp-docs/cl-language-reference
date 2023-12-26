**array-in-bounds-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"array-in-bounds-p"}><b>array-in-bounds-p</b></DictionaryLink> <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> &amp;rest *subscripts → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*subscripts*—a list of *integers* of length equal to the <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the *subscripts* are all in bounds for <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>; otherwise returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. (If <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , that <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is ignored.) 



**Examples:**
```lisp
(setq a (make-array ’(7 11) :element-type ’string-char)) 
(array-in-bounds-p a 0 0) → true 
(array-in-bounds-p a 6 10) → true 
(array-in-bounds-p a 0 -1) → false 
(array-in-bounds-p a 0 11) → false 
(array-in-bounds-p a 7 0) → false 
```
**See Also:** 



<DictionaryLink  term={"array-dimensions"}><b>array-dimensions</b></DictionaryLink> 



**Notes:** 



(array-in-bounds-p array subscripts) 



*≡* (and (not (some #’minusp (list subscripts))) 



(every #’&lt; (list subscripts) (array-dimensions array))) 







 



 



