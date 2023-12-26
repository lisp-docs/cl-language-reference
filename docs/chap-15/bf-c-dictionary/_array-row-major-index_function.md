**array-row-major-index** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink> <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> &amp;rest *subscripts → index* 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*subscripts*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of *valid array indices* for the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*index*—a <GlossaryTerm styled={true} term={"valid array row-major index"}><i>valid array row-major index</i></GlossaryTerm> for the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 







 



 



**Description:** 



Computes the position according to the row-major ordering of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> for the element that is specified by *subscripts*, and returns the offset of the element in the computed position from the beginning of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



For a one-dimensional <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, the result of <DictionaryLink  term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink> equals *subscript*. <DictionaryLink  term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink> ignores <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointers</i></GlossaryTerm>. 



**Examples:**
```lisp
(setq a (make-array ’(4 7) :element-type ’(unsigned-byte 8))) 
(array-row-major-index a 1 2) → 9 
(array-row-major-index 
 (make-array ’(2 3 4) 
	      :element-type ’(unsigned-byte 8) 
	      :displaced-to a 
	      :displaced-index-offset 4) 
 0 2 1) → 9 
```
**Notes:** 



A possible definition of <DictionaryLink  term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink>, with no error-checking, is 



(defun array-row-major-index (a &amp;rest subscripts) 



(apply #’+ (maplist #’(lambda (x y) 



(\* (car x) (apply #’\* (cdr y)))) 



subscripts 



(array-dimensions a)))) 



