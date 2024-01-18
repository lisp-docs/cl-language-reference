generic-function-name
=====================

[*Generic Function* **GENERIC-FUNCTION-NAME**]()

**Syntax:**

**generic-function-name** *generic-function* => *name*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*name* -- A function name or `nil`.

**Description:**

[This generic function returns the name of the generic function, or `nil` if the generic function has no name. This is the defaulted value of the `:name` initialization argument that was associated with the generic function metaobject during initialization or reinitialization. (Also see]()[(setf generic-function-name)](setf-generic-function-name.md).)

This generic function can be called by the user or the implementation.

An error is signaled if the argument *generic-function* is not a generic function metaobject. An error is also signaled if the generic function metaobject has not been initialized.

**Methods:**

  --------------------------------------------------------------------------------------------------------------------------------
  [**generic-function-name** (*generic-function* standard-generic-function)](generic-function-name-standard-generic-function.md)
  --------------------------------------------------------------------------------------------------------------------------------


