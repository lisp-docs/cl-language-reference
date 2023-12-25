**array-rank** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"array-rank"}><b>array-rank</b></DictionaryLink> *array → rank* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm>—a non-negative *integer* . 



**Description:** 



Returns the number of <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**Examples:**
```lisp

(array-rank (make-array ’())) *→* 0 
(array-rank (make-array 4)) *→* 1 
(array-rank (make-array ’(4))) *→* 1 
(array-rank (make-array ’(2 3))) *→* 2 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"array-rank-limit"}><b>array-rank-limit</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> 



