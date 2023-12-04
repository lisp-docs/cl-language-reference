 



The *generic function* **initialize-instance** is called by **make-instance** to initialize a newly created *instance*. It uses *standard method combination*. *Methods* for **initialize-instance** can be defined in order to perform any initialization that cannot be achieved simply by supplying initial values for *slots*. 



During initialization, **initialize-instance** is invoked after the following actions have been taken: 



 



 



*•* The *defaulted initialization argument list* has been computed by combining the supplied *initialization argument list* with any default initialization arguments for the *class*. 



*•* The validity of the *defaulted initialization argument list* has been checked. If any of the initialization arguments has not been declared as valid, an error is signaled. 



*•* A new *instance* whose *slots* are unbound has been created. 



The generic function **initialize-instance** is called with the new *instance* and the defaulted initialization arguments. There is a system-supplied primary *method* for **initialize-instance** whose *parameter specializer* is the *class* **standard-object**. This *method* calls the generic function **shared-initialize** to fill in the *slots* according to the initialization arguments and the :initform forms for the *slots*; the generic function **shared-initialize** is called with the following arguments: the *instance*, **t**, and the defaulted initialization arguments. 



Note that **initialize-instance** provides the *defaulted initialization argument list* in its call to **shared-initialize**, so the first step performed by the system-supplied primary *method* for **shared-initialize** takes into account both the initialization arguments provided in the call to **make-instance** and the *defaulted initialization argument list*. 



*Methods* for **initialize-instance** can be defined to specify actions to be taken when an *instance* is initialized. If only *after methods* for **initialize-instance** are defined, they will be run after the system-supplied primary *method* for initialization and therefore will not interfere with the default behavior of **initialize-instance**. 



The object system provides two *functions* that are useful in the bodies of **initialize-instance** methods. The *function* **slot-boundp** returns a *generic boolean* value that indicates whether a specified *slot* has a value; this provides a mechanism for writing *after methods* for **initialize-instance** that initialize *slots* only if they have not already been initialized. The *function* **slot-makunbound** causes the *slot* to have no value. 



