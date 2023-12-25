**array-dimension** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"array-dimension"}><b>array-dimension</b></DictionaryLink> *array axis-number → dimension* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*axis-number*—an *integer* greater than or equal to zero and less than the <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm>—a non-negative *integer* . 



**Description:** 



<DictionaryLink styled={true} term={"array-dimension"}><b>array-dimension</b></DictionaryLink> returns the *axis-number dimension*<sub>1</sub> of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. (Any *fill pointer* is ignored.) **Examples:**
```lisp

(array-dimension (make-array 4) 0) *→* 4 
(array-dimension (make-array ’(2 3)) 1) *→* 3 

```
**Affected By:** 



None. 



**See Also:** 



<DictionaryLink styled={true} term={"array-dimensions"}><b>array-dimensions</b></DictionaryLink>, <DictionaryLink styled={true} term={"length"}><b>length</b></DictionaryLink> 



**Notes:** 



(array-dimension array n) *≡* (nth n (array-dimensions array)) 







 



 



