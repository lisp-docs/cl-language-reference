**rotatef** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"rotatef"}><b>rotatef</b></DictionaryLink> <GlossaryTerm  term={"place"}><i>\{place\}</i></GlossaryTerm>\* *!* <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"rotatef"}><b>rotatef</b></DictionaryLink> modifies the values of each <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> by rotating values from one <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> into another. 



If a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> produces more values than there are store variables, the extra values are ignored. If a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> produces fewer values than there are store variables, the missing values are set to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



In the form (rotatef *place1 place2* ... *placen*), the values in *place1* through *placen* are <GlossaryTerm  term={"read"}><i>read</i></GlossaryTerm> and *written*. Values 2 through *n* and value 1 are then stored into *place1* through *placen*. It is as if all the places form an end-around shift register that is rotated one place to the left, with the value of *place1* being shifted around the end to *placen*. 



For information about the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm  term={"place"}><i>places</i></GlossaryTerm>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



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



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink  term={"shiftf"}><b>shiftf</b></DictionaryLink>, **\*macroexpand-hook\***, Section 5.1 (Generalized Reference) 



**Notes:** 



The e↵ect of (rotatef *place1 place2* ... *placen*) is roughly equivalent to 



(psetf *place1 place2* 



*place2 place3* 



... 



*placen place1*) 



except that the latter would evaluate any <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> of each place twice, whereas <DictionaryLink  term={"rotatef"}><b>rotatef</b></DictionaryLink> evaluates them once. 



Data and Control 



 



 



