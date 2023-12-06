**update-instance-for-redefined-class** *Standard Generic Function* 



**Syntax:** 



**update-instance-for-redefined-class** *instance* 



*added-slots discarded-slots* 



*property-list* 



&amp;rest *initargs* &amp;key &amp;allow-other-keys 



*→ \{result\}*\* 







 



 



**update-instance-for-redefined-class** 



**Method Signatures:** 



**update-instance-for-redefined-class** (*instance* **standard-object**) 



*added-slots discarded-slots* 



*property-list* 



&amp;rest *initargs* 



**Arguments and Values:** 



*instance*—an *object*. 



*added-slots*—a *list*. 



*discarded-slots*—a *list*. 



*property-list*—a *list*. 



*initargs*—an *initialization argument list*. 



*result*—an *object*. 



**Description:** 



The *generic function* **update-instance-for-redefined-class** is not intended to be called by programmers. Programmers may write *methods* for it. The *generic func tion* **update-instance-for-redefined-class** is called by the mechanism activated by **make-instances-obsolete**. 



The system-supplied primary *method* on **update-instance-for-redefined-class** checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. This *method* then initializes *slots* with values according to the *initargs*, and initializes the newly *added-slots* with values according to their :initform forms. It does this by calling the generic function **shared-initialize** 



with the following arguments: the *instance*, a list of names of the newly *added-slots* to *instance*, and the *initargs* it received. Newly *added-slots* are those *local slots* for which no *slot* of the same name exists in the old version of the *class*. 



When **make-instances-obsolete** is invoked or when a *class* has been redefined and an *instance* is being updated, a *property-list* is created that captures the slot names and values of all the *discarded slots* with values in the original *instance*. The structure of the *instance* is transformed so that it conforms to the current class definition. The arguments to **update-instance-for-redefined-class** are this transformed *instance*, a list of *added-slots* to the *instance*, a list *discarded-slots* from the *instance*, and the *property-list* containing the slot names and values for *slots* that were discarded and had values. Included in this list of discarded *slots* are *slots* that were local in the old *class* and are shared in the new *class*. 



The value returned by **update-instance-for-redefined-class** is ignored. 



**Examples:**
```lisp
 







 



 



**update-instance-for-redefined-class** 



(defclass position () ()) 



(defclass x-y-position (position) 



((x :initform 0 :accessor position-x) 



(y :initform 0 :accessor position-y))) 



;;; It turns out polar coordinates are used more than Cartesian ;;; coordinates, so the representation is altered and some new ;;; accessor methods are added. 



(defmethod update-instance-for-redefined-class :before 



((pos x-y-position) added deleted plist &amp;key) 



;; Transform the x-y coordinates to polar coordinates 



;; and store into the new slots. 



(let ((x (getf plist ’x)) 



(y (getf plist ’y))) 



(setf (position-rho pos) (sqrt (+ (\* x x) (\* y y))) 



(position-theta pos) (atan y x)))) 



(defclass x-y-position (position) 



((rho :initform 0 :accessor position-rho) 



(theta :initform 0 :accessor position-theta))) 



;;; All instances of the old x-y-position class will be updated ;;; automatically. 



;;; The new representation is given the look and feel of the old one. 



(defmethod position-x ((pos x-y-position)) 



(with-slots (rho theta) pos (\* rho (cos theta)))) 



(defmethod (setf position-x) (new-x (pos x-y-position)) 



(with-slots (rho theta) pos 



(let ((y (position-y pos))) 



(setq rho (sqrt (+ (\* new-x new-x) (\* y y))) 



theta (atan y new-x)) 



new-x))) 



(defmethod position-y ((pos x-y-position)) 



(with-slots (rho theta) pos (\* rho (sin theta)))) 



(defmethod (setf position-y) (new-y (pos x-y-position)) 



(with-slots (rho theta) pos 



(let ((x (position-x pos))) 



(setq rho (sqrt (+ (\* x x) (\* new-y new-y))) 







 



 



theta (atan new-y x)) 



new-y))) 




```
**Exceptional Situations:** 



The system-supplied primary *method* on **update-instance-for-redefined-class** signals an error if an *initarg* is supplied that is not declared as valid. 



**See Also:** 



**make-instances-obsolete**, **shared-initialize**, Section 4.3.6 (Redefining Classes), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to **defclass**, or by defining *methods* for **update-instance-for-redefined-class** or **shared-initialize**. The keyword name of each keyword parameter specifier in the *lambda list* of any *method* defined on **update-instance-for-redefined-class** or **shared-initialize** is declared as a valid *initarg* name for all *classes* for which that *method* is applicable. 



