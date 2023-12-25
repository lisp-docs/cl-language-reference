**update-instance-for-redefined-class** *Standard Generic Function* 



**Syntax:** 



**update-instance-for-redefined-class** <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> 



*added-slots discarded-slots* 



*property-list* 



&amp;rest *initargs* &amp;key &amp;allow-other-keys 



→ \{result\}\* 







 



 



**update-instance-for-redefined-class** 



**Method Signatures:** 



**update-instance-for-redefined-class** (<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>) 



*added-slots discarded-slots* 



*property-list* 



&amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*added-slots*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



*discarded-slots*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



*property-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



*initargs*—an *initialization argument list*. 



*result*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The *generic function* **update-instance-for-redefined-class** is not intended to be called by programmers. Programmers may write <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for it. The *generic func tion* **update-instance-for-redefined-class** is called by the mechanism activated by <ClLinks styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks>. 



The system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on **update-instance-for-redefined-class** checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. This <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> then initializes <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> with values according to the *initargs*, and initializes the newly *added-slots* with values according to their :initform forms. It does this by calling the generic function <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> 



with the following arguments: the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, a list of names of the newly *added-slots* to <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, and the *initargs* it received. Newly *added-slots* are those *local slots* for which no <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of the same name exists in the old version of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



When <ClLinks styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> is invoked or when a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> has been redefined and an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> is being updated, a *property-list* is created that captures the slot names and values of all the *discarded slots* with values in the original <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>. The structure of the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> is transformed so that it conforms to the current class definition. The arguments to **update-instance-for-redefined-class** are this transformed <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, a list of *added-slots* to the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, a list *discarded-slots* from the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, and the *property-list* containing the slot names and values for <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> that were discarded and had values. Included in this list of discarded <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> are <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> that were local in the old <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and are shared in the new <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



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
    ((pos x-y-position) added deleted plist &key) 
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



The system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on **update-instance-for-redefined-class** signals an error if an *initarg* is supplied that is not declared as valid. 



**See Also:** 



<ClLinks styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks>, <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks>, Section 4.3.6 (Redefining Classes), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, or by defining <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for **update-instance-for-redefined-class** or <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. The keyword name of each keyword parameter specifier in the *lambda list* of any <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> defined on **update-instance-for-redefined-class** or <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> is declared as a valid *initarg* name for all *classes* for which that <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is applicable. 



