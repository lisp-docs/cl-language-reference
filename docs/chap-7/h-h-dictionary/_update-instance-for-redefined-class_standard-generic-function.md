**update-instance-for-redefined-class** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



**update-instance-for-redefined-class** <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> 



*added-slots discarded-slots* 



*property-list* 



&amp;rest *initargs* &amp;key &amp;allow-other-keys 



→ \{result\}\* 







 



 



**update-instance-for-redefined-class** 



**Method Signatures:** 



**update-instance-for-redefined-class** (<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) 



*added-slots discarded-slots* 



*property-list* 



&amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*added-slots*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. 



*discarded-slots*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. 



*property-list*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. 



*initargs*—an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



*result*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> **update-instance-for-redefined-class** is not intended to be called by programmers. Programmers may write <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for it. The *generic func tion* **update-instance-for-redefined-class** is called by the mechanism activated by <DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink>. 



The system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on **update-instance-for-redefined-class** checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. This <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> then initializes <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> with values according to the *initargs*, and initializes the newly *added-slots* with values according to their :initform forms. It does this by calling the generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> 



with the following arguments: the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, a list of names of the newly *added-slots* to <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, and the *initargs* it received. Newly *added-slots* are those <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> for which no <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the same name exists in the old version of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



When <DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> is invoked or when a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> has been redefined and an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is being updated, a *property-list* is created that captures the slot names and values of all the *discarded slots* with values in the original <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. The structure of the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is transformed so that it conforms to the current class definition. The arguments to **update-instance-for-redefined-class** are this transformed <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, a list of *added-slots* to the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, a list *discarded-slots* from the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, and the *property-list* containing the slot names and values for <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> that were discarded and had values. Included in this list of discarded <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> that were local in the old <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> and are shared in the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



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



The system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on **update-instance-for-redefined-class** signals an error if an *initarg* is supplied that is not declared as valid. 



**See Also:** 



<DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink>, <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, Section 4.3.6 (Redefining Classes), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, or by defining <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for **update-instance-for-redefined-class** or <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The keyword name of each keyword parameter specifier in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of any <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> defined on **update-instance-for-redefined-class** or <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is declared as a valid *initarg* name for all *classes* for which that <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is applicable. 



