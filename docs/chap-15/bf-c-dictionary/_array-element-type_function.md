**array-element-type** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"array-element-type"}><b>array-element-type</b></DictionaryLink> *array → typespec* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*typespec*—a *type specifier* . 



**Description:** 



Returns a *type specifier* which represents the *actual array element type* of the array, which is the set of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that such an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> can hold. (Because of *array upgrading*, this *type specifier* can in some cases denote a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of the *expressed array element type* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>.) 







 



 



**Examples:**
```lisp

(array-element-type (make-array 4)) *→* T 
(array-element-type (make-array 12 :element-type ’(unsigned-byte 8))) 
*→ implementation-dependent* 
(array-element-type (make-array 12 :element-type ’(unsigned-byte 5))) 
*→ implementation-dependent* 
(array-element-type (make-array 5 :element-type ’(mod 5))) 
could be (mod 5), (mod 8), fixnum, t, or any other type of which (mod 5) is a *subtype*. 

```
**Affected By:** 



The <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink>, <DictionaryLink styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink> 



