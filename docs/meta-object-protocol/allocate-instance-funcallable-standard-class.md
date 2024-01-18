allocate-instance-funcallable-standard-class
============================================

[*Method* **ALLOCATE-INSTANCE**]()

**Syntax:**

**allocate-instance** *(class* funcallable-standard-class) *`&rest`* *initargs* => *instance*

**Description:**

[This is a method on the generic function]()[allocate-instance](allocate-instance.md).

This method allocates storage in the instance for each slot with allocation `:instance`. These slots are unbound. Slots with any other allocation are ignored by this method (no error is signaled).

The funcallable instance function of the instance is undefined --- the results are undefined if the instance is applied to arguments before [set-funcallable-instance-function](set-funcallable-instance-function.md) has been used to set the funcallable instance function.
