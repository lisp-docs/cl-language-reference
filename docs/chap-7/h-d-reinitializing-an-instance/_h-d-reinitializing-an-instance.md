**7.3 Reinitializing an Instance** 

The generic function **reinitialize-instance** may be used to change the values of *slots* according to initialization arguments. 

The process of reinitialization changes the values of some *slots* and performs any user-defined actions. It does not modify the structure of an *instance* to add or delete *slots*, and it does not use any :initform forms to initialize *slots*. 

The generic function **reinitialize-instance** may be called directly. It takes one required argument, the *instance*. It also takes any number of initialization arguments to be used by *methods* for **reinitialize-instance** or for **shared-initialize**. The arguments after the required *instance* must form an *initialization argument list*. 

There is a system-supplied primary *method* for **reinitialize-instance** whose *parameter specializer* is the *class* **standard-object**. First this *method* checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of Initialization Arguments).) Then it calls the generic function **shared-initialize** with the following arguments: the *instance*, **nil**, and the initialization arguments it received. 

