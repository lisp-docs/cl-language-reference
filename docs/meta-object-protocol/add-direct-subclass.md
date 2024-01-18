add-direct-subclass
===================

[*Generic Function* **ADD-DIRECT-SUBCLASS**]()

**Syntax:**

**add-direct-subclass** *superclass* *subclass* => *unspecified*

**Arguments and values:**

*superclass* -- A class metaobject.

*subclass* -- A class metaobject.

**Description:**

This generic function is called to maintain a set of backpointers from a class to its direct subclasses. This generic function adds *subclass* to the set of direct subclasses of *superclass*.

When a class is initialized, this generic function is called once for each direct superclass of the class.

[When a class is reinitialized, this generic function is called once for each added direct superclass of the class. The generic function]()[**remove-direct-subclass**](remove-direct-subclass.md) is called once for each deleted direct superclass of the class.

**Methods:**

  -------------------------------------------------------------------------------------------------------
  [**add-direct-subclass** (*superclass* class) (*subclass* class)](add-direct-subclass-class-class.md)
  -------------------------------------------------------------------------------------------------------


