**7.6.7 Inheritance of Methods** 

A subclass inherits methods in the sense that any method applicable to all instances of a class is also applicable to all instances of any subclass of that class. 

The inheritance of methods acts the same way regardless of which of the *method-defining operators* created the methods. 

The inheritance of methods is described in detail in Section 7.6.6 (Method Selection and Combination). 



 

 

**function-keywords** *Standard Generic Function* 

**Syntax:** 

**function-keywords** *method → keys, allow-other-keys-p* 

**Method Signatures:** 

**function-keywords** (*method* **standard-method**) 

**Arguments and Values:** 

*method*—a *method*. 

*keys*—a *list*. 

*allow-other-keys-p*—a *generalized boolean*. 

**Description:** 

Returns the keyword parameter specifiers for a *method*. 

Two values are returned: a *list* of the explicitly named keywords and a *generalized boolean* that states whether **&allow-other-keys** had been specified in the *method* definition. 

**Examples:** 

(defmethod gf1 ((a integer) &optional (b 2) 

&key (c 3) ((:dee d) 4) e ((eff f))) 

(list a b c d e f)) 

*→* #\<STANDARD-METHOD GF1 (INTEGER) 36324653\> 

(find-method #’gf1 ’() (list (find-class ’integer))) 

*→* #\<STANDARD-METHOD GF1 (INTEGER) 36324653\> 

(function-keywords \*) 

*→* (:C :DEE :E EFF), *false* 

(defmethod gf2 ((a integer)) 

(list a b c d e f)) 

*→* #\<STANDARD-METHOD GF2 (INTEGER) 42701775\> 

(function-keywords (find-method #’gf1 ’() (list (find-class ’integer)))) 

*→* (), *false* 

(defmethod gf3 ((a integer) &key b c d &allow-other-keys) 

(list a b c d e f)) 

(function-keywords \*) 

*→* (:B :C :D), *true* 

**Affected By:** 

**defmethod** 

Objects **7–27**

 

 

**See Also:** 

**defmethod** 

**ensure-generic-function** *Function* 

**Syntax:** 

**ensure-generic-function** *function-name* &key *argument-precedence-order declare* 

*documentation environment* 

*generic-function-class lambda-list* 

*method-class method-combination* 

*→ generic-function* 

**Arguments and Values:** 

*function-name*—a *function name*. 

The keyword arguments correspond to the *option* arguments of **defgeneric**, except that the :method-class and :generic-function-class arguments can be *class object*s as well as names. 

Method-combination – method combination object. 

Environment – the same as the **&environment** argument to macro expansion functions and is used to distinguish between compile-time and run-time environments. 

*generic-function*—a *generic function object*. 

**Description:** 

The *function* **ensure-generic-function** is used to define a globally named *generic function* with no *methods* or to specify or modify options and declarations that pertain to a globally named *generic function* as a whole. 

If *function-name* is not *fbound* in the *global environment*, a new *generic function* is created. If (fdefinition *function-name*) is an *ordinary function*, a *macro*, or a *special operator* , an error is signaled. 

If *function-name* is a *list*, it must be of the form (setf *symbol*). If *function-name* specifies a *generic function* that has a different value for any of the following arguments, the *generic function* is modified to have the new value: :argument-precedence-order, :declare, :documentation, :method-combination. 

If *function-name* specifies a *generic function* that has a different value for the :lambda-list argument, and the new value is congruent with the *lambda lists* of all existing *methods* or there are no *methods*, the value is changed; otherwise an error is signaled. 



 

 

If *function-name* specifies a *generic function* that has a different value for the :generic-function-class argument and if the new generic function class is compatible with the old, **change-class** is called to change the *class* of the *generic function*; otherwise an error is signaled. 

If *function-name* specifies a *generic function* that has a different value for the :method-class argument, the value is changed, but any existing *methods* are not changed. 

**Affected By:** 

Existing function binding of *function-name*. 

**Exceptional Situations:** 

If (fdefinition *function-name*) is an *ordinary function*, a *macro*, or a *special operator* , an error of *type* **error** is signaled. 

If *function-name* specifies a *generic function* that has a different value for the :lambda-list argument, and the new value is not congruent with the *lambda list* of any existing *method*, an error of *type* **error** is signaled. 

If *function-name* specifies a *generic function* that has a different value for the :generic-function-class argument and if the new generic function class not is compatible with the old, an error of *type* **error** is signaled. 

**See Also:** 

**defgeneric** 

**allocate-instance** *Standard Generic Function* 

**Syntax:** 

**allocate-instance** *class* &rest *initargs* &key &allow-other-keys *→ new-instance* 

**Method Signatures:** 

**allocate-instance** (*class* **standard-class**) &rest *initargs* 

**allocate-instance** (*class* **structure-class**) &rest *initargs* 

**Arguments and Values:** 

*class*—a *class*. 

*initargs*—a *list* of *keyword/value pairs* (initialization argument *names* and *values*). *new-instance*—an *object* whose *class* is *class*. 

Objects **7–29**

 

 

**Description:** 

The generic function **allocate-instance** creates and returns a new instance of the *class*, without initializing it. When the *class* is a *standard class*, this means that the *slots* are *unbound*; when the *class* is a *structure class*, this means the *slots*’ *values* are unspecified. 

The caller of **allocate-instance** is expected to have already checked the initialization arguments. 

The *generic function* **allocate-instance** is called by **make-instance**, as described in Section 7.1 (Object Creation and Initialization). 

**See Also:** 

**defclass**, **make-instance**, **class-of**, Section 7.1 (Object Creation and Initialization) 

**Notes:** 

The consequences of adding *methods* to **allocate-instance** is unspecified. This capability might be added by the *Metaobject Protocol*. 

**reinitialize-instance** *Standard Generic Function* 

**Syntax:** 

**reinitialize-instance** *instance* &rest *initargs* &key &allow-other-keys *→ instance* 

**Method Signatures:** 

**reinitialize-instance** (*instance* **standard-object**) &rest *initargs* 

**Arguments and Values:** 

*instance*—an *object*. 

*initargs*—an *initialization argument list*. 

**Description:** 

The *generic function* **reinitialize-instance** can be used to change the values of *local slots* of an *instance* according to *initargs*. This *generic function* can be called by users. 

The system-supplied primary *method* for **reinitialize-instance** checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. The *method* then calls the generic function **shared-initialize** with the following arguments: the *instance*, **nil** (which means no *slots* should be initialized according to their initforms), and the *initargs* it received. 

**Side Effects:** 

The *generic function* **reinitialize-instance** changes the values of *local slots*. 



 

 

**Exceptional Situations:** 

The system-supplied primary *method* for **reinitialize-instance** signals an error if an *initarg* is supplied that is not declared as valid. 

**See Also:** 

**initialize-instance**, **shared-initialize**, **update-instance-for-redefined-class**, 

**update-instance-for-different-class**, **slot-boundp**, **slot-makunbound**, Section 7.3 (Reinitial izing an Instance), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 

**Notes:** 

*Initargs* are declared as valid by using the :initarg option to **defclass**, or by defining *methods* for **reinitialize-instance** or **shared-initialize**. The keyword name of each keyword parameter specifier in the *lambda list* of any *method* defined on **reinitialize-instance** or **shared-initialize** is declared as a valid initialization argument name for all *classes* for which that *method* is applicable. 

**shared-initialize** *Standard Generic Function* 

**Syntax:** 

**shared-initialize** *instance slot-names* &rest *initargs* &key &allow-other-keys *→ instance* 

**Method Signatures:** 

**shared-initialize** (*instance* **standard-object**) *slot-names* &rest *initargs* 

**Arguments and Values:** 

*instance*—an *object*. 

*slot-names*—a *list* or **t**. 

*initargs*—a *list* of *keyword/value pairs* (of initialization argument *names* and *values*). 

**Description:** 

The generic function **shared-initialize** is used to fill the *slots* of an *instance* using *initargs* and :initform forms. It is called when an instance is created, when an instance is re-initialized, when an instance is updated to conform to a redefined *class*, and when an instance is updated to conform to a different *class*. The generic function **shared-initialize** is called by the system-supplied primary *method* for **initialize-instance**, **reinitialize-instance**, **update-instance-for-redefined-class**, and **update-instance-for-different-class**. 

The generic function **shared-initialize** takes the following arguments: the *instance* to be initialized, a specification of a set of *slot-names accessible* in that *instance*, and any number of *initargs*. The arguments after the first two must form an *initialization argument list*. The system-supplied 

Objects **7–31**

 

 

**shared-initialize** 

primary *method* on **shared-initialize** initializes the *slots* with values according to the *initargs* and supplied :initform forms. *Slot-names* indicates which *slots* should be initialized according to their :initform forms if no *initargs* are provided for those *slots*. 

The system-supplied primary *method* behaves as follows, regardless of whether the *slots* are local or shared: 

*•* If an *initarg* in the *initialization argument list* specifies a value for that *slot*, that value is stored into the *slot*, even if a value has already been stored in the *slot* before the *method* is run. 

*•* Any *slots* indicated by *slot-names* that are still unbound at this point are initialized according to their :initform forms. For any such *slot* that has an :initform form, that *form* is evaluated in the lexical environment of its defining **defclass** *form* and the result is stored into the *slot*. For example, if a *before method* stores a value in the *slot*, the :initform form will not be used to supply a value for the *slot*. 

*•* The rules mentioned in Section 7.1.4 (Rules for Initialization Arguments) are obeyed. 

The *slots-names* argument specifies the *slots* that are to be initialized according to their :initform forms if no initialization arguments apply. It can be a *list* of slot *names*, which specifies the set of those slot *names*; or it can be the *symbol* **t**, which specifies the set of all of the *slots*. 

**See Also:** 

**initialize-instance**, **reinitialize-instance**, **update-instance-for-redefined-class**, 

**update-instance-for-different-class**, **slot-boundp**, **slot-makunbound**, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 

**Notes:** 

*Initargs* are declared as valid by using the :initarg option to **defclass**, or by defining *methods* for **shared-initialize**. The keyword name of each keyword parameter specifier in the *lambda list* of any *method* defined on **shared-initialize** is declared as a valid *initarg* name for all *classes* for which that *method* is applicable. 

Implementations are permitted to optimize :initform forms that neither produce nor depend on side effects, by evaluating these *forms* and storing them into slots before running any **initialize-instance** methods, rather than by handling them in the primary **initialize-instance** method. (This optimization might be implemented by having the **allocate-instance** method copy a prototype instance.) 

Implementations are permitted to optimize default initial value forms for *initargs* associated with slots by not actually creating the complete initialization argument *list* when the only *method* that would receive the complete *list* is the *method* on **standard-object**. In this case default initial value 

forms can be treated like :initform forms. This optimization has no visible effects other than a performance improvement. 



 

 

**update-instance-for-different-class** *Standard Generic Function* 

**Syntax:** 

**update-instance-for-different-class** *previous current* &rest *initargs* &key &allow-other-keys *→ implementation-dependent* 

**Method Signatures:** 

**update-instance-for-different-class** (*previous* **standard-object**) 

(*current* **standard-object**) 

&rest *initargs* 

**Arguments and Values:** 

*previous*—a copy of the original *instance*. 

*current*—the original *instance* (altered). 

*initargs*—an *initialization argument list*. 

**Description:** 

The generic function **update-instance-for-different-class** is not intended to be called by program mers. Programmers may write *methods* for it. The *function* **update-instance-for-different-class** is called only by the *function* **change-class**. 

The system-supplied primary *method* on **update-instance-for-different-class** checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. This *method* then initializes *slots* with values according to the *initargs*, and initializes the newly added *slots* with values according to their :initform forms. It does this by calling the generic function **shared-initialize** with the following arguments: the instance (*current*), a list of *names* of the newly added *slots*, and the *initargs* it received. Newly added *slots* are those *local slots* for which no *slot* of the same name exists in the *previous* class. 

*Methods* for **update-instance-for-different-class** can be defined to specify actions to be taken when an *instance* is updated. If only *after methods* for **update-instance-for-different-class** are defined, they will be run after the system-supplied primary *method* for initialization and therefore will not interfere with the default behavior of **update-instance-for-different-class**. 

*Methods* on **update-instance-for-different-class** can be defined to initialize *slots* differently from **change-class**. The default behavior of **change-class** is described in Section 7.2 (Changing the Class of an Instance). 

Objects **7–33**

 

 

The arguments to **update-instance-for-different-class** are computed by **change-class**. When **change-class** is invoked on an *instance*, a copy of that *instance* is made; **change-class** then de structively alters the original *instance*. The first argument to **update-instance-for-different-class**, *previous*, is that copy; it holds the old *slot* values temporarily. This argument has dynamic extent within **change-class**; if it is referenced in any way once **update-instance-for-different-class** returns, the results are undefined. The second argument to **update-instance-for-different-class**, *current*, is the altered original *instance*. The intended use of *previous* is to extract old *slot* values by using **slot-value** or **with-slots** or by invoking a reader generic function, or to run other *methods* that were applicable to *instances* of the original *class*. 

**Examples:** 

See the example for the *function* **change-class**. 

**Exceptional Situations:** 

The system-supplied primary *method* on **update-instance-for-different-class** signals an error if an initialization argument is supplied that is not declared as valid. 

**See Also:** 

**change-class**, **shared-initialize**, Section 7.2 (Changing the Class of an Instance), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 

**Notes:** 

*Initargs* are declared as valid by using the :initarg option to **defclass**, or by defining *methods* for **update-instance-for-different-class** or **shared-initialize**. The keyword name of each keyword parameter specifier in the *lambda list* of any *method* defined on **update-instance-for-different-class** or **shared-initialize** is declared as a valid *initarg* name for all *classes* for which that *method* is applicable. 

The value returned by **update-instance-for-different-class** is ignored by **change-class**. 

**update-instance-for-redefined-class** *Standard Generic Function* 

**Syntax:** 

**update-instance-for-redefined-class** *instance* 

*added-slots discarded-slots* 

*property-list* 

&rest *initargs* &key &allow-other-keys 

*→ \{result\}*\* 



 

 

**update-instance-for-redefined-class** 

**Method Signatures:** 

**update-instance-for-redefined-class** (*instance* **standard-object**) 

*added-slots discarded-slots* 

*property-list* 

&rest *initargs* 

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

Objects **7–35**

 

 

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

**Exceptional Situations:** 

The system-supplied primary *method* on **update-instance-for-redefined-class** signals an error if an *initarg* is supplied that is not declared as valid. 

**See Also:** 

**make-instances-obsolete**, **shared-initialize**, Section 4.3.6 (Redefining Classes), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 

**Notes:** 

*Initargs* are declared as valid by using the :initarg option to **defclass**, or by defining *methods* for **update-instance-for-redefined-class** or **shared-initialize**. The keyword name of each keyword parameter specifier in the *lambda list* of any *method* defined on **update-instance-for-redefined-class** or **shared-initialize** is declared as a valid *initarg* name for all *classes* for which that *method* is applicable. 

**change-class** *Standard Generic Function* 

**Syntax:** 

**change-class** *instance new-class* &key &allow-other-keys *→ instance* 

**Method Signatures:** 

**change-class** (*instance* **standard-object**) (*new-class* **standard-class**) &rest *initargs* 

**change-class** (*instance* **t**) (*new-class* **symbol**) &rest *initargs* 

**Arguments and Values:** 

*instance*—an *object*. 

*new-class*—a *class designator* . 

*initargs*—an *initialization argument list*. 

**Description:** 

The *generic function* **change-class** changes the *class* of an *instance* to *new-class*. It destructively modifies and returns the *instance*. 

Objects **7–37**

 

 

**change-class** 

If in the old *class* there is any *slot* of the same name as a local *slot* in the *new-class*, the value of that *slot* is retained. This means that if the *slot* has a value, the value returned by **slot-value** after **change-class** is invoked is **eql** to the value returned by **slot-value** before **change-class** is invoked. Similarly, if the *slot* was unbound, it remains unbound. The other *slots* are initialized as described in Section 7.2 (Changing the Class of an Instance). 

After completing all other actions, **change-class** invokes **update-instance-for-different-class**. The generic function **update-instance-for-different-class** can be used to assign values to slots in the transformed instance. See Section 7.2.2 (Initializing Newly Added Local Slots). 

If the second of the above *methods* is selected, that *method* invokes **change-class** on *instance*, (find-class *new-class*), and the *initargs*. 

**Examples:** 

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

**See Also:** 

**update-instance-for-different-class**, Section 7.2 (Changing the Class of an Instance) 

**Notes:** 

The generic function **change-class** has several semantic difficulties. First, it performs a destructive operation that can be invoked within a *method* on an *instance* that was used to select that *method*. When multiple *methods* are involved because *methods* are being combined, the *methods* currently 

executing or about to be executed may no longer be applicable. Second, some implementations might use compiler optimizations of slot *access*, and when the *class* of an *instance* is changed the assumptions the compiler made might be violated. This implies that a programmer must not use **change-class** inside a *method* if any *methods* for that *generic function access* any *slots*, or the results are undefined. 

**slot-boundp** *Function* 

**Syntax:** 

**slot-boundp** *instance slot-name → generalized-boolean* 

**Arguments and Values:** 

*instance*—an *object*. 

*slot-name*—a *symbol* naming a *slot* of *instance*. 

*generalized-boolean*—a *generalized boolean*. 

**Description:** 

Returns *true* if the *slot* named *slot-name* in *instance* is bound; otherwise, returns *false*. 

**Exceptional Situations:** 

If no *slot* of the *name slot-name* exists in the *instance*, **slot-missing** is called as follows: 

(slot-missing (class-of *instance*) 

*instance* 

*slot-name* 

’slot-boundp) 

(If **slot-missing** is invoked and returns a value, a *boolean equivalent* to its *primary value* is returned by **slot-boundp**.) 

Objects **7–39**

 

 

The specific behavior depends on *instance*’s *metaclass*. An error is never signaled if *instance* has *metaclass* **standard-class**. An error is always signaled if *instance* has *metaclass* **built-in-class**. The consequences are undefined if *instance* has any other *metaclass*–an error might or might not be signaled in this situation. Note in particular that the behavior for *conditions* and *structures* is not specified. 

**See Also:** 

**slot-makunbound**, **slot-missing** 

**Notes:** 

The *function* **slot-boundp** allows for writing *after methods* on **initialize-instance** in order to initialize only those *slots* that have not already been bound. 

Although no *implementation* is required to do so, implementors are strongly encouraged to implement the *function* **slot-boundp** using the *function* slot-boundp-using-class described in the *Metaobject Protocol*. 

**slot-exists-p** *Function* 

**Syntax:** 

**slot-exists-p** *object slot-name → generalized-boolean* 

**Arguments and Values:** 

*object*—an *object*. 

*slot-name*—a *symbol*. 

*generalized-boolean*—a *generalized boolean*. 

**Description:** 

Returns *true* if the *object* has a *slot* named *slot-name*. 

**Affected By:** 

**defclass**, **defstruct** 

**See Also:** 

**defclass**, **slot-missing** 

**Notes:** 

Although no *implementation* is required to do so, implementors are strongly encouraged to implement the *function* **slot-exists-p** using the *function* slot-exists-p-using-class described in the *Metaobject Protocol*. 



 

 

**slot-makunbound** *Function* 

**Syntax:** 

**slot-makunbound** *instance slot-name → instance* 

**Arguments and Values:** 

*instance* – instance. 

*Slot-name*—a *symbol*. 

**Description:** 

The *function* **slot-makunbound** restores a *slot* of the name *slot-name* in an *instance* to the unbound state. 

**Exceptional Situations:** 

If no *slot* of the name *slot-name* exists in the *instance*, **slot-missing** is called as follows: 

(slot-missing (class-of *instance*) 

*instance* 

*slot-name* 

’slot-makunbound) 

(Any values returned by **slot-missing** in this case are ignored by **slot-makunbound**.) 

The specific behavior depends on *instance*’s *metaclass*. An error is never signaled if *instance* has *metaclass* **standard-class**. An error is always signaled if *instance* has *metaclass* **built-in-class**. The consequences are undefined if *instance* has any other *metaclass*–an error might or might not be signaled in this situation. Note in particular that the behavior for *conditions* and *structures* is not specified. 

**See Also:** 

**slot-boundp**, **slot-missing** 

**Notes:** 

Although no *implementation* is required to do so, implementors are strongly encouraged to implement the *function* **slot-makunbound** using the *function* slot-makunbound-using-class described in the *Metaobject Protocol*. 

Objects **7–41**

 

 

**slot-missing** 

**slot-missing** *Standard Generic Function* 

**Syntax:** 

**slot-missing** *class object slot-name operation* &optional *new-value → \{result\}*\* 

**Method Signatures:** 

**slot-missing** (*class* **t**) *object slot-name* 

*operation* &optional *new-value* 

**Arguments and Values:** 

*class*—the *class* of *object*. 

*object*—an *object*. 

*slot-name*—a *symbol* (the *name* of a would-be *slot*). 

*operation*—one of the *symbols* **setf**, **slot-boundp**, **slot-makunbound**, or **slot-value**. *new-value*—an *object*. 

*result*—an *object*. 

**Description:** 

The generic function **slot-missing** is invoked when an attempt is made to *access* a *slot* in an *object* whose *metaclass* is **standard-class** and the *slot* of the name *slot-name* is not a *name* of a *slot* in that *class*. The default *method* signals an error. 

The generic function **slot-missing** is not intended to be called by programmers. Programmers may write *methods* for it. 

The generic function **slot-missing** may be called during evaluation of **slot-value**, (setf slot-value), **slot-boundp**, and **slot-makunbound**. For each of these operations the corresponding *symbol* for the *operation* argument is **slot-value**, **setf**, **slot-boundp**, and **slot-makunbound** respectively. 

The optional *new-value* argument to **slot-missing** is used when the operation is attempting to set the value of the *slot*. 

If **slot-missing** returns, its values will be treated as follows: 

*•* If the *operation* is **setf** or **slot-makunbound**, any *values* will be ignored by the caller. 

*•* If the *operation* is **slot-value**, only the *primary value* will be used by the caller, and all other values will be ignored. 

*•* If the *operation* is **slot-boundp**, any *boolean equivalent* of the *primary value* of the *method* might be is used, and all other values will be ignored. 



 

 

**Exceptional Situations:** 

The default *method* on **slot-missing** signals an error of *type* **error**. 

**See Also:** 

**defclass**, **slot-exists-p**, **slot-value** 

**Notes:** 

The set of arguments (including the *class* of the instance) facilitates defining methods on the metaclass for **slot-missing**. 

**slot-unbound** *Standard Generic Function* 

**Syntax:** 

**slot-unbound** *class instance slot-name → \{result\}*\* 

**Method Signatures:** 

**slot-unbound** (*class* **t**) *instance slot-name* 

**Arguments and Values:** 

*class*—the *class* of the *instance*. 

*instance*—the *instance* in which an attempt was made to *read* the *unbound slot*. 

*slot-name*—the *name* of the *unbound slot*. 

*result*—an *object*. 

**Description:** 

The generic function **slot-unbound** is called when an unbound *slot* is read in an *instance* whose metaclass is **standard-class**. The default *method* signals an error of *type* **unbound-slot**. The name slot of the **unbound-slot** *condition* is initialized to the name of the offending variable, and the instance slot of the **unbound-slot** *condition* is initialized to the offending instance. 

The generic function **slot-unbound** is not intended to be called by programmers. Programmers may write *methods* for it. The *function* **slot-unbound** is called only indirectly by **slot-value**. 

If **slot-unbound** returns, only the *primary value* will be used by the caller, and all other values will be ignored. 

**Exceptional Situations:** 

The default *method* on **slot-unbound** signals an error of *type* **unbound-slot**. 

**See Also:** 

**slot-makunbound** 

Objects **7–43**

 

 

**Notes:** 

An unbound *slot* may occur if no :initform form was specified for the *slot* and the *slot* value has not been set, or if **slot-makunbound** has been called on the *slot*. 

**slot-value** *Function* 

**Syntax:** 

**slot-value** *object slot-name → value* 

**Arguments and Values:** 

*object*—an *object*. 

*name*—a *symbol*. 

*value*—an *object*. 

**Description:** 

The *function* **slot-value** returns the *value* of the *slot* named *slot-name* in the *object*. If there is no *slot* named *slot-name*, **slot-missing** is called. If the *slot* is unbound, **slot-unbound** is called. 

The macro **setf** can be used with **slot-value** to change the value of a *slot*. 

**Examples:** 

(defclass foo () 

((a :accessor foo-a :initarg :a :initform 1) 

(b :accessor foo-b :initarg :b) 

(c :accessor foo-c :initform 3))) 

*→* #\<STANDARD-CLASS FOO 244020371\> 

(setq foo1 (make-instance ’foo :a ’one :b ’two)) 

*→* #\<FOO 36325624\> 

(slot-value foo1 ’a) *→* ONE 

(slot-value foo1 ’b) *→* TWO 

(slot-value foo1 ’c) *→* 3 

(setf (slot-value foo1 ’a) ’uno) *→* UNO 

(slot-value foo1 ’a) *→* UNO 

(defmethod foo-method ((x foo)) 

(slot-value x ’a)) 

*→* #\<STANDARD-METHOD FOO-METHOD (FOO) 42720573\> 

(foo-method foo1) *→* UNO 



 

 

**Exceptional Situations:** 

If an attempt is made to read a *slot* and no *slot* of the name *slot-name* exists in the *object*, **slot-missing** is called as follows: 

(slot-missing (class-of *instance*) 

*instance* 

*slot-name* 

’slot-value) 

(If **slot-missing** is invoked, its *primary value* is returned by **slot-value**.) 

If an attempt is made to write a *slot* and no *slot* of the name *slot-name* exists in the *object*, **slot-missing** is called as follows: 

(slot-missing (class-of *instance*) 

*instance* 

*slot-name* 

’setf 

*new-value*) 

(If **slot-missing** returns in this case, any *values* are ignored.) 

The specific behavior depends on *object*’s *metaclass*. An error is never signaled if *object* has *metaclass* **standard-class**. An error is always signaled if *object* has *metaclass* **built-in-class**. The consequences are unspecified if *object* has any other *metaclass*–an error might or might not be signaled in this situation. Note in particular that the behavior for *conditions* and *structures* is not specified. 

**See Also:** 

**slot-missing**, **slot-unbound**, **with-slots** 

**Notes:** 

Although no *implementation* is required to do so, implementors are strongly encouraged to implement the *function* **slot-value** using the *function* slot-value-using-class described in the *Metaobject Protocol*. 

Implementations may optimize **slot-value** by compiling it inline. 

**method-qualifiers** *Standard Generic Function* 

**Syntax:** 

**method-qualifiers** *method → qualifiers* 

Objects **7–45**

 

 

**Method Signatures:** 

**method-qualifiers** (*method* **standard-method**) 

**Arguments and Values:** 

*method*—a *method*. 

*qualifiers*—a *proper list*. 

**Description:** 

Returns a *list* of the *qualifiers* of the *method*. 

**Examples:** 

(defmethod some-gf :before ((a integer)) a) 

*→* #\<STANDARD-METHOD SOME-GF (:BEFORE) (INTEGER) 42736540\> 

(method-qualifiers \*) *→* (:BEFORE) 

**See Also:** 

**define-method-combination** 

**no-applicable-method** *Standard Generic Function* 

**Syntax:** 

**no-applicable-method** *generic-function* &rest *function-arguments → \{result\}*\* 

**Method Signatures:** 

**no-applicable-method** (*generic-function* **t**) 

&rest *function-arguments* 

**Arguments and Values:** 

*generic-function*—a *generic function* on which no *applicable method* was found. 

*function-arguments*—*arguments* to the *generic-function*. 

*result*—an *object*. 

**Description:** 

The generic function **no-applicable-method** is called when a *generic function* is invoked and no *method* on that *generic function* is applicable. The *default method* signals an error. 

The generic function **no-applicable-method** is not intended to be called by programmers. Programmers may write *methods* for it. 



 

 

**Exceptional Situations:** 

The default *method* signals an error of *type* **error**. 

**See Also:** 

**no-next-method** *Standard Generic Function* 

**Syntax:** 

**no-next-method** *generic-function method* &rest *args → \{result\}*\* 

**Method Signatures:** 

**no-next-method** (*generic-function* **standard-generic-function**) 

(*method* **standard-method**) 

&rest *args* 

**Arguments and Values:** 

*generic-function* – *generic function* to which *method* belongs. 

*method* – *method* that contained the call to **call-next-method** for which there is no next *method*. *args* – arguments to **call-next-method**. 

*result*—an *object*. 

**Description:** 

The *generic function* **no-next-method** is called by **call-next-method** when there is no *next method*. 

The *generic function* **no-next-method** is not intended to be called by programmers. Programmers may write *methods* for it. 

**Exceptional Situations:** 

The system-supplied *method* on **no-next-method** signals an error of *type* **error**. 

**See Also:** 

**call-next-method** 

Objects **7–47**

 

 

**remove-method** *Standard Generic Function* 

**Syntax:** 

**remove-method** *generic-function method → generic-function* 

**Method Signatures:** 

**remove-method** (*generic-function* **standard-generic-function**) 

*method* 

**Arguments and Values:** 

*generic-function*—a *generic function*. 

*method*—a *method*. 

**Description:** 

The *generic function* **remove-method** removes a *method* from *generic-function* by modifying the *generic-function* (if necessary). 

**remove-method** must not signal an error if the *method* is not one of the *methods* on the *generic-function*. 

**See Also:** 

**find-method** 

**make-instance** *Standard Generic Function* 

**Syntax:** 

**make-instance** *class* &rest *initargs* &key &allow-other-keys *→ instance* 

**Method Signatures:** 

**make-instance** (*class* **standard-class**) &rest *initargs* 

**make-instance** (*class* **symbol**) &rest *initargs* 

**Arguments and Values:** 

*class*—a *class*, or a *symbol* that names a *class*. 

*initargs*—an *initialization argument list*. 

*instance*—a *fresh instance* of *class class*. 



 

 

**Description:** 

The *generic function* **make-instance** creates and returns a new *instance* of the given *class*. 

If the second of the above *methods* is selected, that *method* invokes **make-instance** on the arguments (find-class *class*) and *initargs*. 

The initialization arguments are checked within **make-instance**. 

The *generic function* **make-instance** may be used as described in Section 7.1 (Object Creation and Initialization). 

**Exceptional Situations:** 

If any of the initialization arguments has not been declared as valid, an error of *type* **error** is signaled. 

**See Also:** 

**defclass**, **class-of**, **allocate-instance**, **initialize-instance**, Section 7.1 (Object Creation and Initialization) 

**make-instances-obsolete** *Standard Generic Function* 

**Syntax:** 

**make-instances-obsolete** *class → class* 

**Method Signatures:** 

**make-instances-obsolete** (*class* **standard-class**) 

**make-instances-obsolete** (*class* **symbol**) 

**Arguments and Values:** 

*class*—a *class designator* . 

**Description:** 

The *function* **make-instances-obsolete** has the effect of initiating the process of updating the instances of the *class*. During updating, the generic function **update-instance-for-redefined-class** will be invoked. 

The generic function **make-instances-obsolete** is invoked automatically by the system when **defclass** has been used to redefine an existing standard class and the set of local *slots accessible* in an instance is changed or the order of *slots* in storage is changed. It can also be explicitly invoked by the user. 

If the second of the above *methods* is selected, that *method* invokes **make-instances-obsolete** on (find-class *class*). 

Objects **7–49**

 

 

**Examples:** 

**See Also:** 

**update-instance-for-redefined-class**, Section 4.3.6 (Redefining Classes) 

**make-load-form** *Standard Generic Function* 

**Syntax:** 

**make-load-form** *object* &optional *environment → creation-form*[*, initialization-form*] 

**Method Signatures:** 

**make-load-form** (*object* **standard-object**) &optional *environment* 

**make-load-form** (*object* **structure-object**) &optional *environment* 

**make-load-form** (*object* **condition**) &optional *environment* 

**make-load-form** (*object* **class**) &optional *environment* 

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

Objects **7–51**

 

 

**make-load-form** 

*calling* **find-class**. If a *class* with that *name* has not been defined, then a *class* may be computed in an *implementation-defined* manner. If a *class* cannot be returned as the result of *evaluating* the creation *form*, then an error of *type* **error** is signaled. 

Both *conforming implementations* and *conforming programs* may further *specialize* **make-load-form**. 

**Examples:** 

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

Objects **7–53**

 

 

**Exceptional Situations:** 

The *methods specialized* on **standard-object**, **structure-object**, and **condition** all signal an error of *type* **error**. 

It is *implementation-dependent* whether *calling* **make-load-form** on a *generalized instance* of a *system class* signals an error or returns creation and initialization *forms*. 

**See Also:** 

**compile-file**, **make-load-form-saving-slots**, Section 3.2.4.4 (Additional Constraints on Externaliz able Objects) Section 3.1 (Evaluation), Section 3.2 (Compilation) 

**Notes:** 

The *file compiler* calls **make-load-form** in specific circumstances detailed in Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 

Some *implementations* may provide facilities for defining new *subclasses* of *classes* which are specified as *system classes*. (Some likely candidates include **generic-function**, **method**, and **stream**). Such *implementations* should document how the *file compiler* processes *instances* of such *classes* when encountered as *literal objects*, and should document any relevant *methods* for **make-load-form**. 

**make-load-form-saving-slots** *Function* 

**Syntax:** 

**make-load-form-saving-slots** *object* &key *slot-names environment* 

*→ creation-form, initialization-form* 

**Arguments and Values:** 

*object*—an *object*. 

*slot-names*—a *list*. 

*environment*—an *environment object*. 

*creation-form*—a *form*. 

*initialization-form*—a *form*. 

**Description:** 

Returns *forms* that, when *evaluated*, will construct an *object* equivalent to *object*, without *executing initialization forms*. The *slots* in the new *object* that correspond to initialized *slots* in *object* are initialized using the values from *object*. Uninitialized *slots* in *object* are not initialized in the new *object*. **make-load-form-saving-slots** works for any *instance* of **standard-object** or **structure-object**. 



 

 

*Slot-names* is a *list* of the names of the *slots* to preserve. If *slot-names* is not supplied, its value is all of the *local slots*. 

**make-load-form-saving-slots** returns two values, thus it can deal with circular structures. Whether the result is useful in an application depends on whether the *object*’s *type* and slot contents fully capture the application’s idea of the *object*’s state. 

*Environment* is the environment in which the forms will be processed. 

**See Also:** 

**make-load-form**, **make-instance**, **setf**, **slot-value**, **slot-makunbound** 

**Notes:** 

**make-load-form-saving-slots** can be useful in user-written **make-load-form** methods. 

When the *object* is an *instance* of **standard-object**, **make-load-form-saving-slots** could return a creation form that *calls* **allocate-instance** and an initialization form that contains *calls* to **setf** of **slot-value** and **slot-makunbound**, though other *functions* of similar effect might actually be used. 

**with-accessors** *Macro* 

**Syntax:** 

**with-accessors** (*\{slot-entry\}*\*) *instance-form \{declaration\}*\* *\{form\}*\* 

*→ \{result\}*\* 

*slot-entry::*=(*variable-name accessor-name*) 

**Arguments and Values:** 

*variable-name*—a *variable name*; not evaluated. 

*accessor-name*—a *function name*; not evaluated. 

*instance-form*—a *form*; evaluated. 

*declaration*—a **declare** *expression*; not evaluated. 

*forms*—an *implicit progn*. 

*results*—the *values* returned by the *forms*. 

**Description:** 

Creates a lexical environment in which the slots specified by *slot-entry* are lexically available through their accessors as if they were variables. The macro **with-accessors** invokes the appropriate accessors to *access* the *slots* specified by *slot-entry*. Both **setf** and **setq** can be used to set the value of the *slot*. 

Objects **7–55**

 

 

**with-accessors** 

**Examples:** 

(defclass thing () 

((x :initarg :x :accessor thing-x) 

(y :initarg :y :accessor thing-y))) 

*→* #\<STANDARD-CLASS THING 250020173\> 

(defmethod (setf thing-x) :before (new-x (thing thing)) 

(format t "~&Changing X from ~D to ~D in ~S.~%" 

(thing-x thing) new-x thing)) 

(setq thing1 (make-instance ’thing :x 1 :y 2)) *→* #\<THING 43135676\> 

(setq thing2 (make-instance ’thing :x 7 :y 8)) *→* #\<THING 43147374\> 

(with-accessors ((x1 thing-x) (y1 thing-y)) 

thing1 

(with-accessors ((x2 thing-x) (y2 thing-y)) 

thing2 

(list (list x1 (thing-x thing1) y1 (thing-y thing1) 

x2 (thing-x thing2) y2 (thing-y thing2)) 

(setq x1 (+ y1 x2)) 

(list x1 (thing-x thing1) y1 (thing-y thing1) 

x2 (thing-x thing2) y2 (thing-y thing2)) 

(setf (thing-x thing2) (list x1)) 

(list x1 (thing-x thing1) y1 (thing-y thing1) 

x2 (thing-x thing2) y2 (thing-y thing2))))) 

&#9655; Changing X from 1 to 9 in #\<THING 43135676\>. 

&#9655; Changing X from 7 to (9) in #\<THING 43147374\>. 

*→* ((1 1 2 2 7 7 8 8) 

9 

(9 9 2 2 7 7 8 8) 

(9) 

(9 9 2 2 (9) (9) 8 8)) 

**Affected By:** 

**defclass** 

**Exceptional Situations:** 

The consequences are undefined if any *accessor-name* is not the name of an accessor for the *instance*. 

**See Also:** 

**with-slots**, **symbol-macrolet** 

**Notes:** 

A **with-accessors** expression of the form: 

(with-accessors (\<i\>slot-entry\</i\>\<sub\>1\</sub\>\<i\>. . . slot-entry\<sub\>n\</sub\>\</i\>) \<i\>instance-form form\</i\>\<sub\>1\</sub\>\<i\>. . . form\<sub\>k\</sub\>\</i\>) 



 

 

expands into the equivalent of 

(let ((*in instance-form*)) 

(symbol-macrolet (\<i\>Q\</i\>\<sub\>1\</sub\>\<i\>. . . Q\<sub\>n\</sub\>\</i\>) \<i\>form\</i\>\<sub\>1\</sub\>\<i\>. . . form\<sub\>k\</sub\>\</i\>)) 

where \<i\>Q\<sub\>i\</sub\>\</i\>is 

(\<i\>variable-name\<sub\>i\</sub\>\</i\> () (\<i\>accessor-name\<sub\>i\</sub\> in\</i\>)) 

**with-slots** *Macro* 

**Syntax:** 

**with-slots** (*\{slot-entry\}*\*) *instance-form \{declaration\}*\* *\{form\}*\* 

*→ \{result\}*\* 

*slot-entry::*=*slot-name |* (*variable-name slot-name*) 

**Arguments and Values:** 

*slot-name*—a *slot name*; not evaluated. 

*variable-name*—a *variable name*; not evaluated. 

*instance-form*—a *form*; evaluted to produce *instance*. 

*instance*—an *object*. 

*declaration*—a **declare** *expression*; not evaluated. 

*forms*—an *implicit progn*. 

*results*—the *values* returned by the *forms*. 

**Description:** 

The macro **with-slots** *establishes* a *lexical environment* for referring to the *slots* in the *instance* named by the given *slot-names* as though they were *variables*. Within such a context the value of the *slot* can be specified by using its slot name, as if it were a lexically bound variable. Both **setf** and **setq** can be used to set the value of the *slot*. 

The macro **with-slots** translates an appearance of the slot name as a *variable* into a call to **slot-value**. 

**Examples:** 

(defclass thing () 

Objects **7–57**

 

 

**with-slots** 

((x :initarg :x :accessor thing-x) 

(y :initarg :y :accessor thing-y))) 

*→* #\<STANDARD-CLASS THING 250020173\> 

(defmethod (setf thing-x) :before (new-x (thing thing)) 

(format t "~&Changing X from ~D to ~D in ~S.~%" 

(thing-x thing) new-x thing)) 

(setq thing (make-instance ’thing :x 0 :y 1)) *→* #\<THING 62310540\> 

(with-slots (x y) thing (incf x) (incf y)) *→* 2 

(values (thing-x thing) (thing-y thing)) *→* 1, 2 

(setq thing1 (make-instance ’thing :x 1 :y 2)) *→* #\<THING 43135676\> 

(setq thing2 (make-instance ’thing :x 7 :y 8)) *→* #\<THING 43147374\> 

(with-slots ((x1 x) (y1 y)) 

thing1 

(with-slots ((x2 x) (y2 y)) 

thing2 

(list (list x1 (thing-x thing1) y1 (thing-y thing1) 

x2 (thing-x thing2) y2 (thing-y thing2)) 

(setq x1 (+ y1 x2)) 

(list x1 (thing-x thing1) y1 (thing-y thing1) 

x2 (thing-x thing2) y2 (thing-y thing2)) 

(setf (thing-x thing2) (list x1)) 

(list x1 (thing-x thing1) y1 (thing-y thing1) 

x2 (thing-x thing2) y2 (thing-y thing2))))) 

&#9655; Changing X from 7 to (9) in #\<THING 43147374\>. 

*→* ((1 1 2 2 7 7 8 8) 

9 

(9 9 2 2 7 7 8 8) 

(9) 

(9 9 2 2 (9) (9) 8 8)) 

**Affected By:** 

**defclass** 

**Exceptional Situations:** 

The consequences are undefined if any *slot-name* is not the name of a *slot* in the *instance*. 

**See Also:** 

**with-accessors**, **slot-value**, **symbol-macrolet** 

**Notes:** 

A **with-slots** expression of the form: 

(with-slots (\<i\>slot-entry\</i\>\<sub\>1\</sub\>\<i\>. . . slot-entry\<sub\>n\</sub\>\</i\>) \<i\>instance-form form\</i\>\<sub\>1\</sub\>\<i\>. . . form\<sub\>k\</sub\>\</i\>) 

expands into the equivalent of 



 

 

(let ((*in instance-form*)) 

(symbol-macrolet (\<i\>Q\</i\>\<sub\>1\</sub\>\<i\>. . . Q\<sub\>n\</sub\>\</i\>) \<i\>form\</i\>\<sub\>1\</sub\>\<i\>. . . form\<sub\>k\</sub\>\</i\>)) 

where \<i\>Q\<sub\>i\</sub\>\</i\>is 

(\<i\>slot-entry\<sub\>i\</sub\>\</i\>() (slot-value \<i\>in\</i\> ’\<i\>slot-entry\<sub\>i\</sub\>\</i\>)) 

if \<i\>slot-entry\<sub\>i\</sub\>\</i\>is a \<i\>symbol\</i\> and is 

(\<i\>variable-name\<sub\>i\</sub\>\</i\> () (slot-value \<i\>in\</i\> ’\<i\>slot-name\<sub\>i\</sub\>\</i\>)) 

if \<i\>slot-entry\<sub\>i\</sub\>\</i\>is of the form 

(\<i\>variable-name\<sub\>i\</sub\> slot-name\<sub\>i\</sub\>\</i\>) 

**defclass** *Macro* 

**Syntax:** 

**defclass** *class-name* (*\{superclass-name\}*\*) (*\{slot-specifier\}*\*) [[*↓class-option* ]] 

*→ new-class* 

*slot-specifier*::= *slot-name |* (*slot-name* [[*↓slot-option* ]]) 

*slot-name*::= *symbol* 

*slot-option*::= *\{*:reader *reader-function-name\}*\* *|* 

*\{*:writer *writer-function-name\}*\* *|* 

*\{*:accessor *reader-function-name\}*\* *|* 

*\{*:allocation *allocation-type\} |* 

*\{*:initarg *initarg-name\}*\* *|* 

*\{*:initform *form\} |* 

*\{*:type *type-specifier\} |* 

*\{*:documentation *string\}* 

*function-name*::= *\{symbol |* (setf *symbol*)*\}* 

*class-option*::= (:default-initargs . *initarg-list*) *|* 

(:documentation *string*) *|* 

(:metaclass *class-name*) 

Objects **7–59**

 

 

**defclass** 

**Arguments and Values:** 

*Class-name*—a *non-nil symbol*. 

*Superclass-name*–a *non-nil symbol*. 

*Slot-name*–a *symbol*. The *slot-name* argument is a *symbol* that is syntactically valid for use as a variable name. 

*Reader-function-name*—a *non-nil symbol*. :reader can be supplied more than once for a given *slot*. 

*Writer-function-name*—a *generic function* name. :writer can be supplied more than once for a given *slot*. 

*Reader-function-name*—a *non-nil symbol*. :accessor can be supplied more than once for a given *slot*. 

*Allocation-type*—(member :instance :class). :allocation can be supplied once at most for a given *slot*. 

*Initarg-name*—a *symbol*. :initarg can be supplied more than once for a given *slot*. *Form*—a *form*. :init-form can be supplied once at most for a given *slot*. 

*Type-specifier*—a *type specifier* . :type can be supplied once at most for a given *slot*. *Class-option*— refers to the *class* as a whole or to all class *slots*. 

*Initarg-list*—a *list* of alternating initialization argument *names* and default initial value *forms*. :default-initargs can be supplied at most once. 

*Class-name*—a *non-nil symbol*. :metaclass can be supplied once at most. 

*new-class*—the new *class object*. 

**Description:** 

The macro **defclass** defines a new named *class*. It returns the new *class object* as its result. 

The syntax of **defclass** provides options for specifying initialization arguments for *slots*, for specifying default initialization values for *slots*, and for requesting that *methods* on specified *generic functions* be automatically generated for reading and writing the values of *slots*. No reader or writer functions are defined by default; their generation must be explicitly requested. However, *slots* can always be *accessed* using **slot-value**. 

Defining a new *class* also causes a *type* of the same name to be defined. The predicate (typep *object class-name*) returns true if the *class* of the given *object* is the *class* named by *class-name* itself or a subclass of the class *class-name*. A *class object* can be used as a *type specifier* . Thus (typep *object class*) returns *true* if the *class* of the *object* is *class* itself or a subclass of *class*. 

The *class-name* argument specifies the *proper name* of the new *class*. If a *class* with the same 

 

 

**defclass** 

*proper name* already exists and that *class* is an *instance* of **standard-class**, and if the **defclass** form for the definition of the new *class* specifies a *class* of *class* **standard-class**, the existing *class* is redefined, and instances of it (and its *subclasses*) are updated to the new definition at the time that they are next *accessed*. For details, see Section 4.3.6 (Redefining Classes). 

Each *superclass-name* argument specifies a direct *superclass* of the new *class*. If the *superclass* list is empty, then the *superclass* defaults depending on the *metaclass*, with **standard-object** being the default for **standard-class**. 

The new *class* will inherit *slots* and *methods* from each of its direct *superclasses*, from their direct *superclasses*, and so on. For a discussion of how *slots* and *methods* are inherited, see Section 4.3.4 (Inheritance). 

The following slot options are available: 

*•* The :reader slot option specifies that an *unqualified method* is to be defined on the *generic function* named *reader-function-name* to read the value of the given *slot*. 

*•* The :writer slot option specifies that an *unqualified method* is to be defined on the *generic function* named *writer-function-name* to write the value of the *slot*. 

*•* The :accessor slot option specifies that an *unqualified method* is to be defined on the generic function named *reader-function-name* to read the value of the given *slot* and that an *unqualified method* is to be defined on the *generic function* named (setf *reader-function-name*) to be used with **setf** to modify the value of the *slot*. 

*•* The :allocation slot option is used to specify where storage is to be allocated for the given *slot*. Storage for a *slot* can be located in each instance or in the *class object* itself. The value of the *allocation-type* argument can be either the keyword :instance or the keyword :class. If the :allocation slot option is not specified, the effect is the same as specifying :allocation :instance. 

– If *allocation-type* is :instance, a *local slot* of the name *slot-name* is allocated in each instance of the *class*. 

– If *allocation-type* is :class, a shared *slot* of the given name is allocated in the *class object* created by this **defclass** form. The value of the *slot* is shared by all 

*instances* of the *class*. If a class *C*\<sub\>1\</sub\> defines such a *shared slot*, any subclass *C*\<sub\>2\</sub\> of 

*C*\<sub\>1\</sub\> will share this single *slot* unless the **defclass** form for *C*\<sub\>2\</sub\> specifies a *slot* of the 

same *name* or there is a superclass of *C*\<sub\>2\</sub\> that precedes *C*\<sub\>1\</sub\> in the class precedence 

list of *C*\<sub\>2\</sub\> and that defines a *slot* of the same *name*. 

*•* The :initform slot option is used to provide a default initial value form to be used in the initialization of the *slot*. This *form* is evaluated every time it is used to initialize the *slot*. The lexical environment in which this *form* is evaluated is the lexical environment in which the **defclass** form was evaluated. Note that the lexical environment refers both to variables 

Objects **7–61**

 

 

**defclass** 

and to functions. For *local slots*, the dynamic environment is the dynamic environment in which **make-instance** is called; for shared *slots*, the dynamic environment is the dynamic environment in which the **defclass** form was evaluated. See Section 7.1 (Object Creation and Initialization). 

No implementation is permitted to extend the syntax of **defclass** to allow (*slot-name form*) as an abbreviation for (*slot-name* :initform *form*). 

*•* The :initarg slot option declares an initialization argument named *initarg-name* and specifies that this initialization argument initializes the given *slot*. If the initialization argument has a value in the call to **initialize-instance**, the value will be stored into the given *slot*, and the slot’s :initform slot option, if any, is not evaluated. If none of the initialization arguments specified for a given *slot* has a value, the *slot* is initialized according to the :initform slot option, if specified. 

*•* The :type slot option specifies that the contents of the *slot* will always be of the specified data type. It effectively declares the result type of the reader generic function when applied to an *object* of this *class*. The consequences of attempting to store in a *slot* a value that does not satisfy the type of the *slot* are undefined. The :type slot option is further discussed in Section 7.5.3 (Inheritance of Slots and Slot Options). 

*•* The :documentation slot option provides a *documentation string* for the *slot*. :documentation can be supplied once at most for a given *slot*. 

Each class option is an option that refers to the *class* as a whole. The following class options are available: 

*•* The :default-initargs class option is followed by a list of alternating initialization argument *names* and default initial value forms. If any of these initialization arguments does not appear in the initialization argument list supplied to **make-instance**, the corresponding default initial value form is evaluated, and the initialization argument *name* and the *form*’s value are added to the end of the initialization argument list before the instance is created; see Section 7.1 (Object Creation and Initialization). The default initial value form is evaluated each time it is used. The lexical environment in which this *form* is evaluated is the lexical environment in which the **defclass** form was evaluated. The dynamic environment is the dynamic environment in which **make-instance** was called. If an initialization argument *name* appears more than once in a :default-initargs class option, an error is signaled. 

*•* The :documentation class option causes a *documentation string* to be attached with the *class object*, and attached with kind **type** to the *class-name*. :documentation can be supplied once at most. 

*•* The :metaclass class option is used to specify that instances of the *class* being defined are to have a different metaclass than the default provided by the system (the *class* **standard-class**). 



 

 

**defclass** 

Note the following rules of **defclass** for *standard classes*: 

*•* It is not required that the *superclasses* of a *class* be defined before the **defclass** form for that *class* is evaluated. 

*•* All the *superclasses* of a *class* must be defined before an *instance* of the *class* can be made. 

*•* A *class* must be defined before it can be used as a parameter specializer in a **defmethod** form. 

The object system can be extended to cover situations where these rules are not obeyed. 

Some slot options are inherited by a *class* from its *superclasses*, and some can be shadowed or altered by providing a local slot description. No class options except :default-initargs are inherited. For a detailed description of how *slots* and slot options are inherited, see Section 7.5.3 (Inheritance of Slots and Slot Options). 

The options to **defclass** can be extended. It is required that all implementations signal an error if they observe a class option or a slot option that is not implemented locally. 

It is valid to specify more than one reader, writer, accessor, or initialization argument for a *slot*. No other slot option can appear more than once in a single slot description, or an error is signaled. 

If no reader, writer, or accessor is specified for a *slot*, the *slot* can only be *accessed* by the *function* **slot-value**. 

If a **defclass** *form* appears as a *top level form*, the *compiler* must make the *class name* be recognized as a valid *type name* in subsequent declarations (as for **deftype**) and be recognized as a valid *class name* for **defmethod** *parameter specializers* and for use as the :metaclass option of a subsequent **defclass**. The *compiler* must make the *class* definition available to be returned by **find-class** when its *environment argument* is a value received as the *environment parameter* of a *macro*. 

**Exceptional Situations:** 

If there are any duplicate slot names, an error of *type* **program-error** is signaled. 

If an initialization argument *name* appears more than once in :default-initargs class option, an error of *type* **program-error** is signaled. 

If any of the following slot options appears more than once in a single slot description, an error of *type* **program-error** is signaled: :allocation, :initform, :type, :documentation. 

It is required that all implementations signal an error of *type* **program-error** if they observe a class option or a slot option that is not implemented locally. 

**See Also:** 

**documentation**, **initialize-instance**, **make-instance**, **slot-value**, Section 4.3 (Classes), Section 4.3.4 (Inheritance), Section 4.3.6 (Redefining Classes), Section 4.3.5 (Determining the Class Precedence 

Objects **7–63**

 

 

List), Section 7.1 (Object Creation and Initialization) 

**defgeneric** *Macro* 

**Syntax:** 

**defgeneric** *function-name gf-lambda-list* [[ *↓option | \{↓method-description\}*\* ]] 

*→ new-generic* 

*option::*=(:argument-precedence-order *\{parameter-name\}*\<sup\>+\</sup\>) *|* 

(**declare** *\{gf-declaration\}*\<sup\>+\</sup\>) *|* 

(:documentation *gf-documentation*) *|* 

(:method-combination *method-combination \{method-combination-argument\}*\*) *|* 

(:generic-function-class *generic-function-class*) *|* 

(:method-class *method-class*) 

*method-description::*=(:method *\{method-qualifier\}*\* *specialized-lambda-list* 

**Arguments and Values:** 

[[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\*) 

*function-name*—a *function name*. 

*generic-function-class*—a *non-nil symbol* naming a *class*. 

*gf-declaration*—an **optimize** *declaration specifier* ; other *declaration specifiers* are not permitted. *gf-documentation*—a *string*; not evaluated. 

*gf-lambda-list*—a *generic function lambda list*. 

*method-class*—a *non-nil symbol* naming a *class*. 

*method-combination-argument*—an *object.* 

*method-combination-name*—a *symbol* naming a *method combination type*. 

*method-qualifiers*, *specialized-lambda-list*, *declarations*, *documentation*, *forms*—as per **defmethod**. *new-generic*—the *generic function object*. 

*parameter-name*—a *symbol* that names a *required parameter* in the *lambda-list*. (If the :argument-precedence-order option is specified, each *required parameter* in the *lambda-list* must be used exactly once as a *parameter-name*.) 



 

 

**defgeneric** 

**Description:** 

The macro **defgeneric** is used to define a *generic function* or to specify options and declarations that pertain to a *generic function* as a whole. 

If *function-name* is a *list* it must be of the form (setf *symbol*). If (fboundp *function-name*) is *false*, a new *generic function* is created. If (fdefinition *function-name*) is a *generic function*, that *generic function* is modified. If *function-name* names an *ordinary function*, a *macro*, or a *special operator* , an error is signaled. 

The effect of the **defgeneric** macro is as if the following three steps were performed: first, *methods* defined by previous **defgeneric** *forms* are removed; second, **ensure-generic-function** is called; and finally, *methods* specified by the current **defgeneric** *form* are added to the *generic function*. 

Each *method-description* defines a *method* on the *generic function*. The *lambda list* of each *method* must be congruent with the *lambda list* specified by the *gf-lambda-list* option. If no *method* descriptions are specified and a *generic function* of the same name does not already exist, a *generic function* with no *methods* is created. 

The *gf-lambda-list* argument of **defgeneric** specifies the shape of *lambda lists* for the *methods* on this *generic function*. All *methods* on the resulting *generic function* must have *lambda lists* that are congruent with this shape. If a **defgeneric** form is evaluated and some *methods* for that *generic function* have *lambda lists* that are not congruent with that given in the **defgeneric** form, an error is signaled. For further details on method congruence, see Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 

The *generic function* passes to the *method* all the argument values passed to it, and only those; default values are not supported. Note that optional and keyword arguments in method definitions, however, can have default initial value forms and can use supplied-p parameters. 

The following options are provided. Except as otherwise noted, a given option may occur only once. 

*•* The :argument-precedence-order option is used to specify the order in which the required arguments in a call to the *generic function* are tested for specificity when selecting a particular *method*. Each required argument, as specified in the *gf-lambda-list* argument, must be included exactly once as a *parameter-name* so that the full and unambiguous precedence order is supplied. If this condition is not met, an error is signaled. 

*•* The **declare** option is used to specify declarations that pertain to the *generic function*. 

An **optimize** *declaration specifier* is allowed. It specifies whether method selection should be optimized for speed or space, but it has no effect on *methods*. To control how a *method* is optimized, an **optimize** declaration must be placed directly in the **defmethod** *form* or method description. The optimization qualities **speed** and **space** are the only qualities this standard requires, but an implementation can extend the object system to recognize other qualities. A simple implementation that has only one method selection technique and ignores **optimize** *declaration specifiers* is valid. 

Objects **7–65**

 

 

**defgeneric** 

The **special**, **ftype**, **function**, **inline**, **notinline**, and **declaration** declarations are not permitted. Individual implementations can extend the **declare** option to support additional declarations. If an implementation notices a *declaration specifier* that it does not support and that has not been proclaimed as a non-standard *declaration identifier* name in a **declaration** *proclamation*, it should issue a warning. 

The **declare** option may be specified more than once. The effect is the same as if the lists of *declaration specifiers* had been appended together into a single list and specified as a single **declare** option. 

*•* The :documentation argument is a *documentation string* to be attached to the *generic function object*, and to be attached with kind **function** to the *function-name*. 

*•* The :generic-function-class option may be used to specify that the *generic function* is to have a different *class* than the default provided by the system (the *class* **standard-generic-function**). The *class-name* argument is the name of a *class* that can be the *class* of a *generic function*. If *function-name* specifies an existing *generic function* that has a different value for the :generic-function-class argument and the new generic function *class* is compatible with the old, **change-class** is called to change the *class* of the *generic function*; otherwise an error is signaled. 

*•* The :method-class option is used to specify that all *methods* on this *generic function* are to have a different *class* from the default provided by the system (the *class* **standard-method**). The *class-name* argument is the name of a *class* that is capable of being the *class* of a *method*. 

*•* The :method-combination option is followed by a symbol that names a type of method combination. The arguments (if any) that follow that symbol depend on the type of method combination. Note that the standard method combination type does not support any arguments. However, all types of method combination defined by the short form of **define-method-combination** accept an optional argument named *order*, defaulting to :most-specific-first, where a value of :most-specific-last reverses the order of the primary *methods* without affecting the order of the auxiliary *methods*. 

The *method-description* arguments define *methods* that will be associated with the *generic function*. The *method-qualifier* and *specialized-lambda-list* arguments in a method description are the same as for **defmethod**. 

The *form* arguments specify the method body. The body of the *method* is enclosed in an *implicit block*. If *function-name* is a *symbol*, this block bears the same name as the *generic function*. If *function-name* is a *list* of the form (setf *symbol*), the name of the block is *symbol*. 

Implementations can extend **defgeneric** to include other options. It is required that an implementation signal an error if it observes an option that is not implemented locally. 

**defgeneric** is not required to perform any compile-time side effects. In particular, the *methods* are not installed for invocation during compilation. An *implementation* may choose to store 



 

 

information about the *generic function* for the purposes of compile-time error-checking (such as checking the number of arguments on calls, or noting that a definition for the function name has been seen). 

**Examples:** 

**Exceptional Situations:** 

If *function-name* names an *ordinary function*, a *macro*, or a *special operator* , an error of *type* **program-error** is signaled. 

Each required argument, as specified in the *gf-lambda-list* argument, must be included exactly once as a *parameter-name*, or an error of *type* **program-error** is signaled. 

The *lambda list* of each *method* specified by a *method-description* must be congruent with the *lambda list* specified by the *gf-lambda-list* option, or an error of *type* **error** is signaled. 

If a **defgeneric** form is evaluated and some *methods* for that *generic function* have *lambda lists* that are not congruent with that given in the **defgeneric** form, an error of *type* **error** is signaled. 

A given *option* may occur only once, or an error of *type* **program-error** is signaled. 

If *function-name* specifies an existing *generic function* that has a different value for the :generic-function-class argument and the new generic function *class* is compatible with the old, **change-class** is called to change the *class* of the *generic function*; otherwise an error of *type* **error** is signaled. 

Implementations can extend **defgeneric** to include other options. It is required that an implementation signal an error of *type* **program-error** if it observes an option that is not implemented locally. 

**See Also:** 

**defmethod**, **documentation**, **ensure-generic-function**, **generic-function**, Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function) 

**defmethod** *Macro* 

**Syntax:** 

**defmethod** *function-name \{method-qualifier\}*\* *specialized-lambda-list* 

[[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\* 

*→ new-method* 

*function-name*::= *\{symbol |* (setf *symbol*)*\}* 

Objects **7–67**

 

 

**defmethod** 

*method-qualifier*::= *non-list* 

*specialized-lambda-list*::= (*\{var |* (*var parameter-specializer-name*)*\}*\* 

[&optional *\{var |* (var [*initform* [*supplied-p-parameter*] ])*\}*\*] 

[&rest *var*] 

[&key*\{var |* (*\{var |* (*keywordvar*)*\}* [*initform* [*supplied-p-parameter*] ])*\}*\* 

[**&allow-other-keys**] ] 

[&aux *\{var |* (*var* [*initform*] )*\}*\*] ) 

*parameter-specializer-name*::= *symbol |* (eql *eql-specializer-form*) 

**Arguments and Values:** 

*declaration*—a **declare** *expression*; not evaluated. 

*documentation*—a *string*; not evaluated. 

*var*—a *variable name*. 

*eql-specializer-form*—a *form*. 

*Form*—a *form*. 

*Initform*—a *form*. 

*Supplied-p-parameter*—variable name. 

*new-method*—the new *method object*. 

**Description:** 

The macro **defmethod** defines a *method* on a *generic function*. 

If (fboundp *function-name*) is **nil**, a *generic function* is created with default values for the argument precedence order (each argument is more specific than the arguments to its right in the argument list), for the generic function class (the *class* **standard-generic-function**), for the method class (the *class* **standard-method**), and for the method combination type (the standard method combination 

type). The *lambda list* of the *generic function* is congruent with the *lambda list* of the *method* being defined; if the **defmethod** form mentions keyword arguments, the *lambda list* of the *generic function* will mention &key (but no keyword arguments). If *function-name* names an *ordinary function*, a *macro*, or a *special operator* , an error is signaled. 

If a *generic function* is currently named by *function-name*, the *lambda list* of the *method* must be congruent with the *lambda list* of the *generic function*. If this condition does not hold, an error is signaled. For a definition of congruence in this context, see Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 

Each *method-qualifier* argument is an *object* that is used by method combination to identify the given *method*. The method combination type might further restrict what a method *qualifier* can be. The standard method combination type allows for *unqualified methods* and *methods* whose sole 



 

 

**defmethod** 

*qualifier* is one of the keywords :before, :after, or :around. 

The *specialized-lambda-list* argument is like an ordinary *lambda list* except that the *names* of required parameters can be replaced by specialized parameters. A specialized parameter is a list of the form (*var parameter-specializer-name*). Only required parameters can be specialized. If *parameter-specializer-name* is a *symbol* it names a *class*; if it is a *list*, it is of the form (eql *eql-specializer-form*). The parameter specializer name (eql *eql-specializer-form*) indicates that the corresponding argument must be **eql** to the *object* that is the value of *eql-specializer-form* for the *method* to be applicable. The *eql-specializer-form* is evaluated at the time that the expansion of the **defmethod** macro is evaluated. If no *parameter specializer name* is specified for a given required parameter, the *parameter specializer* defaults to the *class* **t**. For further discussion, see Section 7.6.2 (Introduction to Methods). 

The *form* arguments specify the method body. The body of the *method* is enclosed in an *implicit block*. If *function-name* is a *symbol*, this block bears the same *name* as the *generic function*. If *function-name* is a *list* of the form (setf *symbol*), the *name* of the block is *symbol*. 

The *class* of the *method object* that is created is that given by the method class option of the *generic function* on which the *method* is defined. 

If the *generic function* already has a *method* that agrees with the *method* being defined on *parameter specializers* and *qualifiers*, **defmethod** replaces the existing *method* with the one now being defined. For a definition of agreement in this context. see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 

The *parameter specializers* are derived from the *parameter specializer names* as described in Section 7.6.2 (Introduction to Methods). 

The expansion of the **defmethod** macro “refers to” each specialized parameter (see the description of **ignore** within the description of **declare**). This includes parameters that have an explicit *parameter specializer name* of **t**. This means that a compiler warning does not occur if the body of the *method* does not refer to a specialized parameter, while a warning might occur if the body of the *method* does not refer to an unspecialized parameter. For this reason, a parameter that specializes on **t** is not quite synonymous with an unspecialized parameter in this context. 

Declarations at the head of the method body that apply to the method’s *lambda variables* are treated as *bound declarations* whose *scope* is the same as the corresponding *bindings*. 

Declarations at the head of the method body that apply to the functional bindings of **call-next-method** or **next-method-p** apply to references to those functions within the method body *forms*. Any outer *bindings* of the *function names* **call-next-method** and **next-method-p**, and declarations associated with such *bindings* are *shadowed* \<sub\>2\</sub\> within the method body *forms*. 

The *scope* of *free declarations* at the head of the method body is the entire method body, which includes any implicit local function definitions but excludes *initialization forms* for the *lambda variables*. 

**defmethod** is not required to perform any compile-time side effects. In particular, the *methods* Objects **7–69**

 

 

are not installed for invocation during compilation. An *implementation* may choose to store information about the *generic function* for the purposes of compile-time error-checking (such as checking the number of arguments on calls, or noting that a definition for the function name has been seen). 

*Documentation* is attached as a *documentation string* to the *method object*. 

**Affected By:** 

The definition of the referenced *generic function*. 

**Exceptional Situations:** 

If *function-name* names an *ordinary function*, a *macro*, or a *special operator* , an error of *type* **error** is signaled. 

If a *generic function* is currently named by *function-name*, the *lambda list* of the *method* must be congruent with the *lambda list* of the *generic function*, or an error of *type* **error** is signaled. 

**See Also:** 

**defgeneric**, **documentation**, Section 7.6.2 (Introduction to Methods), Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function), Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 

**find-class** *Accessor* 

**Syntax:** 

**find-class** *symbol* &optional *errorp environment → class* 

**(setf (find-class** *symbol* &optional *errorp environment***)** *new-class***)** 

**Arguments and Values:** 

*symbol*—a *symbol*. 

*errorp*—a *generalized boolean*. The default is *true*. 

*environment* – same as the **&environment** argument to macro expansion functions and is used to distinguish between compile-time and run-time environments. The **&environment** argument has *dynamic extent*; the consequences are undefined if the **&environment** argument is referred to outside the *dynamic extent* of the macro expansion function. 

*class*—a *class object*, or **nil**. 



 

 

**Description:** 

Returns the *class object* named by the *symbol* in the *environment*. If there is no such *class*, **nil** is returned if *errorp* is *false*; otherwise, if *errorp* is *true*, an error is signaled. 

The *class* associated with a particular *symbol* can be changed by using **setf** with **find-class**; or, if the new *class* given to **setf** is **nil**, the *class* association is removed (but the *class object* itself is not affected). The results are undefined if the user attempts to change or remove the *class* associated 

with a *symbol* that is defined as a *type specifier* in this standard. See Section 4.3.7 (Integrating Types and Classes). 

When using **setf** of **find-class**, any *errorp* argument is *evaluated* for effect, but any *values* it returns are ignored; the *errorp parameter* is permitted primarily so that the *environment parameter* can be used. 

The *environment* might be used to distinguish between a compile-time and a run-time environment. 

**Exceptional Situations:** 

If there is no such *class* and *errorp* is *true*, **find-class** signals an error of *type* **error**. 

**See Also:** 

**defmacro**, Section 4.3.7 (Integrating Types and Classes) 

**next-method-p** *Local Function* 

**Syntax:** 

**next-method-p** *hno argumentsi → generalized-boolean* 

**Arguments and Values:** 

*generalized-boolean*—a *generalized boolean*. 

**Description:** 

The locally defined function **next-method-p** can be used within the body *forms* (but not the *lambda list*) defined by a *method-defining form* to determine whether a next *method* exists. 

The *function* **next-method-p** has *lexical scope* and *indefinite extent*. 

Whether or not **next-method-p** is *fbound* in the *global environment* is *implementation-dependent*; however, the restrictions on redefinition and *shadowing* of **next-method-p** are the same as for *symbols* in the COMMON-LISP *package* which are *fbound* in the *global environment*. The consequences of attempting to use **next-method-p** outside of a *method-defining form* are undefined. 

**See Also:** 

**call-next-method**, **defmethod**, **call-method** 

Objects **7–71**

 

 

**call-method, make-method** *Local Macro* 

**Syntax:** 

**call-method** *method* &optional *next-method-list → \{result\}*\* 

**make-method** *form → method-object* 

**Arguments and Values:** 

*method*—a *method object*, or a *list* (see below); not evaluated. 

*method-object*—a *method object*. 

*next-method-list*—a *list* of *method objects*; not evaluated. 

*results*—the *values* returned by the *method* invocation. 

**Description:** 

The macro **call-method** is used in method combination. It hides the *implementation-dependent* details of how *methods* are called. The macro **call-method** has *lexical scope* and can only be used within an *effective method form*. 

Whether or not **call-method** is *fbound* in the *global environment* is *implementation-dependent*; however, the restrictions on redefinition and *shadowing* of **call-method** are the same as for *symbols* in the COMMON-LISP *package* which are *fbound* in the *global environment*. The consequences of attempting to use **call-method** outside of an *effective method form* are undefined. 

The macro **call-method** invokes the specified *method*, supplying it with arguments and with definitions for **call-next-method** and for **next-method-p**. If the invocation of **call-method** is lexically inside of a **make-method**, the arguments are those that were supplied to that method. Otherwise the arguments are those that were supplied to the generic function. The definitions of **call-next-method** and **next-method-p** rely on the specified *next-method-list*. 

If *method* is a *list*, the first element of the *list* must be the symbol **make-method** and the second element must be a *form*. Such a *list* specifies a *method object* whose *method* function has a body that is the given *form*. 

*Next-method-list* can contain *method objects* or *lists*, the first element of which must be the symbol **make-method** and the second element of which must be a *form*. 

Those are the only two places where **make-method** can be used. The *form* used with **make-method** is evaluated in the *null lexical environment* augmented with a local macro definition for **call-method** and with bindings named by symbols not *accessible* from the COMMON-LISP-USER *package*. 

The **call-next-method** function available to *method* will call the first *method* in *next-method-list*. 

 

 

The **call-next-method** function available in that *method*, in turn, will call the second *method* in *next-method-list*, and so on, until the list of next *methods* is exhausted. 

If *next-method-list* is not supplied, the **call-next-method** function available to *method* signals an error of *type* **control-error** and the **next-method-p** function available to *method* returns **nil**. 

**Examples:** 

**See Also:** 

**call-next-method**, **define-method-combination**, **next-method-p** 

**call-next-method** *Local Function* 

**Syntax:** 

**call-next-method** &rest *args → \{result\}*\* 

**Arguments and Values:** 

*arg*—an *object*. 

*results*—the *values* returned by the *method* it calls. 

**Description:** 

The *function* **call-next-method** can be used within the body *forms* (but not the *lambda list*) of a *method* defined by a *method-defining form* to call the *next method*. 

If there is no next *method*, the generic function **no-next-method** is called. 

The type of method combination used determines which *methods* can invoke **call-next-method**. The standard *method combination* type allows **call-next-method** to be used within primary *methods* and *around methods*. For generic functions using a type of method combination defined by the short form of **define-method-combination**, **call-next-method** can be used in *around methods* only. 

When **call-next-method** is called with no arguments, it passes the current *method*’s original arguments to the next *method*. Neither argument defaulting, nor using **setq**, nor rebinding variables with the same *names* as parameters of the *method* affects the values **call-next-method** passes to the *method* it calls. 

When **call-next-method** is called with arguments, the *next method* is called with those arguments. 

If **call-next-method** is called with arguments but omits optional arguments, the *next method* called defaults those arguments. 

The *function* **call-next-method** returns any *values* that are returned by the *next method*. Objects **7–73**

 

 

The *function* **call-next-method** has *lexical scope* and *indefinite extent* and can only be used within the body of a *method* defined by a *method-defining form*. 

Whether or not **call-next-method** is *fbound* in the *global environment* is *implementation-dependent*; however, the restrictions on redefinition and *shadowing* of **call-next-method** are the same as for *symbols* in the COMMON-LISP *package* which are *fbound* in the *global environment*. The consequences of attempting to use **call-next-method** outside of a *method-defining form* are undefined. 

**Affected By:** 

**defmethod**, **call-method**, **define-method-combination**. 

**Exceptional Situations:** 

When providing arguments to **call-next-method**, the following rule must be satisfied or an error of *type* **error** should be signaled: the ordered set of *applicable methods* for a changed set of arguments for **call-next-method** must be the same as the ordered set of *applicable methods* for the original arguments to the *generic function*. Optimizations of the error checking are possible, but they must not change the semantics of **call-next-method**. 

**See Also:** 

**define-method-combination**, **defmethod**, **next-method-p**, **no-next-method**, **call-method**, Section 7.6.6 (Method Selection and Combination), Section 7.6.6.2 (Standard Method Combination), Section 7.6.6.4 (Built-in Method Combination Types) 

**compute-applicable-methods** *Standard Generic Function* 

**Syntax:** 

**compute-applicable-methods** *generic-function function-arguments → methods* 

**Method Signatures:** 

**compute-applicable-methods** (*generic-function* **standard-generic-function**) 

**Arguments and Values:** 

*generic-function*—a *generic function*. 

*function-arguments*—a *list* of arguments for the *generic-function*. 

*methods*—a *list* of *method objects*. 

**Description:** 

Given a *generic-function* and a set of *function-arguments*, the function **compute-applicable-methods** returns the set of *methods* that are applicable for those arguments sorted according to precedence order. See Section 7.6.6 (Method Selection and Combination). 



 

 

**Affected By:** 

**defmethod** 

**See Also:** 

Section 7.6.6 (Method Selection and Combination) 

**define-method-combination** *Macro* 

**Syntax:** 

**define-method-combination** *name* [[ *↓short-form-option* ]] 

*→ name* 

**define-method-combination** *name lambda-list* 

(*\{method-group-specifier\}*\*) 

[(:arguments *. args-lambda-list*)] 

[(:generic-function *generic-function-symbol*)] 

[[ *\{declaration\}*\* *| documentation* ]] 

*\{form\}*\* 

*→ name* 

*short-form-option::*=:documentation *documentation |* 

:identity-with-one-argument *identity-with-one-argument |* 

:operator *operator* 

*method-group-specifier::*=(*name \{\{qualifier-pattern\}*\<sup\>+\</sup\>*| predicate\}* [[ *↓long-form-option* ]]) 

*long-form-option::*=:description *description |* 

:order *order |* 

:required *required-p* 

**Arguments and Values:** 

*args-lambda-list*—a *define-method-combination arguments lambda list*. 

*declaration*—a **declare** *expression*; not evaluated. 

*description*—a *format control*. 

*documentation*—a *string*; not evaluated. 

*forms*—an *implicit progn* that must compute and return the *form* that specifies how the *methods* are combined, that is, the *effective method*. 

Objects **7–75**

 

 

**define-method-combination** 

*generic-function-symbol*—a *symbol*. 

*identity-with-one-argument*—a *generalized boolean*. 

*lambda-list*—*ordinary lambda list*. 

*name*—a *symbol*. Non-*keyword*, *non-nil symbols* are usually used. 

*operator*—an *operator* . *Name* and *operator* are often the *same symbol*. This is the default, but it is not required. 

*order*—:most-specific-first or :most-specific-last; evaluated. 

*predicate*—a *symbol* that names a *function* of one argument that returns a *generalized boolean*. *qualifier-pattern*—a *list*, or the *symbol* **\***. 

*required-p*—a *generalized boolean*. 

**Description:** 

The macro **define-method-combination** is used to define new types of method combination. 

There are two forms of **define-method-combination**. The short form is a simple facility for the cases that are expected to be most commonly needed. The long form is more powerful but more verbose. It resembles **defmacro** in that the body is an expression, usually using backquote, that computes a *form*. Thus arbitrary control structures can be implemented. The long form also allows 

arbitrary processing of method *qualifiers*. 

**Short Form** 

The short form syntax of **define-method-combination** is recognized when the sec ond *subform* is a *non-nil* symbol or is not present. When the short form is 

used, *name* is defined as a type of method combination that produces a Lisp form (*operator method-call method-call . . .*). The *operator* is a *symbol* that can be the *name* of a *function*, *macro*, or *special operator* . The *operator* can be supplied by a keyword option; it defaults to *name*. 

Keyword options for the short form are the following: 

*•* The :documentation option is used to document the method-combination type; see description of long form below. 

*•* The :identity-with-one-argument option enables an optimization when its value is *true* (the default is *false*). If there is exactly one applicable method and it is a 

primary method, that method serves as the effective method and *operator* is not 

called. This optimization avoids the need to create a new effective method and 

avoids the overhead of a *function* call. This option is designed to be used with 

operators such as **progn**, **and**, +, and **max**. 



 

 

**define-method-combination** 

*•* The :operator option specifies the *name* of the operator. The *operator* argument is a *symbol* that can be the *name* of a *function*, *macro*, or *special form*. 

These types of method combination require exactly one *qualifier* per method. An error is signaled if there are applicable methods with no *qualifiers* or with *qualifiers* that are not supported by the method combination type. 

A method combination procedure defined in this way recognizes two roles for methods. A method whose one *qualifier* is the symbol naming this type of method combination is defined to be a primary method. At least one primary method must be applicable or an error is signaled. A method with :around as its one *qualifier* is an auxiliary method that behaves the same as an *around method* in standard method combination. The *function* 

**call-next-method** can only be used in *around methods*; it cannot be used in primary methods defined by the short form of the **define-method-combination** macro. 

A method combination procedure defined in this way accepts an optional argument named *order*, which defaults to :most-specific-first. A value of :most-specific-last reverses the order of the primary methods without affecting the order of the auxiliary methods. 

The short form automatically includes error checking and support for *around methods*. 

For a discussion of built-in method combination types, see Section 7.6.6.4 (Built-in Method Combination Types). 

**Long Form** 

The long form syntax of **define-method-combination** is recognized when the second *subform* is a list. 

The *lambda-list* receives any arguments provided after the *name* of the method combination type in the :method-combination option to **defgeneric**. 

A list of method group specifiers follows. Each specifier selects a subset of the applicable methods to play a particular role, either by matching their *qualifiers* against some patterns or by testing their *qualifiers* with a *predicate*. These method group specifiers define all method *qualifiers* that can be used with this type of method combination. 

The *car* of each *method-group-specifier* is a *symbol* which *names* a *variable*. During the execution of the *forms* in the body of **define-method-combination**, this *variable* is bound to a list of the *methods* in the method group. The *methods* in this list occur in the order specified by the :order option. 

If *qualifier-pattern* is a *symbol* it must be **\***. A method matches a *qualifier-pattern* if the method’s list of *qualifiers* is **equal** to the *qualifier-pattern* (except that the symbol **\*** in a *qualifier-pattern* matches anything). Thus a *qualifier-pattern* can be one of the following: the *empty list*, which matches *unqualified methods*; the symbol **\***, which matches all methods; a true list, which matches methods with the same number of *qualifiers* as the length of the list when each *qualifier* matches the corresponding list element; or a dotted list that ends 

Objects **7–77**

 

 

**define-method-combination** 

in the symbol **\*** (the **\*** matches any number of additional *qualifiers*). 

Each applicable method is tested against the *qualifier-patterns* and *predicates* in left-to-right order. As soon as a *qualifier-pattern* matches or a *predicate* returns true, the method becomes a member of the corresponding method group and no further tests are made. Thus if a method could be a member of more than one method group, it joins only the first such group. If a method group has more than one *qualifier-pattern*, a method need only satisfy one of the *qualifier-patterns* to be a member of the group. 

The *name* of a *predicate* function can appear instead of *qualifier-patterns* in a method group specifier. The *predicate* is called for each method that has not been assigned to an earlier method group; it is called with one argument, the method’s *qualifier list*. The *predicate* should return true if the method is to be a member of the method group. A *predicate* can be distinguished from a *qualifier-pattern* because it is a *symbol* other than **nil** or **\***. 

If there is an applicable method that does not fall into any method group, the *function* **invalid-method-error** is called. 

Method group specifiers can have keyword options following the *qualifier* patterns or predicate. Keyword options can be distinguished from additional *qualifier* patterns because they are neither lists nor the symbol **\***. The keyword options are as follows: 

*•* The :description option is used to provide a description of the role of methods in the method group. Programming environment tools use (apply #’format stream 

*format-control* (method-qualifiers *method*)) to print this description, which is 

expected to be concise. This keyword option allows the description of a method 

*qualifier* to be defined in the same module that defines the meaning of the method 

*qualifier* . In most cases, *format-control* will not contain any **format** directives, 

but they are available for generality. If :description is not supplied, a default 

description is generated based on the variable name and the *qualifier* patterns and 

on whether this method group includes the *unqualified methods*. 

*•* The :order option specifies the order of methods. The *order* argument is a *form* that evaluates to :most-specific-first or :most-specific-last. If it evaluates 

to any other value, an error is signaled. If :order is not supplied, it defaults to 

:most-specific-first. 

*•* The :required option specifies whether at least one method in this method group is required. If its value is *true* and the method group is empty (that is, no 

applicable methods match the *qualifier* patterns or satisfy the predicate), an error 

is signaled. If :required is not supplied, it defaults to **nil**. 

The use of method group specifiers provides a convenient syntax to select methods, to divide them among the possible roles, and to perform the necessary error checking. It is possible to perform further filtering of methods in the body *forms* by using normal list-processing operations and the functions **method-qualifiers** and **invalid-method-error**. 

It is permissible to use **setq** on the variables named in the method group specifiers and 
