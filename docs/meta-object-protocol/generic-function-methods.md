generic-function-methods
========================

*Generic Function* **GENERIC-FUNCTION-METHODS**

**Syntax:**

**generic-function-methods** *generic-function* => *methods*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*methods* -- A list of method metaobjects.

**Description:**

This generic function returns the set of methods currently connected to the generic function. This is a set of method metaobjects. This value is maintained by the generic functions[add-method](/docs/meta-object-protocol/add-method) and [remove-method](/docs/meta-object-protocol/remove-method).

This generic function can be called by the user or the implementation.

An error is signaled if the argument *generic-function* is not a generic function metaobject. An error is also signaled if the generic function metaobject has not been initialized.

The list returned by this generic function will not be mutated by the implementation. The results are undefined if a portable program mutates the list returned by this generic function.

**Methods:**

  --------------------------------------------------------------------------------------------------------------------------------------
  [**generic-function-methods** (*generic-function* standard-generic-function)](/docs/meta-object-protocol/generic-function-methods-standard-generic-function)
  --------------------------------------------------------------------------------------------------------------------------------------


