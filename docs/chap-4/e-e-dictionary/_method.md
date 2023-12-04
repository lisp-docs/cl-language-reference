**method** *System Class* 



**Class Precedence List:** 



**method**, **t** 



**Description:** 



A *method* is an *object* that represents a modular part of the behavior of a *generic function*. 



A *method* contains *code* to implement the *method*’s behavior, a sequence of *parameter specializers* that specify when the given *method* is applicable, and a sequence of *qualifiers* that is used by the method combination facility to distinguish among *methods*. Each required parameter of each *method* has an associated *parameter specializer* , and the *method* will be invoked only on arguments that satisfy its *parameter specializers*. 



The method combination facility controls the selection of *methods*, the order in which they are run, and the values that are returned by the generic function. The object system offers a default method combination type and provides a facility for declaring new types of method combination. 



**See Also:** 



Section 7.6 (Generic Functions and Methods)  







