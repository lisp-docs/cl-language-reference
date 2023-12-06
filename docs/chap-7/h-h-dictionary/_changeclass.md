**change-class** *Standard Generic Function* 



**Syntax:** 



**change-class** *instance new-class* &amp;key &amp;allow-other-keys *→ instance* 



**Method Signatures:** 



**change-class** (*instance* **standard-object**) (*new-class* **standard-class**) &amp;rest *initargs* 



**change-class** (*instance* **t**) (*new-class* **symbol**) &amp;rest *initargs* 



**Arguments and Values:** 



*instance*—an *object*. 



*new-class*—a *class designator* . 



*initargs*—an *initialization argument list*. 



**Description:** 



The *generic function* **change-class** changes the *class* of an *instance* to *new-class*. It destructively modifies and returns the *instance*. 







 



 



**change-class** 



If in the old *class* there is any *slot* of the same name as a local *slot* in the *new-class*, the value of that *slot* is retained. This means that if the *slot* has a value, the value returned by **slot-value** after **change-class** is invoked is **eql** to the value returned by **slot-value** before **change-class** is invoked. Similarly, if the *slot* was unbound, it remains unbound. The other *slots* are initialized as described in Section 7.2 (Changing the Class of an Instance). 



After completing all other actions, **change-class** invokes **update-instance-for-different-class**. The generic function **update-instance-for-different-class** can be used to assign values to slots in the transformed instance. See Section 7.2.2 (Initializing Newly Added Local Slots). 



If the second of the above *methods* is selected, that *method* invokes **change-class** on *instance*, (find-class *new-class*), and the *initargs*. 



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

&amp;key) 

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



The generic function **change-class** has several semantic difficulties. First, it performs a destructive operation that can be invoked within a *method* on an *instance* that was used to select that *method*. When multiple *methods* are involved because *methods* are being combined, the *methods* currently 



executing or about to be executed may no longer be applicable. Second, some implementations might use compiler optimizations of slot *access*, and when the *class* of an *instance* is changed the assumptions the compiler made might be violated. This implies that a programmer must not use **change-class** inside a *method* if any *methods* for that *generic function access* any *slots*, or the results are undefined. 



