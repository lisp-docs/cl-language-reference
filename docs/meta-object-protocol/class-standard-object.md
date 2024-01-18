STANDARD-OBJECT
===============

------------------------------------------------------------------------

*Class* **STANDARD-OBJECT**

**Direct superclasses:**

[]()[T](class-t.md)

**Metaclass:**

[standard-class](class-standard-class.md)

**Description:**

This class is the default direct superclass of the the class [standard-class](class-standard-class.md). When an instance of the class [standard-class](class-standard-class.md) is created, and no direct superclasses are explicitly specified, it defaults to this class. In this way, any behavior associated with this class will be inherited, directly or indirectly, by all instances of the class [standard-class](class-standard-class.md). A subclass of [standard-class](class-standard-class.md) may have a different class as its default direct superclass, but that class must be a subclass of this class.

**Comments and remarks:**

See also the [entry in the Common Lisp HyperSpec](http://www.lispworks.com/documentation/HyperSpec/Body/t_std_ob.htm#standard-object) for this class.
