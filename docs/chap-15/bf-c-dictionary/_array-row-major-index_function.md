**array-row-major-index** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink> <ClLinks  term={"array"}><i>array</i></ClLinks> &amp;rest *subscripts → index* 



**Arguments and Values:** 



<ClLinks  term={"array"}><i>array</i></ClLinks>—an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



*subscripts*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *valid array indices* for the <ClLinks  term={"array"}><i>array</i></ClLinks>. 



*index*—a <GlossaryTerm styled={true} term={"valid array row-major index"}><i>valid array row-major index</i></GlossaryTerm> for the <ClLinks  term={"array"}><i>array</i></ClLinks>. 







 



 



**Description:** 



Computes the position according to the row-major ordering of <ClLinks  term={"array"}><i>array</i></ClLinks> for the element that is specified by *subscripts*, and returns the offset of the element in the computed position from the beginning of <ClLinks  term={"array"}><i>array</i></ClLinks>. 



For a one-dimensional <ClLinks  term={"array"}><i>array</i></ClLinks>, the result of <DictionaryLink  term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink> equals *subscript*. <DictionaryLink  term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink> ignores <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointers</i></GlossaryTerm>. 



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



