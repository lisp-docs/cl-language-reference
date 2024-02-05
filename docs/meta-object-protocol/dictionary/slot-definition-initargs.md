slot-definition-initargs
========================

*Generic Function* **SLOT-DEFINITION-INITARGS**

**Syntax:**

**slot-definition-initargs** *slot* => *initargs*

**Arguments and values:**

*slot* -- A slot definition metaobject.

*initargs* -- A list.

**Description:**

Returns the set of initialization argument keywords for *slot*. This is the defaulted value of the `:initargs` initialization argument that was associated with the slot definition metaobject during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *slot* is not a slot definition metaobject. An error is also signaled if the slot definition metaobject has not been initialized.

The list returned by this function will not be mutated by the implementation. The results are undefined if a portable program allows this list to be mutated.

**Methods:**

  ------------------------------------------------------------------------------------------------------------------------
  [**slot-definition-initargs** (*slot* standard-slot-definition)](/meta-object-protocol/slot-definition-initargs-standard-slot-definition)
  ------------------------------------------------------------------------------------------------------------------------


