**array-in-bounds-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"array-in-bounds-p"}><b>array-in-bounds-p</b></DictionaryLink> <ClLinks  term={"array"}><i>array</i></ClLinks> &amp;rest *subscripts → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"array"}><i>array</i></ClLinks>—an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



*subscripts*—a list of *integers* of length equal to the <ClLinks  term={"rank"}><i>rank</i></ClLinks> of the <ClLinks  term={"array"}><i>array</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if the *subscripts* are all in bounds for <ClLinks  term={"array"}><i>array</i></ClLinks>; otherwise returns <ClLinks  term={"false"}><i>false</i></ClLinks>. (If <ClLinks  term={"array"}><i>array</i></ClLinks> is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , that <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is ignored.) 



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







 



 



