**values** *Accessor* 



**Syntax:** 



**values** &amp;rest *object ! \{object\}*\* 



**(setf (values** &amp;rest *place***)** *new-values***)** 



**Arguments and Values:** 



*object*—an *object*. 



*place*—a *place*. 



*new-value*—an *object*. 



**Description:** 



**values** returns the *objects* as *multiple values*<sub>2</sub>. 



**setf** of **values** is used to store the *multiple values*<sub>2</sub> *new-values* into the *places*. See Section 5.1.2.3 (VALUES Forms as Places). 



**Examples:**
```lisp
 



(values) *! hno valuesi* 



(values 1) *!* 1 



(values 1 2) *!* 1, 2 



(values 1 2 3) *!* 1, 2, 3 



(values (values 1 2 3) 4 5) *!* 1, 4, 5 



(defun polar (x y) 



(values (sqrt (+ (\* x x) (\* y y))) (atan y x))) *!* POLAR 



(multiple-value-bind (r theta) (polar 3.0 4.0) 



(vector r theta)) 



*!* #(5.0 0.927295) 



Sometimes it is desirable to indicate explicitly that a function returns exactly one value. For example, the function 



(defun foo (x y) 



(floor (+ x y) y)) *!* FOO 



returns two values because **floor** returns two values. It may be that the second value makes no sense, or that for eciency reasons it is desired not to compute the second value. **values** is the standard idiom for indicating that only one value is to be returned: 







 



 



(defun foo (x y) 



(values (floor (+ x y) y))) *!* FOO 



This works because **values** returns exactly one value for each of *args*; as for any function call, if any of *args* produces more than one value, all but the first are discarded. 




```
**See Also:** 



**values-list**, **multiple-value-bind**, **multiple-values-limit**, Section 3.1 (Evaluation) 



**Notes:** 



Since **values** is a *function*, not a *macro* or *special form*, it receives as *arguments* only the *primary values* of its *argument forms*. 



