**change-class** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> *instance new-class* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> (<ClLinks  term={"instance"}><i>instance</i></ClLinks> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) (*new-class* <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>) &amp;rest *initargs* 



<DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> (<ClLinks  term={"instance"}><i>instance</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>) (*new-class* <DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*new-class*—a <GlossaryTerm styled={true} term={"class designator"}><i>class designator</i></GlossaryTerm> . 



*initargs*—an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> changes the <ClLinks  term={"class"}><i>class</i></ClLinks> of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to *new-class*. It destructively modifies and returns the <ClLinks  term={"instance"}><i>instance</i></ClLinks>. 







 



 



<DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> 



If in the old <ClLinks  term={"class"}><i>class</i></ClLinks> there is any <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the same name as a local <ClLinks  term={"slot"}><i>slot</i></ClLinks> in the *new-class*, the value of that <ClLinks  term={"slot"}><i>slot</i></ClLinks> is retained. This means that if the <ClLinks  term={"slot"}><i>slot</i></ClLinks> has a value, the value returned by <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> after <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is invoked is <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to the value returned by <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> before <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is invoked. Similarly, if the <ClLinks  term={"slot"}><i>slot</i></ClLinks> was unbound, it remains unbound. The other <ClLinks  term={"slot"}><i>slots</i></ClLinks> are initialized as described in Section 7.2 (Changing the Class of an Instance). 



After completing all other actions, <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> invokes **update-instance-for-different-class**. The generic function **update-instance-for-different-class** can be used to assign values to slots in the transformed instance. See Section 7.2.2 (Initializing Newly Added Local Slots). 



If the second of the above <ClLinks  term={"method"}><i>methods</i></ClLinks> is selected, that <ClLinks  term={"method"}><i>method</i></ClLinks> invokes <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> on <ClLinks  term={"instance"}><i>instance</i></ClLinks>, (find-class *new-class*), and the *initargs*. 



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



The generic function <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> has several semantic difficulties. First, it performs a destructive operation that can be invoked within a <ClLinks  term={"method"}><i>method</i></ClLinks> on an <ClLinks  term={"instance"}><i>instance</i></ClLinks> that was used to select that <ClLinks  term={"method"}><i>method</i></ClLinks>. When multiple <ClLinks  term={"method"}><i>methods</i></ClLinks> are involved because <ClLinks  term={"method"}><i>methods</i></ClLinks> are being combined, the <ClLinks  term={"method"}><i>methods</i></ClLinks> currently 



executing or about to be executed may no longer be applicable. Second, some implementations might use compiler optimizations of slot <ClLinks  term={"access"}><i>access</i></ClLinks>, and when the <ClLinks  term={"class"}><i>class</i></ClLinks> of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> is changed the assumptions the compiler made might be violated. This implies that a programmer must not use <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> inside a <ClLinks  term={"method"}><i>method</i></ClLinks> if any <ClLinks  term={"method"}><i>methods</i></ClLinks> for that *generic function access* any <ClLinks  term={"slot"}><i>slots</i></ClLinks>, or the results are undefined. 



