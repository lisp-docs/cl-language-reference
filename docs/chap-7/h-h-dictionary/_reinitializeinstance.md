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



