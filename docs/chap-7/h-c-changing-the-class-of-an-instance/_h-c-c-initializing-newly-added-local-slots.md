 

The second step of the update initializes the newly added *slots* and performs any other user-defined actions. This step is implemented by the generic function **update-instance-for-different-class**. The generic function **update-instance-for-different-class** is invoked by **change-class** after the first step of the update has been completed. 

The generic function **update-instance-for-different-class** is invoked on arguments computed by **change-class**. The first argument passed is a copy of the *instance* being updated and is an *instance* of the class *C*&#60;sub&#62;from&#60;/sub&#62;; this copy has *dynamic extent* within the generic function **change-class**. The second argument is the *instance* as updated so far by **change-class** and is an *instance* of the class *C*&#60;sub&#62;to&#60;/sub&#62;. The remaining arguments are an *initialization argument list*. 

There is a system-supplied primary *method* for **update-instance-for-different-class** that has two parameter specializers, each of which is the *class* **standard-object**. First this *method* checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of 

Initialization Arguments).) Then it calls the generic function **shared-initialize** with the following arguments: the new *instance*, a list of *names* of the newly added *slots*, and the initialization arguments it received. 



 

 

