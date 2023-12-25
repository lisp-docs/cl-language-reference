**with-accessors** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"with-accessors"}><b>with-accessors</b></ClLinks> (*\{slot-entry\}*\*) *instance-form \{declaration\}*\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



*slot-entry::*=(*variable-name accessor-name*) 



**Arguments and Values:** 



*variable-name*—a *variable name*; not evaluated. 



*accessor-name*—a *function name*; not evaluated. 



*instance-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



Creates a lexical environment in which the slots specified by *slot-entry* are lexically available through their accessors as if they were variables. The macro <ClLinks  term={"with-accessors"}><b>with-accessors</b></ClLinks> invokes the appropriate accessors to <ClLinks  term={"access"}><i>access</i></ClLinks> the <ClLinks  term={"slot"}><i>slots</i></ClLinks> specified by *slot-entry*. Both <ClLinks  term={"setf"}><b>setf</b></ClLinks> and <ClLinks  term={"setq"}><b>setq</b></ClLinks> can be used to set the value of the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 







 



 



<ClLinks  term={"with-accessors"}><b>with-accessors</b></ClLinks> 



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



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks> 



**Exceptional Situations:** 



The consequences are undefined if any *accessor-name* is not the name of an accessor for the <ClLinks  term={"instance"}><i>instance</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"with-slots"}><b>with-slots</b></ClLinks>, <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> 



**Notes:** 



A <ClLinks  term={"with-accessors"}><b>with-accessors</b></ClLinks> expression of the form: 



(with-accessors (<i>slot-entry</i><sub>1</sub><i>. . . slot-entry<sub>n</sub></i>) <i>instance-form form</i><sub>1</sub><i>. . . form<sub>k</sub></i>) 







 



 



expands into the equivalent of 



(let ((*in instance-form*)) 



(symbol-macrolet (<i>Q</i><sub>1</sub><i>. . . Q<sub>n</sub></i>) <i>form</i><sub>1</sub><i>. . . form<sub>k</sub></i>)) 



where <i>Q<sub>i</sub></i>is 



(<i>variable-name<sub>i</sub></i> () (<i>accessor-name<sub>i</sub> in</i>)) 



