generic-function-methods-standard-generic-function
==================================================

*Method* **GENERIC-FUNCTION-METHODS**

**Syntax:**

**generic-function-methods** *(generic-function* standard-generic-function) => *methods*

**Description:**

This is a method on the generic function[generic-function-methods](/docs/meta-object-protocol/generic-function-methods).

No behavior is specified for this method beyond that which is specified for the corresponding generic function.

The value returned by this method is maintained by [`add-method` (*generic-function* standard-generic-function) (*method* standard-method)](/docs/meta-object-protocol/add-method-standard-generic-function-standard-method) and [`remove-method` (*generic-function* standard-generic-function) (*method* standard-method)](/docs/meta-object-protocol/remove-method-standard-generic-function-standard-method) and
