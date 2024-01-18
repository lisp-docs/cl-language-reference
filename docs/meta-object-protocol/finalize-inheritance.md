finalize-inheritance
====================

*Generic Function* **FINALIZE-INHERITANCE**

**Syntax:**

**finalize-inheritance** *class* => *unspecified*

**Arguments and values:**

*class* -- A class metaobject.

**Description:**

This generic function is called to finalize a class metaobject. This is described in[the Section named ``Class Finalization Protocol.''](class-finalization-protocol.md)

After [finalize-inheritance](finalize-inheritance.md) returns, the class metaobject is finalized and the result of calling [class-finalized-p](class-finalized-p.md) on the class metaobject will be true.

**Methods:**

  ---------------------------------------------------------------------------------------------------------------------
  [**finalize-inheritance** (*class* standard-class)](finalize-inheritance-standard-class.md)
  [**finalize-inheritance** (*class* funcallable-standard-class)](finalize-inheritance-funcallable-standard-class.md)
  [**finalize-inheritance** (*class* forward-referenced-class)](finalize-inheritance-forward-referenced-class.md)
  ---------------------------------------------------------------------------------------------------------------------


