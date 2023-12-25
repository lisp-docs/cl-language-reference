**array-has-fill-pointer-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"array-has-fill-pointer-p"}><b>array-has-fill-pointer-p</b></DictionaryLink> *array → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> has a *fill pointer* ; otherwise returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(array-has-fill-pointer-p (make-array 4)) *→ implementation-dependent* 
(array-has-fill-pointer-p (make-array ’(2 3))) *→ false* 
(array-has-fill-pointer-p 
 (make-array 8 
	     :fill-pointer 2 
	     :initial-element ’filler)) *→ true* 




```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink> 



**Notes:** 



Since <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> other than one cannot have a *fill pointer* , <DictionaryLink styled={true} term={"array-has-fill-pointer-p"}><b>array-has-fill-pointer-p</b></DictionaryLink> always returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> when its argument is such an array. 



