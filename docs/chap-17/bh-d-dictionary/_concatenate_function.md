**concatenate** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"concatenate"}><b>concatenate</b></DictionaryLink> *result-type* &amp;rest *sequences → result-sequence* 



**Arguments and Values:** 



*result-type*—a <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink> *type specifier* . 



*sequences*—a *sequence*. 



*result-sequence*—a *proper sequence* of *type result-type*. 



**Description:** 



<DictionaryLink styled={true} term={"concatenate"}><b>concatenate</b></DictionaryLink> returns a *sequence* that contains all the individual elements of all the *sequences* in the order that they are supplied. The *sequence* is of type *result-type*, which must be a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink>. 



All of the *sequences* are copied from; the result does not share any structure with any of the *sequences*. Therefore, if only one *sequence* is provided and it is of type *result-type*, <DictionaryLink styled={true} term={"concatenate"}><b>concatenate</b></DictionaryLink> is required to copy *sequence* rather than simply returning it. 



It is an error if any element of the *sequences* cannot be an element of the *sequence* result. If the *result-type* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, the result will be a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 







 



 



If the *result-type* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, then if the implementation can determine the element type specified for the *result-type*, the element type of the resulting array is the result of *upgrading* that element type; or, if the implementation can determine that the element type is unspecified (or \*), the element type of the resulting array is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>; otherwise, an error is signaled. 



**Examples:**
```lisp

(concatenate ’string "all" " " "together" " " "now") *→* "all together now" 
(concatenate ’list "ABC" ’(d e f) #(1 2 3) #\*1011) 
*→* (#\A #\B #\C D E F 1 2 3 1 0 1 1) 
(concatenate ’list) *→* NIL 
(concatenate ’(vector \* 2) "a" "bc") should signal an error 

```
**Exceptional Situations:** 



An error is signaled if the *result-type* is neither a *recognizable subtype* of <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, nor a *recognizable subtype* of <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> should be signaled if *result-type* specifies the number of elements and the sum of *sequences* is different from that number. 



**See Also:** 



<DictionaryLink styled={true} term={"append"}><b>append</b></DictionaryLink> 



