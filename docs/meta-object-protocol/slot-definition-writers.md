slot-definition-writers
=======================

*Generic Function* **SLOT-DEFINITION-WRITERS**

**Syntax:**

**slot-definition-writers** *direct-slot* => *writers*

**Arguments and values:**

*direct-slot* -- A direct slot definition metaobject.

*writers* -- A list of function names.

**Description:**

Returns a (possibly empty) set of writers of the *direct-slot*. This value is a list of function names. This is the defaulted value of the `:writers` initialization argument that was associated with the direct slot definition metaobject during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *slot* is not a slot definition metaobject. An error is also signaled if the slot definition metaobject has not been initialized.

The list returned by this function will not be mutated by the implementation. The results are undefined if a portable program allows this list to be mutated.

**Methods:**

  ------------------------------------------------------------------------------------------------------------------------------------
  [**slot-definition-writers** (*slot* standard-direct-slot-definition)](slot-definition-writers-standard-direct-slot-definition.md)
  ------------------------------------------------------------------------------------------------------------------------------------


