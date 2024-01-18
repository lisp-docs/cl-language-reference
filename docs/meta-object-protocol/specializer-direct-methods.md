specializer-direct-methods
==========================

*Generic Function* **SPECIALIZER-DIRECT-METHODS**

**Syntax:**

**specializer-direct-methods** *specializer* => *methods*

**Arguments and values:**

*specializer* -- A specializer metaobject.

*methods* -- A possibly empty list of method metaobjects.

**Description:**

This generic function returns the possibly empty set of those methods, connected to generic functions, which have *specializer* as a specializer. The elements of this set are method metaobjects. This value is maintained by the generic functions[add-direct-method](add-direct-method.md) and [remove-direct-method](remove-direct-method.md).

**Methods:**

  -----------------------------------------------------------------------------------------------------------------
  [**specializer-direct-methods** (*specializer* class)](specializer-direct-methods-class.md)
  [**specializer-direct-methods** (*specializer* eql-specializer)](specializer-direct-methods-eql-specializer.md)
  -----------------------------------------------------------------------------------------------------------------


