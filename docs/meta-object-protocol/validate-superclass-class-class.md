validate-superclass-class-class
===============================

*Method* **VALIDATE-SUPERCLASS**

**Syntax:**

**validate-superclass** (*class* class) (*superclass* class)

**Description:**

This is a method on the generic function[validate-superclass](/meta-object-protocol/validate-superclass).

This method returns true in three situations:

i.  If the *superclass* argument is the class named `t`,

ii. if the class of the *class* argument is the same as the class of the *superclass* argument, or

iii. if the classes one of the arguments is [standard-class](/meta-object-protocol/class-standard-class) and the class of the other is [funcallable-standard-class](/meta-object-protocol/class-funcallable-standard-class).

In all other cases, this method returns false.

This method can be overridden.
