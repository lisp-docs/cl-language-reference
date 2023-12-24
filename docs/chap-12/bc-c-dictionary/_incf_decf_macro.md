**incf, decf** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"incf"}><b>incf</b></ClLinks> <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> [*delta-form*] → new-value 



<ClLinks styled={true} term={"decf"}><b>decf</b></ClLinks> <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> [*delta-form*] → new-value 



**Arguments and Values:** 



<ClLinks styled={true} term={"place"}><i>place</i></ClLinks>—a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



*delta-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated to produce a *delta*. The default is 1. 



*delta*—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



*new-value*—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 







 



 



**Description:** 



<ClLinks styled={true} term={"incf"}><b>incf</b></ClLinks> and <ClLinks styled={true} term={"decf"}><b>decf</b></ClLinks> are used for incrementing and decrementing the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, respectively. 



The *delta* is added to (in the case of <ClLinks styled={true} term={"incf"}><b>incf</b></ClLinks>) or subtracted from (in the case of <ClLinks styled={true} term={"decf"}><b>decf</b></ClLinks>) the number in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> and the result is stored in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



Any necessary type conversions are performed automatically. 



For information about the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>places</i></ClLinks>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



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



<ClLinks styled={true} term={"place"}><i>Place</i></ClLinks> is modified. 



**See Also:** 



<ClLinks styled={true} term={"+"}><b>+</b></ClLinks>, <ClLinks styled={true} term={"-"}><b>-</b></ClLinks>, <ClLinks styled={true} term={"1+"}><b>1+</b></ClLinks>, **1-**, <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> 



