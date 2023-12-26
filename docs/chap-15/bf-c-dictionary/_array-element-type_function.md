**array-element-type** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"array-element-type"}><b>array-element-type</b></DictionaryLink> *array → typespec* 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> which represents the <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> of the array, which is the set of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that such an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> can hold. (Because of *array upgrading*, this <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> can in some cases denote a <GlossaryTerm  term={"supertype"}><i>supertype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"expressed array element type"}><i>expressed array element type</i></GlossaryTerm> of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>.) 







 



 



**Examples:**
```lisp
(array-element-type (make-array 4)) → T 
(array-element-type (make-array 12 :element-type ’(unsigned-byte 8))) 
→ implementation-dependent 
(array-element-type (make-array 12 :element-type ’(unsigned-byte 5))) 
→ implementation-dependent 
(array-element-type (make-array 5 :element-type ’(mod 5))) 
could be (mod 5), (mod 8), fixnum, t, or any other type of which (mod 5) is a *subtype*. 
```
**Affected By:** 



The <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink>, <DictionaryLink  term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink> 



