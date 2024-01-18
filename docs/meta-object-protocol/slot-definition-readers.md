slot-definition-readers
=======================

*Generic Function* **SLOT-DEFINITION-READERS**

**Syntax:**

**slot-definition-readers** *direct-slot* => *readers*

**Arguments and values:**

*direct-slot* -- A direct slot definition metaobject.

*readers* -- A list of function names.

**Description:**

Returns a (possibly empty) set of readers of the *direct-slot*. This value is a list of function names. This is the defaulted value of the `:readers` initialization argument that was associated with the direct slot definition metaobject during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *slot* is not a slot definition metaobject. An error is also signaled if the slot definition metaobject has not been initialized.

The list returned by this function will not be mutated by the implementation. The results are undefined if a portable program allows this list to be mutated.

**Methods:**

  ------------------------------------------------------------------------------------------------------------------------------------
  [**slot-definition-readers** (*slot* standard-direct-slot-definition)](/docs/meta-object-protocol/slot-definition-readers-standard-direct-slot-definition)
  ------------------------------------------------------------------------------------------------------------------------------------


