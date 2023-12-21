**slot-exists-p** *Function* 



**Syntax:** 



**slot-exists-p** *object slot-name → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*slot-name*—a *symbol*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if the *object* has a *slot* named *slot-name*. 



**Affected By:** 



**defclass**, **defstruct** 



**See Also:** 



**defclass**, **slot-missing** 



**Notes:** 



Although no *implementation* is required to do so, implementors are strongly encouraged to implement the *function* **slot-exists-p** using the *function* slot-exists-p-using-class described in the *Metaobject Protocol*. 







 



 



