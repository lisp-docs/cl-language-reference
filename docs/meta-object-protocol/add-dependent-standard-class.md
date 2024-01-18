add-dependent-standard-class
============================

*Method* **ADD-DEPENDENT**

**Syntax:**

**add-dependent** *(class* standard-class) *dependent* => *unspecified*

**Description:**

This is a method on the generic function[add-dependent](/docs/meta-object-protocol/add-dependent).

No behavior is specified for this method beyond that which is specified for the generic function.

This method cannot be overridden unless the following methods are overridden as well:

  --------------------------------------------------------------------------------------------------------
  [**remove-dependent** (*metaobject* standard-class) *dependent***](/docs/meta-object-protocol/remove-dependent-standard-class)
  [**map-dependents** (*metaobject* standard-class) *function*](/docs/meta-object-protocol/map-dependents-standard-class)
  --------------------------------------------------------------------------------------------------------


