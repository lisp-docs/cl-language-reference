remove-dependent
================

*Generic Function* **REMOVE-DEPENDENT**

**Syntax:**

**remove-dependent** *metaobject* *dependent* => *unspecified*

**Arguments and values:**

*metaobject* -- A class or a generic function metaobject.

*dependent* -- An object.

**Description:**

This generic function removes *dependent* from the dependents of *metaobject*. If *dependent* is not one of the dependents of *metaobject*, no error is signaled.

The generic function[map-dependents](map-dependents.md) can be called to access the set of dependents of a class or generic function. The generic function [add-dependent](add-dependent.md) can be called to add an object to the set of dependents of a class or generic function. The effect of calling [add-dependent](add-dependent.md) or **remove-dependent** while a call to [map-dependents](map-dependents.md) on the same class or generic function is in progress is unspecified.

The situations in which **remove-dependent** is called are not specified.

**Methods:**

  ----------------------------------------------------------------------------------------------------------------------------------
  [**remove-dependent** (*class* standard-class) *dependent*](remove-dependent-standard-class.md)
  [**remove-dependent** (*class* funcallable-standard-class) *dependent*](remove-dependent-funcallable-standard-class.md)
  [**remove-dependent** (*generic-function* standard-generic-function) *dependent*](remove-dependent-standard-generic-function.md)
  ----------------------------------------------------------------------------------------------------------------------------------

**Remarks:**

See the [``Dependent Maintenance Protocol'' section](dependent-maintenance-protocol.md) for remarks about the use of this facility.
