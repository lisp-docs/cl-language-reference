slot-definition-initform
========================

*Generic Function* **SLOT-DEFINITION-INITFORM**

**Syntax:**

**slot-definition-initform** *slot* => *initform*

**Arguments and values:**

*slot* -- A slot definition metaobject.

*initform* -- A form.

**Description:**

Returns the initialization form of *slot*. This can be any form. This is the defaulted value of the `:initform` initialization argument that was associated with the slot definition metaobject during initialization. When *slot* has no initialization form, the value returned is unspecified (however,[slot-definition-initfunction](slot-definition-initfunction.md) is guaranteed to return `nil`).

This generic function can be called by the user or the implementation.

An error is signaled if the argument *slot* is not a slot definition metaobject. An error is also signaled if the slot definition metaobject has not been initialized.

**Methods:**

  ------------------------------------------------------------------------------------------------------------------------
  [**slot-definition-initform** (*slot* standard-slot-definition)](slot-definition-initform-standard-slot-definition.md)
  ------------------------------------------------------------------------------------------------------------------------


