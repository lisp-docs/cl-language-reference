slot-definition-allocation
==========================

*Generic Function* **SLOT-DEFINITION-ALLOCATION**

**Syntax:**

**slot-definition-allocation** *slot* => *allocation*

**Arguments and values:**

*slot* -- A slot definition metaobject.

*allocation* -- A symbol.

**Description:**

Returns the allocation of *slot*. This is a symbol. This is the defaulted value of the `:allocation` initialization argument that was associated with the slot definition metaobject during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *slot* is not a slot definition metaobject. An error is also signaled if the slot definition metaobject has not been initialized.

**Methods:**

  ----------------------------------------------------------------------------------------------------------------------------
  [**slot-definition-allocation** (*slot* standard-slot-definition)](slot-definition-allocation-standard-slot-definition.md)
  ----------------------------------------------------------------------------------------------------------------------------


