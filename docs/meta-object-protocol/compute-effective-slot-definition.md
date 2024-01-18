compute-effective-slot-definition
=================================

*Generic Function* **COMPUTE-EFFECTIVE-SLOT-DEFINITION**

**Syntax:**

**compute-effective-slot-definition** *class* *name* *direct-slot-definitions* => *effective-slot-definition*

**Arguments and values:**

*class* -- A class metaobject.

*name* -- A slot name.

*direct-slot-definitions* -- An ordered list of direct slot definition metaobjects. The most specific direct slot definition metaobject appears first in the list.

*effective-slot-definition* -- An effective slot definition metaobject.

**Description:**

This generic function determines the effective slot definition for a slot in a class. It is called by[compute-slots](/docs/meta-object-protocol/compute-slots) once for each slot accessible in instances of *class*.

This generic function uses the supplied list of direct slot definition metaobjects to compute the inheritance of slot properties for a single slot. The returned effective slot definition represents the result of computing the inheritance. The name of the new effective slot definition is the same as the name of the direct slot definitions supplied.

The class of the effective slot definition metaobject is determined by calling [effective-slot-definition-class](/docs/meta-object-protocol/effective-slot-definition-class). The effective slot definition is then created by calling [make-instance](/docs/meta-object-protocol/make-instance) The initialization arguments passed in this call to [make-instance](/docs/meta-object-protocol/make-instance) are used to initialize the new effective slot definition metaobject. See [``Initialization of Slot Definition Metaobjects''](/docs/meta-object-protocol/initialization-of-slot-definition-metaobjects) for details.

**Methods:**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**compute-effective-slot-definition** (*class* standard-class) *name* *direct-slot-definitions*](/docs/meta-object-protocol/compute-effective-slot-definition-standard-class)
  [**compute-effective-slot-definition** (*class* funcallable-standard-class) *name* *direct-slot-definitions*](/docs/meta-object-protocol/compute-effective-slot-definition-funcallable-standard-class)
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


