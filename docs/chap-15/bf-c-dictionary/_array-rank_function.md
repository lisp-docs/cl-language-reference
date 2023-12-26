**array-rank** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"array-rank"}><b>array-rank</b></DictionaryLink> *array → rank* 



**Arguments and Values:** 



<ClLinks  term={"array"}><i>array</i></ClLinks>—an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



<ClLinks  term={"rank"}><i>rank</i></ClLinks>—a non-negative *integer* . 



**Description:** 



Returns the number of <ClLinks  term={"dimension"}><i>dimensions</i></ClLinks> of <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**Examples:**
```lisp
(array-rank (make-array ’())) → 0 
(array-rank (make-array 4)) → 1 
(array-rank (make-array ’(4))) → 1 
(array-rank (make-array ’(2 3))) → 2 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"array-rank-limit"}><b>array-rank-limit</b></DictionaryLink>, <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink> 



