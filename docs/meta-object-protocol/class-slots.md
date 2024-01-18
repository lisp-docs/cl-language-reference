class-slots
===========

*Generic Function* **CLASS-SLOTS**

**Syntax:**

**class-slots** *class* => *slots*

**Arguments and values:**

*class* -- A class metaobject.

*slots* -- List of effective slot definition metaobjects.

**Description:**

Returns a possibly empty set of the slots accessible in instances of *class*. The elements of this set are effective slot definition metaobjects.

During class finalization[finalize-inheritance](finalize-inheritance.md) calls [compute-slots](compute-slots.md) to compute the slots of the class. That value is associated with the class metaobject and is returned by **class-slots**.

This generic function signals an error if *class* has not been finalized.

**Methods:**

  ---------------------------------------------------------------------------------------------------
  [**class-slots** (*class* standard-class)](class-slots-standard-class.md)
  [**class-slots** (*class* funcallable-standard-class)](class-slots-funcallable-standard-class.md)
  [**class-slots** (*class* forward-referenced-class)](class-slots-forward-referenced-class.md)
  [**class-slots** (*class* built-in-class)](class-slots-built-in-class.md)
  ---------------------------------------------------------------------------------------------------


