**aref** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink> <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> &amp;rest *subscripts → element* 



<!-- **(setf (aref** <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> &amp;rest *subscripts***)** *new-element<ClLinks  term={"t"}><b>*)</b></ClLinks>  -->
**(setf (aref** *array* &amp;rest *subscripts***)** *new-element***)** 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*subscripts*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of *valid array indices* for the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



<GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>, *new-element*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



*Accesses* the *array element* specified by the *subscripts*. If no *subscripts* are supplied and <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is zero rank, <DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink> *accesses* the sole element of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



<DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink> ignores <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointers</i></GlossaryTerm>. It is permissible to use <DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink> to <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> any *array element*, whether <GlossaryTerm  term={"active"}><i>active</i></GlossaryTerm> or not. 



**Examples:**
```lisp
If the variable foo names a 3-by-5 array, then the first index could be 0, 1, or 2, and then second index could be 0, 1, 2, 3, or 4. The array elements can be referred to by using the *function* **aref**; for example, (aref foo 2 1) refers to element (2, 1) of the array. 
(aref (setq alpha (make-array 4)) 3) → implementation-dependent 
(setf (aref alpha 3) ’sirens) → SIRENS 
(aref alpha 3) → SIRENS 
(aref (setq beta (make-array ’(2 4) 
			      :element-type ’(unsigned-byte 2) 
			      :initial-contents ’((0 1 2 3) (3 2 1 0)))) 
      1 2) → 1 

(setq gamma ’(0 2)) 
(apply #’aref beta gamma) → 2 
(setf (apply #’aref beta gamma) 3) → 3 
(apply #’aref beta gamma) → 3 
(aref beta 0 2) → 3 
```
**See Also:** 



<DictionaryLink  term={"bit"}><b>bit</b></DictionaryLink>, <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>, <DictionaryLink  term={"elt"}><b>elt</b></DictionaryLink>, <DictionaryLink  term={"row-major-aref"}><b>row-major-aref</b></DictionaryLink>, <DictionaryLink  term={"svref"}><b>svref</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology) 



