generic-function-argument-precedence-order
==========================================

*Generic Function* **GENERIC-FUNCTION-ARGUMENT-PRECEDENCE-ORDER**

**Syntax:**

**generic-function-argument-precedence-order** *generic-function* => *symbols*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*symbols* -- A list of symbols.

**Description:**

This generic function returns the argument precedence order of the generic function. The return value is a list of symbols, a permutation of the required parameters in the lambda list of the generic function. This is the defaulted value of the `:argument-precedence-order` initialization argument that was associated with the generic function metaobject during initialization or reinitialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *generic-function* is not a generic function metaobject. An error is also signaled if the generic function metaobject has not been initialized.

The list returned by this generic function will not be mutated by the implementation. The results are undefined if a portable program mutates the list returned by this generic function.

**Methods:**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**generic-function-argument-precedence-order** (*generic-function* standard-generic-function)](generic-function-argument-precedence-order-standard-generic-function.md)
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------


