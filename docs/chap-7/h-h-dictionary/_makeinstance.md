**make-instance** *Standard Generic Function* 



**Syntax:** 



**make-instance** *class* &amp;rest *initargs* &amp;key &amp;allow-other-keys *→ instance* 



**Method Signatures:** 



**make-instance** (*class* **standard-class**) &amp;rest *initargs* 



**make-instance** (*class* **symbol**) &amp;rest *initargs* 



**Arguments and Values:** 



*class*—a *class*, or a *symbol* that names a *class*. 



*initargs*—an *initialization argument list*. 



*instance*—a *fresh instance* of *class class*. 







 



 



**Description:** 



The *generic function* **make-instance** creates and returns a new *instance* of the given *class*. 



If the second of the above *methods* is selected, that *method* invokes **make-instance** on the arguments (find-class *class*) and *initargs*. 



The initialization arguments are checked within **make-instance**. 



The *generic function* **make-instance** may be used as described in Section 7.1 (Object Creation and Initialization). 



**Exceptional Situations:** 



If any of the initialization arguments has not been declared as valid, an error of *type* **error** is signaled. 



**See Also:** 



**defclass**, **class-of**, **allocate-instance**, **initialize-instance**, Section 7.1 (Object Creation and Initialization) 



