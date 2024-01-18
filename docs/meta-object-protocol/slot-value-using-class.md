slot-value-using-class
======================

[*Generic Function* **SLOT-VALUE-USING-CLASS**]()

**Syntax:**

**slot-value-using-class** *class* *object* *slot* => *value*

**Arguments and values:**

*class* -- A class metaobject. It is the class of the *object* argument.

*object* -- An object.

*slot* -- An effective slot definition metaobject.

*value* -- An object.

**Description:**

[This generic function implements the behavior of the]()[slot-value](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_va.htm#slot-value) function. It is called by [slot-value](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_va.htm#slot-value) with the class of *object* as its first argument and the pertinent effective slot definition metaobject as its third argument.

The generic function `slot-value-using-class` returns the value contained in the given slot of the given object. If the slot is unbound [slot-unbound](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_un.htm#slot-unbound) is called.

The results are undefined if the *class* argument is not the class of the *object* argument, or if the *slot* argument does not appear among the set of effective slots associated with the *class* argument.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**slot-value-using-class** (*class* standard-class) *object* (*slot* standard-effective-slot-definition)](slot-value-using-class-standard-class-standard-effective-slot-definition.md)
  [**slot-value-using-class** (*class* funcallable-standard-class) *object* (*slot* standard-effective-slot-definition)](slot-value-using-class-funcallable-standard-class-standard-effective-slot-definition.md)
  [**slot-value-using-class** (*class* built-in-class) *object* *slot*](slot-value-using-class-built-in-class.md)
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


