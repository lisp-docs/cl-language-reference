**aref** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink> <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> &amp;rest *subscripts → element* 



**(setf (aref** <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> &amp;rest *subscripts***)** *new-element<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*subscripts*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *valid array indices* for the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>, *new-element*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



*Accesses* the *array element* specified by the *subscripts*. If no *subscripts* are supplied and <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is zero rank, <DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink> *accesses* the sole element of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink> ignores *fill pointers*. It is permissible to use <DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink> to <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> any *array element*, whether <GlossaryTerm styled={true} term={"active"}><i>active</i></GlossaryTerm> or not. 



**Examples:**
```lisp

If the variable foo names a 3-by-5 array, then the first index could be 0, 1, or 2, and then second index could be 0, 1, 2, 3, or 4. The array elements can be referred to by using the *function* **aref**; for example, (aref foo 2 1) refers to element (2, 1) of the array. 
(aref (setq alpha (make-array 4)) 3) *→ implementation-dependent* 
(setf (aref alpha 3) ’sirens) *→* SIRENS 
(aref alpha 3) *→* SIRENS 
(aref (setq beta (make-array ’(2 4) 
			      :element-type ’(unsigned-byte 2) 
			      :initial-contents ’((0 1 2 3) (3 2 1 0)))) 
      1 2) *→* 1 



(setq gamma ’(0 2)) 
(apply #’aref beta gamma) *→* 2 
(setf (apply #’aref beta gamma) 3) *→* 3 
(apply #’aref beta gamma) *→* 3 
(aref beta 0 2) *→* 3 

```
**See Also:** 



<DictionaryLink styled={true} term={"bit"}><b>bit</b></DictionaryLink>, <DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>, <DictionaryLink styled={true} term={"elt"}><b>elt</b></DictionaryLink>, <DictionaryLink styled={true} term={"row-major-aref"}><b>row-major-aref</b></DictionaryLink>, <DictionaryLink styled={true} term={"svref"}><b>svref</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology) 



