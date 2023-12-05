**make-package** *Function* 



**Syntax:** 



**make-package** *package-name* &amp;key *nicknames use → package* 



**Arguments and Values:** 



*package-name*—a *string designator* . 



*nicknames*—a *list* of *string designators*. The default is the *empty list*. 



*use*—a *list* of *package designators*. The default is *implementation-defined*. 



*package*—a *package*. 



**Description:** 



Creates a new *package* with the name *package-name*. 



*Nicknames* are additional *names* which may be used to refer to the new *package*. 



*use* specifies zero or more *packages* the *external symbols* of which are to be inherited by the new *package*. See the *function* **use-package**. 



**Examples:**
```lisp
 



(make-package ’temporary :nicknames ’("TEMP" "temp")) *→* #<PACKAGE "TEMPORARY"> (make-package "OWNER" :use ’("temp")) *→* #<PACKAGE "OWNER"> 



(package-used-by-list ’temp) *→* (#<PACKAGE "OWNER">) 



(package-use-list ’owner) *→* (#<PACKAGE "TEMPORARY">) 




```
**Affected By:** 



The existence of other *packages* in the system. 



**Exceptional Situations:** 



The consequences are unspecified if *packages* denoted by *use* do not exist. 



A *correctable* error is signaled if the *package-name* or any of the *nicknames* is already the *name* or *nickname* of an existing *package*. 







 



 



**See Also:** 



**defpackage**, **use-package** 



**Notes:** 



In situations where the *packages* to be used contain symbols which would conflict, it is necessary to first create the package with :use ’(), then to use **shadow** or **shadowing-import** to address the conflicts, and then after that to use **use-package** once the conflicts have been addressed. 



When packages are being created as part of the static definition of a program rather than dynamically by the program, it is generally considered more stylistically appropriate to use **defpackage** rather than **make-package**. 



