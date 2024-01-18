slot-boundp-using-class
=======================

*Generic Function* **SLOT-BOUNDP-USING-CLASS**

**Syntax:**

**slot-boundp-using-class** *class* *object* *slot* => *generalized-boolean*

**Arguments and values:**

*class* -- A class metaobject. It is the class of the *object* argument.

*object* -- An object.

*slot* -- An effective slot definition metaobject.

*generlized-boolean* -- A generalized boolean.

**Description:**

This generic function implements the behavior of the[slot-boundp](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_bo.htm#slot-boundp) function. It is called by [slot-boundp](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_bo.htm#slot-boundp) with the class of *object* as its first argument and the pertinent effective slot definition metaobject as its third argument.

The generic function `slot-boundp-using-class` tests whether a specific slot in an instance is bound.

The results are undefined if the *class* argument is not the class of the *object* argument, or if the *slot* argument does not appear among the set of effective slots associated with the *class* argument.

**Methods:**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**slot-boundp-using-class** (*class* standard-class) *object* (*slot* standard-effective-slot-definition)](slot-boundp-using-class-standard-class-standard-effective-slot-definition.md)
  [**slot-boundp-using-class** (*class* funcallable-standard-class) *object* (*slot* standard-effective-slot-definition)](slot-boundp-using-class-funcallable-standard-class-standard-effective-slot-definition.md)
  [**slot-boundp-using-class** (*class* built-in-class) *object* *slot*](slot-boundp-using-class-built-in-class.md)
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Comments and remarks:**

In cases where the class metaobject class does not distinguish unbound slots, true should be returned.
