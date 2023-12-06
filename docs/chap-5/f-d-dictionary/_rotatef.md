**rotatef** *Macro* 



**Syntax:** 



**rotatef** *\{place\}*\* *!* **nil** 



**Arguments and Values:** 



*place*—a *place*. 



**Description:** 



**rotatef** modifies the values of each *place* by rotating values from one *place* into another. 



If a *place* produces more values than there are store variables, the extra values are ignored. If a *place* produces fewer values than there are store variables, the missing values are set to **nil**. 



In the form (rotatef *place1 place2* ... *placen*), the values in *place1* through *placen* are *read* and *written*. Values 2 through *n* and value 1 are then stored into *place1* through *placen*. It is as if all the places form an end-around shift register that is rotated one place to the left, with the value of *place1* being shifted around the end to *placen*. 



For information about the *evaluation* of *subforms* of *places*, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



**Examples:**
```lisp
 



(let ((n 0) 



(x (list ’a ’b ’c ’d ’e ’f ’g))) 



(rotatef (nth (incf n) x) 



(nth (incf n) x) 



(nth (incf n) x)) 



x) *!* (A C D B E F G) 




```
**See Also:** 



**define-setf-expander**, **defsetf**, **setf**, **shiftf**, **\*macroexpand-hook\***, Section 5.1 (Generalized Reference) 



**Notes:** 



The e↵ect of (rotatef *place1 place2* ... *placen*) is roughly equivalent to 



(psetf *place1 place2* 



*place2 place3* 



... 



*placen place1*) 



except that the latter would evaluate any *subforms* of each place twice, whereas **rotatef** evaluates them once. 



Data and Control 



 



 



