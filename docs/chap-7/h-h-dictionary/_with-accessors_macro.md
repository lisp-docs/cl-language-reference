**with-accessors** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"with-accessors"}><b>with-accessors</b></DictionaryLink> (*\{slot-entry\}*\*) *instance-form \{declaration\}*\* <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



→ \{result\}\* 



*slot-entry::*=(*variable-name accessor-name*) 



**Arguments and Values:** 



*variable-name*—a *variable name*; not evaluated. 



*accessor-name*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>; not evaluated. 



*instance-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



Creates a lexical environment in which the slots specified by *slot-entry* are lexically available through their accessors as if they were variables. The macro <DictionaryLink  term={"with-accessors"}><b>with-accessors</b></DictionaryLink> invokes the appropriate accessors to <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> specified by *slot-entry*. Both <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> and <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> can be used to set the value of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 







 



 



<DictionaryLink  term={"with-accessors"}><b>with-accessors</b></DictionaryLink> 



**Examples:**
```lisp
(defclass thing () 
  ((x :initarg :x :accessor thing-x) 
   (y :initarg :y :accessor thing-y))) 
→ #<STANDARD-CLASS THING 250020173> 
(defmethod (setf thing-x) :before (new-x (thing thing)) 
  (format t "~&Changing X from ~D to ~D in ~S.~%" 
	  (thing-x thing) new-x thing)) 
(setq thing1 (make-instance ’thing :x 1 :y 2)) → #<THING 43135676> 
(setq thing2 (make-instance ’thing :x 7 :y 8)) → #<THING 43147374> 
(with-accessors ((x1 thing-x) (y1 thing-y)) 
    thing1 
  (with-accessors ((x2 thing-x) (y2 thing-y)) 
      thing2 
    (list (list x1 (thing-x thing1) y1 (thing-y thing1) 
		x2 (thing-x thing2) y2 (thing-y thing2)) 
	  (setq x1 (+ y1 x2)) 
	  (list x1 (thing-x thing1) y1 (thing-y thing1) 
		x2 (thing-x thing2) y2 (thing-y thing2)) 
	  (setf (thing-x thing2) (list x1)) 
	  (list x1 (thing-x thing1) y1 (thing-y thing1) 
		x2 (thing-x thing2) y2 (thing-y thing2))))) 
▷ Changing X from 1 to 9 in #<THING 43135676>. 
▷ Changing X from 7 to (9) in #<THING 43147374>. 
→ ((1 1 2 2 7 7 8 8) 
   9 
   (9 9 2 2 7 7 8 8) 
   (9) 
   (9 9 2 2 (9) (9) 8 8)) 
```
**Affected By:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> 



**Exceptional Situations:** 



The consequences are undefined if any *accessor-name* is not the name of an accessor for the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"with-slots"}><b>with-slots</b></DictionaryLink>, <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> 



**Notes:** 



A <DictionaryLink  term={"with-accessors"}><b>with-accessors</b></DictionaryLink> expression of the form: 



(with-accessors (<i>slot-entry</i><sub>1</sub><i>. . . slot-entry<sub>n</sub></i>) <i>instance-form form</i><sub>1</sub><i>. . . form<sub>k</sub></i>) 







 



 



expands into the equivalent of 



(let ((*in instance-form*)) 



(symbol-macrolet (<i>Q</i><sub>1</sub><i>. . . Q<sub>n</sub></i>) <i>form</i><sub>1</sub><i>. . . form<sub>k</sub></i>)) 



where <i>Q<sub>i</sub></i>is 



(<i>variable-name<sub>i</sub></i> () (<i>accessor-name<sub>i</sub> in</i>)) 



