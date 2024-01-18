remove-direct-method-class
==========================

[*Method* **REMOVE-DIRECT-METHOD**]()

**Syntax:**

**remove-direct-method** *(specializer* class) *(method* method)> => *unspecified*

**Description:**

[This is a method on the generic function]()[remove-direct-method](remove-direct-method.md).

This method implements the behavior of the generic function for class specializers. No behavior is specified for this method beyond that which is specified for the generic function.

This method cannot be overridden unless the following methods are overridden as well:

  ----------------------------------------------------------------------------------------------------------
  [**add-direct-method**(*class* class) (*method* method)](add-direct-method-class.md)
  [**specializer-direct-generic-functions**(*class* class)](specializer-direct-generic-functions-class.md)
  [**specializer-direct-methods**(*class* class)](specializer-direct-methods-class.md)
  ----------------------------------------------------------------------------------------------------------


