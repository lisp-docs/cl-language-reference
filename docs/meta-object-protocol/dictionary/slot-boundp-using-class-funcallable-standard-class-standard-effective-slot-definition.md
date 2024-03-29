slot-boundp-using-class-funcallable-standard-class-standard-effective-slot-definition
=====================================================================================

*Method* **SLOT-BOUNDP-USING-CLASS**

**Syntax:**

**slot-boundp-using-class** (*class* funcallable-standard-class) *object* (*slot* standard-effective-slot-definition)

**Description:**

This is a method on the generic function[slot-boundp-using-class](/meta-object-protocol/slot-boundp-using-class).

This method implements the full behavior of this generic function for slots with allocation `:instance` and `:class`. If the supplied slot has an allocation other than `:instance` or `:class` an error is signaled.

Overriding this method is permitted, but may require overriding other methods in the standard implementation of the slot access protocol.
