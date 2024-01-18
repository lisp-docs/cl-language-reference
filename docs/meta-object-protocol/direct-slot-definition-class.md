direct-slot-definition-class
============================

[*Generic Function* **DIRECT-SLOT-DEFINITION-CLASS**]()

**Syntax:**

**direct-slot-definition-class** *class* `&rest` *initargs* => *slot-definition-class*

**Arguments and values:**

*class* -- A class metaobject.

*initargs* -- List of initialization arguments and values.

*slot-definition-class* -- A class metaobject.

**Description:**

[The value returned is a subclass of the class]()[direct-slot-definition](class-direct-slot-definition.md).

When a class is initialized, each of the canonicalized slot specifications must be converted to a direct slot definition metaobject. This generic function is called to determine the class of that direct slot definition metaobject.

The *initargs* argument is simply the canonicalized slot specification for the slot.

**Methods:**

  --------------------------------------------------------------------------------------------------------------------------------------------------------
  [**direct-slot-definition-class** (*class* standard-class) `&rest` *initargs*](direct-slot-definition-class-standard-class.md)
  [**direct-slot-definition-class** (*class* funcallable-standard-class) `&rest` *initargs*](direct-slot-definition-class-funcallable-standard-class.md)
  --------------------------------------------------------------------------------------------------------------------------------------------------------


