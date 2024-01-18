FUNCALLABLE-STANDARD-OBJECT
===========================

------------------------------------------------------------------------

[*Class* **FUNCALLABLE-STANDARD-OBJECT**]()

**Direct superclasses:**

[]()[function](class-function.md) [standard-object](class-standard-object.md)

**Metaclass:**

[funcallable-standard-class](class-funcallable-standard-class.md)

**Description:**

This class is the default direct superclass of the class [funcallable-standard-class](class-funcallable-standard-class.md). When an instance of the class [funcallable-standard-class](class-funcallable-standard-class.md) is created, and no direct superclasses are explicitly specified, it defaults to this class. In this way, any behavior associated with this class will be inherited, directly or indirectly, by all instances of the class [funcallable-standard-class](class-funcallable-standard-class.md). A subclass of [funcallable-standard-class](class-funcallable-standard-class.md) may have a different class as its default direct superclass, but that class must be a subclass of this class.

**Note:**

The [table showing the inheritance structure of metaobject classes](inheritance-structure.md) taken from page 141 of the book suggests that the metaclass of of this class is [standard-class](class-standard-class.md), but we think that is a simple mistake.
