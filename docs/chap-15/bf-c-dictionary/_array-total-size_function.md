**array-total-size** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"array-total-size"}><b>array-total-size</b></DictionaryLink> *array → size* 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*size*—a non-negative *integer* . 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 







 



 



**Examples:**
```lisp
(array-total-size (make-array 4)) → 4 
(array-total-size (make-array 4 :fill-pointer 2)) → 4 
(array-total-size (make-array 0)) → 0 
(array-total-size (make-array ’(4 2))) → 8 
(array-total-size (make-array ’(4 0))) → 0 
(array-total-size (make-array ’())) → 1 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"array-dimensions"}><b>array-dimensions</b></DictionaryLink> 



**Notes:** 



If the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is ignored when calculating the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm>. 



Since the product of no arguments is one, the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> of a zero-dimensional <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is one. 



(array-total-size x) 



*≡* (apply #’\* (array-dimensions x)) 



*≡* (reduce #’\* (array-dimensions x)) 



