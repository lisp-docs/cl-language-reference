generic-function-method-class
=============================

*Generic Function* **GENERIC-FUNCTION-METHOD-CLASS**

**Syntax:**

**generic-function-method-class** *generic-function* => *method-class*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*method-class* -- A class metaobject.

**Description:**

This generic function returns the default method class of the generic function. This class must be a subclass of the class `method`. This is the defaulted value of the `:method-class` initialization argument that was associated with the generic function metaobject during initialization or reinitialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *generic-function* is not a generic function metaobject. An error is also signaled if the generic function metaobject has not been initialized.

**Methods:**

  ------------------------------------------------------------------------------------------------------------------------------------------------
  [**generic-function-method-class** (*generic-function* standard-generic-function)](/docs/meta-object-protocol/generic-function-method-class-standard-generic-function)
  ------------------------------------------------------------------------------------------------------------------------------------------------


