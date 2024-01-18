FUNCALLABLE-STANDARD-OBJECT
===========================

------------------------------------------------------------------------

*Class* **FUNCALLABLE-STANDARD-OBJECT**

**Direct superclasses:**

[function](/meta-object-protocol/class-function) [standard-object](/meta-object-protocol/class-standard-object)

**Metaclass:**

[funcallable-standard-class](/meta-object-protocol/class-funcallable-standard-class)

**Description:**

This class is the default direct superclass of the class [funcallable-standard-class](/meta-object-protocol/class-funcallable-standard-class). When an instance of the class [funcallable-standard-class](/meta-object-protocol/class-funcallable-standard-class) is created, and no direct superclasses are explicitly specified, it defaults to this class. In this way, any behavior associated with this class will be inherited, directly or indirectly, by all instances of the class [funcallable-standard-class](/meta-object-protocol/class-funcallable-standard-class). A subclass of [funcallable-standard-class](/meta-object-protocol/class-funcallable-standard-class) may have a different class as its default direct superclass, but that class must be a subclass of this class.

**Note:**

The [table showing the inheritance structure of metaobject classes](/meta-object-protocol/inheritance-structure) taken from page 141 of the book suggests that the metaclass of of this class is [standard-class](/meta-object-protocol/class-standard-class), but we think that is a simple mistake.
