**make-load-form** *Standard Generic Function* 



**Syntax:** 



**make-load-form** *object* &amp;optional *environment → creation-form*[*, initialization-form*] 



**Method Signatures:** 



**make-load-form** (*object* **standard-object**) &amp;optional *environment* 



**make-load-form** (*object* **structure-object**) &amp;optional *environment* 



**make-load-form** (*object* **condition**) &amp;optional *environment* 



**make-load-form** (*object* **class**) &amp;optional *environment* 



**Arguments and Values:** 



*object*—an *object*. 



*environment*—an *environment object*. 



*creation-form*—a *form*. 



*initialization-form*—a *form*. 



**Description:** 



The *generic function* **make-load-form** creates and returns one or two *forms*, a *creation-form* and an *initialization-form*, that enable **load** to construct an *object* equivalent to *object*. *Environment* is an *environment object* corresponding to the *lexical environment* in which the *forms* will be processed. 



The *file compiler* calls **make-load-form** to process certain *classes* of *literal objects*; see Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



*Conforming programs* may call **make-load-form** directly, providing *object* is a *generalized instance* of **standard-object**, **structure-object**, or **condition**. 



The creation form is a *form* that, when evaluated at **load** time, should return an *object* that is equivalent to *object*. The exact meaning of equivalent depends on the *type* of *object* and is up to the programmer who defines a *method* for **make-load-form**; see Section 3.2.4 (Literal Objects in Compiled Files). 







 



 



**make-load-form** 



The initialization form is a *form* that, when evaluated at **load** time, should perform further initialization of the *object*. The value returned by the initialization form is ignored. If **make-load-form** returns only one value, the initialization form is **nil**, which has no effect. If *object* appears as a constant in the initialization form, at **load** time it will be replaced by the equivalent *object* constructed by the creation form; this is how the further initialization gains access to the *object*. 



Both the *creation-form* and the *initialization-form* may contain references to any *externalizable object*. However, there must not be any circular dependencies in creation forms. An example of a circular dependency is when the creation form for the object X contains a reference to the object Y, and the creation form for the object Y contains a reference to the object X. Initialization forms are not subject to any restriction against circular dependencies, which is the reason that initialization forms exist; see the example of circular data structures below. 



The creation form for an *object* is always *evaluated* before the initialization form for that *object*. When either the creation form or the initialization form references other *objects* that have not been referenced earlier in the *file* being *compiled*, the *compiler* ensures that all of the referenced *objects* have been created before *evaluating* the referencing *form*. When the referenced *object* is of a *type* which the *file compiler* processes using **make-load-form**, this involves *evaluating* the creation form returned for it. (This is the reason for the prohibition against circular references among creation forms). 



Each initialization form is *evaluated* as soon as possible after its associated creation form, as determined by data flow. If the initialization form for an *object* does not reference any other *objects* not referenced earlier in the *file* and processed by the *file compiler* using **make-load-form**, the initialization form is evaluated immediately after the creation form. If a creation or initialization form *F* does contain references to such *objects*, the creation forms for those other objects are evaluated before *F*, and the initialization forms for those other *objects* are also evaluated before *F* whenever they do not depend on the *object* created or initialized by *F*. Where these rules do not uniquely determine an order of *evaluation* between two creation/initialization forms, the order of *evaluation* is unspecified. 



While these creation and initialization forms are being evaluated, the *objects* are possibly in an uninitialized state, analogous to the state of an *object* between the time it has been created by **allocate-instance** and it has been processed fully by **initialize-instance**. Programmers writing 



*methods* for **make-load-form** must take care in manipulating *objects* not to depend on *slots* that have not yet been initialized. 



It is *implementation-dependent* whether **load** calls **eval** on the *forms* or does some other operation that has an equivalent effect. For example, the *forms* might be translated into different but equivalent *forms* and then evaluated, they might be compiled and the resulting functions called by **load**, or they might be interpreted by a special-purpose function different from **eval**. All that is required is that the effect be equivalent to evaluating the *forms*. 



The *method specialized* on **class** returns a creation *form* using the *name* of the *class* if the *class* has a *proper name* in *environment*, signaling an error of *type* **error** if it does not have a *proper name*. *Evaluation* of the creation *form* uses the *name* to find the *class* with that *name*, as if by 







 



 



**make-load-form** 



*calling* **find-class**. If a *class* with that *name* has not been defined, then a *class* may be computed in an *implementation-defined* manner. If a *class* cannot be returned as the result of *evaluating* the creation *form*, then an error of *type* **error** is signaled. 



Both *conforming implementations* and *conforming programs* may further *specialize* **make-load-form**. 



