class-direct-subclasses
=======================

*Generic Function* **CLASS-DIRECT-SUBCLASSES**

**Syntax:**

**class-direct-subclasses** *class* => *subclasses*

**Arguments and values:**

*class* -- A class metaobject.

*subclasses* -- List of class metaobjects.

**Description:**

Returns a set of the direct subclasses of *class*. The elements of this set are class metaobjects that all mention this class among their direct superclasses. The empty set is returned if *class* has no direct subclasses. This value is maintained by the generic functions[add-direct-subclass](add-direct-subclass.md) and [remove-direct-subclass](remove-direct-subclass.md).

**Methods:**

  ---------------------------------------------------------------------------------------------------------------------------
  [**class-direct-subclasses** (*class* standard-class)](class-direct-subclasses-standard-class.md)
  [**class-direct-subclasses** (*class* funcallable-standard-class)](class-direct-subclasses-funcallable-standard-class.md)
  [**class-direct-subclasses** (*class* forward-referenced-class)](class-direct-subclasses-forward-referenced-class.md)
  [**class-direct-subclasses** (*class* built-in-class)](class-direct-subclasses-built-in-class.md)
  ---------------------------------------------------------------------------------------------------------------------------


