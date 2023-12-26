**with-slots** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"with-slots"}><b>with-slots</b></ClLinks> (*\{slot-entry\}*\*) *instance-form \{declaration\}*\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



*slot-entry::*=*slot-name |* (*variable-name slot-name*) 



**Arguments and Values:** 



*slot-name*—a *slot name*; not evaluated. 



*variable-name*—a *variable name*; not evaluated. 



*instance-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluted to produce <ClLinks  term={"instance"}><i>instance</i></ClLinks>. 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



The macro <ClLinks  term={"with-slots"}><b>with-slots</b></ClLinks> *establishes* a <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> for referring to the <ClLinks  term={"slot"}><i>slots</i></ClLinks> in the <ClLinks  term={"instance"}><i>instance</i></ClLinks> named by the given *slot-names* as though they were <ClLinks  term={"variable"}><i>variables</i></ClLinks>. Within such a context the value of the <ClLinks  term={"slot"}><i>slot</i></ClLinks> can be specified by using its slot name, as if it were a lexically bound variable. Both <ClLinks  term={"setf"}><b>setf</b></ClLinks> and <ClLinks  term={"setq"}><b>setq</b></ClLinks> can be used to set the value of the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



The macro <ClLinks  term={"with-slots"}><b>with-slots</b></ClLinks> translates an appearance of the slot name as a <ClLinks  term={"variable"}><i>variable</i></ClLinks> into a call to <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks>. 



**Examples:**
```lisp
(defclass thing () 
  
  
  **with-slots** 
  ((x :initarg :x :accessor thing-x) 
   (y :initarg :y :accessor thing-y))) 
→ #<STANDARD-CLASS THING 250020173> 
(defmethod (setf thing-x) :before (new-x (thing thing)) 
  (format t "~&Changing X from ~D to ~D in ~S.~%" 
	  (thing-x thing) new-x thing)) 
(setq thing (make-instance ’thing :x 0 :y 1)) → #<THING 62310540> 
(with-slots (x y) thing (incf x) (incf y)) → 2 
(values (thing-x thing) (thing-y thing)) → 1, 2 
(setq thing1 (make-instance ’thing :x 1 :y 2)) → #<THING 43135676> 
(setq thing2 (make-instance ’thing :x 7 :y 8)) → #<THING 43147374> 
(with-slots ((x1 x) (y1 y)) 
    thing1 
  (with-slots ((x2 x) (y2 y)) 
      thing2 
    (list (list x1 (thing-x thing1) y1 (thing-y thing1) 
		x2 (thing-x thing2) y2 (thing-y thing2)) 
	  (setq x1 (+ y1 x2)) 
	  (list x1 (thing-x thing1) y1 (thing-y thing1) 
		x2 (thing-x thing2) y2 (thing-y thing2)) 
	  (setf (thing-x thing2) (list x1)) 
	  (list x1 (thing-x thing1) y1 (thing-y thing1) 
		x2 (thing-x thing2) y2 (thing-y thing2))))) 
▷ Changing X from 7 to (9) in #<THING 43147374>. 
→ ((1 1 2 2 7 7 8 8) 
   9 
   (9 9 2 2 7 7 8 8) 
   (9) 
   (9 9 2 2 (9) (9) 8 8)) 
```
**Affected By:** 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks> 



**Exceptional Situations:** 



The consequences are undefined if any *slot-name* is not the name of a <ClLinks  term={"slot"}><i>slot</i></ClLinks> in the <ClLinks  term={"instance"}><i>instance</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"with-accessors"}><b>with-accessors</b></ClLinks>, <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks>, <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> 



**Notes:** 



A <ClLinks  term={"with-slots"}><b>with-slots</b></ClLinks> expression of the form: 



(with-slots (<i>slot-entry</i><sub>1</sub><i>. . . slot-entry<sub>n</sub></i>) <i>instance-form form</i><sub>1</sub><i>. . . form<sub>k</sub></i>) 



expands into the equivalent of 







 



 



(let ((*in instance-form*)) 



(symbol-macrolet (<i>Q</i><sub>1</sub><i>. . . Q<sub>n</sub></i>) <i>form</i><sub>1</sub><i>. . . form<sub>k</sub></i>)) 



where <i>Q<sub>i</sub></i>is 



(<i>slot-entry<sub>i</sub></i>() (slot-value <i>in</i> ’<i>slot-entry<sub>i</sub></i>)) 



if <i>slot-entry<sub>i</sub></i>is a <i>symbol</i> and is 



(<i>variable-name<sub>i</sub></i> () (slot-value <i>in</i> ’<i>slot-name<sub>i</sub></i>)) 



if <i>slot-entry<sub>i</sub></i>is of the form 



(<i>variable-name<sub>i</sub> slot-name<sub>i</sub></i>) 



