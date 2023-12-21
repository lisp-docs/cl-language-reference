**initialize-instance** *Standard Generic Function* 



**Syntax:** 



**initialize-instance** *instance* &amp;rest *initargs* &amp;key &amp;allow-other-keys *! instance* 



**Method Signatures:** 



**initialize-instance** (*instance* **standard-object**) &amp;rest *initargs* 



**Arguments and Values:** 



*instance*—an *object*. 



*initargs*—a *defaulted initialization argument list*. 



**Description:** 



Called by **make-instance** to initialize a newly created *instance*. The generic function is called with the new *instance* and the *defaulted initialization argument list*. 



The system-supplied primary *method* on **initialize-instance** initializes the *slots* of the *instance* with values according to the *initargs* and the :initform forms of the *slots*. It does this by calling the generic function **shared-initialize** with the following arguments: the *instance*, **t** (this indicates that all *slots* for which no initialization arguments are provided should be initialized according to their :initform forms), and the *initargs*. 



Programmers can define *methods* for **initialize-instance** to specify actions to be taken when an instance is initialized. If only *after methods* are defined, they will be run after the system-supplied primary *method* for initialization and therefore will not interfere with the default behavior of **initialize-instance**. 







 



 



**See Also:** 



**shared-initialize**, **make-instance**, **slot-boundp**, **slot-makunbound**, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



