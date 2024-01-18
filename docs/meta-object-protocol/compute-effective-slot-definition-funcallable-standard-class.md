compute-effective-slot-definition-funcallable-standard-class
============================================================

[*Method* **COMPUTE-EFFECTIVE-SLOT-DEFINITION**]()

**Syntax:**

**compute-effective-slot-definition** *(class* funcallable-standard-class) *name* *direct-slot-definitions* => *effective-slot-definition*

**Description:**

[This is a method on the generic function]()[compute-effective-slot-definition](compute-effective-slot-definition.md).

This method implements the inheritance and defaulting of slot options following the rules described in the [``Inheritance of Slots and Options''](http://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node270.md#SECTION003213200000000000000) section of the CLOS Specification.

This method can be extended, but the value returned by the extending method must be the value returned by this method.
