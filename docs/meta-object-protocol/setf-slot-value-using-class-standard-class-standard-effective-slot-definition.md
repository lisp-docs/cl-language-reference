setf-slot-value-using-class-standard-class-standard-effective-slot-definition
=============================================================================

[*Method* **(SETF SLOT-DEFINITION-USING-CLASS)**]()

**Syntax:**

(`setf` (**slot-value-using-class** (*class* standard-class) *object* (*slot* standard-effective-slot-defintion)) *new-value*)

**Description:**

[This is a method on the generic function]()[(setf slot-value-using-class)](setf-slot-value-using-class.md).

This method implements the full behavior of this generic function for slots with allocation `:instance` and `:class`. If the supplied slot has an allocation other than `:instance` or `:class` an error is signaled.

Overriding this method is permitted, but may require overriding other methods in the standard implementation of the slot access protocol.
