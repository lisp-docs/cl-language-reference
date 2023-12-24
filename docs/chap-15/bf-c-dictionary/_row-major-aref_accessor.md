**row-major-aref** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"row-major-aref"}><b>row-major-aref</b></ClLinks> *array index → element* 



<!-- **(setf (row-major-aref** *array index***)** *new-element<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks>  -->
**(setf (row-major-aref** *array index***)** *new-element***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*index*—a *valid array row-major index* for the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



<ClLinks styled={true} term={"element"}><i>element</i></ClLinks>, *new-element*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



Considers <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> as a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> by viewing its <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in row-major order, and returns the <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of that <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> which is referred to by the given *index*. 



<ClLinks styled={true} term={"row-major-aref"}><b>row-major-aref</b></ClLinks> is valid for use with <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks>, <ClLinks styled={true} term={"array-row-major-index"}><b>array-row-major-index</b></ClLinks> 



**Notes:** 



(row-major-aref array index) *≡* 



(aref (make-array (array-total-size array) 



:displaced-to array 



:element-type (array-element-type array)) 



index) 



(aref array i1 i2 ...) *≡* 



(row-major-aref array (array-row-major-index array i1 i2)) 







 



 



