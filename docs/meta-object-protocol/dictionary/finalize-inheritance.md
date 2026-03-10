finalize-inheritance
====================

*Generic Function* **FINALIZE-INHERITANCE**

**Syntax:**

**finalize-inheritance** *class* => *unspecified*

**Arguments and values:**

*class* -- A class metaobject.

**Description:**

This generic function is called to finalize a class metaobject. This is described in[the Section named ``Class Finalization Protocol.''](/meta-object-protocol/dictionary/class-finalization-protocol)

After [finalize-inheritance](/meta-object-protocol/dictionary/finalize-inheritance) returns, the class metaobject is finalized and the result of calling [class-finalized-p](/meta-object-protocol/dictionary/class-finalized-p) on the class metaobject will be true.

**Methods:**

  ---------------------------------------------------------------------------------------------------------------------
  [**finalize-inheritance** (*class* standard-class)](/meta-object-protocol/dictionary/finalize-inheritance-standard-class)
  [**finalize-inheritance** (*class* funcallable-standard-class)](/meta-object-protocol/dictionary/finalize-inheritance-funcallable-standard-class)
  [**finalize-inheritance** (*class* forward-referenced-class)](/meta-object-protocol/dictionary/finalize-inheritance-forward-referenced-class)
  ---------------------------------------------------------------------------------------------------------------------


