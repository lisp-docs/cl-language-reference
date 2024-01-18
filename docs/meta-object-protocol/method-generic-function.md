method-generic-function
=======================

[*Generic Function* **METHOD-GENERIC-FUNCTION**]()

**Syntax:**

**method-generic-function** *method* => *generic-function*

**Arguments and values:**

*method* -- A method metaobject.

*generic-function* -- A generic function.

**Description:**

[Returns the generic function that *method* is currently connected to, or `nil` if it is not currently connected to any generic function. This value is either a generic function metaobject or `nil`. When a method is first created it is not connected to any generic function. This connection is maintained by the generic functions]()[add-method](add-method.md) and [remove-method](remove-method.md).

This generic function can be called by the user or the implementation.

An error is signaled if the argument *method* is not a method metaobject. An error is also signaled if the method metaobject has not been initialized.

**Methods:**

  ------------------------------------------------------------------------------------------------------
  [**method-generic-function** (*method* standard-method)](method-generic-function-standard-method.md)
  ------------------------------------------------------------------------------------------------------


