 

The *generic function* **make-instance** creates and returns a new *instance* of a *class*. The first argument is a *class* or the *name* of a *class*, and the remaining arguments form an *initialization argument list*. 

The initialization of a new *instance* consists of several distinct steps, including the following: combining the explicitly supplied initialization arguments with default values for the unsupplied initialization arguments, checking the validity of the initialization arguments, allocating storage for the *instance*, filling *slots* with values, and executing user-supplied *methods* that perform additional initialization. Each step of **make-instance** is implemented by a *generic function* to provide a mechanism for customizing that step. In addition, **make-instance** is itself a *generic function* and thus also can be customized. 

The object system specifies system-supplied primary *methods* for each step and thus specifies a well-defined standard behavior for the entire initialization process. The standard behavior provides four simple mechanisms for controlling initialization: 

*•* Declaring a *symbol* to be an initialization argument for a *slot*. An initialization argument is declared by using the :initarg slot option to **defclass**. This provides a mechanism for supplying a value for a *slot* in a call to **make-instance**. 

*•* Supplying a default value form for an initialization argument. Default value forms for initialization arguments are defined by using the :default-initargs class option to **defclass**. If an initialization argument is not explicitly provided as an argument to **make-instance**, the default value form is evaluated in the lexical environment of the **defclass** form that defined it, and the resulting value is used as the value of the initialization argument. 

*•* Supplying a default initial value form for a *slot*. A default initial value form for a *slot* is defined by using the :initform slot option to **defclass**. If no initialization argument associated with that *slot* is given as an argument to **make-instance** or is defaulted by :default-initargs, this default initial value form is evaluated in the lexical environment 

of the **defclass** form that defined it, and the resulting value is stored in the *slot*. The :initform form for a *local slot* may be used when creating an *instance*, when updating an *instance* to conform to a redefined *class*, or when updating an *instance* to conform to the definition of a different *class*. The :initform form for a *shared slot* may be used when defining or re-defining the *class*. 

*•* Defining *methods* for **initialize-instance** and **shared-initialize**. The slot-filling behavior described above is implemented by a system-supplied primary *method* for **initialize-instance** which invokes **shared-initialize**. The *generic function* **shared-initialize** implements the parts of initialization shared by these four situations: when making an *instance*, when re-initializing an *instance*, when updating an *instance* to conform to a redefined *class*, and when updating an *instance* to conform to the definition of a different *class*. The system-supplied primary *method* for **shared-initialize** directly implements the slot-filling behavior described above, and **initialize-instance** simply invokes **shared-initialize**. 

Objects **7–1**

 

 

