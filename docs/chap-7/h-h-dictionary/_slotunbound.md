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







 



 



**Notes:** 



An unbound *slot* may occur if no :initform form was specified for the *slot* and the *slot* value has not been set, or if **slot-makunbound** has been called on the *slot*. 



