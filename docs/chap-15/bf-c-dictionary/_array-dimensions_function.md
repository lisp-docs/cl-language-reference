**array-dimensions** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"array-dimensions"}><b>array-dimensions</b></ClLinks> *array → dimensions* 



**Arguments and Values:** 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



<ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *integers*. 



**Description:** 



Returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks> of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. (If <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* , that *fill pointer* is ignored.) 



**Examples:**
```lisp

(array-dimensions (make-array 4)) → (4) 
(array-dimensions (make-array ’(2 3))) → (2 3) 
(array-dimensions (make-array 4 :fill-pointer 2)) → (4) 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its argument is not an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"array-dimension"}><b>array-dimension</b></ClLinks> 



