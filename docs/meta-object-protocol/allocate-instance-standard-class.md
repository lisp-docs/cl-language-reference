allocate-instance-standard-class
================================

*Method* **ALLOCATE-INSTANCE**

**Syntax:**

**allocate-instance** *(class* standard-class) *`&rest`* *initargs* => *instance*

**Description:**

This is a method on the generic function[allocate-instance](/docs/meta-object-protocol/allocate-instance).

This method allocates storage in the instance for each slot with allocation `:instance`. These slots are unbound. Slots with any other allocation are ignored by this method (no error is signaled).
