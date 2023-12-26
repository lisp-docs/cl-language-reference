**make-load-form** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> &amp;optional *environment → creation-form*[*, initialization-form*] 



**Method Signatures:** 



<DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> (<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) &amp;optional <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> 



<DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> (<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink>) &amp;optional <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> 



<DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> (<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink>) &amp;optional <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> 



<DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> (<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> <DictionaryLink  term={"class"}><b>class</b></DictionaryLink>) &amp;optional <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. 



*creation-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*initialization-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> creates and returns one or two <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, a *creation-form* and an *initialization-form*, that enable <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> to construct an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> equivalent to <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. <GlossaryTerm  term={"environment"}><i>Environment</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> corresponding to the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> will be processed. 



The <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> calls <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> to process certain *classes* of *literal objects*; see Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



<GlossaryTerm styled={true} term={"conforming program"}><i>Conforming programs</i></GlossaryTerm> may call <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> directly, providing <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink>, or <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink>. 



The creation form is a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that, when evaluated at <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> time, should return an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is equivalent to <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. The exact meaning of equivalent depends on the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> and is up to the programmer who defines a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink>; see Section 3.2.4 (Literal Objects in Compiled Files). 







 



 



<DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> 



The initialization form is a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that, when evaluated at <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> time, should perform further initialization of the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. The value returned by the initialization form is ignored. If <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> returns only one value, the initialization form is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, which has no effect. If <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> appears as a constant in the initialization form, at <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> time it will be replaced by the equivalent <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> constructed by the creation form; this is how the further initialization gains access to the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



Both the *creation-form* and the *initialization-form* may contain references to any <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable object</i></GlossaryTerm>. However, there must not be any circular dependencies in creation forms. An example of a circular dependency is when the creation form for the object X contains a reference to the object Y, and the creation form for the object Y contains a reference to the object X. Initialization forms are not subject to any restriction against circular dependencies, which is the reason that initialization forms exist; see the example of circular data structures below. 



The creation form for an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is always *evaluated* before the initialization form for that <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. When either the creation form or the initialization form references other <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that have not been referenced earlier in the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> being *compiled*, the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> ensures that all of the referenced <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> have been created before *evaluating* the referencing <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. When the referenced <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is of a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> which the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> processes using <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink>, this involves *evaluating* the creation form returned for it. (This is the reason for the prohibition against circular references among creation forms). 



Each initialization form is *evaluated* as soon as possible after its associated creation form, as determined by data flow. If the initialization form for an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> does not reference any other <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> not referenced earlier in the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> and processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> using <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink>, the initialization form is evaluated immediately after the creation form. If a creation or initialization form *F* does contain references to such <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>, the creation forms for those other objects are evaluated before *F*, and the initialization forms for those other <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> are also evaluated before *F* whenever they do not depend on the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> created or initialized by *F*. Where these rules do not uniquely determine an order of <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> between two creation/initialization forms, the order of <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> is unspecified. 



While these creation and initialization forms are being evaluated, the <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> are possibly in an uninitialized state, analogous to the state of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> between the time it has been created by <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> and it has been processed fully by <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>. Programmers writing 



<GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> must take care in manipulating <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> not to depend on <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> that have not yet been initialized. 



It is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> calls <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> on the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> or does some other operation that has an equivalent effect. For example, the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> might be translated into different but equivalent <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> and then evaluated, they might be compiled and the resulting functions called by <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>, or they might be interpreted by a special-purpose function different from <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink>. All that is required is that the effect be equivalent to evaluating the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



The *method specialized* on <DictionaryLink  term={"class"}><b>class</b></DictionaryLink> returns a creation <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> using the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> if the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> has a <GlossaryTerm styled={true} term={"proper name"}><i>proper name</i></GlossaryTerm> in <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, signaling an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> if it does not have a <GlossaryTerm styled={true} term={"proper name"}><i>proper name</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"evaluation"}><i>Evaluation</i></GlossaryTerm> of the creation <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> uses the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> to find the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> with that <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>, as if by 







 



 



<DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> 



*calling* <DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink>. If a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> with that <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> has not been defined, then a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> may be computed in an <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> manner. If a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> cannot be returned as the result of *evaluating* the creation <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, then an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



Both <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementations</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"conforming program"}><i>conforming programs</i></GlossaryTerm> may further <GlossaryTerm  term={"specialize"}><i>specialize</i></GlossaryTerm> <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink>. 



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



The *methods specialized* on <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink>, and <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink> all signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. 



It is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether *calling* <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> on a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"system class"}><i>system class</i></GlossaryTerm> signals an error or returns creation and initialization <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink>, Section 3.2.4.4 (Additional Constraints on Externaliz able Objects) Section 3.1 (Evaluation), Section 3.2 (Compilation) 



**Notes:** 



The <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> calls <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> in specific circumstances detailed in Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



Some <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> may provide facilities for defining new *subclasses* of *classes* which are specified as *system classes*. (Some likely candidates include <DictionaryLink  term={"generic-function"}><b>generic-function</b></DictionaryLink>, <DictionaryLink  term={"method"}><b>method</b></DictionaryLink>, and <DictionaryLink  term={"stream"}><b>stream</b></DictionaryLink>). Such <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> should document how the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> processes <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of such *classes* when encountered as *literal objects*, and should document any relevant <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink>. 



