**concatenate** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"concatenate"}><b>concatenate</b></DictionaryLink> *result-type* &amp;rest *sequences → result-sequence* 



**Arguments and Values:** 



*result-type*—a <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



*sequences*—a *sequence*. 



*result-sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm> of *type result-type*. 



**Description:** 



<DictionaryLink  term={"concatenate"}><b>concatenate</b></DictionaryLink> returns a *sequence* that contains all the individual elements of all the *sequences* in the order that they are supplied. The *sequence* is of type *result-type*, which must be a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink>. 



All of the *sequences* are copied from; the result does not share any structure with any of the *sequences*. Therefore, if only one *sequence* is provided and it is of type *result-type*, <DictionaryLink  term={"concatenate"}><b>concatenate</b></DictionaryLink> is required to copy *sequence* rather than simply returning it. 



It is an error if any element of the *sequences* cannot be an element of the *sequence* result. If the *result-type* is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink  term={"list"}><b>list</b></DictionaryLink>, the result will be a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. 







 



 



If the *result-type* is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, then if the implementation can determine the element type specified for the *result-type*, the element type of the resulting array is the result of *upgrading* that element type; or, if the implementation can determine that the element type is unspecified (or \*), the element type of the resulting array is <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>; otherwise, an error is signaled. 



**Examples:**
```lisp
(concatenate ’string "all" " " "together" " " "now") → "all together now" 
(concatenate ’list "ABC" ’(d e f) #(1 2 3) #\*1011) 
→ (#\A #\B #\C D E F 1 2 3 1 0 1 1) 
(concatenate ’list) → NIL 
(concatenate ’(vector \* 2) "a" "bc") should signal an error 
```
**Exceptional Situations:** 



An error is signaled if the *result-type* is neither a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of <DictionaryLink  term={"list"}><b>list</b></DictionaryLink>, nor a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>. 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> should be signaled if *result-type* specifies the number of elements and the sum of *sequences* is different from that number. 



**See Also:** 



<DictionaryLink  term={"append"}><b>append</b></DictionaryLink> 



