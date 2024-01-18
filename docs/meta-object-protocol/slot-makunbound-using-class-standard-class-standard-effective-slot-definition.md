slot-makunbound-using-class-standard-class-standard-effective-slot-definition
=============================================================================

*Method* **SLOT-MAKUNBOUND-USING-CLASS**

**Syntax:**

**slot-makunbound-using-class** (*class* standard-class) *object* (*slot* standard-effective-slot-definition)

**Description:**

This is a method on the generic function[slot-makunbound-using-class](/docs/meta-object-protocol/slot-makunbound-using-class).

This method implements the full behavior of this generic function for slots with allocation `:instance` and `:class`. If the supplied slot has an allocation other than `:instance` or `:class` an error is signaled.

Overriding this method is permitted, but may require overriding other methods in the standard implementation of the slot access protocol.
