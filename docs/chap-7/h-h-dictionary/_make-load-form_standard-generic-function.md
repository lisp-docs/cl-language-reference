**make-load-form** *Standard Generic Function* 



**Syntax:** 



<ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> <ClLinks  term={"object"}><i>object</i></ClLinks> &amp;optional *environment → creation-form*[*, initialization-form*] 



**Method Signatures:** 



<ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> (<ClLinks  term={"object"}><i>object</i></ClLinks> <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>) &amp;optional <ClLinks  term={"environment"}><i>environment</i></ClLinks> 



<ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> (<ClLinks  term={"object"}><i>object</i></ClLinks> <ClLinks  term={"structure-object"}><b>structure-object</b></ClLinks>) &amp;optional <ClLinks  term={"environment"}><i>environment</i></ClLinks> 



<ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> (<ClLinks  term={"object"}><i>object</i></ClLinks> <ClLinks  term={"condition"}><b>condition</b></ClLinks>) &amp;optional <ClLinks  term={"environment"}><i>environment</i></ClLinks> 



<ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> (<ClLinks  term={"object"}><i>object</i></ClLinks> <ClLinks  term={"class"}><b>class</b></ClLinks>) &amp;optional <ClLinks  term={"environment"}><i>environment</i></ClLinks> 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an *environment object*. 



*creation-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*initialization-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Description:** 



The *generic function* <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> creates and returns one or two <ClLinks  term={"form"}><i>forms</i></ClLinks>, a *creation-form* and an *initialization-form*, that enable <ClLinks  term={"load"}><b>load</b></ClLinks> to construct an <ClLinks  term={"object"}><i>object</i></ClLinks> equivalent to <ClLinks  term={"object"}><i>object</i></ClLinks>. <ClLinks  term={"environment"}><i>Environment</i></ClLinks> is an *environment object* corresponding to the *lexical environment* in which the <ClLinks  term={"form"}><i>forms</i></ClLinks> will be processed. 



The *file compiler* calls <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> to process certain *classes* of *literal objects*; see Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



*Conforming programs* may call <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> directly, providing <ClLinks  term={"object"}><i>object</i></ClLinks> is a *generalized instance* of <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>, <ClLinks  term={"structure-object"}><b>structure-object</b></ClLinks>, or <ClLinks  term={"condition"}><b>condition</b></ClLinks>. 



The creation form is a <ClLinks  term={"form"}><i>form</i></ClLinks> that, when evaluated at <ClLinks  term={"load"}><b>load</b></ClLinks> time, should return an <ClLinks  term={"object"}><i>object</i></ClLinks> that is equivalent to <ClLinks  term={"object"}><i>object</i></ClLinks>. The exact meaning of equivalent depends on the <ClLinks  term={"type"}><i>type</i></ClLinks> of <ClLinks  term={"object"}><i>object</i></ClLinks> and is up to the programmer who defines a <ClLinks  term={"method"}><i>method</i></ClLinks> for <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks>; see Section 3.2.4 (Literal Objects in Compiled Files). 







 



 



<ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> 



The initialization form is a <ClLinks  term={"form"}><i>form</i></ClLinks> that, when evaluated at <ClLinks  term={"load"}><b>load</b></ClLinks> time, should perform further initialization of the <ClLinks  term={"object"}><i>object</i></ClLinks>. The value returned by the initialization form is ignored. If <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> returns only one value, the initialization form is <ClLinks  term={"nil"}><b>nil</b></ClLinks>, which has no effect. If <ClLinks  term={"object"}><i>object</i></ClLinks> appears as a constant in the initialization form, at <ClLinks  term={"load"}><b>load</b></ClLinks> time it will be replaced by the equivalent <ClLinks  term={"object"}><i>object</i></ClLinks> constructed by the creation form; this is how the further initialization gains access to the <ClLinks  term={"object"}><i>object</i></ClLinks>. 



Both the *creation-form* and the *initialization-form* may contain references to any *externalizable object*. However, there must not be any circular dependencies in creation forms. An example of a circular dependency is when the creation form for the object X contains a reference to the object Y, and the creation form for the object Y contains a reference to the object X. Initialization forms are not subject to any restriction against circular dependencies, which is the reason that initialization forms exist; see the example of circular data structures below. 



The creation form for an <ClLinks  term={"object"}><i>object</i></ClLinks> is always *evaluated* before the initialization form for that <ClLinks  term={"object"}><i>object</i></ClLinks>. When either the creation form or the initialization form references other <ClLinks  term={"object"}><i>objects</i></ClLinks> that have not been referenced earlier in the <ClLinks  term={"file"}><i>file</i></ClLinks> being *compiled*, the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> ensures that all of the referenced <ClLinks  term={"object"}><i>objects</i></ClLinks> have been created before *evaluating* the referencing <ClLinks  term={"form"}><i>form</i></ClLinks>. When the referenced <ClLinks  term={"object"}><i>object</i></ClLinks> is of a <ClLinks  term={"type"}><i>type</i></ClLinks> which the *file compiler* processes using <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks>, this involves *evaluating* the creation form returned for it. (This is the reason for the prohibition against circular references among creation forms). 



