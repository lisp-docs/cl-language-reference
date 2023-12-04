 



Initialization arguments are checked for validity in each of the four situations that use them. An initialization argument may be valid in one situation and not another. For example, the system-supplied primary *method* for **make-instance** defined for the *class* **standard-class** checks the validity of its initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid in that situation. 



There are two means for declaring initialization arguments valid. 



*•* Initialization arguments that fill *slots* are declared as valid by the :initarg slot option to **defclass**. The :initarg slot option is inherited from *superclasses*. Thus the set of valid 







 



 



initialization arguments that fill *slots* for a *class* is the union of the initialization arguments that fill *slots* declared as valid by that *class* and its *superclasses*. Initialization arguments that fill *slots* are valid in all four contexts. 



*•* Initialization arguments that supply arguments to *methods* are declared as valid by defining those *methods*. The keyword name of each keyword parameter specified in the *method*’s *lambda list* becomes an initialization argument for all *classes* for which the *method* is applicable. The presence of &allow-other-keys in the *lambda list* of an applicable method disables validity checking of initialization arguments. Thus *method* inheritance controls the set of valid initialization arguments that supply arguments to *methods*. The *generic functions* for which *method* definitions serve to declare initialization arguments valid are as follows: 



– Making an *instance* of a *class*: **allocate-instance**, **initialize-instance**, and 



**shared-initialize**. Initialization arguments declared as valid by these *methods* are 



valid when making an *instance* of a *class*. 



– Re-initializing an *instance*: **reinitialize-instance** and **shared-initialize**. Initializa tion arguments declared as valid by these *methods* are valid when re-initializing an 



*instance*. 



– Updating an *instance* to conform to a redefined *class*: 



**update-instance-for-redefined-class** and **shared-initialize**. Initialization ar 



guments declared as valid by these *methods* are valid when updating an *instance* 



to conform to a redefined *class*. 



– Updating an *instance* to conform to the definition of a different *class*: 



**update-instance-for-different-class** and **shared-initialize**. Initialization 



arguments declared as valid by these *methods* are valid when updating an *instance* 



to conform to the definition of a different *class*. 



The set of valid initialization arguments for a *class* is the set of valid initialization arguments that either fill *slots* or supply arguments to *methods*, along with the predefined initialization argument :allow-other-keys. The default value for :allow-other-keys is **nil**. Validity checking of initialization arguments is disabled if the value of the initialization argument :allow-other-keys is *true*. 



