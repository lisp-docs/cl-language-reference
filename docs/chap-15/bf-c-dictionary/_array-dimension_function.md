**array-dimension** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"array-dimension"}><b>array-dimension</b></ClLinks> *array axis-number → dimension* 



**Arguments and Values:** 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*axis-number*—an *integer* greater than or equal to zero and less than the <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. <ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks>—a non-negative *integer* . 



**Description:** 



<ClLinks styled={true} term={"array-dimension"}><b>array-dimension</b></ClLinks> returns the *axis-number dimension*<sub>1</sub> of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. (Any *fill pointer* is ignored.) 

**Examples:**
```lisp
(array-dimension (make-array 4) 0) → 4 
(array-dimension (make-array ’(2 3)) 1) → 3 
```
**Affected By:** 



None. 



**See Also:** 



<ClLinks styled={true} term={"array-dimensions"}><b>array-dimensions</b></ClLinks>, <ClLinks styled={true} term={"length"}><b>length</b></ClLinks> 



**Notes:** 



(array-dimension array n) *≡* (nth n (array-dimensions array)) 







 



 



