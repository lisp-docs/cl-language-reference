compute-applicable-methods
==========================

*Generic Function* **COMPUTE-APPLICABLE-METHODS**

**Syntax:**

**compute-applicable-methods** *generic-function* *arguments* => *methods*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*arguments* -- A list of objects.

*methods* -- A (possibly empty) list of method metaobjects.

**Description:**

This generic function determines the method applicability of a generic function given a list of required arguments. The returned list of method metaobjects is sorted by precedence order with the most specific method appearing first. If no methods are applicable to the supplied arguments the empty list is returned.

When a generic function is invoked, the discriminating function must determine the ordered list of methods applicable to the arguments. Depending on the generic function and the arguments, this is done in one of three ways: using a memoized value; calling[compute-applicable-methods-using-classes](compute-applicable-methods-using-classes.md); or calling **compute-applicable-methods**. (Refer to the description of [compute-discriminating-function](compute-discriminating-function.md) for the details of this process.)

The *arguments* argument is permitted to contain more elements than the generic function accepts required arguments; in these cases the extra arguments will be ignored. An error is signaled if *arguments* contains fewer elements than the generic function accepts required arguments.

The list returned by this generic function will not be mutated by the implementation. The results are undefined if a portable program mutates the list returned by this generic function.

**Methods:**

  ------------------------------------------------------------------------------------------------------------------------------------------------------
  [**compute-applicable-methods** (*generic-function* standard-generic-function) *arguments*](compute-applicable-methods-standard-generic-function.md)
  ------------------------------------------------------------------------------------------------------------------------------------------------------


