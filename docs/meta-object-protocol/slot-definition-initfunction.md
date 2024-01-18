slot-definition-initfunction
============================

*Generic Function* **SLOT-DEFINITION-INITFUNCTION**

**Syntax:**

**slot-definition-initfunction** *slot* => *initfunction*

**Arguments and values:**

*slot* -- A slot definition metaobject.

*initfunction* -- A function of no arguments.

**Description:**

Returns the initialization function of *slot*. This value is either a function of no arguments, or `nil`, indicating that the slot has no initialization function. This is the defaulted value of the `:initfunction` initialization argument that was associated with the slot definition metaobject during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *slot* is not a slot definition metaobject. An error is also signaled if the slot definition metaobject has not been initialized.

**Methods:**

  --------------------------------------------------------------------------------------------------------------------------------
  [**slot-definition-initfunction** (*slot* standard-slot-definition)](/docs/meta-object-protocol/slot-definition-initfunction-standard-slot-definition)
  --------------------------------------------------------------------------------------------------------------------------------

**Note:**

The initfunction of a slot-definition is typically created from the *initform* given in the `defclass` macro call, and then passed to the[ensure-class](/docs/meta-object-protocol/ensure-class) function as described in the [section about the `defclass` macro](/docs/meta-object-protocol/the-defclass-macro).
