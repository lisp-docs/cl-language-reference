**export** *Function* 



**Syntax:** 



**export** *symbols* &amp;optional *package →* **t** 



**Arguments and Values:** 



*symbols*—a *designator* for a *list* of *symbols*. 



*package*—a *package designator* . The default is the *current package*. 



**Description:** 



**export** makes one or more *symbols* that are *accessible* in *package* (whether directly or by inheritance) be *external symbols* of that *package*. 



If any of the *symbols* is already *accessible* as an *external symbol* of *package*, **export** has no effect on that *symbol*. If the *symbol* is *present* in *package* as an internal symbol, it is simply changed to external status. If it is *accessible* as an *internal symbol* via **use-package**, it is first *imported* into *package*, then *exported*. (The *symbol* is then *present* in the *package* whether or not *package* continues to use the *package* through which the *symbol* was originally inherited.) 



**export** makes each *symbol accessible* to all the *packages* that use *package*. All of these *packages* are checked for name conflicts: (export *s p*) does (find-symbol (symbol-name *s*) *q*) for each package *q* in (package-used-by-list *p*). Note that in the usual case of an **export** during the initial definition of a *package*, the result of **package-used-by-list** is **nil** and the name-conflict checking takes negligible time. When multiple changes are to be made, for example when **export** is given a *list* of *symbols*, it is permissible for the implementation to process each change separately, so that aborting from a name conflict caused by any but the first *symbol* in the *list* does not unexport the first *symbol* in the *list*. However, aborting from a name-conflict error caused by **export** of one of *symbols* does not leave that *symbol accessible* to some *packages* and *inaccessible* to others; with respect to each of *symbols* processed, **export** behaves as if it were as an atomic operation. 







 



 



A name conflict in **export** between one of *symbols* being exported and a *symbol* already *present* in a *package* that would inherit the newly-exported *symbol* may be resolved in favor of the exported *symbol* by uninterning the other one, or in favor of the already-present *symbol* by making it a shadowing symbol. 



**Examples:**
```lisp
 

(make-package ’temp :use nil) *→* #<PACKAGE "TEMP"> 

(use-package ’temp) *→* T 

(intern "TEMP-SYM" ’temp) *→* TEMP::TEMP-SYM, NIL 

(find-symbol "TEMP-SYM") *→* NIL, NIL 

(export (find-symbol "TEMP-SYM" ’temp) ’temp) *→* T 

(find-symbol "TEMP-SYM") *→* TEMP-SYM, :INHERITED 


```
**Side Effects:** 



The package system is modified. 



**Affected By:** 



*Accessible symbols*. 



**Exceptional Situations:** 



If any of the *symbols* is not *accessible* at all in *package*, an error of *type* **package-error** is signaled that is *correctable* by permitting the *user* to interactively specify whether that *symbol* should be *imported*. 



**See Also:** 



**import**, **unexport**, Section 11.1 (Package Concepts) 



