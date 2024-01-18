reader-method-class
===================

[*Generic Function* **READER-METHOD-CLASS**]()

**Syntax:**

**reader-method-class** *class* *direct-slot* `&rest` *initargs* => *reader-method-class*

**Arguments and values:**

*class* -- A class metaobject.

*direct-slot* -- A direct slot definition metaobject.

*initargs* -- A suite of alternating initialization argument names and values.

*reader-method-class* -- A class metaobject.

**Description:**

[This generic function is called to determine the class of reader methods created during class initialization and reinitialization. The result must be a subclass of]()[standard-reader-method](class-standard-reader-method.md).

The *initargs* argument must be the same as will be passed to [make-instance](make-instance.md) to create the reader method. The *initargs* must include `:slot-definition` with *slot-definition* as its value.

**Methods:**

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**reader-method-class** (*class* standard-class) (*direct-slot* standard-direct-slot-definition) `&rest` *initargs*](reader-method-class-standard-class-standard-direct-slot-definition.md)
  [**reader-method-class** (*class* funcallable-standard-class) (*direct-slot* standard-direct-slot-definition) `&rest` *initargs*](reader-method-class-funcallable-standard-class-standard-direct-slot-definition.md)
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


