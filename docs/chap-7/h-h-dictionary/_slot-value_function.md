**slot-value** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> *object slot-name → value* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> returns the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> named *slot-name* in the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. If there is no <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> named *slot-name*, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called. If the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is unbound, <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is called. 



The macro <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> to change the value of a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



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



If an attempt is made to read a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> and no <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the name *slot-name* exists in the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>) 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> 



*slot-name* 



’slot-value) 



(If <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is invoked, its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> is returned by <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>.) 



If an attempt is made to write a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> and no <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the name *slot-name* exists in the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>) 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> 



*slot-name* 



’setf 



*new-value*) 



(If <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> returns in this case, any <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> are ignored.) 



The specific behavior depends on <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>’s <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm>. An error is never signaled if <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> has <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>. An error is always signaled if <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> has <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm> <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The consequences are unspecified if <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> has any other <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm>–an error might or might not be signaled in this situation. Note in particular that the behavior for <GlossaryTerm  term={"condition"}><i>conditions</i></GlossaryTerm> and <GlossaryTerm  term={"structure"}><i>structures</i></GlossaryTerm> is not specified. 



**See Also:** 



<DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink>, <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink>, <DictionaryLink  term={"with-slots"}><b>with-slots</b></DictionaryLink> 



**Notes:** 



Although no <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is required to do so, implementors are strongly encouraged to implement the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> using the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> slot-value-using-class described in the *Metaobject Protocol*. 



Implementations may optimize <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> by compiling it inline. 



