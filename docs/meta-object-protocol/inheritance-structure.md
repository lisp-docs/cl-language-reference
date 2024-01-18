Inheritance structure of metaobject classes
===========================================

Inheritance structure of metaobject classes
-------------------------------------------

The inheritance structure of the specified metaobject classes is shown in the table below (FIXME: insert anchor).

Direct superclass relationships among the specified metaobject classes. The class of every class shown is [standard-class](class-standard-class.md) except for the class `t` which is an instance of the class [built-in-class](class-built-in-class.md) and the classes [generic-function](class-generic-function.md) and [standard-generic-function](class-standard-generic-function.md) which are instances of the class [funcallable-standard-class](class-funcallable-standard-class.md).

Metaobject Class

Direct Superclasses

`standard-object`

`(t)`

`funcallable-standard-object`

`(standard-object function)`

*

`metaobject`

`(standard-object)`

*

`generic-function`

`(metaobject funcallable-standard-object)`

`standard-generic-function`

`(generic-function)`

*

`method`

`(metaobject)`

`standard-method`

`(method)`

*

`standard-accessor-method`

`(standard-method)`

`standard-reader-method`

`(standard-accessor-method)`

`standard-writer-method`

`(standard-accessor-method)`

*

`method-combination`

`(metaobject)`

*

`slot-definition`

`(metaobject)`

*

`direct-slot-definition`

`(slot-definition)`

*

`effective-slot-definition`

`(slot-definition)`

*

`standard-slot-definition`

`(slot-definition)`

`standard-direct-slot-definition`

`(standard-slot-definition direct-slot-definition)`

`standard-effective-slot-definition`

`(standard-slot-definition effective-slot-definition)`

*

`specializer`

`(metaobject)`

`eql-specializer`

`(specializer)`

*

`class`

`(specializer)`

`built-in-class`

`(class)`

`forward-referenced-class`

`(class)`

`standard-class`

`(class)`

`funcallable-standard-class`

`(class)`

Each class marked with a ``*'' is an *abstract class* and is not intended to be instantiated. The results are undefined if an attempt is made to make an instance of one of these classes with [make-instance](make-instance.md).

The classes [standard-class](class-standard-class.md), [standard-direct-slot-definition](class-standard-direct-slot-definition.md), [standard-effective-slot-definition](class-standard-effective-slot-definition.md), [standard-method](class-standard-method.md), [standard-reader-method](class-standard-reader-method.md), [standard-writer-method](class-standard-writer-method.md), and [standard-generic-function](class-standard-generic-function.md) are called *standard metaobject classes*. For each kind of metaobject, this is the class the user interface macros presented in the CLOS Specification use by default. These are also the classes on which user specializations are normally based.

The classes [built-in-class](class-built-in-class.md), [funcallable-standard-class](class-funcallable-standard-class.md) and [forward-referenced-class](class-forward-referenced-class.md) are special-purpose class metaobject classes. Built-in classes are instances of the class [built-in-class](class-built-in-class.md). The class [funcallable-standard-class](class-funcallable-standard-class.md) provides a special kind of instances described in the section called ``Funcallable Instances.'' When the definition of a class references another class which has not yet been defined, an instance of [forward-referenced-class](class-forward-referenced-class.md) is used as a stand-in until the class is actually defined.

The class [standard-object](class-standard-object.md) is the *default direct superclass* of the class [standard-class](class-standard-class.md). When an instance of the class [standard-class](class-standard-class.md) is created, and no direct superclasses are explicitly specified, it defaults to the class [standard-object](class-standard-object.md). In this way, any behavior associated with the class [standard-object](class-standard-object.md) will be inherited, directly or indirectly, by all instances of the class [standard-class](class-standard-class.md). A subclass of [standard-class](class-standard-class.md) may have a different class as its default direct superclass, but that class must be a subclass of the class [standard-object](class-standard-object.md).

The same is true for [funcallable-standard-class](class-funcallable-standard-class.md) and [funcallable-standard-object](class-funcallable-standard-object.md).

The class [specializer](class-specializer.md) captures only the most basic behavior of method specializers, and is not itself intended to be instantiated. The class [class](class-class.md) is a direct subclass of [specializer](class-specializer.md) reflecting the property that classes by themselves can be used as method specializers. The class [eql-specializer](class-eql-specializer.md) is used for `eql` specializers.

-   [Implementation and user specialization.](implementation-and-user-specialization.md)
    -   [Restrictions on implementations](restrictions-on-implementations.md)
    -   [Restrictions on portable programs](restrictions-on-portable-programs.md)

**Note:**

Taken literally, this page suggests that the metaclass of [funcallable-standard-object](class-funcallable-standard-object.md) is [standard-class](class-standard-class.md), but we think that is a mistake, and that the metaclass should be [funcallable-standard-class](class-funcallable-standard-class.md) instead.
