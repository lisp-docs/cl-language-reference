generic-function-lambda-list
============================

*Generic Function* **GENERIC-FUNCTION-LAMBDA-LIST**

**Syntax:**

**generic-function-lambda-list** *generic-function* => *lambda-list*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*lambda-list* -- A lambda list.

**Description:**

This generic function returns the lambda list of the generic function. This is the defaulted value of the `:lambda-list` initialization argument that was associated with the generic function metaobject during initialization or reinitialization. An error is signaled if the lambda list has yet to be supplied.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *generic-function* is not a generic function metaobject. An error is also signaled if the generic function metaobject has not been initialized.

The list returned by this generic function will not be mutated by the implementation. The results are undefined if a portable program mutates the list returned by this generic function.

**Methods:**

  ----------------------------------------------------------------------------------------------------------------------------------------------
  [**generic-function-lambda-list** (*generic-function* standard-generic-function)](/docs/meta-object-protocol/generic-function-lambda-list-standard-generic-function)
  ----------------------------------------------------------------------------------------------------------------------------------------------


