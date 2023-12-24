**array-has-fill-pointer-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"array-has-fill-pointer-p"}><b>array-has-fill-pointer-p</b></ClLinks> *array → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> has a *fill pointer* ; otherwise returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp

(array-has-fill-pointer-p (make-array 4)) → implementation-dependent 
(array-has-fill-pointer-p (make-array ’(2 3))) → false 
(array-has-fill-pointer-p 
 (make-array 8 
	     :fill-pointer 2 
	     :initial-element ’filler)) → true 




```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its argument is not an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks>, <ClLinks styled={true} term={"fill-pointer"}><b>fill-pointer</b></ClLinks> 



**Notes:** 



Since <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> of <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> other than one cannot have a *fill pointer* , <ClLinks styled={true} term={"array-has-fill-pointer-p"}><b>array-has-fill-pointer-p</b></ClLinks> always returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> when its argument is such an array. 



