Class finalization protocol
===========================

### Class finalization protocol

Class *finalization* is the process of computing the information a class inherits from its superclasses and preparing to actually allocate instances of the class. The class finalization process includes computing the class precedence list of the class, the full set of slots accessible in instances of the class and the full set of default initialization arguments for the class. These values are associated with the class metaobject and can be accessed by calling the appropriate reader. In addition, the class finalization process makes decisions about how instances of the class will be implemented.

To support forward-referenced superclasses, and to account for the fact that not all classes are actually instantiated, class finalization is not done as part of the initialization of the class metaobject. Instead, finalization is done as a separate protocol, invoked by calling the generic function [finalize-inheritance](/meta-object-protocol/finalize-inheritance). The exact point at which [finalize-inheritance](/meta-object-protocol/finalize-inheritance) is called depends on the class of the class metaobject; for [standard-class](/meta-object-protocol/class-standard-class) it is called sometime after all the superclasses of the class are defined, but no later than when the first instance of the class is allocated (by [allocate-instance](/meta-object-protocol/allocate-instance)).

The first step of class finalization is computing the class precedence list. Doing this first allows subsequent steps to access the class precedence list. This step is performed by calling the generic function [compute-class-precedence-list](/meta-object-protocol/compute-class-precedence-list). The value returned from this call is associated with the class metaobject and can be accessed by calling the [class-precedence-list](/meta-object-protocol/class-precedence-list) generic function.

The second step is computing the full set of slots that will be accessible in instances of the class. This step is performed by calling the generic function [compute-slots](/meta-object-protocol/compute-slots). The result of this call is a list of effective slot definition metaobjects. This value is associated with the class metaobject and can be accessed by calling the [class-slots](/meta-object-protocol/class-slots) generic function.

The behavior of [compute-slots](/meta-object-protocol/compute-slots) is itself layered, consisting of calls to [effective-slot-definition-class](/meta-object-protocol/effective-slot-definition-class) and [compute-effective-slot-definition](/meta-object-protocol/compute-effective-slot-definition).

The final step of class finalization is computing the full set of initialization arguments for the class. This is done by calling the generic function [compute-default-initargs](/meta-object-protocol/compute-default-initargs). The value returned by this generic function is associated with the class metaobject and can be accessed by calling [class-default-initargs](/meta-object-protocol/class-default-initargs).

If the class was previously finalized, [finalize-inheritance](/meta-object-protocol/finalize-inheritance) may call [make-instances-obsolete](/chap-7/h-h-dictionary/make-instances-obsolete_standard-generic-function). The circumstances under which this happens are describe in [the section of the CLOS specification called ``Redefining Classes.''](http://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node300.md#SECTION0032110000000000000000).

<!-- /meta-object-protocol/make-instances-obsolete -->

Forward-referenced classes, which provide a temporary definition for a class which has been referenced but not yet defined, can never be finalized. An error is signalled if [finalize-inheritance](/meta-object-protocol/finalize-inheritance) is called on a forward-referenced class.
