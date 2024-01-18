set-funcallable-instance-function
=================================

*Function* **SET-FUNCALLABLE-INSTANCE-FUNCTION**

**Syntax:**

**set-funcallable-instance-function** *funcallable-instance* *function* => *unspecified*

**Arguments and values:**

*funcallable-instance* -- A funcallable-instance.

*function* -- A function.

*unspecified* -- An unspecified value.

The argument *funcallable-instance* must have been returned by [allocate-instance (*class* funcallable-standard-class)](allocate-instance-funcallable-standard-class.md).

**Description:**

This function is called to set or to change the function of a funcallable instance. After `set-funcallable-instance-function` is called, any subsequent calls to *funcallable-instance* will run the new function.
