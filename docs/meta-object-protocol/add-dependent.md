add-dependent
=============

*Generic Function* **ADD-DEPENDENT**

**Syntax:**

**add-dependent** *metaobject* *dependent* => *unspecified*

**Arguments and values:**

*metaobject* -- A class or a generic function metaobject.

*dependent* -- An object.

**Description:**

This generic function adds *dependent* to the dependents of *metaobject*. If *dependent* is already in the set of dependents it is not added again (no error is signaled).

The generic function[map-dependents](map-dependents.md) can be called to access the set of dependents of a class or generic function. The generic function [remove-dependent](remove-dependent.md) can be called to remove an object from the set of dependents of a class or generic function. The effect of calling **add-dependent** or [remove-dependent](remove-dependent.md) while a call to [map-dependents](map-dependents.md) on the same class or generic function is in progress is unspecified.

The situations in which **add-dependent** is called are not specified.

**Methods:**

  ----------------------------------------------------------------------------------------------------------------------------
  [**add-dependent** (*class* standard-class) *dependent*](add-dependent-standard-class.md)
  [**add-dependent** (*class* funcallable-standard-class) *dependent*](add-dependent-funcallable-standard-class.md)
  [**add-dependent** (*generic-function* standard-generic-function) *dependent*](add-dependent-standard-generic-function.md)
  ----------------------------------------------------------------------------------------------------------------------------

**Remarks:**

See the [``Dependent Maintenance Protocol'' section](dependent-maintenance-protocol.md) for remarks about the use of this facility.
