**array-total-size** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"array-total-size"}><b>array-total-size</b></DictionaryLink> *array → size* 



**Arguments and Values:** 



<ClLinks  term={"array"}><i>array</i></ClLinks>—an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



*size*—a non-negative *integer* . 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> of the <ClLinks  term={"array"}><i>array</i></ClLinks>. 







 



 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"array-dimensions"}><b>array-dimensions</b></DictionaryLink> 



**Notes:** 



If the <ClLinks  term={"array"}><i>array</i></ClLinks> is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is ignored when calculating the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm>. 



Since the product of no arguments is one, the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> of a zero-dimensional <ClLinks  term={"array"}><i>array</i></ClLinks> is one. 



(array-total-size x) 



*≡* (apply #’\* (array-dimensions x)) 



*≡* (reduce #’\* (array-dimensions x)) 



