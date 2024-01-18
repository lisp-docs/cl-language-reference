STANDARD-OBJECT
===============

------------------------------------------------------------------------

*Class* **STANDARD-OBJECT**

**Direct superclasses:**

[T](/docs/meta-object-protocol/class-t)

**Metaclass:**

[standard-class](/docs/meta-object-protocol/class-standard-class)

**Description:**

This class is the default direct superclass of the the class [standard-class](/docs/meta-object-protocol/class-standard-class). When an instance of the class [standard-class](/docs/meta-object-protocol/class-standard-class) is created, and no direct superclasses are explicitly specified, it defaults to this class. In this way, any behavior associated with this class will be inherited, directly or indirectly, by all instances of the class [standard-class](/docs/meta-object-protocol/class-standard-class). A subclass of [standard-class](/docs/meta-object-protocol/class-standard-class) may have a different class as its default direct superclass, but that class must be a subclass of this class.

**Comments and remarks:**

See also the [entry in the Common Lisp HyperSpec](http://www.lispworks.com/documentation/HyperSpec/Body/t_std_ob.htm#standard-object) for this class.
