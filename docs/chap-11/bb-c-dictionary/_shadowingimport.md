**shadowing-import** *Function* 



**Syntax:** 



**shadowing-import** *symbols* &optional *package →* **t** 



**Arguments and Values:** 



*symbols*—a *designator* for a *list* of *symbols*. 



*package* —a *package designator* . The default is the *current package*. 



**Description:** 



**shadowing-import** is like **import**, but it does not signal an error even if the importation of a *symbol* would shadow some *symbol* already *accessible* in *package*. 



**shadowing-import** inserts each of *symbols* into *package* as an internal symbol, regardless of whether another *symbol* of the same name is shadowed by this action. If a different *symbol* of the same name is already *present* in *package*, that *symbol* is first *uninterned* from *package*. The new *symbol* is added to *package*’s shadowing-symbols list. 







 



 



**shadowing-import** does name-conflict checking to the extent that it checks whether a distinct existing *symbol* with the same name is *accessible*; if so, it is shadowed by the new *symbol*, which implies that it must be uninterned if it was *present* in *package*. 



**Examples:**
```lisp
 



(in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 



(setq sym (intern "CONFLICT")) *→* CONFLICT 



(intern "CONFLICT" (make-package ’temp)) *→* TEMP::CONFLICT, NIL 



(package-shadowing-symbols ’temp) *→* NIL 



(shadowing-import sym ’temp) *→* T 



(package-shadowing-symbols ’temp) *→* (CONFLICT) 




```
**Side Effects:** 



**shadowing-import** changes the state of the package system in such a way that the consistency rules do not hold across the change. 



*package*’s shadowing-symbols list is modified. 



**Affected By:** 



Current state of the package system. 



**See Also:** 



**import**, **unintern**, **package-shadowing-symbols** 



