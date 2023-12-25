**slot-value** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink> *object slot-name → value* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink> returns the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> named *slot-name* in the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. If there is no <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> named *slot-name*, <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called. If the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is unbound, <DictionaryLink styled={true} term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is called. 



The macro <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink> to change the value of a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



**Examples:**
```lisp

(defclass foo () 
  ((a :accessor foo-a :initarg :a :initform 1) 
   (b :accessor foo-b :initarg :b) 
   (c :accessor foo-c :initform 3))) 
*→* #<STANDARD-CLASS FOO 244020371> 
(setq foo1 (make-instance ’foo :a ’one :b ’two)) 
*→* #<FOO 36325624> 
(slot-value foo1 ’a) *→* ONE 
(slot-value foo1 ’b) *→* TWO 
(slot-value foo1 ’c) *→* 3 
(setf (slot-value foo1 ’a) ’uno) *→* UNO 
(slot-value foo1 ’a) *→* UNO 
(defmethod foo-method ((x foo)) 
  (slot-value x ’a)) 
*→* #<STANDARD-METHOD FOO-METHOD (FOO) 42720573> 
(foo-method foo1) *→* UNO 




```
**Exceptional Situations:** 



If an attempt is made to read a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> and no <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the name *slot-name* exists in the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>) 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> 



*slot-name* 



’slot-value) 



(If <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is invoked, its *primary value* is returned by <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>.) 



If an attempt is made to write a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> and no <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the name *slot-name* exists in the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>) 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> 



*slot-name* 



’setf 



*new-value*) 



(If <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> returns in this case, any <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> are ignored.) 



The specific behavior depends on <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm>. An error is never signaled if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>. An error is always signaled if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink styled={true} term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The consequences are unspecified if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> has any other <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm>–an error might or might not be signaled in this situation. Note in particular that the behavior for <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"structure"}><i>structures</i></GlossaryTerm> is not specified. 



**See Also:** 



<DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-slots"}><b>with-slots</b></DictionaryLink> 



**Notes:** 



Although no <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is required to do so, implementors are strongly encouraged to implement the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink> using the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> slot-value-using-class described in the *Metaobject Protocol*. 



Implementations may optimize <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink> by compiling it inline. 



