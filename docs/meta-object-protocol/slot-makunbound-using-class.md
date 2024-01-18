slot-makunbound-using-class
===========================

[*Generic Function* **SLOT-MAKUNBOUND-USING-CLASS**]()

**Syntax:**

**slot-makunbound-using-class** *class* *object* *slot* => *object*

**Arguments and values:**

*class* -- A class metaobject. It is the class of the *object* argument.

*object* -- An object.

*slot* -- An effective slot definition metaobject.

**Description:**

[This generic function implements the behavior of the]()[slot-makunbound](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_ma.htm) function. It is called by [slot-makunbound](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_ma.htm) with the class of *object* as its first argument and the pertinent effective slot definition metaobject as its third argument.

The generic function `slot-makunbound-using-class` restores a slot in an object to its unbound state. The interpretation of ``restoring a slot to its unbound state'' depends on the class metaobject class.

The results are undefined if the *class* argument is not the class of the *object* argument, or if the *slot* argument does not appear among the set of effective slots associated with the *class* argument.

**Methods:**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**slot-makunbound-using-class** (*class* standard-class) *object* (*slot* standard-effective-slot-definition)](slot-makunbound-using-class-standard-class-standard-effective-slot-definition.md)
  [**slot-makunbound-using-class** (*class* funcallable-standard-class) *object* (*slot* standard-effective-slot-definition)](slot-makunbound-using-class-funcallable-standard-class-standard-effective-slot-definition.md)
  [**slot-makunbound-using-class** (*class* built-in-class) *object* *slot*](slot-makunbound-using-class-built-in-class.md)
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Comments and remarks:**

In cases where the class metaobject class does not distinguish unbound slots, true should be returned.
