 

The second step initializes the newly added *local slots* and performs any other user-defined actions. This step is implemented by the generic function **update-instance-for-redefined-class**, which is called after completion of the first step of modifying the structure of the *instance*. 

The generic function **update-instance-for-redefined-class** takes four required arguments: the *instance* being updated after it has undergone the first step, a list of the names of *local slots* that were added, a list of the names of *local slots* that were discarded, and a property list containing the *slot* names and values of *slots* that were discarded and had values. Included among the discarded *slots* are *slots* that were local in the old *class* and that are shared in the new *class*. 

The generic function **update-instance-for-redefined-class** also takes any number of initialization arguments. When it is called by the system to update an *instance* whose *class* has been redefined, no initialization arguments are provided. 

There is a system-supplied primary *method* for **update-instance-for-redefined-class** whose *parameter specializer* for its *instance* argument is the *class* **standard-object**. First this *method* checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of Initialization Arguments).) Then it calls the generic function **shared-initialize** with the following arguments: the *instance*, the list of *names* of the newly added *slots*, and the initialization arguments it received. 

