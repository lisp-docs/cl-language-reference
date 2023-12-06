**shadow** *Function* 



**Syntax:** 



**shadow** *symbol-names* &amp;optional *package →* **t** 



**Arguments and Values:** 



*symbol-names*—a *designator* for a *list* of *string designators*. 



*package*—a *package designator* . The default is the *current package*. 



**Description:** 



**shadow** assures that *symbols* with names given by *symbol-names* are *present* in the *package*. 



Specifically, *package* is searched for *symbols* with the *names* supplied by *symbol-names*. For each such *name*, if a corresponding *symbol* is not *present* in *package* (directly, not by inheritance), then a corresponding *symbol* is created with that *name*, and inserted into *package* as an *internal symbol*. The corresponding *symbol*, whether pre-existing or newly created, is then added, if not already present, to the *shadowing symbols list* of *package*. 



**Examples:**
```lisp
 

(package-shadowing-symbols (make-package ’temp)) *→* NIL 

(find-symbol ’car ’temp) *→* CAR, :INHERITED 

(shadow ’car ’temp) *→* T 

(find-symbol ’car ’temp) *→* TEMP::CAR, :INTERNAL 

(package-shadowing-symbols ’temp) *→* (TEMP::CAR) 

(make-package ’test-1) *→* #<PACKAGE "TEST-1"> 

(intern "TEST" (find-package ’test-1)) *→* TEST-1::TEST, NIL 

(shadow ’test-1::test (find-package ’test-1)) *→* T 



 

 

(shadow ’TEST (find-package ’test-1)) *→* T 

(assert (not (null (member ’test-1::test (package-shadowing-symbols 

(find-package ’test-1)))))) 

(make-package ’test-2) *→* #<PACKAGE "TEST-2"> 

(intern "TEST" (find-package ’test-2)) *→* TEST-2::TEST, NIL 

(export ’test-2::test (find-package ’test-2)) *→* T 

(use-package ’test-2 (find-package ’test-1)) ;should not error 


```
**Side Effects:** 



**shadow** changes the state of the package system in such a way that the package consistency rules do not hold across the change. 



**Affected By:** 



Current state of the package system. 



**See Also:** 



**package-shadowing-symbols**, Section 11.1 (Package Concepts) 



**Notes:** 



If a *symbol* with a name in *symbol-names* already exists in *package*, but by inheritance, the inherited symbol becomes *shadowed* <sub>3</sub> by a newly created *internal symbol*. 



