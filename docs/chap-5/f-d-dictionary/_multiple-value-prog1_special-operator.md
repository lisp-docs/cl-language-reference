**multiple-value-prog1** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"multiple-value-prog1"}><b>multiple-value-prog1</b></DictionaryLink> *first-form \{form\}*\* *! first-form-results* 



**Arguments and Values:** 



*first-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



*first-form-results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> resulting from the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of *first-form*. 



**Description:** 



<DictionaryLink  term={"multiple-value-prog1"}><b>multiple-value-prog1</b></DictionaryLink> evaluates *first-form* and saves all the values produced by that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. It then evaluates each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> from left to right, discarding their values. 



**Examples:**
```lisp
(setq temp ’(1 2 3)) *!* (1 2 3) 
(multiple-value-prog1 
    (values-list temp) 
  (setq temp nil) 
  (values-list temp)) *!* 1, 2, 3 
```
**See Also:** 



<DictionaryLink  term={"prog1"}><b>prog1</b></DictionaryLink> 







 



 



<DictionaryLink  term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink> 



