map-dependents
==============

*Generic Function* **MAP-DEPENDENTS**

**Syntax:**

**map-dependents** *metaobject* *function* => *unspecified*

**Arguments and values:**

*metaobject* -- A class or a generic function metaobject.

*function* -- A function which accepts one argument.

*unspecified* -- An unspecified value..

**Description:**

This generic function applies *function* to each of the dependents of *metaobject*. The order in which the dependents are processed is not specified, but *function* is applied to each dependent once and only once. If, during the mapping,[add-dependent](add-dependent.md) or [remove-dependent](remove-dependent.md) is called to alter the dependents of *metaobject*, it is not specified whether the newly added or removed dependent will have *function* applied to it.

**Methods:**

  -------------------------------------------------------------------------------------------------------------------------
  [**map-dependents** (*metaobject* standard-class) *function*](map-dependents-standard-class.md)
  [**map-dependents** (*metaobject* funcallable-standard-class) *function*](map-dependents-funcallable-standard-class.md)
  [**map-dependents** (*metaobject* standard-generic-function) *function*](map-dependents-standard-generic-function.md)
  -------------------------------------------------------------------------------------------------------------------------

**Remarks:**

See the [``Dependent Maintenance Protocol'' section](dependent-maintenance-protocol.md) for remarks about the use of this facility.
