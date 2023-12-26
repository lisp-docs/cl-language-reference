**array-dimensions** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"array-dimensions"}><b>array-dimensions</b></DictionaryLink> *array → dimensions* 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



<GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of *integers*. 



**Description:** 



Returns a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm> of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. (If <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , that <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is ignored.) 



**Examples:**
```lisp
(array-dimensions (make-array 4)) → (4) 
(array-dimensions (make-array ’(2 3))) → (2 3) 
(array-dimensions (make-array 4 :fill-pointer 2)) → (4) 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"array-dimension"}><b>array-dimension</b></DictionaryLink> 



