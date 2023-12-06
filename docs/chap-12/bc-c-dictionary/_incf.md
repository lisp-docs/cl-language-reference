**incf, decf** *Macro* 



**Syntax:** 



**incf** *place* [*delta-form*] *→ new-value* 



**decf** *place* [*delta-form*] *→ new-value* 



**Arguments and Values:** 



*place*—a *place*. 



*delta-form*—a *form*; evaluated to produce a *delta*. The default is 1. 



*delta*—a *number* . 



*new-value*—a *number* . 







 



 



**Description:** 



**incf** and **decf** are used for incrementing and decrementing the *value* of *place*, respectively. 



The *delta* is added to (in the case of **incf**) or subtracted from (in the case of **decf**) the number in *place* and the result is stored in *place*. 



Any necessary type conversions are performed automatically. 



For information about the *evaluation* of *subforms* of *places*, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



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



*Place* is modified. 



**See Also:** 



**+**, **-**, **1+**, **1-**, **setf** 