Each initialization form is *evaluated* as soon as possible after its associated creation form, as determined by data flow. If the initialization form for an <ClLinks  term={"object"}><i>object</i></ClLinks> does not reference any other <ClLinks  term={"object"}><i>objects</i></ClLinks> not referenced earlier in the <ClLinks  term={"file"}><i>file</i></ClLinks> and processed by the *file compiler* using <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks>, the initialization form is evaluated immediately after the creation form. If a creation or initialization form *F* does contain references to such <ClLinks  term={"object"}><i>objects</i></ClLinks>, the creation forms for those other objects are evaluated before *F*, and the initialization forms for those other <ClLinks  term={"object"}><i>objects</i></ClLinks> are also evaluated before *F* whenever they do not depend on the <ClLinks  term={"object"}><i>object</i></ClLinks> created or initialized by *F*. Where these rules do not uniquely determine an order of <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> between two creation/initialization forms, the order of <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> is unspecified. 



While these creation and initialization forms are being evaluated, the <ClLinks  term={"object"}><i>objects</i></ClLinks> are possibly in an uninitialized state, analogous to the state of an <ClLinks  term={"object"}><i>object</i></ClLinks> between the time it has been created by <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> and it has been processed fully by <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks>. Programmers writing 



<ClLinks  term={"method"}><i>methods</i></ClLinks> for <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> must take care in manipulating <ClLinks  term={"object"}><i>objects</i></ClLinks> not to depend on <ClLinks  term={"slot"}><i>slots</i></ClLinks> that have not yet been initialized. 



It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether <ClLinks  term={"load"}><b>load</b></ClLinks> calls <ClLinks  term={"eval"}><b>eval</b></ClLinks> on the <ClLinks  term={"form"}><i>forms</i></ClLinks> or does some other operation that has an equivalent effect. For example, the <ClLinks  term={"form"}><i>forms</i></ClLinks> might be translated into different but equivalent <ClLinks  term={"form"}><i>forms</i></ClLinks> and then evaluated, they might be compiled and the resulting functions called by <ClLinks  term={"load"}><b>load</b></ClLinks>, or they might be interpreted by a special-purpose function different from <ClLinks  term={"eval"}><b>eval</b></ClLinks>. All that is required is that the effect be equivalent to evaluating the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



The *method specialized* on <ClLinks  term={"class"}><b>class</b></ClLinks> returns a creation <ClLinks  term={"form"}><i>form</i></ClLinks> using the <ClLinks  term={"name"}><i>name</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> if the <ClLinks  term={"class"}><i>class</i></ClLinks> has a *proper name* in <ClLinks  term={"environment"}><i>environment</i></ClLinks>, signaling an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> if it does not have a *proper name*. *Evaluation* of the creation <ClLinks  term={"form"}><i>form</i></ClLinks> uses the <ClLinks  term={"name"}><i>name</i></ClLinks> to find the <ClLinks  term={"class"}><i>class</i></ClLinks> with that <ClLinks  term={"name"}><i>name</i></ClLinks>, as if by 







 



 



<ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> 



*calling* <ClLinks  term={"find-class"}><b>find-class</b></ClLinks>. If a <ClLinks  term={"class"}><i>class</i></ClLinks> with that <ClLinks  term={"name"}><i>name</i></ClLinks> has not been defined, then a <ClLinks  term={"class"}><i>class</i></ClLinks> may be computed in an <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> manner. If a <ClLinks  term={"class"}><i>class</i></ClLinks> cannot be returned as the result of *evaluating* the creation <ClLinks  term={"form"}><i>form</i></ClLinks>, then an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled. 



Both *conforming implementations* and *conforming programs* may further <ClLinks  term={"specialize"}><i>specialize</i></ClLinks> <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks>. 



