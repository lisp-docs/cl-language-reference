**slot-value** *Function* 



**Syntax:** 



**slot-value** *object slot-name → value* 



**Arguments and Values:** 



*object*—an *object*. 



*name*—a *symbol*. 



*value*—an *object*. 



**Description:** 



The *function* **slot-value** returns the *value* of the *slot* named *slot-name* in the *object*. If there is no *slot* named *slot-name*, **slot-missing** is called. If the *slot* is unbound, **slot-unbound** is called. 



The macro **setf** can be used with **slot-value** to change the value of a *slot*. 



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



If an attempt is made to read a *slot* and no *slot* of the name *slot-name* exists in the *object*, **slot-missing** is called as follows: 



(slot-missing (class-of *instance*) 



*instance* 



*slot-name* 



’slot-value) 



(If **slot-missing** is invoked, its *primary value* is returned by **slot-value**.) 



If an attempt is made to write a *slot* and no *slot* of the name *slot-name* exists in the *object*, **slot-missing** is called as follows: 



(slot-missing (class-of *instance*) 



*instance* 



*slot-name* 



’setf 



*new-value*) 



(If **slot-missing** returns in this case, any *values* are ignored.) 



The specific behavior depends on *object*’s *metaclass*. An error is never signaled if *object* has *metaclass* **standard-class**. An error is always signaled if *object* has *metaclass* **built-in-class**. The consequences are unspecified if *object* has any other *metaclass*–an error might or might not be signaled in this situation. Note in particular that the behavior for *conditions* and *structures* is not specified. 



**See Also:** 



**slot-missing**, **slot-unbound**, **with-slots** 



**Notes:** 



Although no *implementation* is required to do so, implementors are strongly encouraged to implement the *function* **slot-value** using the *function* slot-value-using-class described in the *Metaobject Protocol*. 



Implementations may optimize **slot-value** by compiling it inline. 



