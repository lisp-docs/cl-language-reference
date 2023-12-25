**array-row-major-index** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink> <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> &amp;rest *subscripts → index* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*subscripts*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *valid array indices* for the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*index*—a *valid array row-major index* for the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 







 



 



**Description:** 



Computes the position according to the row-major ordering of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> for the element that is specified by *subscripts*, and returns the offset of the element in the computed position from the beginning of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



For a one-dimensional <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, the result of <DictionaryLink styled={true} term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink> equals *subscript*. <DictionaryLink styled={true} term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink> ignores *fill pointers*. 



**Examples:**
```lisp

(setq a (make-array ’(4 7) :element-type ’(unsigned-byte 8))) 
(array-row-major-index a 1 2) *→* 9 
(array-row-major-index 
 (make-array ’(2 3 4) 
	      :element-type ’(unsigned-byte 8) 
	      :displaced-to a 
	      :displaced-index-offset 4) 
 0 2 1) *→* 9 

```
**Notes:** 



A possible definition of <DictionaryLink styled={true} term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink>, with no error-checking, is 



(defun array-row-major-index (a &amp;rest subscripts) 



(apply #’+ (maplist #’(lambda (x y) 



(\* (car x) (apply #’\* (cdr y)))) 



subscripts 



(array-dimensions a)))) 



