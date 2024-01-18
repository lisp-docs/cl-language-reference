setf-slot-value-using-class
===========================

[*Generic Function* **(SETF SLOT-VALUE-USING-CLASS)**]()

**Syntax:**

(`setf` (**slot-value-using-class** *class* *object* *slot*) *new-value*) => *new-value*

**Arguments and values:**

*class* -- A class metaobject. It is the class of the *object* argument.

*object* -- An object.

*slot* -- An effective slot definition metaobject.

*new-value* -- An object.

**Description:**

[The generic function `(setf slot-value-using-class)` implements the behavior of the]()[(setf slot-value)](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_va.htm#slot-value) function. It is called by [(setf slot-value)](http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_va.htm#slot-value) with the class of *object* as its second argument and the pertinent effective slot definition metaobject as its fourth argument.

The generic function `(setf slot-value-using-class)` sets the value contained in the given slot of the given object to the given new value; any previous value is lost.

The results are undefined if the *class* argument is not the class of the *object* argument, or if the *slot* argument does not appear among the set of effective slots associated with the *class* argument.

**Methods:**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**(setf slot-value-using-class)** *new-value* (*class* standard-class) (*slot* standard-effective-slot-definition)](setf-slot-value-using-class-standard-class-standard-effective-slot-definition.md)
  [**(setf slot-value-using-class)** *new-value* (*class* funcallable-standard-class) (*slot* standard-effective-slot-definition)](setf-slot-value-using-class-funcallable-standard-class-standard-effective-slot-definition.md)
  [**(setf slot-value-using-class)** *new-value* (*class* built-in-class) (*slot* standard-effective-slot-definition)](setf-slot-value-using-class-built-in-class.md)
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


