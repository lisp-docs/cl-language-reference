Inheritance structure of metaobject classes
===========================================

Inheritance structure of metaobject classes
-------------------------------------------

The inheritance structure of the specified metaobject classes is shown in the table below (FIXME: insert anchor).

Direct superclass relationships among the specified metaobject classes. The class of every class shown is [standard-class](/docs/meta-object-protocol/class-standard-class) except for the class `t` which is an instance of the class [built-in-class](/docs/meta-object-protocol/class-built-in-class) and the classes [generic-function](/docs/meta-object-protocol/class-generic-function) and [standard-generic-function](/docs/meta-object-protocol/class-standard-generic-function) which are instances of the class [funcallable-standard-class](/docs/meta-object-protocol/class-funcallable-standard-class).

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

Each class marked with a ``*'' is an *abstract class* and is not intended to be instantiated. The results are undefined if an attempt is made to make an instance of one of these classes with [make-instance](/docs/meta-object-protocol/make-instance).

The classes [standard-class](/docs/meta-object-protocol/class-standard-class), [standard-direct-slot-definition](/docs/meta-object-protocol/class-standard-direct-slot-definition), [standard-effective-slot-definition](/docs/meta-object-protocol/class-standard-effective-slot-definition), [standard-method](/docs/meta-object-protocol/class-standard-method), [standard-reader-method](/docs/meta-object-protocol/class-standard-reader-method), [standard-writer-method](/docs/meta-object-protocol/class-standard-writer-method), and [standard-generic-function](/docs/meta-object-protocol/class-standard-generic-function) are called *standard metaobject classes*. For each kind of metaobject, this is the class the user interface macros presented in the CLOS Specification use by default. These are also the classes on which user specializations are normally based.

The classes [built-in-class](/docs/meta-object-protocol/class-built-in-class), [funcallable-standard-class](/docs/meta-object-protocol/class-funcallable-standard-class) and [forward-referenced-class](/docs/meta-object-protocol/class-forward-referenced-class) are special-purpose class metaobject classes. Built-in classes are instances of the class [built-in-class](/docs/meta-object-protocol/class-built-in-class). The class [funcallable-standard-class](/docs/meta-object-protocol/class-funcallable-standard-class) provides a special kind of instances described in the section called ``Funcallable Instances.'' When the definition of a class references another class which has not yet been defined, an instance of [forward-referenced-class](/docs/meta-object-protocol/class-forward-referenced-class) is used as a stand-in until the class is actually defined.

The class [standard-object](/docs/meta-object-protocol/class-standard-object) is the *default direct superclass* of the class [standard-class](/docs/meta-object-protocol/class-standard-class). When an instance of the class [standard-class](/docs/meta-object-protocol/class-standard-class) is created, and no direct superclasses are explicitly specified, it defaults to the class [standard-object](/docs/meta-object-protocol/class-standard-object). In this way, any behavior associated with the class [standard-object](/docs/meta-object-protocol/class-standard-object) will be inherited, directly or indirectly, by all instances of the class [standard-class](/docs/meta-object-protocol/class-standard-class). A subclass of [standard-class](/docs/meta-object-protocol/class-standard-class) may have a different class as its default direct superclass, but that class must be a subclass of the class [standard-object](/docs/meta-object-protocol/class-standard-object).

The same is true for [funcallable-standard-class](/docs/meta-object-protocol/class-funcallable-standard-class) and [funcallable-standard-object](/docs/meta-object-protocol/class-funcallable-standard-object).

The class [specializer](/docs/meta-object-protocol/class-specializer) captures only the most basic behavior of method specializers, and is not itself intended to be instantiated. The class [class](/docs/meta-object-protocol/class-class) is a direct subclass of [specializer](/docs/meta-object-protocol/class-specializer) reflecting the property that classes by themselves can be used as method specializers. The class [eql-specializer](/docs/meta-object-protocol/class-eql-specializer) is used for `eql` specializers.

-   [Implementation and user specialization.](/docs/meta-object-protocol/implementation-and-user-specialization)
    -   [Restrictions on implementations](/docs/meta-object-protocol/restrictions-on-implementations)
    -   [Restrictions on portable programs](/docs/meta-object-protocol/restrictions-on-portable-programs)

**Note:**

Taken literally, this page suggests that the metaclass of [funcallable-standard-object](/docs/meta-object-protocol/class-funcallable-standard-object) is [standard-class](/docs/meta-object-protocol/class-standard-class), but we think that is a mistake, and that the metaclass should be [funcallable-standard-class](/docs/meta-object-protocol/class-funcallable-standard-class) instead.
