remove-method
=============

*Generic Function* **REMOVE-METHOD**

**Syntax:**

**remove-method** *generic-function* *method* => *generic-function*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*method* -- A method metaobject.

**Description:**

This generic function breaks the association between a generic function and one of its methods.

No error is signaled if the method is not among the methods of the generic function.

Breaking the association between the method and the generic function proceeds in four steps:

1.  remove *method* from the set returned by[generic-function-methods](/meta-object-protocol/generic-function-methods) and arrange for [method-generic-function](/meta-object-protocol/method-generic-function) to return `nil`;
2.  call [remove-direct-method](/meta-object-protocol/remove-direct-method) for each of the method's specializers;
3.  call [compute-discriminating-function](/meta-object-protocol/compute-discriminating-function) and install its result with [set-funcallable-instance-function](/meta-object-protocol/set-funcallable-instance-function); and
4.  update the dependents of the generic function.

The generic function **remove-method** can be called by the user or the implementation.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------
  [**remove-method** (*generic-function* standard-generic-function) (*method* standard-method)](/meta-object-protocol/remove-method-standard-generic-function-standard-method)
  -----------------------------------------------------------------------------------------------------------------------------------------------------------


