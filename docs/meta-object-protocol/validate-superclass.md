validate-superclass
===================

*Generic Function* **VALIDATE-SUPERCLASS**

**Syntax:**

**validate-superclass** *class* *superclass* => *generalized-boolean*

**Arguments and values:**

*class* -- A class metaobject.

*superclass* -- A class metaobject.

*generalized-boolean* -- A generalized boolean.

**Description:**

This generic function is called to determine whether the class *superclass* is suitable for use as a superclass of *class*.

This generic function can be be called by the implementation or user code. It is called during class metaobject initialization and reinitialization, before the direct superclasses are stored. If this generic function returns false, the initialization or reinitialization will signal an error.

**Methods:**

  ----------------------------------------------------------------------------------------------------
  [**validate-superclass** (*class* class) (*superclass* class)](/meta-object-protocol/validate-superclass-class-class)
  ----------------------------------------------------------------------------------------------------

**Comments and Remarks:**

Defining a method on `validate-superclass` requires detailed knowledge of the internal protocol followed by each of the two class metaobject classes. A method on `validate-superclass` which returns true for two different class metaobject classes declares that they are compatible.
