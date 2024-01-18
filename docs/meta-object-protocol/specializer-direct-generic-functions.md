specializer-direct-generic-functions
====================================

[*Generic Function* **SPECIALIZER-DIRECT-GENERIC-FUNCTIONS**]()

**Syntax:**

**specializer-direct-generic-functions** *specializer* => *generic-functions*

**Arguments and values:**

*specializer* -- A specializer metaobject.

*generic-functions* -- A possibly empty list of generic function metaobjects.

**Description:**

[This generic function returns the possibly empty set of those generic functions which have a method with *specializer* as a specializer. The elements of this set are generic function metaobjects. This value is maintained by the generic functions]()[add-direct-method](add-direct-method.md) and [remove-direct-method](remove-direct-method.md).

**Methods:**

  -------------------------------------------------------------------------------------------------------------------------------------
  [**specializer-direct-generic-functions** (*specializer* class)](specializer-direct-generic-functions-class.md)
  [**specializer-direct-generic-functions** (*specializer* eql-specializer)](specializer-direct-generic-functions-eql-specializer.md)
  -------------------------------------------------------------------------------------------------------------------------------------


