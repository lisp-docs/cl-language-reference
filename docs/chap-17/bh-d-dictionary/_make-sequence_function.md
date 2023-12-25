**make-sequence** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-sequence"}><b>make-sequence</b></ClLinks> *result-type size* &amp;key *initial-element → sequence* 



**Arguments and Values:** 



*result-type*—a <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks> *type specifier* . 



*size*—a non-negative *integer* . 



*initial-element*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The default is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



*sequence*—a *proper sequence*. 



**Description:** 



Returns a *sequence* of the type *result-type* and of length *size*, each of the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of which has been initialized to *initial-element*. 



If the *result-type* is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>, the result will be a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



If the *result-type* is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, then if the implementation can determine the element type specified for the *result-type*, the element type of the resulting array is the result of *upgrading* that element type; or, if the implementation can determine that the element type is unspecified (or \*), the element type of the resulting array is <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>; otherwise, an error is signaled. 



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



The <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



**Exceptional Situations:** 



The consequences are unspecified if *initial-element* is not an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which can be stored in the resulting *sequence*. 







 



 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> must be signaled if the *result-type* is neither a *recognizable subtype* of <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>, nor a *recognizable subtype* of <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> should be signaled if *result-type* specifies the number of elements and *size* is different from that number. 



**See Also:** 



<ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks>, <ClLinks styled={true} term={"make-list"}><b>make-list</b></ClLinks> 



**Notes:** 



(make-sequence ’string 5) *≡* (make-string 5) 



