**incf, decf** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"incf"}><b>incf</b></ClLinks> <ClLinks  term={"place"}><i>place</i></ClLinks> [*delta-form*] → new-value 



<ClLinks  term={"decf"}><b>decf</b></ClLinks> <ClLinks  term={"place"}><i>place</i></ClLinks> [*delta-form*] → new-value 



**Arguments and Values:** 



<ClLinks  term={"place"}><i>place</i></ClLinks>—a <ClLinks  term={"place"}><i>place</i></ClLinks>. 



*delta-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated to produce a *delta*. The default is 1. 



*delta*—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*new-value*—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 







 



 



**Description:** 



<ClLinks  term={"incf"}><b>incf</b></ClLinks> and <ClLinks  term={"decf"}><b>decf</b></ClLinks> are used for incrementing and decrementing the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"place"}><i>place</i></ClLinks>, respectively. 



The *delta* is added to (in the case of <ClLinks  term={"incf"}><b>incf</b></ClLinks>) or subtracted from (in the case of <ClLinks  term={"decf"}><b>decf</b></ClLinks>) the number in <ClLinks  term={"place"}><i>place</i></ClLinks> and the result is stored in <ClLinks  term={"place"}><i>place</i></ClLinks>. 



Any necessary type conversions are performed automatically. 



For information about the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of <ClLinks  term={"place"}><i>places</i></ClLinks>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



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



<ClLinks  term={"place"}><i>Place</i></ClLinks> is modified. 



**See Also:** 



<ClLinks  term={"+"}><b>+</b></ClLinks>, <ClLinks  term={"-"}><b>-</b></ClLinks>, <ClLinks  term={"1+"}><b>1+</b></ClLinks>, **1-**, <ClLinks  term={"setf"}><b>setf</b></ClLinks> 



