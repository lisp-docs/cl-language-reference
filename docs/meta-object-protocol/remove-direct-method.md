remove-direct-method
====================

*Generic Function* **REMOVE-DIRECT-METHOD**

**Syntax:**

**remove-direct-method** *specializer* *method* => *unspecified*

**Arguments and values:**

*specializer* -- A specializer metaobject.

*method* -- A method metaobject.

**Description:**

This generic function is called to maintain a set of backpointers from a specializer to the set of methods specialized to it. If *method* is in the set it is removed. If it is not, no error is signaled.

This set can be accessed as a list by calling the generic function[specializer-direct-methods](specializer-direct-methods.md). Methods are added to the set by [add-direct-method](add-direct-method.md).

The generic function **remove-direct-method** is called by [remove-method](remove-method.md) whenever a method is removed from a generic function. It is called once for each of the specializers of the method. Note that in cases where a specializer appears more than once in the specializers of a method, this generic function will be called more than once with the same specializer as argument.

The results are undefined if the *specializer* argument is not one of the specializers of the *method* argument.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------------
  [**remove-direct-method** (*specializer* class) (*method* method)](remove-direct-method-class.md)
  [**remove-direct-method** (*specializer* eql-specializer) (*method* method)](remove-direct-method-eql-specializer.md)
  -----------------------------------------------------------------------------------------------------------------------


