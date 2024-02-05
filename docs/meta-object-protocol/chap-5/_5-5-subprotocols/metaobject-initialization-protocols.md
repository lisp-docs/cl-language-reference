Metaobject initialization protocols
===================================

### Metaobject initialization protocols

Like other objects, metaobjects can be created by calling [make-instance](/meta-object-protocol/make-instance). The initialization arguments passed to [make-instance](/meta-object-protocol/make-instance) are used to initialize the metaobject in the usual way. The set of legal initialization arguments, and their interpretation, depends on the kind of metaobject being created. Implementations and portable programs are free to extend the set of legal initialization arguments. Detailed information about the initialization of each kind of metaobject are provided in [Chapter 6](/meta-object-protocol/chapter-6); this section provides an overview and examples of this behavior.

-   [Initialization of class metaobjects](/meta-object-protocol/initialization-of-class-metaobjects)
-   [Reinitialization of class metaobjects](/meta-object-protocol/reinitialization-of-class-metaobjects)
-   [Initialization of generic function and method metaobjects](/meta-object-protocol/initialization-of-generic-function-and-method-metaobjects)

