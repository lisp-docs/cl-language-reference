specializer-direct-methods
==========================

*Generic Function* **SPECIALIZER-DIRECT-METHODS**

**Syntax:**

**specializer-direct-methods** *specializer* => *methods*

**Arguments and values:**

*specializer* -- A specializer metaobject.

*methods* -- A possibly empty list of method metaobjects.

**Description:**

This generic function returns the possibly empty set of those methods, connected to generic functions, which have *specializer* as a specializer. The elements of this set are method metaobjects. This value is maintained by the generic functions[add-direct-method](/meta-object-protocol/dictionary/add-direct-method) and [remove-direct-method](/meta-object-protocol/dictionary/remove-direct-method).

**Methods:**

  -----------------------------------------------------------------------------------------------------------------
  [**specializer-direct-methods** (*specializer* class)](/meta-object-protocol/dictionary/specializer-direct-methods-class)
  [**specializer-direct-methods** (*specializer* eql-specializer)](/meta-object-protocol/dictionary/specializer-direct-methods-eql-specializer)
  -----------------------------------------------------------------------------------------------------------------


