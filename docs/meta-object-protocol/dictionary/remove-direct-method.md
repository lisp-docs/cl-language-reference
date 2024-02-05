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

This set can be accessed as a list by calling the generic function[specializer-direct-methods](/meta-object-protocol/specializer-direct-methods). Methods are added to the set by [add-direct-method](/meta-object-protocol/add-direct-method).

The generic function **remove-direct-method** is called by [remove-method](/meta-object-protocol/remove-method) whenever a method is removed from a generic function. It is called once for each of the specializers of the method. Note that in cases where a specializer appears more than once in the specializers of a method, this generic function will be called more than once with the same specializer as argument.

The results are undefined if the *specializer* argument is not one of the specializers of the *method* argument.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------------
  [**remove-direct-method** (*specializer* class) (*method* method)](/meta-object-protocol/remove-direct-method-class)
  [**remove-direct-method** (*specializer* eql-specializer) (*method* method)](/meta-object-protocol/remove-direct-method-eql-specializer)
  -----------------------------------------------------------------------------------------------------------------------


