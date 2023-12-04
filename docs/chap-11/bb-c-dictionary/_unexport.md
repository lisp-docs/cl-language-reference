**unexport** *Function* 



**Syntax:** 



**unexport** *symbols* &optional *package →* **t** 



**Arguments and Values:** 



*symbols*—a *designator* for a *list* of *symbols*. 



*package*—a *package designator* . The default is the *current package*. 



**Description:** 



**unexport** reverts external *symbols* in *package* to internal status; it undoes the effect of **export**. 



**unexport** works only on *symbols present* in *package*, switching them back to internal status. If **unexport** is given a *symbol* that is already *accessible* as an *internal symbol* in *package*, it does nothing. 



**Examples:**
```lisp
 



(in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 



(export (intern "CONTRABAND" (make-package ’temp)) ’temp) *→* T 



(find-symbol "CONTRABAND") *→* NIL, NIL 



(use-package ’temp) *→* T 



(find-symbol "CONTRABAND") *→* CONTRABAND, :INHERITED 



(unexport ’contraband ’temp) *→* T 



(find-symbol "CONTRABAND") *→* NIL, NIL 




```
**Side Effects:** 



Package system is modified. 



**Affected By:** 



Current state of the package system. 



**Exceptional Situations:** 



If **unexport** is given a *symbol* not *accessible* in *package* at all, an error of *type* **package-error** is signaled. 



The consequences are undefined if *package* is the KEYWORD *package* or the COMMON-LISP *package*. 



 



 



**See Also:** 



**export**, Section 11.1 (Package Concepts) 



