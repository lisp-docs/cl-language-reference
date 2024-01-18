remove-direct-subclass
======================

*Generic Function* **REMOVE-DIRECT-SUBCLASS**

**Syntax:**

**remove-direct-subclass** *superclass* *subclass* => *unspecified*

**Arguments and values:**

*superclass* -- A class metaobject.

*subclass* -- A class metaobject.

**Description:**

This generic function is called to maintain a set of backpointers from a class to its direct subclasses. It removes *subclass* from the set of direct subclasses of *superclass*. No error is signaled if *subclass* is not in this set.

Whenever a class is reinitialized, this generic function is called once with each deleted direct superclass of the class.

**Methods:**

  -------------------------------------------------------------------------------------------------------------
  [**remove-direct-subclass** (*superclass* class) (*subclass* class)](/docs/meta-object-protocol/remove-direct-subclass-class-class)
  -------------------------------------------------------------------------------------------------------------


