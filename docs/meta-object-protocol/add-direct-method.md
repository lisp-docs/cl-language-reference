add-direct-method
=================

*Generic Function* **ADD-DIRECT-METHOD**

**Syntax:**

**add-direct-method** *specializer* *method* => *unspecified*

**Arguments and values:**

*specializer* -- A specializer metaobject.

*method* -- A method metaobject.

**Description:**

This generic function is called to maintain a set of backpointers from a specializer to the set of methods specialized to it. If *method* is already in the set, it is not added again (no error is signaled).

This set can be accessed as a list by calling the generic function[specializer-direct-methods](specializer-direct-methods.md). Methods are removed from the set by [remove-direct-method](remove-direct-method.md).

The generic function **add-direct-method** is called by [add-method](add-method.md) whenever a method is added to a generic function. It is called once for each of the specializers of the method. Note that in cases where a specializer appears more than once in the specializers of a method, this generic function will be called more than once with the same specializer as argument.

The results are undefined if the *specializer* argument is not one of the specializers of the *method* argument.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------
  [**add-direct-method** (*specializer* class) (*method* method)](add-direct-method-class.md)
  [**add-direct-method** (*specializer* eql-specializer) (*method* method)](add-direct-method-eql-specializer.md)
  -----------------------------------------------------------------------------------------------------------------


