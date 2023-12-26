**shiftf** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"shiftf"}><b>shiftf</b></DictionaryLink> <GlossaryTerm  term={"place"}><i>\{place\}</i></GlossaryTerm><sup>+</sup> *newvalue ! old-value-1* 



**Arguments and Values:** 



<GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. 



*newvalue*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated. 



*old-value-1*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> (the old <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the first <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>). 



**Description:** 



<DictionaryLink  term={"shiftf"}><b>shiftf</b></DictionaryLink> modifies the values of each <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> by storing *newvalue* into the last <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>, and shifting the values of the second through the last <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> into the remaining <GlossaryTerm  term={"place"}><i>places</i></GlossaryTerm>. 



If *newvalue* produces more values than there are store variables, the extra values are ignored. If *newvalue* produces fewer values than there are store variables, the missing values are set to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



In the form (shiftf *place1 place2* ... *placen newvalue*), the values in *place1* through *placen* are <GlossaryTerm  term={"read"}><i>read</i></GlossaryTerm> and saved, and *newvalue* is evaluated, for a total of n+1 values in all. Values 2 through n+1 are then stored into *place1* through *placen*, respectively. It is as if all the <GlossaryTerm  term={"place"}><i>places</i></GlossaryTerm> form a shift register; the *newvalue* is shifted in from the right, all values shift over to the left one place, and the value shifted out of *place1* is returned. 



For information about the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm  term={"place"}><i>places</i></GlossaryTerm>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



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



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink>, **\*macroexpand-hook\*** 



**See Also:** 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink  term={"rotatef"}><b>rotatef</b></DictionaryLink>, Section 5.1 (Generalized Reference) 



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



except that the latter would evaluate any <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> of each place twice, whereas <DictionaryLink  term={"shiftf"}><b>shiftf</b></DictionaryLink> evaluates them once. For example, 



(setq n 0) *!* 0 



(setq x (list ’a ’b ’c ’d)) *!* (A B C D) 



(prog1 (nth (setq n (+ n 1)) x) 



(setf (nth (setq n (+ n 1)) x) ’z)) *!* B 



x *!* (A B Z D) 







 



 



<DictionaryLink  term={"rotatef"}><b>rotatef</b></DictionaryLink> 



