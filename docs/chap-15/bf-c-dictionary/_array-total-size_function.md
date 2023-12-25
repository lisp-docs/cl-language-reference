**array-total-size** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"array-total-size"}><b>array-total-size</b></DictionaryLink> *array → size* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*size*—a non-negative *integer* . 



**Description:** 



Returns the *array total size* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 







 



 



**Examples:**
```lisp

(array-total-size (make-array 4)) *→* 4 
(array-total-size (make-array 4 :fill-pointer 2)) *→* 4 
(array-total-size (make-array 0)) *→* 0 
(array-total-size (make-array ’(4 2))) *→* 8 
(array-total-size (make-array ’(4 0))) *→* 0 
(array-total-size (make-array ’())) *→* 1 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"array-dimensions"}><b>array-dimensions</b></DictionaryLink> 



**Notes:** 



If the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* , the *fill pointer* is ignored when calculating the *array total size*. 



Since the product of no arguments is one, the *array total size* of a zero-dimensional <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is one. 



(array-total-size x) 



*≡* (apply #’\* (array-dimensions x)) 



*≡* (reduce #’\* (array-dimensions x)) 



