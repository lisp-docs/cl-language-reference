Metaobjects
===========

Metaobjects
-----------

For each kind of program element there is a corresponding *basic metaobject class*. These are the classes: [class](/meta-object-protocol/class-class), [slot-definition](/meta-object-protocol/class-slot-definition), [generic-function](/meta-object-protocol/class-generic-function), [method](/meta-object-protocol/class-method), and [method-combination](/meta-object-protocol/class-method-combination). A *metaobject class* is a subclass of exactly one of these classes. The results are undefined if an attempt is made to define a class that is a subclass of more than one basic metaobject class. A *metaobject* is an instance of a metaobject class.

Each metaobject represents one program element. Associated with each metaobject is the information required to serve its role. This includes information that might be provided directly in a user interface macro such as [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass) or [defmethod](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defmethod). It also includes information computed indirectly from other metaobjects such as that computed from class inheritance or the full set of methods associated with a generic function.

Much of the information associated with a metaobject is in the form of connections to other metaobjects. This interconnection means that the role of a metaobject is always based on that of other metaobjects. As an introduction to this interconnected structure, this section presents a partial enumeration of the kinds of information associated with each kind of metaobject. More detailed information is presented later.

-   [Classes](/meta-object-protocol/classes)
-   [Slot definitions](/meta-object-protocol/slot-definitions)
-   [Generic functions](/meta-object-protocol/generic-functions)
-   [Methods](/meta-object-protocol/methods)
-   [Specializers](/meta-object-protocol/specializers)
-   [Method combinations](/meta-object-protocol/method-combinations)

