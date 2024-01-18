generic-function-method-combination
===================================

*Generic Function* **GENERIC-FUNCTION-METHOD-COMBINATION**

**Syntax:**

**generic-function-method-combination** *generic-function* => *method-combination*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*method-combination* -- A method combination metaobject.

**Description:**

This generic function returns the method combination of the generic function. This is a method combination metaobject. This is the defaulted value of the `:method-combination` initialization argument that was associated with the generic function metaobject during initialization or reinitialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *generic-function* is not a generic function metaobject. An error is also signaled if the generic function metaobject has not been initialized.

**Methods:**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**generic-function-method-combination** (*generic-function* standard-generic-function)](/meta-object-protocol/generic-function-method-combination-standard-generic-function)
  ------------------------------------------------------------------------------------------------------------------------------------------------------------


