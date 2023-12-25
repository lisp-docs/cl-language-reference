**rotatef** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"rotatef"}><b>rotatef</b></ClLinks> <ClLinks  term={"place"}><i>\{place\}</i></ClLinks>\* *!* <ClLinks  term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



<ClLinks  term={"place"}><i>place</i></ClLinks>—a <ClLinks  term={"place"}><i>place</i></ClLinks>. 



**Description:** 



<ClLinks  term={"rotatef"}><b>rotatef</b></ClLinks> modifies the values of each <ClLinks  term={"place"}><i>place</i></ClLinks> by rotating values from one <ClLinks  term={"place"}><i>place</i></ClLinks> into another. 



If a <ClLinks  term={"place"}><i>place</i></ClLinks> produces more values than there are store variables, the extra values are ignored. If a <ClLinks  term={"place"}><i>place</i></ClLinks> produces fewer values than there are store variables, the missing values are set to <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



In the form (rotatef *place1 place2* ... *placen*), the values in *place1* through *placen* are <ClLinks  term={"read"}><i>read</i></ClLinks> and *written*. Values 2 through *n* and value 1 are then stored into *place1* through *placen*. It is as if all the places form an end-around shift register that is rotated one place to the left, with the value of *place1* being shifted around the end to *placen*. 



For information about the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of <ClLinks  term={"place"}><i>places</i></ClLinks>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



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



<ClLinks  term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks>, <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks>, <ClLinks  term={"setf"}><b>setf</b></ClLinks>, <ClLinks  term={"shiftf"}><b>shiftf</b></ClLinks>, **\*macroexpand-hook\***, Section 5.1 (Generalized Reference) 



**Notes:** 



The e↵ect of (rotatef *place1 place2* ... *placen*) is roughly equivalent to 



(psetf *place1 place2* 



*place2 place3* 



... 



*placen place1*) 



except that the latter would evaluate any <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of each place twice, whereas <ClLinks  term={"rotatef"}><b>rotatef</b></ClLinks> evaluates them once. 



Data and Control 



 



 



