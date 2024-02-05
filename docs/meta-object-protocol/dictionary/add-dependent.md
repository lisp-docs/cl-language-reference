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

The generic function[map-dependents](/meta-object-protocol/map-dependents) can be called to access the set of dependents of a class or generic function. The generic function [remove-dependent](/meta-object-protocol/remove-dependent) can be called to remove an object from the set of dependents of a class or generic function. The effect of calling **add-dependent** or [remove-dependent](/meta-object-protocol/remove-dependent) while a call to [map-dependents](/meta-object-protocol/map-dependents) on the same class or generic function is in progress is unspecified.

The situations in which **add-dependent** is called are not specified.

**Methods:**

  ----------------------------------------------------------------------------------------------------------------------------
  [**add-dependent** (*class* standard-class) *dependent*](/meta-object-protocol/add-dependent-standard-class)
  [**add-dependent** (*class* funcallable-standard-class) *dependent*](/meta-object-protocol/add-dependent-funcallable-standard-class)
  [**add-dependent** (*generic-function* standard-generic-function) *dependent*](/meta-object-protocol/add-dependent-standard-generic-function)
  ----------------------------------------------------------------------------------------------------------------------------

**Remarks:**

See the [``Dependent Maintenance Protocol'' section](/meta-object-protocol/dependent-maintenance-protocol) for remarks about the use of this facility.
