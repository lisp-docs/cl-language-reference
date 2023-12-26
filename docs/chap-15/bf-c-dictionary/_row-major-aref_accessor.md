**row-major-aref** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"row-major-aref"}><b>row-major-aref</b></DictionaryLink> *array index → element* 



<!-- **(setf (row-major-aref** *array index***)** *new-element<ClLinks  term={"t"}><b>*)</b></ClLinks>  -->
**(setf (row-major-aref** *array index***)** *new-element***)** 



**Arguments and Values:** 



<ClLinks  term={"array"}><i>array</i></ClLinks>—an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



*index*—a <GlossaryTerm styled={true} term={"valid array row-major index"}><i>valid array row-major index</i></GlossaryTerm> for the <ClLinks  term={"array"}><i>array</i></ClLinks>. 



<ClLinks  term={"element"}><i>element</i></ClLinks>, *new-element*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



Considers <ClLinks  term={"array"}><i>array</i></ClLinks> as a <ClLinks  term={"vector"}><i>vector</i></ClLinks> by viewing its <ClLinks  term={"element"}><i>elements</i></ClLinks> in row-major order, and returns the <ClLinks  term={"element"}><i>element</i></ClLinks> of that <ClLinks  term={"vector"}><i>vector</i></ClLinks> which is referred to by the given *index*. 



<DictionaryLink  term={"row-major-aref"}><b>row-major-aref</b></DictionaryLink> is valid for use with <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink  term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink> 



**Notes:** 



(row-major-aref array index) *≡* 



(aref (make-array (array-total-size array) 



:displaced-to array 



:element-type (array-element-type array)) 



index) 



(aref array i1 i2 ...) *≡* 



(row-major-aref array (array-row-major-index array i1 i2)) 







 



 



