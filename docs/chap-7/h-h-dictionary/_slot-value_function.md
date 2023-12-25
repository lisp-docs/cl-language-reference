**slot-value** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> *object slot-name → value* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks styled={true} term={"value"}><i>value</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> returns the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> named *slot-name* in the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. If there is no <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> named *slot-name*, <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> is called. If the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is unbound, <ClLinks styled={true} term={"slot-unbound"}><b>slot-unbound</b></ClLinks> is called. 



The macro <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> can be used with <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> to change the value of a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



**Examples:**
```lisp
(defclass foo () 
  ((a :accessor foo-a :initarg :a :initform 1) 
   (b :accessor foo-b :initarg :b) 
   (c :accessor foo-c :initform 3))) 
→ #<STANDARD-CLASS FOO 244020371> 
(setq foo1 (make-instance ’foo :a ’one :b ’two)) 
→ #<FOO 36325624> 
(slot-value foo1 ’a) → ONE 
(slot-value foo1 ’b) → TWO 
(slot-value foo1 ’c) → 3 
(setf (slot-value foo1 ’a) ’uno) → UNO 
(slot-value foo1 ’a) → UNO 
(defmethod foo-method ((x foo)) 
  (slot-value x ’a)) 
→ #<STANDARD-METHOD FOO-METHOD (FOO) 42720573> 
(foo-method foo1) → UNO 


```
**Exceptional Situations:** 



If an attempt is made to read a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> and no <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* exists in the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> is called as follows: 



(slot-missing (class-of <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>) 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> 



*slot-name* 



’slot-value) 



(If <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> is invoked, its *primary value* is returned by <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks>.) 



If an attempt is made to write a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> and no <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* exists in the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> is called as follows: 



(slot-missing (class-of <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>) 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> 



*slot-name* 



’setf 



*new-value*) 



(If <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> returns in this case, any <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> are ignored.) 



The specific behavior depends on <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>’s <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks>. An error is never signaled if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> has <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>. An error is always signaled if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> has <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks> <ClLinks styled={true} term={"built-in-class"}><b>built-in-class</b></ClLinks>. The consequences are unspecified if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> has any other <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks>–an error might or might not be signaled in this situation. Note in particular that the behavior for <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> and <ClLinks styled={true} term={"structure"}><i>structures</i></ClLinks> is not specified. 



**See Also:** 



<ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks>, <ClLinks styled={true} term={"slot-unbound"}><b>slot-unbound</b></ClLinks>, <ClLinks styled={true} term={"with-slots"}><b>with-slots</b></ClLinks> 



**Notes:** 



Although no <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is required to do so, implementors are strongly encouraged to implement the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> using the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> slot-value-using-class described in the *Metaobject Protocol*. 



Implementations may optimize <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> by compiling it inline. 



