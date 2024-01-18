remove-method
=============

[*Generic Function* **REMOVE-METHOD**]()

**Syntax:**

**remove-method** *generic-function* *method* => *generic-function*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*method* -- A method metaobject.

**Description:**

This generic function breaks the association between a generic function and one of its methods.

No error is signaled if the method is not among the methods of the generic function.

Breaking the association between the method and the generic function proceeds in four steps:

1.  [remove *method* from the set returned by]()[generic-function-methods](generic-function-methods.md) and arrange for [method-generic-function](method-generic-function.md) to return `nil`;
2.  call [remove-direct-method](remove-direct-method.md) for each of the method's specializers;
3.  call [compute-discriminating-function](compute-discriminating-function.md) and install its result with [set-funcallable-instance-function](set-funcallable-instance-function.md); and
4.  update the dependents of the generic function.

The generic function **remove-method** can be called by the user or the implementation.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------
  [**remove-method** (*generic-function* standard-generic-function) (*method* standard-method)](remove-method-standard-generic-function-standard-method.md)
  -----------------------------------------------------------------------------------------------------------------------------------------------------------


