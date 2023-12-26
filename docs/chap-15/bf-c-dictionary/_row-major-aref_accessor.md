**row-major-aref** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"row-major-aref"}><b>row-major-aref</b></DictionaryLink> *array index → element* 



<!-- **(setf (row-major-aref** *array index***)** *new-element<ClLinks  term={"t"}><b>*)</b></ClLinks>  -->
**(setf (row-major-aref** *array index***)** *new-element***)** 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*index*—a <GlossaryTerm styled={true} term={"valid array row-major index"}><i>valid array row-major index</i></GlossaryTerm> for the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



<GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>, *new-element*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



Considers <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> as a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> by viewing its <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> in row-major order, and returns the <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of that <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> which is referred to by the given *index*. 



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







 



 



