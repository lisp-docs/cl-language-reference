writer-method-class
===================

*Generic Function* **WRITER-METHOD-CLASS**

**Syntax:**

**writer-method-class** *class* *direct-slot* `&rest` *initargs* => *writer-method-class*

**Arguments and values:**

*class* -- A class metaobject.

*direct-slot* -- A direct slot definition metaobject.

*initargs* -- A suite of alternating initialization argument names and values.

*writer-method-class* -- A class metaobject.

**Description:**

This generic function is called to determine the class of writer methods created during class initialization and reinitialization. The result must be a subclass of[standard-writer-method](/docs/meta-object-protocol/class-standard-writer-method).

The *initargs* argument must be the same as will be passed to [make-instance](/docs/meta-object-protocol/make-instance) to create the writer method. The *initargs* must include `:slot-definition` with *slot-definition* as its value.

**Methods:**

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**writer-method-class** (*class* standard-class) (*direct-slot* standard-direct-slot-definition) `&rest` *initargs*](/docs/meta-object-protocol/writer-method-class-standard-class-standard-direct-slot-definition)
  [**writer-method-class** (*class* funcallable-standard-class) (*direct-slot* standard-direct-slot-definition) `&rest` *initargs*](/docs/meta-object-protocol/writer-method-class-funcallable-standard-class-standard-direct-slot-definition)
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


