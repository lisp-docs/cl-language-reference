slot-definition-name
====================

[*Generic Function* **SLOT-DEFINITION-NAME**]()

**Syntax:**

**slot-definition-name** *slot* => *name*

**Arguments and values:**

*slot* -- A slot definition metaobject.

*name* -- A symbol.

**Description:**

Returns the name of *slot*. This value is a symbol that can be used as a variable name. This is the value of the `:name` initialization argument that was associated with the slot definition metaobject during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *slot* is not a slot definition metaobject. An error is also signaled if the slot definition metaobject has not been initialized.

**Methods:**

  ----------------------------------------------------------------------------------------------------------------
  [**slot-definition-name** (*slot* standard-slot-definition)](slot-definition-name-standard-slot-definition.md)
  ----------------------------------------------------------------------------------------------------------------


