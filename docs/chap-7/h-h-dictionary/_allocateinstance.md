**allocate-instance** *Standard Generic Function* 



**Syntax:** 



**allocate-instance** *class* &rest *initargs* &key &allow-other-keys *→ new-instance* 



**Method Signatures:** 



**allocate-instance** (*class* **standard-class**) &rest *initargs* 



**allocate-instance** (*class* **structure-class**) &rest *initargs* 



**Arguments and Values:** 



*class*—a *class*. 



*initargs*—a *list* of *keyword/value pairs* (initialization argument *names* and *values*). *new-instance*—an *object* whose *class* is *class*. 







 



 



**Description:** 



The generic function **allocate-instance** creates and returns a new instance of the *class*, without initializing it. When the *class* is a *standard class*, this means that the *slots* are *unbound*; when the *class* is a *structure class*, this means the *slots*’ *values* are unspecified. 



The caller of **allocate-instance** is expected to have already checked the initialization arguments. 



The *generic function* **allocate-instance** is called by **make-instance**, as described in Section 7.1 (Object Creation and Initialization). 



**See Also:** 



**defclass**, **make-instance**, **class-of**, Section 7.1 (Object Creation and Initialization) 



**Notes:** 



The consequences of adding *methods* to **allocate-instance** is unspecified. This capability might be added by the *Metaobject Protocol*. 



