**make-load-form** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> &amp;optional *environment → creation-form*[*, initialization-form*] 



**Method Signatures:** 



<DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> (<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>) &amp;optional <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> 



<DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> (<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink>) &amp;optional <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> 



<DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> (<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>) &amp;optional <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> 



<DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> (<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> <DictionaryLink styled={true} term={"class"}><b>class</b></DictionaryLink>) &amp;optional <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>—an *environment object*. 



*creation-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*initialization-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



The *generic function* <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> creates and returns one or two <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, a *creation-form* and an *initialization-form*, that enable <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> to construct an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> equivalent to <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"environment"}><i>Environment</i></GlossaryTerm> is an *environment object* corresponding to the *lexical environment* in which the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> will be processed. 



The *file compiler* calls <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> to process certain *classes* of *literal objects*; see Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



*Conforming programs* may call <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> directly, providing <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *generalized instance* of <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink>, or <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>. 



The creation form is a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that, when evaluated at <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> time, should return an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is equivalent to <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The exact meaning of equivalent depends on the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> and is up to the programmer who defines a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink>; see Section 3.2.4 (Literal Objects in Compiled Files). 







 



 



<DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> 



The initialization form is a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that, when evaluated at <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> time, should perform further initialization of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The value returned by the initialization form is ignored. If <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> returns only one value, the initialization form is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, which has no effect. If <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> appears as a constant in the initialization form, at <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> time it will be replaced by the equivalent <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> constructed by the creation form; this is how the further initialization gains access to the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



Both the *creation-form* and the *initialization-form* may contain references to any *externalizable object*. However, there must not be any circular dependencies in creation forms. An example of a circular dependency is when the creation form for the object X contains a reference to the object Y, and the creation form for the object Y contains a reference to the object X. Initialization forms are not subject to any restriction against circular dependencies, which is the reason that initialization forms exist; see the example of circular data structures below. 



The creation form for an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is always *evaluated* before the initialization form for that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. When either the creation form or the initialization form references other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that have not been referenced earlier in the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> being *compiled*, the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> ensures that all of the referenced <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> have been created before *evaluating* the referencing <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. When the referenced <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> which the *file compiler* processes using <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink>, this involves *evaluating* the creation form returned for it. (This is the reason for the prohibition against circular references among creation forms). 



Each initialization form is *evaluated* as soon as possible after its associated creation form, as determined by data flow. If the initialization form for an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> does not reference any other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> not referenced earlier in the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> and processed by the *file compiler* using <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink>, the initialization form is evaluated immediately after the creation form. If a creation or initialization form *F* does contain references to such <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, the creation forms for those other objects are evaluated before *F*, and the initialization forms for those other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are also evaluated before *F* whenever they do not depend on the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> created or initialized by *F*. Where these rules do not uniquely determine an order of <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> between two creation/initialization forms, the order of <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> is unspecified. 



While these creation and initialization forms are being evaluated, the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are possibly in an uninitialized state, analogous to the state of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> between the time it has been created by <DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> and it has been processed fully by <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>. Programmers writing 



<GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> must take care in manipulating <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> not to depend on <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> that have not yet been initialized. 



It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> calls <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> on the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> or does some other operation that has an equivalent effect. For example, the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> might be translated into different but equivalent <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> and then evaluated, they might be compiled and the resulting functions called by <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>, or they might be interpreted by a special-purpose function different from <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink>. All that is required is that the effect be equivalent to evaluating the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



The *method specialized* on <DictionaryLink styled={true} term={"class"}><b>class</b></DictionaryLink> returns a creation <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> using the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> has a *proper name* in <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, signaling an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> if it does not have a *proper name*. *Evaluation* of the creation <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> uses the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> to find the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> with that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, as if by 







 



 



<DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> 



*calling* <DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink>. If a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> with that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> has not been defined, then a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> may be computed in an <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> manner. If a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> cannot be returned as the result of *evaluating* the creation <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, then an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled. 



Both *conforming implementations* and *conforming programs* may further <GlossaryTerm styled={true} term={"specialize"}><i>specialize</i></GlossaryTerm> <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink>. 



**Examples:**
```lisp

(defclass obj () 
  ((x :initarg :x :reader obj-x) 
   (y :initarg :y :reader obj-y) 
   (dist :accessor obj-dist))) 
*→* #<STANDARD-CLASS OBJ 250020030> 
(defmethod shared-initialize :after ((self obj) slot-names &rest keys) 
	   (declare (ignore slot-names keys)) 
	   (unless (slot-boundp self ’dist) 
	     (setf (obj-dist self) 
		   (sqrt (+ (expt (obj-x self) 2) (expt (obj-y self) 2)))))) 
*→* #<STANDARD-METHOD SHARED-INITIALIZE (:AFTER) (OBJ T) 26266714> 
(defmethod make-load-form ((self obj) &optional environment) 
  (declare (ignore environment)) 
  ;; Note that this definition only works because X and Y do not 
  ;; contain information which refers back to the object itself. 
  ;; For a more general solution to this problem, see revised example below. 
  ‘(make-instance ’,(class-of self) 
		   :x ’,(obj-x self) :y ’,(obj-y self))) 
*→* #<STANDARD-METHOD MAKE-LOAD-FORM (OBJ) 26267532> 
(setq obj1 (make-instance ’obj :x 3.0 :y 4.0)) *→* #<OBJ 26274136> 
(obj-dist obj1) *→* 5.0 
(make-load-form obj1) *→* (MAKE-INSTANCE ’OBJ :X ’3.0 :Y ’4.0) 
In the above example, an equivalent *instance* of obj is reconstructed by using the values of two of its *slots*. The value of the third *slot* is derived from those two values. 
Another way to write the **make-load-form** *method* in that example is to use **make-load-form-saving-slots**. The code it generates might yield a slightly different result from the **make-load-form** *method* shown above, but the operational effect will be the same. For example: 
;; Redefine method defined above. 
(defmethod make-load-form ((self obj) &optional environment) 
    (make-load-form-saving-slots self 
				 :slot-names ’(x y) 
				 :environment environment)) 
*→* #<STANDARD-METHOD MAKE-LOAD-FORM (OBJ) 42755655> 



**make-load-form** 
;; Try MAKE-LOAD-FORM on object created above. 
(make-load-form obj1) 
*→* (ALLOCATE-INSTANCE ’#<STANDARD-CLASS OBJ 250020030>), 
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



The *methods specialized* on <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink>, and <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink> all signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. 



It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether *calling* <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> on a *generalized instance* of a *system class* signals an error or returns creation and initialization <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink>, Section 3.2.4.4 (Additional Constraints on Externaliz able Objects) Section 3.1 (Evaluation), Section 3.2 (Compilation) 



**Notes:** 



The *file compiler* calls <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> in specific circumstances detailed in Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



Some <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> may provide facilities for defining new *subclasses* of *classes* which are specified as *system classes*. (Some likely candidates include <DictionaryLink styled={true} term={"generic-function"}><b>generic-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"method"}><b>method</b></DictionaryLink>, and <DictionaryLink styled={true} term={"stream"}><b>stream</b></DictionaryLink>). Such <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> should document how the *file compiler* processes <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of such *classes* when encountered as *literal objects*, and should document any relevant <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink>. 



