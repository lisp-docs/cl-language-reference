add-method
==========

*Generic Function* **ADD-METHOD**

**Syntax:**

**add-method** *generic-function* *method* => *generic-function*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*method* -- A method metaobject.

**Description:**

This generic function associates an unattached method with a generic function.

An error is signaled if the lambda list of the method is not congruent with the lambda list of the generic function. An error is also signaled if the method is already associated with some other generic function.

If the given method agrees with an existing method of the generic function on parameter specializers and qualifiers, the existing method is removed by calling[**remove-method**](/docs/meta-object-protocol/remove-method) before the new method is added. See the section of the CLOS Specification called [``Agreement on Parameter Specializers and Qualifiers''](http://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node280.md#SECTION003216300000000000000) for a definition of agreement in this context.

Associating the method with the generic function then proceeds in four steps:

1.  add *method* to the set returned by [generic-function-methods](/docs/meta-object-protocol/generic-function-methods) arrange for [method-generic-function](/docs/meta-object-protocol/method-generic-function) to return *generic-function*;
2.  call [add-direct-method](/docs/meta-object-protocol/add-direct-method) for each of the method's specializers;
3.  call [compute-discriminating-function](/docs/meta-object-protocol/compute-discriminating-function) and install its result with [set-funcallable-instance-function](/docs/meta-object-protocol/set-funcallable-instance-function); and
4.  update the dependents of the generic function.

The generic function **add-method** can be called by the user or the implementation.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------------------------------------------
  [**add-method** (*generic-function* standard-generic-function) (*method* standard-method)](/docs/meta-object-protocol/add-method-standard-generic-function-standard-method)
  -----------------------------------------------------------------------------------------------------------------------------------------------------


