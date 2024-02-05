remove-direct-method-class
==========================

*Method* **REMOVE-DIRECT-METHOD**

**Syntax:**

**remove-direct-method** *(specializer* class) *(method* method)> => *unspecified*

**Description:**

This is a method on the generic function[remove-direct-method](/meta-object-protocol/remove-direct-method).

This method implements the behavior of the generic function for class specializers. No behavior is specified for this method beyond that which is specified for the generic function.

This method cannot be overridden unless the following methods are overridden as well:

  ----------------------------------------------------------------------------------------------------------
  [**add-direct-method**(*class* class) (*method* method)](/meta-object-protocol/add-direct-method-class)
  [**specializer-direct-generic-functions**(*class* class)](/meta-object-protocol/specializer-direct-generic-functions-class)
  [**specializer-direct-methods**(*class* class)](/meta-object-protocol/specializer-direct-methods-class)
  ----------------------------------------------------------------------------------------------------------


