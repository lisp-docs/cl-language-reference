effective-slot-definition-class
===============================

[*Generic Function* **EFFECTIVE-SLOT-DEFINITION-CLASS**]()

**Syntax:**

**effective-slot-definition-class** *class* `&rest` *initargs* => *slot-definition-class*

**Arguments and values:**

*class* -- A class metaobject.

*initargs* -- List of initialization arguments and values.

*slot-definition-class* -- A class metaobject.

**Description:**

[The value returned is a subclass of the class]()[effective-slot-definition](class-effective-slot-definition.md).

This generic function is called by [compute-effective-slot-definition](compute-effective-slot-definition.md) to determine the class of the resulting effective slot definition metaobject. The *initargs* argument is the set of initialization arguments and values that will be passed to [make-instance](make-instance.md) when the effective slot definition metaobject is created.

**Methods:**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**effective-slot-definition-class** (*class* standard-class) `&rest` *initargs*](effective-slot-definition-class-standard-class.md)
  [**effective-slot-definition-class** (*class* funcallable-standard-class) `&rest` *initargs*](effective-slot-definition-class-funcallable-standard-class.md)
  --------------------------------------------------------------------------------------------------------------------------------------------------------------

**Remarks:**

The book says that the value returned is a subclass of the class `effective-slot-definition-class`, but there is no specified class with that name. I am pretty sure they mean `effective-slot-definition`, so I modified the original text in the "Description" section on this page, to reflect this change. -- Robert Strandh 2022-02-06.
