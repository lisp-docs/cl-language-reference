method-function
===============

[*Generic Function* **METHOD-FUNCTION**]()

**Syntax:**

**method-function** *method* => *function*

**Arguments and values:**

*method* -- A method metaobject.

*function* -- A function.

**Description:**

This generic function returns the method function of *method*. This is the defaulted value of the `:function` initialization argument that was associated with the method during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *method* is not a method metaobject. An error is also signaled if the method metaobject has not been initialized.

**Methods:**

  --------------------------------------------------------------------------------------
  [**method-function** (*method* standard-method)](method-function-standard-method.md)
  --------------------------------------------------------------------------------------


