remove-dependent-standard-generic-function
==========================================

*Method* **REMOVE-DEPENDENT**

**Syntax:**

**remove-dependent** *(generic-function* standard-generic-function) *dependent* => *unspecified*

**Description:**

This is a method on the generic function[remove-dependent](/docs/meta-object-protocol/remove-dependent).

No behavior is specified for this method beyond that which is specified for the generic function.

This method cannot be overridden unless the following methods are overridden as well:

  -----------------------------------------------------------------------------------------------------------------------
  [**add-dependent** (*metaobject* standard-generic-function) *dependent*](/docs/meta-object-protocol/add-dependent-standard-generic-function)
  [**map-dependents** (*metaobject* standard-generic-function) *function*](/docs/meta-object-protocol/map-dependents-standard-generic-function)
  -----------------------------------------------------------------------------------------------------------------------


