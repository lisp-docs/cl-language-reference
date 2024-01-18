accessor-method-slot-definition
===============================

[*Generic Function* **ACCESSOR-METHOD-SLOT-DEFINITION**]()

**Syntax:**

**accessor-method-slot-definition** *method* => *slot-definition*

**Arguments and values:**

*method* -- A method metaobject.

*slot-definition* -- A direct slot definition metaobject.

**Description:**

This accessor can only be called on accessor methods. It returns the direct slot definition metaobject that defined this method. This is the value of the `:slot-definition` initialization argument associated with the method during initialization.

This generic function can be called by the user or the implementation.

An error is signaled if the argument *method* is not a method metaobject. An error is also signaled if the method metaobject has not been initialized.

**Methods:**

  ----------------------------------------------------------------------------------------------------------------------------------------
  [**accessor-method-slot-definition** (*method* standard-accessor-method)](accessor-method-slot-definition-standard-accessor-method.md)
  ----------------------------------------------------------------------------------------------------------------------------------------


