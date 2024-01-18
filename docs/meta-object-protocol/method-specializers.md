method-specializers
===================

[*Generic Function* **METHOD-SPECIALIZERS**]()

**Syntax:**

**method-specializers** *method* => *specializers*

**Arguments and values:**

*method* -- A method metaobject.

*specializers* -- An list of specializers.

**Description:**

Returns a list of the specializers of *method*. This value is a list of specializer metaobjects. This is the defaulted value of the `:specializers` initialization argument that was associated with the method during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *method* is not a method metaobject. An error is also signaled if the method metaobject has not been initialized.

The list returned by this function will not be mutated by the implementation. The results are undefined if a portable program allows this list to be mutated.

**Methods:**

  ----------------------------------------------------------------------------------------------
  [**method-specializers** (*method* standard-method)](method-specializers-standard-method.md)
  ----------------------------------------------------------------------------------------------


