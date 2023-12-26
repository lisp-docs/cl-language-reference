**incf, decf** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"incf"}><b>incf</b></DictionaryLink> <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> [*delta-form*] → new-value 



<DictionaryLink  term={"decf"}><b>decf</b></DictionaryLink> <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> [*delta-form*] → new-value 



**Arguments and Values:** 



<GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. 



*delta-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated to produce a *delta*. The default is 1. 



*delta*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



*new-value*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 







 



 



**Description:** 



<DictionaryLink  term={"incf"}><b>incf</b></DictionaryLink> and <DictionaryLink  term={"decf"}><b>decf</b></DictionaryLink> are used for incrementing and decrementing the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>, respectively. 



The *delta* is added to (in the case of <DictionaryLink  term={"incf"}><b>incf</b></DictionaryLink>) or subtracted from (in the case of <DictionaryLink  term={"decf"}><b>decf</b></DictionaryLink>) the number in <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> and the result is stored in <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. 



Any necessary type conversions are performed automatically. 



For information about the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm  term={"place"}><i>places</i></GlossaryTerm>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



**Examples:**
```lisp
(setq n 0) 
(incf n) → 1 
n → 1 
(decf n 3) → -2 
n → -2 
(decf n -5) → 3 
(decf n) → 2 
(incf n 0.5) → 2.5 
(decf n) → 1.5 
n → 1.5 
```
**Side Effects:** 



<GlossaryTerm  term={"place"}><i>Place</i></GlossaryTerm> is modified. 



**See Also:** 



<ClLinks  term={"+"}><b>+</b></ClLinks>, <DictionaryLink  term={"-"}><b>-</b></DictionaryLink>, <ClLinks  term={"1+"}><b>1+</b></ClLinks>, **1-**, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> 



