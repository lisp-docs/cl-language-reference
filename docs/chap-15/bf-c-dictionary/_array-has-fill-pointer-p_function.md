**array-has-fill-pointer-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"array-has-fill-pointer-p"}><b>array-has-fill-pointer-p</b></DictionaryLink> *array → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"array"}><i>array</i></ClLinks>—an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"array"}><i>array</i></ClLinks> has a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> ; otherwise returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink> 



**Notes:** 



Since <ClLinks  term={"array"}><i>arrays</i></ClLinks> of <ClLinks  term={"rank"}><i>rank</i></ClLinks> other than one cannot have a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , <DictionaryLink  term={"array-has-fill-pointer-p"}><b>array-has-fill-pointer-p</b></DictionaryLink> always returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> when its argument is such an array. 



