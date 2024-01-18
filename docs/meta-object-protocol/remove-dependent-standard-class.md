remove-dependent-standard-class
===============================

*Method* **REMOVE-DEPENDENT**

**Syntax:**

**remove-dependent** *(class* standard-class) *dependent* => *unspecified*

**Description:**

This is a method on the generic function[remove-dependent](/meta-object-protocol/remove-dependent).

No behavior is specified for this method beyond that which is specified for the generic function.

This method cannot be overridden unless the following methods are overridden as well:

  --------------------------------------------------------------------------------------------------
  [**add-dependent** (*metaobject* standard-class) *dependent***](/meta-object-protocol/add-dependent-standard-class)
  [**map-dependents** (*metaobject* standard-class) *function*](/meta-object-protocol/map-dependents-standard-class)
  --------------------------------------------------------------------------------------------------


