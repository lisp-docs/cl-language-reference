**row-major-aref** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"row-major-aref"}><b>row-major-aref</b></ClLinks> *array index → element* 



<!-- **(setf (row-major-aref** *array index***)** *new-element<ClLinks  term={"t"}><b>*)</b></ClLinks>  -->
**(setf (row-major-aref** *array index***)** *new-element***)** 



**Arguments and Values:** 



<ClLinks  term={"array"}><i>array</i></ClLinks>—an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



*index*—a *valid array row-major index* for the <ClLinks  term={"array"}><i>array</i></ClLinks>. 



<ClLinks  term={"element"}><i>element</i></ClLinks>, *new-element*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



Considers <ClLinks  term={"array"}><i>array</i></ClLinks> as a <ClLinks  term={"vector"}><i>vector</i></ClLinks> by viewing its <ClLinks  term={"element"}><i>elements</i></ClLinks> in row-major order, and returns the <ClLinks  term={"element"}><i>element</i></ClLinks> of that <ClLinks  term={"vector"}><i>vector</i></ClLinks> which is referred to by the given *index*. 



<ClLinks  term={"row-major-aref"}><b>row-major-aref</b></ClLinks> is valid for use with <ClLinks  term={"setf"}><b>setf</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"aref"}><b>aref</b></ClLinks>, <ClLinks  term={"array-row-major-index"}><b>array-row-major-index</b></ClLinks> 



**Notes:** 



(row-major-aref array index) *≡* 



(aref (make-array (array-total-size array) 



:displaced-to array 



:element-type (array-element-type array)) 



index) 



(aref array i1 i2 ...) *≡* 



(row-major-aref array (array-row-major-index array i1 i2)) 







 



 



