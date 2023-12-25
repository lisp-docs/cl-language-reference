**shiftf** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"shiftf"}><b>shiftf</b></ClLinks> <ClLinks  term={"place"}><i>\{place\}</i></ClLinks><sup>+</sup> *newvalue ! old-value-1* 



**Arguments and Values:** 



<ClLinks  term={"place"}><i>place</i></ClLinks>—a <ClLinks  term={"place"}><i>place</i></ClLinks>. 



*newvalue*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated. 



*old-value-1*—an <ClLinks  term={"object"}><i>object</i></ClLinks> (the old <ClLinks  term={"value"}><i>value</i></ClLinks> of the first <ClLinks  term={"place"}><i>place</i></ClLinks>). 



**Description:** 



<ClLinks  term={"shiftf"}><b>shiftf</b></ClLinks> modifies the values of each <ClLinks  term={"place"}><i>place</i></ClLinks> by storing *newvalue* into the last <ClLinks  term={"place"}><i>place</i></ClLinks>, and shifting the values of the second through the last <ClLinks  term={"place"}><i>place</i></ClLinks> into the remaining <ClLinks  term={"place"}><i>places</i></ClLinks>. 



If *newvalue* produces more values than there are store variables, the extra values are ignored. If *newvalue* produces fewer values than there are store variables, the missing values are set to <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



In the form (shiftf *place1 place2* ... *placen newvalue*), the values in *place1* through *placen* are <ClLinks  term={"read"}><i>read</i></ClLinks> and saved, and *newvalue* is evaluated, for a total of n+1 values in all. Values 2 through n+1 are then stored into *place1* through *placen*, respectively. It is as if all the <ClLinks  term={"place"}><i>places</i></ClLinks> form a shift register; the *newvalue* is shifted in from the right, all values shift over to the left one place, and the value shifted out of *place1* is returned. 



For information about the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of <ClLinks  term={"place"}><i>places</i></ClLinks>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



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



<ClLinks  term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks>, <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks>, **\*macroexpand-hook\*** 



**See Also:** 



<ClLinks  term={"setf"}><b>setf</b></ClLinks>, <ClLinks  term={"rotatef"}><b>rotatef</b></ClLinks>, Section 5.1 (Generalized Reference) 



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



except that the latter would evaluate any <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of each place twice, whereas <ClLinks  term={"shiftf"}><b>shiftf</b></ClLinks> evaluates them once. For example, 



(setq n 0) *!* 0 



(setq x (list ’a ’b ’c ’d)) *!* (A B C D) 



(prog1 (nth (setq n (+ n 1)) x) 



(setf (nth (setq n (+ n 1)) x) ’z)) *!* B 



x *!* (A B Z D) 







 



 



<ClLinks  term={"rotatef"}><b>rotatef</b></ClLinks> 



