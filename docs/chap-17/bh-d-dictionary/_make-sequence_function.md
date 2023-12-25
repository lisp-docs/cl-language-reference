**make-sequence** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-sequence"}><b>make-sequence</b></DictionaryLink> *result-type size* &amp;key *initial-element → sequence* 



**Arguments and Values:** 



*result-type*—a <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink> *type specifier* . 



*size*—a non-negative *integer* . 



*initial-element*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The default is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



*sequence*—a *proper sequence*. 



**Description:** 



Returns a *sequence* of the type *result-type* and of length *size*, each of the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of which has been initialized to *initial-element*. 



If the *result-type* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, the result will be a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



If the *result-type* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, then if the implementation can determine the element type specified for the *result-type*, the element type of the resulting array is the result of *upgrading* that element type; or, if the implementation can determine that the element type is unspecified (or \*), the element type of the resulting array is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>; otherwise, an error is signaled. 



**Examples:**
```lisp

(make-sequence ’list 0) *→* () 
(make-sequence ’string 26 :initial-element #\.) 
*→* ".........................." 
(make-sequence ’(vector double-float) 2 
		:initial-element 1d0) 
*→* #(1.0d0 1.0d0) 
(make-sequence ’(vector \* 2) 3) should signal an error 
(make-sequence ’(vector \* 4) 3) should signal an error 

```
**Affected By:** 



The <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



**Exceptional Situations:** 



The consequences are unspecified if *initial-element* is not an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which can be stored in the resulting *sequence*. 







 



 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> must be signaled if the *result-type* is neither a *recognizable subtype* of <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, nor a *recognizable subtype* of <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> should be signaled if *result-type* specifies the number of elements and *size* is different from that number. 



**See Also:** 



<DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-list"}><b>make-list</b></DictionaryLink> 



**Notes:** 



(make-sequence ’string 5) *≡* (make-string 5) 



