**generic-function** *System Class* 



**Class Precedence List:** 



**generic-function**, **function**, **t** 



**Description:** 



A *generic function* is a *function* whose behavior depends on the *classes* or identities of the *arguments* supplied to it. A generic function object contains a set of *methods*, a *lambda list*, a *method combination type*, and other information. The *methods* define the class-specific behavior and operations of the *generic function*; a *method* is said to *specialize* a *generic function*. When invoked, a *generic function* executes a subset of its *methods* based on the *classes* or identities of its *arguments*. 



A *generic function* can be used in the same ways that an ordinary *function* can be used; specifically, a *generic function* can be used as an argument to **funcall** and **apply**, and can be given a global or a local name.  







