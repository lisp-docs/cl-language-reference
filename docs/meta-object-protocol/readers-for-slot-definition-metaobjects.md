Readers for Slot Definition Metaobjects
=======================================

### Readers for Slot Definition Metaobjects

The reader generic functions which simply return information associated with slot definition metaobjects are presented together here in the format described under [``Readers for Class Metaobjects.''](/docs/meta-object-protocol/readers-for-class-metaobjects)

Each of the reader generic functions for slot definition metaobjects has the same syntax, accepting one required argument called *slot*, which must be a slot definition metaobject; otherwise, an error is signaled. An error is also signaled if the slot definition metaobject has not been initialized.

These generic functions can be called by the user or the implementation.

For any of these generic functions which returns a list, such lists will not be mutated by the implementation. The results are undefined if a portable program allows such a list to be mutated.

#### Functions

  ------------------ ---------------------------------------------------------------------
  Generic Function   [**slot-definition-allocation**](/docs/meta-object-protocol/slot-definition-allocation)
  Generic Function   [**slot-definition-initargs**](/docs/meta-object-protocol/slot-definition-initargs)
  Generic Function   [**slot-definition-initform**](/docs/meta-object-protocol/slot-definition-initform)
  Generic Function   [**slot-definition-initfunction**](/docs/meta-object-protocol/slot-definition-initfunction)
  Generic Function   [**slot-definition-name**](/docs/meta-object-protocol/slot-definition-name)
  Generic Function   [**slot-definition-type**](/docs/meta-object-protocol/slot-definition-type)
  ------------------ ---------------------------------------------------------------------

#### Methods

The specified methods for the slot definition metaobject reader generic functions are presented below.

  -------- --------------------------------------------------------------------------------------------------------------------------------
  Method   [**slot-definition-allocation** (*slot* standard-slot-definition)](/docs/meta-object-protocol/slot-definition-allocation-standard-slot-definition)
  Method   [**slot-definition-initargs** (*slot* standard-slot-definition)](/docs/meta-object-protocol/slot-definition-initargs-standard-slot-definition)
  Method   [**slot-definition-initform** (*slot* standard-slot-definition)](/docs/meta-object-protocol/slot-definition-initform-standard-slot-definition)
  Method   [**slot-definition-initfunction** (*slot* standard-slot-definition)](/docs/meta-object-protocol/slot-definition-initfunction-standard-slot-definition)
  Method   [**slot-definition-name** (*slot* standard-slot-definition)](/docs/meta-object-protocol/slot-definition-name-standard-slot-definition)
  Method   [**slot-definition-type** (*slot* standard-slot-definition)](/docs/meta-object-protocol/slot-definition-type-standard-slot-definition)
  -------- --------------------------------------------------------------------------------------------------------------------------------

No behavior is specified for these methods beyond that which is specified for their respective generic functions.

### Readers for Direct Slot Definition Metaobjects

The following additional reader generic functions are defined for direct slot definition metaobjects.

#### Functions

  ------------------ -----------------------------------------------------------
  Generic Function   [**slot-definition-readers**](/docs/meta-object-protocol/slot-definition-readers)
  Generic Function   [**slot-definition-writers**](/docs/meta-object-protocol/slot-definition-writers)
  ------------------ -----------------------------------------------------------

#### Methods

  -------- -------------------------------------------------------------------------------------------------------------------------------------------
  Method   [**slot-definition-readers** (*direct-slot* standard-direct-slot-definition)](/docs/meta-object-protocol/slot-definition-readers-standard-direct-slot-definition)
  Method   [**slot-definition-writers** (*direct-slot* standard-direct-slot-definition)](/docs/meta-object-protocol/slot-definition-writers-standard-direct-slot-definition)
  -------- -------------------------------------------------------------------------------------------------------------------------------------------

No behavior is specified for this method beyond that which is specified for their respective generic functions.

### Readers for Effective Slot Definition Metaobjects

The following reader generic function is defined for effective slot definition metaobjects.

#### Functions

  ------------------ -------------------------------------------------------------
  Generic Function   [**slot-definition-location**](/docs/meta-object-protocol/slot-definition-location)
  ------------------ -------------------------------------------------------------

#### Methods

  -------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------
  Method   [**slot-definition-location** (*effective-slot-definition* standard-effective-slot-definition)](/docs/meta-object-protocol/slot-definition-location-standard-effective-slot-definition)
  -------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------


