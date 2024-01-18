add-direct-method-class
=======================

*Method* **ADD-DIRECT-METHOD**

**Syntax:**

**add-direct-method** *(specializer* class) *(method* method)> => *unspecified*

**Description:**

This is a method on the generic function[add-direct-method](/docs/meta-object-protocol/add-direct-method).

This method implements the behavior of the generic function for class specializers. No behavior is specified for this method beyond that which is specified for the generic function.

This method cannot be overridden unless the following methods are overridden as well:

  ----------------------------------------------------------------------------------------------------------
  [**remove-direct-method**(*class* class) (*method* method)](/docs/meta-object-protocol/remove-direct-method-class)
  [**specializer-direct-generic-functions**(*class* class)](/docs/meta-object-protocol/specializer-direct-generic-functions-class)
  [**specializer-direct-methods**(*class* class)](/docs/meta-object-protocol/specializer-direct-methods-class)
  ----------------------------------------------------------------------------------------------------------


