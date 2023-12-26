**array-dimension** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"array-dimension"}><b>array-dimension</b></DictionaryLink> *array axis-number → dimension* 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*axis-number*—an *integer* greater than or equal to zero and less than the <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. <GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm>—a non-negative *integer* . 



**Description:** 



<DictionaryLink  term={"array-dimension"}><b>array-dimension</b></DictionaryLink> returns the *axis-number dimension*<sub>1</sub> of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. (Any <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is ignored.) 

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







 



 



