**compiled-function** *Type* 



**Supertypes:** 



**compiled-function**, **function**, **t** 



**Description:** 



Any *function* may be considered by an *implementation* to be a a *compiled function* if it contains no references to *macros* that must be expanded at run time, and it contains no unresolved references to *load time values*. See Section 3.2.2 (Compilation Semantics). 



*Functions* whose definitions appear lexically within a *file* that has been *compiled* with **compile-file** and then *loaded* with **load** are of *type* **compiled-function**. *Functions* produced by the **compile** function are of *type* **compiled-function**. Other *functions* might also be of *type* **compiled-function**. 



