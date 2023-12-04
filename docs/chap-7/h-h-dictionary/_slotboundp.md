**slot-boundp** *Function* 



**Syntax:** 



**slot-boundp** *instance slot-name → generalized-boolean* 



**Arguments and Values:** 



*instance*—an *object*. 



*slot-name*—a *symbol* naming a *slot* of *instance*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if the *slot* named *slot-name* in *instance* is bound; otherwise, returns *false*. 



**Exceptional Situations:** 



If no *slot* of the *name slot-name* exists in the *instance*, **slot-missing** is called as follows: 



(slot-missing (class-of *instance*) 



*instance* 



*slot-name* 



’slot-boundp) 



(If **slot-missing** is invoked and returns a value, a *boolean equivalent* to its *primary value* is returned by **slot-boundp**.) 







 



 



The specific behavior depends on *instance*’s *metaclass*. An error is never signaled if *instance* has *metaclass* **standard-class**. An error is always signaled if *instance* has *metaclass* **built-in-class**. The consequences are undefined if *instance* has any other *metaclass*–an error might or might not be signaled in this situation. Note in particular that the behavior for *conditions* and *structures* is not specified. 



**See Also:** 



**slot-makunbound**, **slot-missing** 



**Notes:** 



The *function* **slot-boundp** allows for writing *after methods* on **initialize-instance** in order to initialize only those *slots* that have not already been bound. 



Although no *implementation* is required to do so, implementors are strongly encouraged to implement the *function* **slot-boundp** using the *function* slot-boundp-using-class described in the *Metaobject Protocol*. 



