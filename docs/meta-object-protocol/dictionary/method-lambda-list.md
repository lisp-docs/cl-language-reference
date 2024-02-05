method-lambda-list
==================

*Generic Function* **METHOD-LAMBDA-LIST**

**Syntax:**

**method-lambda-list** *method* => *lambda-list*

**Arguments and values:**

*method* -- A method metaobject.

*lambda-list* -- An unspecialized lambda list.

**Description:**

This generic function returns the (unspecialized) lambda list of *method*. This value is a Common Lisp lambda list. This is the defaulted value of the `:lambda-list` initialization argument that was associated with the method during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *method* is not a method metaobject. An error is also signaled if the method metaobject has not been initialized.

The list returned by this function will not be mutated by the implementation. The results are undefined if a portable program allows this list to be mutated.

**Methods:**

  --------------------------------------------------------------------------------------------
  [**method-lambda-list** (*method* standard-method)](/meta-object-protocol/method-lambda-list-standard-method)
  --------------------------------------------------------------------------------------------


