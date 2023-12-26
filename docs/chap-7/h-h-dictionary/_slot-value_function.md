**slot-value** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> *object slot-name → value* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"value"}><i>value</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> returns the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"slot"}><i>slot</i></ClLinks> named *slot-name* in the <ClLinks  term={"object"}><i>object</i></ClLinks>. If there is no <ClLinks  term={"slot"}><i>slot</i></ClLinks> named *slot-name*, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called. If the <ClLinks  term={"slot"}><i>slot</i></ClLinks> is unbound, <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is called. 



The macro <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> to change the value of a <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



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



If an attempt is made to read a <ClLinks  term={"slot"}><i>slot</i></ClLinks> and no <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* exists in the <ClLinks  term={"object"}><i>object</i></ClLinks>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <ClLinks  term={"instance"}><i>instance</i></ClLinks>) 



<ClLinks  term={"instance"}><i>instance</i></ClLinks> 



*slot-name* 



’slot-value) 



(If <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is invoked, its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> is returned by <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>.) 



If an attempt is made to write a <ClLinks  term={"slot"}><i>slot</i></ClLinks> and no <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* exists in the <ClLinks  term={"object"}><i>object</i></ClLinks>, <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is called as follows: 



(slot-missing (class-of <ClLinks  term={"instance"}><i>instance</i></ClLinks>) 



<ClLinks  term={"instance"}><i>instance</i></ClLinks> 



*slot-name* 



’setf 



*new-value*) 



(If <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> returns in this case, any <ClLinks  term={"value"}><i>values</i></ClLinks> are ignored.) 



The specific behavior depends on <ClLinks  term={"object"}><i>object</i></ClLinks>’s <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks>. An error is never signaled if <ClLinks  term={"object"}><i>object</i></ClLinks> has <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>. An error is always signaled if <ClLinks  term={"object"}><i>object</i></ClLinks> has <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The consequences are unspecified if <ClLinks  term={"object"}><i>object</i></ClLinks> has any other <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks>–an error might or might not be signaled in this situation. Note in particular that the behavior for <ClLinks  term={"condition"}><i>conditions</i></ClLinks> and <ClLinks  term={"structure"}><i>structures</i></ClLinks> is not specified. 



**See Also:** 



<DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink>, <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink>, <DictionaryLink  term={"with-slots"}><b>with-slots</b></DictionaryLink> 



**Notes:** 



Although no <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is required to do so, implementors are strongly encouraged to implement the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> using the <ClLinks  term={"function"}><i>function</i></ClLinks> slot-value-using-class described in the *Metaobject Protocol*. 



Implementations may optimize <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> by compiling it inline. 



