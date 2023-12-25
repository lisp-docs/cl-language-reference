**array-total-size** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"array-total-size"}><b>array-total-size</b></ClLinks> *array → size* 



**Arguments and Values:** 



<ClLinks  term={"array"}><i>array</i></ClLinks>—an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



*size*—a non-negative *integer* . 



**Description:** 



Returns the *array total size* of the <ClLinks  term={"array"}><i>array</i></ClLinks>. 







 



 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if its argument is not an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"make-array"}><b>make-array</b></ClLinks>, <ClLinks  term={"array-dimensions"}><b>array-dimensions</b></ClLinks> 



**Notes:** 



If the <ClLinks  term={"array"}><i>array</i></ClLinks> is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* , the *fill pointer* is ignored when calculating the *array total size*. 



Since the product of no arguments is one, the *array total size* of a zero-dimensional <ClLinks  term={"array"}><i>array</i></ClLinks> is one. 



(array-total-size x) 



*≡* (apply #’\* (array-dimensions x)) 



*≡* (reduce #’\* (array-dimensions x)) 



