**with-accessors** *Macro* 

**Syntax:** 

**with-accessors** (*&#123;slot-entry&#125;*\*) *instance-form &#123;declaration&#125;*\* *&#123;form&#125;*\* 

*→ &#123;result&#125;*\* 

*slot-entry::*=(*variable-name accessor-name*) 

**Arguments and Values:** 

*variable-name*—a *variable name*; not evaluated. 

*accessor-name*—a *function name*; not evaluated. 

*instance-form*—a *form*; evaluated. 

*declaration*—a **declare** *expression*; not evaluated. 

*forms*—an *implicit progn*. 

*results*—the *values* returned by the *forms*. 

**Description:** 

Creates a lexical environment in which the slots specified by *slot-entry* are lexically available through their accessors as if they were variables. The macro **with-accessors** invokes the appropriate accessors to *access* the *slots* specified by *slot-entry*. Both **setf** and **setq** can be used to set the value of the *slot*. 



 

 

**with-accessors** 

**Examples:** 

(defclass thing () 

((x :initarg :x :accessor thing-x) 

(y :initarg :y :accessor thing-y))) 

*→* #&#60;STANDARD-CLASS THING 250020173&#62; 

(defmethod (setf thing-x) :before (new-x (thing thing)) 

(format t "~&Changing X from ~D to ~D in ~S.~%" 

(thing-x thing) new-x thing)) 

(setq thing1 (make-instance ’thing :x 1 :y 2)) *→* #&#60;THING 43135676&#62; 

(setq thing2 (make-instance ’thing :x 7 :y 8)) *→* #&#60;THING 43147374&#62; 

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

&#9655; Changing X from 1 to 9 in #&#60;THING 43135676&#62;. 

&#9655; Changing X from 7 to (9) in #&#60;THING 43147374&#62;. 

*→* ((1 1 2 2 7 7 8 8) 

9 

(9 9 2 2 7 7 8 8) 

(9) 

(9 9 2 2 (9) (9) 8 8)) 

**Affected By:** 

**defclass** 

**Exceptional Situations:** 

The consequences are undefined if any *accessor-name* is not the name of an accessor for the *instance*. 

**See Also:** 

**with-slots**, **symbol-macrolet** 

**Notes:** 

A **with-accessors** expression of the form: 

(with-accessors (&#60;i&#62;slot-entry&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62;&#60;i&#62;. . . slot-entry&#60;sub&#62;n&#60;/sub&#62;&#60;/i&#62;) &#60;i&#62;instance-form form&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62;&#60;i&#62;. . . form&#60;sub&#62;k&#60;/sub&#62;&#60;/i&#62;) 



 

 

expands into the equivalent of 

(let ((*in instance-form*)) 

(symbol-macrolet (&#60;i&#62;Q&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62;&#60;i&#62;. . . Q&#60;sub&#62;n&#60;/sub&#62;&#60;/i&#62;) &#60;i&#62;form&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62;&#60;i&#62;. . . form&#60;sub&#62;k&#60;/sub&#62;&#60;/i&#62;)) 

where &#60;i&#62;Q&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;is 

(&#60;i&#62;variable-name&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62; () (&#60;i&#62;accessor-name&#60;sub&#62;i&#60;/sub&#62; in&#60;/i&#62;)) 

