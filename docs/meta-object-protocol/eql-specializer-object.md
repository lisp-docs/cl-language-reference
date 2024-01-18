eql-specializer-object
======================

[*Function* **EQL-SPECIALIZER-OBJECT**]()

**Syntax:**

**eql-specializer-object** *eql-specializer* => *object*

**Arguments and values:**

*eql-specializer* -- An `eql` specializer object.

*object* -- An object.

**Description:**

[This function returns the object associated with *eql-specializer* during initialization. The value is guaranteed to be `eql` to the value originally passed to]()[intern-eql-specializer](intern-eql-specializer.md), but it is not necessarily `eq` to that value.

This function signals an error if *eql-specializer* is not an `eql` specializer.
