intern-eql-specializer
======================

*Function* **INTERN-EQL-SPECIALIZER**

**Syntax:**

**intern-eql-specializer** *object* => *eql-specializer*

**Arguments and values:**

*object* -- An object.

*eql-specializer* -- An `eql` specializer.

**Description:**

This function returns the unique `eql>` specializer metaobject for *object*, creating one if necessary. Two calls to `intern-eql-specializer` with `eql` arguments will return the same (i.e., `eq`) value.

**Remarks:**

The result of calling[eql-specializer-object](/meta-object-protocol/eql-specializer-object) on the result of a call to `intern-eql-special-izer} is only     guaranteed to be eql` to the original *object* argument, not necessarily `eq`.

`    `
