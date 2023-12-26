**change-class** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> *instance new-class* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> (<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) (*new-class* <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>) &amp;rest *initargs* 



<DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> (<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>) (*new-class* <DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*new-class*—a <GlossaryTerm styled={true} term={"class designator"}><i>class designator</i></GlossaryTerm> . 



*initargs*—an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> changes the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to *new-class*. It destructively modifies and returns the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. 







 



 



<DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> 



If in the old <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> there is any <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the same name as a local <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> in the *new-class*, the value of that <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is retained. This means that if the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> has a value, the value returned by <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> after <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is invoked is <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to the value returned by <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> before <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is invoked. Similarly, if the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> was unbound, it remains unbound. The other <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are initialized as described in Section 7.2 (Changing the Class of an Instance). 



After completing all other actions, <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> invokes **update-instance-for-different-class**. The generic function **update-instance-for-different-class** can be used to assign values to slots in the transformed instance. See Section 7.2.2 (Initializing Newly Added Local Slots). 



If the second of the above <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> is selected, that <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> invokes <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> on <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, (find-class *new-class*), and the *initargs*. 



**Examples:**
```lisp
(defclass position () ()) 
(defclass x-y-position (position) 
  ((x :initform 0 :initarg :x) 
   (y :initform 0 :initarg :y))) 
(defclass rho-theta-position (position) 
  ((rho :initform 0) 
   (theta :initform 0))) 
(defmethod update-instance-for-different-class :before ((old x-y-position) 
							(new rho-theta-position) 
							&key) 
  ;; Copy the position information from old to new to make new 
  ;; be a rho-theta-position at the same position as old. 
  (let ((x (slot-value old ’x)) 
	(y (slot-value old ’y))) 
    (setf (slot-value new ’rho) (sqrt (+ (\* x x) (\* y y))) 
	  (slot-value new ’theta) (atan y x)))) 
;;; At this point an instance of the class x-y-position can be 
;;; changed to be an instance of the class rho-theta-position using 
;;; change-class: 
(setq p1 (make-instance ’x-y-position :x 2 :y 0)) 
(change-class p1 ’rho-theta-position) 
;;; The result is that the instance bound to p1 is now an instance of 
;;; the class rho-theta-position. The update-instance-for-different-class 
;;; method performed the initialization of the rho and theta slots based 

;;; on the value of the x and y slots, which were maintained by 
;;; the old instance. 
```
**See Also:** 



**update-instance-for-different-class**, Section 7.2 (Changing the Class of an Instance) 



**Notes:** 



The generic function <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> has several semantic difficulties. First, it performs a destructive operation that can be invoked within a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> that was used to select that <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. When multiple <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are involved because <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are being combined, the <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> currently 



executing or about to be executed may no longer be applicable. Second, some implementations might use compiler optimizations of slot <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm>, and when the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is changed the assumptions the compiler made might be violated. This implies that a programmer must not use <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> inside a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> if any <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for that *generic function access* any <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>, or the results are undefined. 



