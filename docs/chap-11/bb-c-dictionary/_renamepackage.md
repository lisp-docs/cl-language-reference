**rename-package** *Function* 



**Syntax:** 



**rename-package** *package new-name* &optional *new-nicknames → package-object* 



**Arguments and Values:** 



*package*—a *package designator* . 



*new-name*—a *package designator* . 



*new-nicknames*—a *list* of *string designators*. The default is the *empty list*. 



*package-object*—the renamed *package object*. 



**Description:** 



Replaces the name and nicknames of *package*. The old name and all of the old nicknames of *package* are eliminated and are replaced by *new-name* and *new-nicknames*. 



The consequences are undefined if *new-name* or any *new-nickname* conflicts with any existing package names. 







 



 



**Examples:**
```lisp
 



(make-package ’temporary :nicknames ’("TEMP")) *→* #<PACKAGE "TEMPORARY"> 



(rename-package ’temp ’ephemeral) *→* #<PACKAGE "EPHEMERAL"> 



(package-nicknames (find-package ’ephemeral)) *→* () 



(find-package ’temporary) *→* NIL 



(rename-package ’ephemeral ’temporary ’(temp fleeting)) 



*→* #<PACKAGE "TEMPORARY"> 



(package-nicknames (find-package ’temp)) *→* ("TEMP" "FLEETING") 




```
**See Also:** 



**make-package** 



