remove-dependent-standard-generic-function
==========================================

[*Method* **REMOVE-DEPENDENT**]()

**Syntax:**

**remove-dependent** *(generic-function* standard-generic-function) *dependent* => *unspecified*

**Description:**

[This is a method on the generic function]()[remove-dependent](remove-dependent.md).

No behavior is specified for this method beyond that which is specified for the generic function.

This method cannot be overridden unless the following methods are overridden as well:

  -----------------------------------------------------------------------------------------------------------------------
  [**add-dependent** (*metaobject* standard-generic-function) *dependent*](add-dependent-standard-generic-function.md)
  [**map-dependents** (*metaobject* standard-generic-function) *function*](map-dependents-standard-generic-function.md)
  -----------------------------------------------------------------------------------------------------------------------


