specializer-direct-generic-functions
====================================

*Generic Function* **SPECIALIZER-DIRECT-GENERIC-FUNCTIONS**

**Syntax:**

**specializer-direct-generic-functions** *specializer* => *generic-functions*

**Arguments and values:**

*specializer* -- A specializer metaobject.

*generic-functions* -- A possibly empty list of generic function metaobjects.

**Description:**

This generic function returns the possibly empty set of those generic functions which have a method with *specializer* as a specializer. The elements of this set are generic function metaobjects. This value is maintained by the generic functions[add-direct-method](/meta-object-protocol/add-direct-method) and [remove-direct-method](/meta-object-protocol/remove-direct-method).

**Methods:**

  -------------------------------------------------------------------------------------------------------------------------------------
  [**specializer-direct-generic-functions** (*specializer* class)](/meta-object-protocol/specializer-direct-generic-functions-class)
  [**specializer-direct-generic-functions** (*specializer* eql-specializer)](/meta-object-protocol/specializer-direct-generic-functions-eql-specializer)
  -------------------------------------------------------------------------------------------------------------------------------------


