**in-package** *Macro* 



**Syntax:** 



**in-package** *name → package* 



**Arguments and Values:** 



*name*—a *string designator* ; not evaluated. 



*package*—the *package* named by *name*. 



**Description:** 



Causes the the *package* named by *name* to become the *current package*—that is, the *value* of **\*package\***. If no such *package* already exists, an error of *type* **package-error** is signaled. 



Everything **in-package** does is also performed at compile time if the call appears as a *top level form*. 



**Side Effects:** 



The *variable* **\*package\*** is assigned. If the **in-package** *form* is a *top level form*, this assignment also occurs at compile time. 



**Exceptional Situations:** 



An error of *type* **package-error** is signaled if the specified *package* does not exist. 



**See Also:** 



**\*package\*** 







 



 



