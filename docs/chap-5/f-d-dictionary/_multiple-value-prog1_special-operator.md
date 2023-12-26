**multiple-value-prog1** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"multiple-value-prog1"}><b>multiple-value-prog1</b></ClLinks> *first-form \{form\}*\* *! first-form-results* 



**Arguments and Values:** 



*first-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



*first-form-results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> resulting from the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of *first-form*. 



**Description:** 



<ClLinks  term={"multiple-value-prog1"}><b>multiple-value-prog1</b></ClLinks> evaluates *first-form* and saves all the values produced by that <ClLinks  term={"form"}><i>form</i></ClLinks>. It then evaluates each <ClLinks  term={"form"}><i>form</i></ClLinks> from left to right, discarding their values. 



**Examples:**
```lisp
(setq temp ’(1 2 3)) *!* (1 2 3) 
(multiple-value-prog1 
    (values-list temp) 
  (setq temp nil) 
  (values-list temp)) *!* 1, 2, 3 
```
**See Also:** 



<ClLinks  term={"prog1"}><b>prog1</b></ClLinks> 







 



 



<ClLinks  term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks> 



