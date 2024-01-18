class-direct-subclasses
=======================

*Generic Function* **CLASS-DIRECT-SUBCLASSES**

**Syntax:**

**class-direct-subclasses** *class* => *subclasses*

**Arguments and values:**

*class* -- A class metaobject.

*subclasses* -- List of class metaobjects.

**Description:**

Returns a set of the direct subclasses of *class*. The elements of this set are class metaobjects that all mention this class among their direct superclasses. The empty set is returned if *class* has no direct subclasses. This value is maintained by the generic functions[add-direct-subclass](/docs/meta-object-protocol/add-direct-subclass) and [remove-direct-subclass](/docs/meta-object-protocol/remove-direct-subclass).

**Methods:**

  ---------------------------------------------------------------------------------------------------------------------------
  [**class-direct-subclasses** (*class* standard-class)](/docs/meta-object-protocol/class-direct-subclasses-standard-class)
  [**class-direct-subclasses** (*class* funcallable-standard-class)](/docs/meta-object-protocol/class-direct-subclasses-funcallable-standard-class)
  [**class-direct-subclasses** (*class* forward-referenced-class)](/docs/meta-object-protocol/class-direct-subclasses-forward-referenced-class)
  [**class-direct-subclasses** (*class* built-in-class)](/docs/meta-object-protocol/class-direct-subclasses-built-in-class)
  ---------------------------------------------------------------------------------------------------------------------------


