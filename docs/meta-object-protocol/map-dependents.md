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

This generic function applies *function* to each of the dependents of *metaobject*. The order in which the dependents are processed is not specified, but *function* is applied to each dependent once and only once. If, during the mapping,[add-dependent](/meta-object-protocol/add-dependent) or [remove-dependent](/meta-object-protocol/remove-dependent) is called to alter the dependents of *metaobject*, it is not specified whether the newly added or removed dependent will have *function* applied to it.

**Methods:**

  -------------------------------------------------------------------------------------------------------------------------
  [**map-dependents** (*metaobject* standard-class) *function*](/meta-object-protocol/map-dependents-standard-class)
  [**map-dependents** (*metaobject* funcallable-standard-class) *function*](/meta-object-protocol/map-dependents-funcallable-standard-class)
  [**map-dependents** (*metaobject* standard-generic-function) *function*](/meta-object-protocol/map-dependents-standard-generic-function)
  -------------------------------------------------------------------------------------------------------------------------

**Remarks:**

See the [``Dependent Maintenance Protocol'' section](/meta-object-protocol/dependent-maintenance-protocol) for remarks about the use of this facility.
