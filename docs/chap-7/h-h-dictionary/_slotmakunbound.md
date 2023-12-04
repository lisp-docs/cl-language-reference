**slot-makunbound** *Function* 



**Syntax:** 



**slot-makunbound** *instance slot-name → instance* 



**Arguments and Values:** 



*instance* – instance. 



*Slot-name*—a *symbol*. 



**Description:** 



The *function* **slot-makunbound** restores a *slot* of the name *slot-name* in an *instance* to the unbound state. 



**Exceptional Situations:** 



If no *slot* of the name *slot-name* exists in the *instance*, **slot-missing** is called as follows: 



(slot-missing (class-of *instance*) 



*instance* 



*slot-name* 



’slot-makunbound) 



(Any values returned by **slot-missing** in this case are ignored by **slot-makunbound**.) 



The specific behavior depends on *instance*’s *metaclass*. An error is never signaled if *instance* has *metaclass* **standard-class**. An error is always signaled if *instance* has *metaclass* **built-in-class**. The consequences are undefined if *instance* has any other *metaclass*–an error might or might not be signaled in this situation. Note in particular that the behavior for *conditions* and *structures* is not specified. 



**See Also:** 



**slot-boundp**, **slot-missing** 



**Notes:** 



Although no *implementation* is required to do so, implementors are strongly encouraged to implement the *function* **slot-makunbound** using the *function* slot-makunbound-using-class described in the *Metaobject Protocol*. 







 



 



**slot-missing** 



