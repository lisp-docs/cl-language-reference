**row-major-aref** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"row-major-aref"}><b>row-major-aref</b></DictionaryLink> *array index → element* 



**(setf (row-major-aref** *array index***)** *new-element<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*index*—a *valid array row-major index* for the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>, *new-element*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



Considers <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> as a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> by viewing its <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in row-major order, and returns the <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> which is referred to by the given *index*. 



<DictionaryLink styled={true} term={"row-major-aref"}><b>row-major-aref</b></DictionaryLink> is valid for use with <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink styled={true} term={"array-row-major-index"}><b>array-row-major-index</b></DictionaryLink> 



**Notes:** 



(row-major-aref array index) *≡* 



(aref (make-array (array-total-size array) 



:displaced-to array 



:element-type (array-element-type array)) 



index) 



(aref array i1 i2 ...) *≡* 



(row-major-aref array (array-row-major-index array i1 i2)) 







 



 



