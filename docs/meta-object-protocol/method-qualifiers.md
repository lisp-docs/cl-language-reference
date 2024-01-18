method-qualifiers
=================

*Generic Function* **METHOD-QUALIFIERS**

**Syntax:**

**method-qualifiers** *method* => *qualifiers*

**Arguments and values:**

*method* -- A method metaobject.

*qualifiers* -- An list of qualifiers.

**Description:**

Returns a (possibly empty) list of the qualifiers of *method*. This value is a list of non-`nil` atoms. This is the defaulted value of the `:qualifiers` initialization argument that was associated with the method during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *method* is not a method metaobject. An error is also signaled if the method metaobject has not been initialized.

The list returned by this function will not be mutated by the implementation. The results are undefined if a portable program allows this list to be mutated.

**Methods:**

  ------------------------------------------------------------------------------------------
  [**method-qualifiers** (*method* standard-method)](/docs/meta-object-protocol/method-qualifiers-standard-method)
  ------------------------------------------------------------------------------------------


