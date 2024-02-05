method-generic-function-standard-method
=======================================

*Method* **METHOD-GENERIC-FUNCTION**

**Syntax:**

**method-generic-function** *(method* standard-method) => *generic-function*

**Description:**

This is a method on the generic function[method-generic-function](/meta-object-protocol/method-generic-function).

No behavior is specified for this method beyond that which is specified for the corresponding generic function.

The value returned by this method is maintained by [add-method (*generic-function* standard-generic-function) (*method* standard-method)](/meta-object-protocol/add-method-standard-generic-function-standard-method) and [remove-method (*generic-function* standard-generic-function) (*method* standard-method)](/meta-object-protocol/remove-method-standard-generic-function-standard-method).
