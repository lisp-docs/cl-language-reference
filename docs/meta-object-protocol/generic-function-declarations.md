generic-function-declarations
=============================

*Generic Function* **GENERIC-FUNCTION-DECLARATIONS**

**Syntax:**

**generic-function-declarations** *generic-function* => *declarations*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*declarations* -- A (possibly empty) list of declarations.

**Description:**

This generic function returns a possibly empty list of the declarations of the generic function. The elements of this list are declarations. This list is the defaulted value of the `:declarations` initialization argument that was associated with the generic function metaobject during initialization or reinitialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *generic-function* is not a generic function metaobject. An error is also signaled if the generic function metaobject has not been initialized.

The list returned by this generic function will not be mutated by the implementation. The results are undefined if a portable program mutates the list returned by this generic function.

**Methods:**

  ------------------------------------------------------------------------------------------------------------------------------------------------
  [**generic-function-declarations** (*generic-function* standard-generic-function)](generic-function-declarations-standard-generic-function.md)
  ------------------------------------------------------------------------------------------------------------------------------------------------


