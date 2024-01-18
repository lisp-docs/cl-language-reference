allocate-instance-funcallable-standard-class
============================================

*Method* **ALLOCATE-INSTANCE**

**Syntax:**

**allocate-instance** *(class* funcallable-standard-class) *`&rest`* *initargs* => *instance*

**Description:**

This is a method on the generic function[allocate-instance](/meta-object-protocol/allocate-instance).

This method allocates storage in the instance for each slot with allocation `:instance`. These slots are unbound. Slots with any other allocation are ignored by this method (no error is signaled).

The funcallable instance function of the instance is undefined --- the results are undefined if the instance is applied to arguments before [set-funcallable-instance-function](/meta-object-protocol/set-funcallable-instance-function) has been used to set the funcallable instance function.
