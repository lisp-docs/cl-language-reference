**array-rank** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"array-rank"}><b>array-rank</b></DictionaryLink> *array → rank* 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



<GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm>—a non-negative *integer* . 



**Description:** 



Returns the number of <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm> of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



**Examples:**
```lisp
(array-rank (make-array ’())) → 0 
(array-rank (make-array 4)) → 1 
(array-rank (make-array ’(4))) → 1 
(array-rank (make-array ’(2 3))) → 2 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"array-rank-limit"}><b>array-rank-limit</b></DictionaryLink>, <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink> 



