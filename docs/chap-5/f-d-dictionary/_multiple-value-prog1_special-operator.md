**multiple-value-prog1** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"multiple-value-prog1"}><b>multiple-value-prog1</b></DictionaryLink> *first-form \{form\}*\* *! first-form-results* 



**Arguments and Values:** 



*first-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



*first-form-results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> resulting from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of *first-form*. 



**Description:** 



<DictionaryLink styled={true} term={"multiple-value-prog1"}><b>multiple-value-prog1</b></DictionaryLink> evaluates *first-form* and saves all the values produced by that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. It then evaluates each <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> from left to right, discarding their values. 



**Examples:**
```lisp

(setq temp ’(1 2 3)) *!* (1 2 3) 
(multiple-value-prog1 
    (values-list temp) 
  (setq temp nil) 
  (values-list temp)) *!* 1, 2, 3 

```
**See Also:** 



<DictionaryLink styled={true} term={"prog1"}><b>prog1</b></DictionaryLink> 







 



 



<DictionaryLink styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink> 



