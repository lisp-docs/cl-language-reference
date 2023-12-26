**make-sequence** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"make-sequence"}><b>make-sequence</b></DictionaryLink> *result-type size* &amp;key *initial-element → sequence* 



**Arguments and Values:** 



*result-type*—a <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



*size*—a non-negative *integer* . 



*initial-element*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**Description:** 



Returns a *sequence* of the type *result-type* and of length *size*, each of the <ClLinks  term={"element"}><i>elements</i></ClLinks> of which has been initialized to *initial-element*. 



If the *result-type* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <DictionaryLink  term={"list"}><b>list</b></DictionaryLink>, the result will be a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



If the *result-type* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, then if the implementation can determine the element type specified for the *result-type*, the element type of the resulting array is the result of *upgrading* that element type; or, if the implementation can determine that the element type is unspecified (or \*), the element type of the resulting array is <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>; otherwise, an error is signaled. 



**Examples:**
```lisp
(make-sequence ’list 0) → () 
(make-sequence ’string 26 :initial-element #\.) 
→ ".........................." 
(make-sequence ’(vector double-float) 2 
		:initial-element 1d0) 
→ #(1.0d0 1.0d0) 
(make-sequence ’(vector \* 2) 3) should signal an error 
(make-sequence ’(vector \* 4) 3) should signal an error 
```
**Affected By:** 



The <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 



**Exceptional Situations:** 



The consequences are unspecified if *initial-element* is not an <ClLinks  term={"object"}><i>object</i></ClLinks> which can be stored in the resulting *sequence*. 







 



 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> must be signaled if the *result-type* is neither a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of <DictionaryLink  term={"list"}><b>list</b></DictionaryLink>, nor a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> should be signaled if *result-type* specifies the number of elements and *size* is different from that number. 



**See Also:** 



<DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"make-list"}><b>make-list</b></DictionaryLink> 



**Notes:** 



(make-sequence ’string 5) *≡* (make-string 5) 



