**shiftf** *Macro* 



**Syntax:** 



**shiftf** *\{place\}*<sup>+</sup> *newvalue ! old-value-1* 



**Arguments and Values:** 



*place*—a *place*. 



*newvalue*—a *form*; evaluated. 



*old-value-1*—an *object* (the old *value* of the first *place*). 



**Description:** 



**shiftf** modifies the values of each *place* by storing *newvalue* into the last *place*, and shifting the values of the second through the last *place* into the remaining *places*. 



If *newvalue* produces more values than there are store variables, the extra values are ignored. If *newvalue* produces fewer values than there are store variables, the missing values are set to **nil**. 



In the form (shiftf *place1 place2* ... *placen newvalue*), the values in *place1* through *placen* are *read* and saved, and *newvalue* is evaluated, for a total of n+1 values in all. Values 2 through n+1 are then stored into *place1* through *placen*, respectively. It is as if all the *places* form a shift register; the *newvalue* is shifted in from the right, all values shift over to the left one place, and the value shifted out of *place1* is returned. 



For information about the *evaluation* of *subforms* of *places*, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



**Examples:**
```lisp

(setq x (list 1 2 3) y ’trash) *!* TRASH 
(shiftf y x (cdr x) ’(hi there)) *!* TRASH 
x *!* (2 3) 
y *!* (1 HI THERE) 
Data and Control 


(setq x (list ’a ’b ’c)) *!* (A B C) 
(shiftf (cadr x) ’z) *!* B 
x *!* (A Z C) 
(shiftf (cadr x) (cddr x) ’q) *!* Z 
x *!* (A (C) . Q) 
(setq n 0) *!* 0 
(setq x (list ’a ’b ’c ’d)) *!* (A B C D) 
(shiftf (nth (setq n (+ n 1)) x) ’z) *!* B 
x *!* (A Z C D) 

```
**Aected By:** 



**define-setf-expander**, **defsetf**, **\*macroexpand-hook\*** 



**See Also:** 



**setf**, **rotatef**, Section 5.1 (Generalized Reference) 



**Notes:** 



The e↵ect of (shiftf *place1 place2* ... *placen newvalue*) is roughly equivalent to 



(let ((var1 *place1*) 



(var2 *place2*) 



... 



(varn *placen*) 



(var0 *newvalue*)) 



(setf *place1* var2) 



(setf *place2* var3) 



... 



(setf *placen* var0) 



var1) 



except that the latter would evaluate any *subforms* of each place twice, whereas **shiftf** evaluates them once. For example, 



(setq n 0) *!* 0 



(setq x (list ’a ’b ’c ’d)) *!* (A B C D) 



(prog1 (nth (setq n (+ n 1)) x) 



(setf (nth (setq n (+ n 1)) x) ’z)) *!* B 



x *!* (A B Z D) 







 



 



**rotatef** 



