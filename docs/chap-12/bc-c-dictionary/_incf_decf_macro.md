**incf, decf** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"incf"}><b>incf</b></DictionaryLink> <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> [*delta-form*] *→ new-value* 



<DictionaryLink styled={true} term={"decf"}><b>decf</b></DictionaryLink> <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> [*delta-form*] *→ new-value* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



*delta-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated to produce a *delta*. The default is 1. 



*delta*—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



*new-value*—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 







 



 



**Description:** 



<DictionaryLink styled={true} term={"incf"}><b>incf</b></DictionaryLink> and <DictionaryLink styled={true} term={"decf"}><b>decf</b></DictionaryLink> are used for incrementing and decrementing the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, respectively. 



The *delta* is added to (in the case of <DictionaryLink styled={true} term={"incf"}><b>incf</b></DictionaryLink>) or subtracted from (in the case of <DictionaryLink styled={true} term={"decf"}><b>decf</b></DictionaryLink>) the number in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> and the result is stored in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



Any necessary type conversions are performed automatically. 



For information about the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



**Examples:**
```lisp

(setq n 0) 
(incf n) *→* 1 
n *→* 1 
(decf n 3) *→* -2 
n *→* -2 
(decf n -5) *→* 3 
(decf n) *→* 2 
(incf n 0.5) *→* 2.5 
(decf n) *→* 1.5 
n *→* 1.5 

```
**Side Effects:** 



<GlossaryTerm styled={true} term={"place"}><i>Place</i></GlossaryTerm> is modified. 



**See Also:** 



<DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink>, <DictionaryLink styled={true} term={"-"}><b>-</b></DictionaryLink>, <DictionaryLink styled={true} term={"1+"}><b>1+</b></DictionaryLink>, **1-**, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> 