**Examples:**
```lisp
(defclass obj () 
  ((x :initarg :x :reader obj-x) 
   (y :initarg :y :reader obj-y) 
   (dist :accessor obj-dist))) 
→ #<STANDARD-CLASS OBJ 250020030> 
(defmethod shared-initialize :after ((self obj) slot-names &rest keys) 
  (declare (ignore slot-names keys)) 
  (unless (slot-boundp self ’dist) 
    (setf (obj-dist self) 
	  (sqrt (+ (expt (obj-x self) 2) (expt (obj-y self) 2)))))) 
→ #<STANDARD-METHOD SHARED-INITIALIZE (:AFTER) (OBJ T) 26266714> 
(defmethod make-load-form ((self obj) &optional environment) 
  (declare (ignore environment)) 
  ;; Note that this definition only works because X and Y do not 
  ;; contain information which refers back to the object itself. 
  ;; For a more general solution to this problem, see revised example below. 
  ‘(make-instance ’,(class-of self) 
		   :x ’,(obj-x self) :y ’,(obj-y self))) 
→ #<STANDARD-METHOD MAKE-LOAD-FORM (OBJ) 26267532> 
(setq obj1 (make-instance ’obj :x 3.0 :y 4.0)) → #<OBJ 26274136> 
(obj-dist obj1) → 5.0 
(make-load-form obj1) → (MAKE-INSTANCE ’OBJ :X ’3.0 :Y ’4.0) 
In the above example, an equivalent *instance* of obj is reconstructed by using the values of two of its *slots*. The value of the third *slot* is derived from those two values. 
Another way to write the **make-load-form** *method* in that example is to use **make-load-form-saving-slots**. The code it generates might yield a slightly different result from the **make-load-form** *method* shown above, but the operational effect will be the same. For example: 
;; Redefine method defined above. 
(defmethod make-load-form ((self obj) &optional environment) 
  (make-load-form-saving-slots self 
			       :slot-names ’(x y) 
			       :environment environment)) 
→ #<STANDARD-METHOD MAKE-LOAD-FORM (OBJ) 42755655> 

**make-load-form** 
;; Try MAKE-LOAD-FORM on object created above. 
(make-load-form obj1) 
→ (ALLOCATE-INSTANCE ’#<STANDARD-CLASS OBJ 250020030>), 
(PROGN 
  (SETF (SLOT-VALUE ’#<OBJ 26274136> ’X) ’3.0) 
  (SETF (SLOT-VALUE ’#<OBJ 26274136> ’Y) ’4.0) 
  (INITIALIZE-INSTANCE ’#<OBJ 26274136>)) 
In the following example, *instances* of my-frob are “interned” in some way. An equivalent *instance* is reconstructed by using the value of the name slot as a key for searching existing *objects*. In this case the programmer has chosen to create a new *object* if no existing *object* is found; alternatively an error could have been signaled in that case. 
(defclass my-frob () 
  ((name :initarg :name :reader my-name))) 
(defmethod make-load-form ((self my-frob) &optional environment) 
  (declare (ignore environment)) 
  ‘(find-my-frob ’,(my-name self) :if-does-not-exist :create)) 
In the following example, the data structure to be dumped is circular, because each parent has a list of its children and each child has a reference back to its parent. If **make-load-form** is called on one *object* in such a structure, the creation form creates an equivalent *object* and fills in the children slot, which forces creation of equivalent *objects* for all of its children, grandchildren, etc. 
At this point none of the parent *slots* have been filled in. The initialization form fills in the parent *slot*, which forces creation of an equivalent *object* for the parent if it was not already created. Thus the entire tree is recreated at **load** time. At compile time, **make-load-form** is called once for each *object* in the tree. All of the creation forms are evaluated, in *implementation-dependent* order, and then all of the initialization forms are evaluated, also in *implementation-dependent* order. 
(defclass tree-with-parent () ((parent :accessor tree-parent) 
			       (children :initarg :children))) 
(defmethod make-load-form ((x tree-with-parent) &optional environment) 
  (declare (ignore environment)) 
  (values 
   ;; creation form 
   ‘(make-instance ’,(class-of x) :children ’,(slot-value x ’children)) 
   ;; initialization form 
   ‘(setf (tree-parent ’,x) ’,(slot-value x ’parent)))) 
In the following example, the data structure to be dumped has no special properties and an equivalent structure can be reconstructed simply by reconstructing the *slots*’ contents. 
(defstruct my-struct a b c) 
(defmethod make-load-form ((s my-struct) &optional environment) 
  (make-load-form-saving-slots s :environment environment)) 


```
**Exceptional Situations:** 



The *methods specialized* on <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>, <ClLinks  term={"structure-object"}><b>structure-object</b></ClLinks>, and <ClLinks  term={"condition"}><b>condition</b></ClLinks> all signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. 



It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether *calling* <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> on a *generalized instance* of a *system class* signals an error or returns creation and initialization <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></ClLinks>, Section 3.2.4.4 (Additional Constraints on Externaliz able Objects) Section 3.1 (Evaluation), Section 3.2 (Compilation) 



**Notes:** 



The *file compiler* calls <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> in specific circumstances detailed in Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



Some <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> may provide facilities for defining new *subclasses* of *classes* which are specified as *system classes*. (Some likely candidates include <ClLinks  term={"generic-function"}><b>generic-function</b></ClLinks>, <ClLinks  term={"method"}><b>method</b></ClLinks>, and <ClLinks  term={"stream"}><b>stream</b></ClLinks>). Such <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> should document how the *file compiler* processes <ClLinks  term={"instance"}><i>instances</i></ClLinks> of such *classes* when encountered as *literal objects*, and should document any relevant <ClLinks  term={"method"}><i>methods</i></ClLinks> for <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks>. 



