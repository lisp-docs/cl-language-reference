add-dependent-standard-generic-function
=======================================

*Method* **ADD-DEPENDENT**

**Syntax:**

**add-dependent** *(generic-function* standard-generic-function) *dependent* => *unspecified*

**Description:**

This is a method on the generic function[add-dependent](add-dependent.md).

No behavior is specified for this method beyond that which is specified for the generic function.

This method cannot be overridden unless the following methods are overridden as well:

  ----------------------------------------------------------------------------------------------------------------------------
  [**remove-dependent** (*metaobject* standard-generic-function) *dependent*](remove-dependent-standard-generic-function.md)
  [**map-dependents** (*metaobject* standard-generic-function) *function*](map-dependents-standard-generic-function.md)
  ----------------------------------------------------------------------------------------------------------------------------


