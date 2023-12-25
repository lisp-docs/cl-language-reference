**remf** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"remf"}><b>remf</b></DictionaryLink> *place indicator → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"remf"}><b>remf</b></DictionaryLink> removes from the *property list* stored in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm><sub>1</sub> with a *property indicator identical* to <GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm>. If there are multiple *properties*<sub>1</sub> with the <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> key, <DictionaryLink styled={true} term={"remf"}><b>remf</b></DictionaryLink> only removes the first such <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>. <DictionaryLink styled={true} term={"remf"}><b>remf</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if no such <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm> was found, or <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if a property was found. 



The *property indicator* and the corresponding *property value* are removed in an undefined order by destructively splicing the property list. <DictionaryLink styled={true} term={"remf"}><b>remf</b></DictionaryLink> is permitted to either <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> or to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> any part, <DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink> or <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink>, of the *list structure* held by that <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



For information about the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 







 



 



**Examples:**
```lisp

(setq x (cons () ())) *→* (NIL) 
(setf (getf (car x) ’prop1) ’val1) *→* VAL1 
(remf (car x) ’prop1) *→ true* 
(remf (car x) ’prop1) *→ false* 

```
**Side Effects:** 



The property list stored in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> is modified. 



**See Also:** 



<DictionaryLink styled={true} term={"remprop"}><b>remprop</b></DictionaryLink>, <DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> 



