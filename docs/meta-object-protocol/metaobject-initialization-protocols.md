Metaobject initialization protocols
===================================

### Metaobject initialization protocols

Like other objects, metaobjects can be created by calling [make-instance](make-instance.md). The initialization arguments passed to [make-instance](make-instance.md) are used to initialize the metaobject in the usual way. The set of legal initialization arguments, and their interpretation, depends on the kind of metaobject being created. Implementations and portable programs are free to extend the set of legal initialization arguments. Detailed information about the initialization of each kind of metaobject are provided in [Chapter 6](chapter-6.md); this section provides an overview and examples of this behavior.

-   [Initialization of class metaobjects](initialization-of-class-metaobjects.md)
-   [Reinitialization of class metaobjects](reinitialization-of-class-metaobjects.md)
-   [Initialization of generic function and method metaobjects](initialization-of-generic-function-and-method-metaobjects.md)

