**array-dimensions** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"array-dimensions"}><b>array-dimensions</b></ClLinks> *array → dimensions* 



**Arguments and Values:** 



<ClLinks  term={"array"}><i>array</i></ClLinks>—an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



<ClLinks  term={"dimension"}><i>dimensions</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *integers*. 



**Description:** 



Returns a <ClLinks  term={"list"}><i>list</i></ClLinks> of the <ClLinks  term={"dimension"}><i>dimensions</i></ClLinks> of <ClLinks  term={"array"}><i>array</i></ClLinks>. (If <ClLinks  term={"array"}><i>array</i></ClLinks> is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , that <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is ignored.) 



**Examples:**
```lisp
(array-dimensions (make-array 4)) → (4) 
(array-dimensions (make-array ’(2 3))) → (2 3) 
(array-dimensions (make-array 4 :fill-pointer 2)) → (4) 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if its argument is not an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"array-dimension"}><b>array-dimension</b></ClLinks> 



