slot-definition-location
========================

*Generic Function* **SLOT-DEFINITION-LOCATION**

**Syntax:**

**slot-definition-location** *effective-slot* => *location*

**Arguments and values:**

*effective-slot-definition* -- A effective slot definition metaobject.

*location* -- A location (see below).

**Description:**

Returns the location of *effective-slot-definition*. The meaning and interpretation of this value is described in****[the section called ``Instance Structure Protocol.''](/meta-object-protocol/instance-structure-protocol)**

****

This generic function can be called by the user or the implementation.

An error is signaled if the argument *slot* is not a slot definition metaobject. An error is also signaled if the slot definition metaobject has not been initialized.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**slot-definition-location** (*effective-slot-definition* standard-effective-slot-definition)](/meta-object-protocol/slot-definition-location-standard-effective-slot-definition)
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------


