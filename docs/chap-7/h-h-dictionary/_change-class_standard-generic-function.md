**change-class** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> *instance new-class* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> (<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>) (*new-class* <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>) &amp;rest *initargs* 



<ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> (<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>) (*new-class* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*new-class*—a *class designator* . 



*initargs*—an *initialization argument list*. 



**Description:** 



The *generic function* <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> changes the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> to *new-class*. It destructively modifies and returns the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> 



If in the old <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> there is any <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of the same name as a local <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> in the *new-class*, the value of that <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is retained. This means that if the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> has a value, the value returned by <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> after <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> is invoked is <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> to the value returned by <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> before <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> is invoked. Similarly, if the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> was unbound, it remains unbound. The other <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> are initialized as described in Section 7.2 (Changing the Class of an Instance). 



After completing all other actions, <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> invokes **update-instance-for-different-class**. The generic function **update-instance-for-different-class** can be used to assign values to slots in the transformed instance. See Section 7.2.2 (Initializing Newly Added Local Slots). 



If the second of the above <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> is selected, that <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> invokes <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> on <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, (find-class *new-class*), and the *initargs*. 



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



The generic function <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> has several semantic difficulties. First, it performs a destructive operation that can be invoked within a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> that was used to select that <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. When multiple <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> are involved because <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> are being combined, the <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> currently 



executing or about to be executed may no longer be applicable. Second, some implementations might use compiler optimizations of slot <ClLinks styled={true} term={"access"}><i>access</i></ClLinks>, and when the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> is changed the assumptions the compiler made might be violated. This implies that a programmer must not use <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> inside a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> if any <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for that *generic function access* any <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks>, or the results are undefined. 



