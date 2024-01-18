slot-definition-location-standard-effective-slot-definition
===========================================================

*Method* **SLOT-DEFINITION-LOCATION**

**Syntax:**

**slot-definition-location** *(effective-slot-definition* standard-effective-slot-definition) => *location*

**Description:**

This is a method on the generic function[slot-definition-location](/docs/meta-object-protocol/slot-definition-location).

This method returns the value stored by [compute-slots `:around` (*class* standard-class)](/docs/meta-object-protocol/compute-slots-around-standard-class) and [compute-slots `:around` (*class* funcallable-standard-class)](/docs/meta-object-protocol/compute-slots-around-funcallable-standard-class).