**Examples:**
```lisp
 

(defclass obj () 

((x :initarg :x :reader obj-x) 

(y :initarg :y :reader obj-y) 

(dist :accessor obj-dist))) 

*→* #\<STANDARD-CLASS OBJ 250020030\> 

(defmethod shared-initialize :after ((self obj) slot-names &rest keys) 

(declare (ignore slot-names keys)) 

(unless (slot-boundp self ’dist) 

(setf (obj-dist self) 

(sqrt (+ (expt (obj-x self) 2) (expt (obj-y self) 2)))))) 

*→* #\<STANDARD-METHOD SHARED-INITIALIZE (:AFTER) (OBJ T) 26266714\> 

(defmethod make-load-form ((self obj) &optional environment) 

(declare (ignore environment)) 

;; Note that this definition only works because X and Y do not 

;; contain information which refers back to the object itself. 

;; For a more general solution to this problem, see revised example below. 

‘(make-instance ’,(class-of self) 

:x ’,(obj-x self) :y ’,(obj-y self))) 

*→* #\<STANDARD-METHOD MAKE-LOAD-FORM (OBJ) 26267532\> 

(setq obj1 (make-instance ’obj :x 3.0 :y 4.0)) *→* #\<OBJ 26274136\> 

(obj-dist obj1) *→* 5.0 

(make-load-form obj1) *→* (MAKE-INSTANCE ’OBJ :X ’3.0 :Y ’4.0) 

In the above example, an equivalent *instance* of obj is reconstructed by using the values of two of its *slots*. The value of the third *slot* is derived from those two values. 

Another way to write the **make-load-form** *method* in that example is to use **make-load-form-saving-slots**. The code it generates might yield a slightly different result from the **make-load-form** *method* shown above, but the operational effect will be the same. For example: 

;; Redefine method defined above. 

(defmethod make-load-form ((self obj) &optional environment) 

(make-load-form-saving-slots self 

:slot-names ’(x y) 

:environment environment)) 

*→* #\<STANDARD-METHOD MAKE-LOAD-FORM (OBJ) 42755655\> 



 

 

**make-load-form** 

;; Try MAKE-LOAD-FORM on object created above. 

(make-load-form obj1) 

*→* (ALLOCATE-INSTANCE ’#\<STANDARD-CLASS OBJ 250020030\>), 

(PROGN 

(SETF (SLOT-VALUE ’#\<OBJ 26274136\> ’X) ’3.0) 

(SETF (SLOT-VALUE ’#\<OBJ 26274136\> ’Y) ’4.0) 

(INITIALIZE-INSTANCE ’#\<OBJ 26274136\>)) 

In the following example, *instances* of my-frob are “interned” in some way. An equivalent *instance* is reconstructed by using the value of the name slot as a key for searching existing *objects*. In this case the programmer has chosen to create a new *object* if no existing *object* is found; alternatively an error could have been signaled in that case. 

(defclass my-frob () 

((name :initarg :name :reader my-name))) 

(defmethod make-load-form ((self my-frob) &amp;optional environment) 

(declare (ignore environment)) 

‘(find-my-frob ’,(my-name self) :if-does-not-exist :create)) 

In the following example, the data structure to be dumped is circular, because each parent has a list of its children and each child has a reference back to its parent. If **make-load-form** is called on one *object* in such a structure, the creation form creates an equivalent *object* and fills in the children slot, which forces creation of equivalent *objects* for all of its children, grandchildren, etc. 

At this point none of the parent *slots* have been filled in. The initialization form fills in the parent *slot*, which forces creation of an equivalent *object* for the parent if it was not already created. Thus the entire tree is recreated at **load** time. At compile time, **make-load-form** is called once for each *object* in the tree. All of the creation forms are evaluated, in *implementation-dependent* order, and then all of the initialization forms are evaluated, also in *implementation-dependent* order. 

(defclass tree-with-parent () ((parent :accessor tree-parent) 

(children :initarg :children))) 

(defmethod make-load-form ((x tree-with-parent) &amp;optional environment) 

(declare (ignore environment)) 

(values 

;; creation form 

‘(make-instance ’,(class-of x) :children ’,(slot-value x ’children)) 

;; initialization form 

‘(setf (tree-parent ’,x) ’,(slot-value x ’parent)))) 

In the following example, the data structure to be dumped has no special properties and an equivalent structure can be reconstructed simply by reconstructing the *slots*’ contents. 

(defstruct my-struct a b c) 

(defmethod make-load-form ((s my-struct) &amp;optional environment) 

(make-load-form-saving-slots s :environment environment)) 



 

 


```
**Exceptional Situations:** 



The *methods specialized* on **standard-object**, **structure-object**, and **condition** all signal an error of *type* **error**. 



It is *implementation-dependent* whether *calling* **make-load-form** on a *generalized instance* of a *system class* signals an error or returns creation and initialization *forms*. 



**See Also:** 



**compile-file**, **make-load-form-saving-slots**, Section 3.2.4.4 (Additional Constraints on Externaliz able Objects) Section 3.1 (Evaluation), Section 3.2 (Compilation) 



**Notes:** 



The *file compiler* calls **make-load-form** in specific circumstances detailed in Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



Some *implementations* may provide facilities for defining new *subclasses* of *classes* which are specified as *system classes*. (Some likely candidates include **generic-function**, **method**, and **stream**). Such *implementations* should document how the *file compiler* processes *instances* of such *classes* when encountered as *literal objects*, and should document any relevant *methods* for **make-load-form**. 



