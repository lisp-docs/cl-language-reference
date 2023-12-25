**with-slots** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"with-slots"}><b>with-slots</b></DictionaryLink> (*\{slot-entry\}*\*) *instance-form \{declaration\}*\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ \{result\}*\* 



*slot-entry::*=*slot-name |* (*variable-name slot-name*) 



**Arguments and Values:** 



*slot-name*—a *slot name*; not evaluated. 



*variable-name*—a *variable name*; not evaluated. 



*instance-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluted to produce <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



The macro <DictionaryLink styled={true} term={"with-slots"}><b>with-slots</b></DictionaryLink> *establishes* a *lexical environment* for referring to the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> named by the given *slot-names* as though they were <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm>. Within such a context the value of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> can be specified by using its slot name, as if it were a lexically bound variable. Both <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> and <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink> can be used to set the value of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



The macro <DictionaryLink styled={true} term={"with-slots"}><b>with-slots</b></DictionaryLink> translates an appearance of the slot name as a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> into a call to <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>. 



**Examples:**
```lisp

(defclass thing () 

  
  
  **with-slots** 
  ((x :initarg :x :accessor thing-x) 
   (y :initarg :y :accessor thing-y))) 
*→* #<STANDARD-CLASS THING 250020173> 
(defmethod (setf thing-x) :before (new-x (thing thing)) 
	   (format t "~&Changing X from ~D to ~D in ~S.~%" 
		   (thing-x thing) new-x thing)) 
(setq thing (make-instance ’thing :x 0 :y 1)) *→* #<THING 62310540> 
(with-slots (x y) thing (incf x) (incf y)) *→* 2 
(values (thing-x thing) (thing-y thing)) *→* 1, 2 
(setq thing1 (make-instance ’thing :x 1 :y 2)) *→* #<THING 43135676> 
(setq thing2 (make-instance ’thing :x 7 :y 8)) *→* #<THING 43147374> 
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
*→* ((1 1 2 2 7 7 8 8) 
     9 
     (9 9 2 2 7 7 8 8) 
     (9) 
     (9 9 2 2 (9) (9) 8 8)) 

```
**Affected By:** 



<DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> 



**Exceptional Situations:** 



The consequences are undefined if any *slot-name* is not the name of a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"with-accessors"}><b>with-accessors</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> 



**Notes:** 



A <DictionaryLink styled={true} term={"with-slots"}><b>with-slots</b></DictionaryLink> expression of the form: 



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



