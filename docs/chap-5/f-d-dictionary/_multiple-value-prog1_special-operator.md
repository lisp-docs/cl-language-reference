**multiple-value-prog1** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"multiple-value-prog1"}><b>multiple-value-prog1</b></ClLinks> *first-form \{form\}*\* *! first-form-results* 



**Arguments and Values:** 



*first-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



*first-form-results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> resulting from the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of *first-form*. 



**Description:** 



<ClLinks styled={true} term={"multiple-value-prog1"}><b>multiple-value-prog1</b></ClLinks> evaluates *first-form* and saves all the values produced by that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. It then evaluates each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> from left to right, discarding their values. 



**Examples:**
```lisp

(setq temp ’(1 2 3)) *!* (1 2 3) 
(multiple-value-prog1 
    (values-list temp) 
  (setq temp nil) 
  (values-list temp)) *!* 1, 2, 3 

```
**See Also:** 



<ClLinks styled={true} term={"prog1"}><b>prog1</b></ClLinks> 







 



 



<ClLinks styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks> 



