**array-dimensions** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"array-dimensions"}><b>array-dimensions</b></DictionaryLink> *array → dimensions* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *integers*. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. (If <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* , that *fill pointer* is ignored.) 



**Examples:**
```lisp

(array-dimensions (make-array 4)) *→* (4) 
(array-dimensions (make-array ’(2 3))) *→* (2 3) 
(array-dimensions (make-array 4 :fill-pointer 2)) *→* (4) 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"array-dimension"}><b>array-dimension</b></DictionaryLink> 



