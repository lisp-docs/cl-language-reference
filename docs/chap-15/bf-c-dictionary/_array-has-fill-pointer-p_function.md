**array-has-fill-pointer-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"array-has-fill-pointer-p"}><b>array-has-fill-pointer-p</b></DictionaryLink> *array → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> has a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> ; otherwise returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp
(array-has-fill-pointer-p (make-array 4)) → implementation-dependent 
(array-has-fill-pointer-p (make-array ’(2 3))) → false 
(array-has-fill-pointer-p 
 (make-array 8 
	     :fill-pointer 2 
	     :initial-element ’filler)) → true 


```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink> 



**Notes:** 



Since <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> of <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> other than one cannot have a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , <DictionaryLink  term={"array-has-fill-pointer-p"}><b>array-has-fill-pointer-p</b></DictionaryLink> always returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> when its argument is such an array. 



