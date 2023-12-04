 



*Methods* for **update-instance-for-redefined-class** may be defined to specify actions to be taken when an *instance* is updated. If only *after methods* for **update-instance-for-redefined-class** are defined, they will be run after the system-supplied primary *method* for initialization and therefore will not interfere with the default behavior of **update-instance-for-redefined-class**. Because no initialization arguments are passed to **update-instance-for-redefined-class** when it is called by the system, the *initialization forms* for *slots* that are filled by *before methods* for **update-instance-for-redefined-class** will not be evaluated by **shared-initialize**. 



*Methods* for **shared-initialize** may be defined to customize *class* redefinition. For more information, see Section 7.1.5 (Shared-Initialize). 



