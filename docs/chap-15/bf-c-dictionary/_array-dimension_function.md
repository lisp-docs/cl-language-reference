**array-dimension** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"array-dimension"}><b>array-dimension</b></DictionaryLink> *array axis-number → dimension* 



**Arguments and Values:** 



<ClLinks  term={"array"}><i>array</i></ClLinks>—an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



*axis-number*—an *integer* greater than or equal to zero and less than the <ClLinks  term={"rank"}><i>rank</i></ClLinks> of the <ClLinks  term={"array"}><i>array</i></ClLinks>. <ClLinks  term={"dimension"}><i>dimension</i></ClLinks>—a non-negative *integer* . 



**Description:** 



<DictionaryLink  term={"array-dimension"}><b>array-dimension</b></DictionaryLink> returns the *axis-number dimension*<sub>1</sub> of <ClLinks  term={"array"}><i>array</i></ClLinks>. (Any <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is ignored.) 

**Examples:**
```lisp
(array-dimension (make-array 4) 0) → 4 
(array-dimension (make-array ’(2 3)) 1) → 3 
```
**Affected By:** 



None. 



**See Also:** 



<DictionaryLink  term={"array-dimensions"}><b>array-dimensions</b></DictionaryLink>, <DictionaryLink  term={"length"}><b>length</b></DictionaryLink> 



**Notes:** 



(array-dimension array n) *≡* (nth n (array-dimensions array)) 







 



 



