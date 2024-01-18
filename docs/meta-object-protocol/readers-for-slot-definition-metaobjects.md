Readers for Slot Definition Metaobjects
=======================================

### Readers for Slot Definition Metaobjects

The reader generic functions which simply return information associated with slot definition metaobjects are presented together here in the format described under [``Readers for Class Metaobjects.''](readers-for-class-metaobjects.md)

Each of the reader generic functions for slot definition metaobjects has the same syntax, accepting one required argument called *slot*, which must be a slot definition metaobject; otherwise, an error is signaled. An error is also signaled if the slot definition metaobject has not been initialized.

These generic functions can be called by the user or the implementation.

For any of these generic functions which returns a list, such lists will not be mutated by the implementation. The results are undefined if a portable program allows such a list to be mutated.

#### Functions

  ------------------ ---------------------------------------------------------------------
  Generic Function   [**slot-definition-allocation**](slot-definition-allocation.md)
  Generic Function   [**slot-definition-initargs**](slot-definition-initargs.md)
  Generic Function   [**slot-definition-initform**](slot-definition-initform.md)
  Generic Function   [**slot-definition-initfunction**](slot-definition-initfunction.md)
  Generic Function   [**slot-definition-name**](slot-definition-name.md)
  Generic Function   [**slot-definition-type**](slot-definition-type.md)
  ------------------ ---------------------------------------------------------------------

#### Methods

The specified methods for the slot definition metaobject reader generic functions are presented below.

  -------- --------------------------------------------------------------------------------------------------------------------------------
  Method   [**slot-definition-allocation** (*slot* standard-slot-definition)](slot-definition-allocation-standard-slot-definition.md)
  Method   [**slot-definition-initargs** (*slot* standard-slot-definition)](slot-definition-initargs-standard-slot-definition.md)
  Method   [**slot-definition-initform** (*slot* standard-slot-definition)](slot-definition-initform-standard-slot-definition.md)
  Method   [**slot-definition-initfunction** (*slot* standard-slot-definition)](slot-definition-initfunction-standard-slot-definition.md)
  Method   [**slot-definition-name** (*slot* standard-slot-definition)](slot-definition-name-standard-slot-definition.md)
  Method   [**slot-definition-type** (*slot* standard-slot-definition)](slot-definition-type-standard-slot-definition.md)
  -------- --------------------------------------------------------------------------------------------------------------------------------

No behavior is specified for these methods beyond that which is specified for their respective generic functions.

### Readers for Direct Slot Definition Metaobjects

The following additional reader generic functions are defined for direct slot definition metaobjects.

#### Functions

  ------------------ -----------------------------------------------------------
  Generic Function   [**slot-definition-readers**](slot-definition-readers.md)
  Generic Function   [**slot-definition-writers**](slot-definition-writers.md)
  ------------------ -----------------------------------------------------------

#### Methods

  -------- -------------------------------------------------------------------------------------------------------------------------------------------
  Method   [**slot-definition-readers** (*direct-slot* standard-direct-slot-definition)](slot-definition-readers-standard-direct-slot-definition.md)
  Method   [**slot-definition-writers** (*direct-slot* standard-direct-slot-definition)](slot-definition-writers-standard-direct-slot-definition.md)
  -------- -------------------------------------------------------------------------------------------------------------------------------------------

No behavior is specified for this method beyond that which is specified for their respective generic functions.

### Readers for Effective Slot Definition Metaobjects

The following reader generic function is defined for effective slot definition metaobjects.

#### Functions

  ------------------ -------------------------------------------------------------
  Generic Function   [**slot-definition-location**](slot-definition-location.md)
  ------------------ -------------------------------------------------------------

#### Methods

  -------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------
  Method   [**slot-definition-location** (*effective-slot-definition* standard-effective-slot-definition)](slot-definition-location-standard-effective-slot-definition.md)
  -------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------


