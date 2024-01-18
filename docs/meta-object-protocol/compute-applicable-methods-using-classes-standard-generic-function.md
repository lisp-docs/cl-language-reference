compute-applicable-methods-using-classes-standard-generic-function
==================================================================

*Method* **COMPUTE-APPLICABLE-METHODS-USING-CLASSES**

**Syntax:**

**compute-applicable-methods-using-classes** *(generic-function* standard-generic-function) *classes* => *methods*, *ok*

**Description:**

This is a method on the generic function[compute-applicable-methods-using-classes](/docs/meta-object-protocol/compute-applicable-methods-using-classes).

If any method of the generic function has a specializer which is neither a class metaobject nor an **eql** specializer metaobject, this method signals an error.

In cases where the generic function has no methods with **eql** specializers, or has no methods with **eql** specializers that could be applicable to arguments of the supplied classes, this method returns the ordered list of applicable methods as its first value and true as its second value.

Otherwise this method returns an unspecified first value and false as its second value.

This method can be overridden. Because of the consistency requirements between this generic function and [compute-applicable-methods](/docs/meta-object-protocol/compute-applicable-methods) doing so may require also overriding [compute-applicable-methods (standard-generic-function t)](/docs/meta-object-protocol/compute-applicable-methods-standard-generic-function)
