**update-instance-for-redefined-class** *Standard Generic Function* 



**Syntax:** 



**update-instance-for-redefined-class** <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> 



*added-slots discarded-slots* 



*property-list* 



&amp;rest *initargs* &amp;key &amp;allow-other-keys 



*→ \{result\}*\* 







 



 



**update-instance-for-redefined-class** 



**Method Signatures:** 



**update-instance-for-redefined-class** (<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>) 



*added-slots discarded-slots* 



*property-list* 



&amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*added-slots*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



*discarded-slots*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



*property-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



*initargs*—an *initialization argument list*. 



*result*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The *generic function* **update-instance-for-redefined-class** is not intended to be called by programmers. Programmers may write <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for it. The *generic func tion* **update-instance-for-redefined-class** is called by the mechanism activated by <DictionaryLink styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink>. 



The system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on **update-instance-for-redefined-class** checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. This <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> then initializes <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> with values according to the *initargs*, and initializes the newly *added-slots* with values according to their :initform forms. It does this by calling the generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> 



with the following arguments: the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, a list of names of the newly *added-slots* to <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, and the *initargs* it received. Newly *added-slots* are those *local slots* for which no <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the same name exists in the old version of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



When <DictionaryLink styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> is invoked or when a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> has been redefined and an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is being updated, a *property-list* is created that captures the slot names and values of all the *discarded slots* with values in the original <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. The structure of the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is transformed so that it conforms to the current class definition. The arguments to **update-instance-for-redefined-class** are this transformed <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, a list of *added-slots* to the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, a list *discarded-slots* from the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, and the *property-list* containing the slot names and values for <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> that were discarded and had values. Included in this list of discarded <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> that were local in the old <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and are shared in the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



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



The system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on **update-instance-for-redefined-class** signals an error if an *initarg* is supplied that is not declared as valid. 



**See Also:** 



<DictionaryLink styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink>, <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, Section 4.3.6 (Redefining Classes), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, or by defining <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for **update-instance-for-redefined-class** or <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The keyword name of each keyword parameter specifier in the *lambda list* of any <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> defined on **update-instance-for-redefined-class** or <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is declared as a valid *initarg* name for all *classes* for which that <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is applicable. 



