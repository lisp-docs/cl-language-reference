compute-discriminating-function
===============================

*Generic Function* **COMPUTE-DISCRIMINATING-FUNCTION**

**Syntax:**

**compute-discriminating-function** *generic-function* => *function*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*function* -- A function.

**Description:**

This generic function is called to determine the discriminating function for a generic function. When a generic function is called, the *installed* discriminating function is called with the full set of arguments received by the generic function, and must implement the behavior of calling the generic function: determining the ordered set of applicable methods, determining the effective method, and running the effective method.

To determine the ordered set of applicable methods, the discriminating function first calls[compute-applicable-methods-using-classes](compute-applicable-methods-using-classes.md). If [compute-applicable-methods-using-classes](compute-applicable-methods-using-classes.md) returns a second value of false, the discriminating function then calls [compute-applicable-methods](compute-applicable-methods.md).

When [compute-applicable-methods-using-classes](compute-applicable-methods-using-classes.md) returns a second value of true, the discriminating function is permitted to memoize the first returned value as follows. The discriminating function may reuse the list of applicable methods without calling [compute-applicable-methods-using-classes](compute-applicable-methods-using-classes.md) again provided that:

i.  the generic function is being called again with required arguments which are instances of the same classes,
ii. the generic function has not been reinitialized,
iii. no method has been added to or removed from the generic function,
iv. for all the specializers of all the generic function's methods which are classes, their class precedence lists have not changed and
v.  for any such memoized value, the class precedence list of the class of each of the required arguments has not changed.

Determination of the effective method is done by calling [compute-effective-method](compute-effective-method.md) When the effective method is run, each method's function is called, and receives as arguments: (i) a list of the arguments to the generic function, and (ii) whatever other arguments are specified in the [call-method](call-method.md) form indicating that the method should be called. (See [make-method-lambda](make-method-lambda.md) for more information about how method functions are called.)

The generic function [compute-discriminating-function](compute-discriminating-function.md) is called, and its result installed, by [add-method](add-method.md), [remove-method](remove-method.md), [initialize-instance](initialize-instance.md), and [reinitialize-instance](reinitialize-instance.md).

**Methods:**

  ----------------------------------------------------------------------------------------------------------------------------------------------------
  [**compute-discriminating-function** (*generic-function* standard-generic-function)](compute-discriminating-function-standard-generic-function.md)
  ----------------------------------------------------------------------------------------------------------------------------------------------------

**Remarks:**

Since client code is not allowed to define methods on `compute-applicable-methods` specialized to `standard-generic-function`, it can be argued that for `standard-generic-function`, `compute-applicable-methods` does not have to be called. By relaxing the description of `compute-discriminating-function` this way, the implementation may also cache results when `compute-applicable-methods-using-classes` returns `nil` in its second argument. More generally, whenever some behavior is defined for generic functions when called with only standard classes, since client code is not allowed to alter this behavior in any way, the implementation is often free to choose whatever appropriate implementation technique that has the same affect as the one specified. Notice, however, that any behavior that diverges from what is specified, must not be inherited by client-defined subclasses. Only when arguments are direct instances of specified classes can the implementation arbitrarily choose some other technique. -- Robert Strandh 2017-01-23.

This page seems to suggest that `compute-effective-method` needs to be called by the discriminating function each time the generic function is invoked. It would still be possible to avoid such calls for standard generic functions by the same rule as in the previous remark. But invoking a non-standard generic function would be too slow then. And page 126 in the AMOP book suggests that the result of calling `compute-effective-method-function` (a function that does not exist in the specification, and was replaced by `compute-effective-method`) could be cached. It would seem reasonable, then, for an implementation to be allowed to cache the result of calling `compute-effective-method` whenever it is allowed to cache the result of calling `compute-applicable-methods-using-classes`. -- Robert Strandh 2021-12-15.
