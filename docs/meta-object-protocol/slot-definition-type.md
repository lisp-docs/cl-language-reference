slot-definition-type
====================

*Generic Function* **SLOT-DEFINITION-TYPE**

**Syntax:**

**slot-definition-type** *slot* => *type*

**Arguments and values:**

*slot* -- A slot definition metaobject.

*type* -- A type specifier.

**Description:**

Returns the type of *slot*. This is a type specifier name. This is the defaulted value of the `:type` initialization argument that was associated with the slot definition metaobject during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *slot* is not a slot definition metaobject. An error is also signaled if the slot definition metaobject has not been initialized.

**Methods:**

  ----------------------------------------------------------------------------------------------------------------
  [**slot-definition-type** (*slot* standard-slot-definition)](slot-definition-type-standard-slot-definition.md)
  ----------------------------------------------------------------------------------------------------------------


