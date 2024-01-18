compute-applicable-methods-using-classes
========================================

*Generic Function* **COMPUTE-APPLICABLE-METHODS-USING-CLASSES**

**Syntax:**

**compute-applicable-methods-using-classes** *generic-function* *classes* => *methods*, *ok*

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*classes* -- A list of class metaobjects.

*methods* -- A (possibly empty) list of method metaobjects.

*ok* -- A generalized boolean.

**Description:**

This generic function is called to attempt to determine the method applicability of a generic function given only the classes of the required arguments.

If it is possible to completely determine the ordered list of applicable methods based only on the supplied classes, this generic function returns that list as its first value and true as its second value. The returned list of method metaobjects is sorted by precedence order, the most specific method coming first. If no methods are applicable to arguments with the specified classes, the empty list and true are returned.

If it is not possible to completely determine the ordered list of applicable methods based only on the supplied classes, this generic function returns an unspecified first value and false as its second value.

When a generic function is invoked, the discriminating function must determine the ordered list of methods applicable to the arguments. Depending on the generic function and the arguments, this is done in one of three ways: using a memoized value; calling **compute-applicable-methods-using-classes** or calling[compute-applicable-methods](compute-applicable-methods.md). (Refer to the description of [compute-discriminating-function](compute-discriminating-function.md) for the details of this process.)

The following consistency relationship between **compute-applicable-methods-using-classes** and [compute-applicable-methods](compute-applicable-methods.md) must be maintained: for any given generic function and set of arguments, if **compute-applicable-methods-using-classes** returns a second value of true, the first value must be equal to the value that would be returned by a corresponding call to [compute-applicable-methods](compute-applicable-methods.md). The results are undefined if a portable method on either of these generic functions causes this consistency to be violated.

The list returned by this generic function will not be mutated by the implementation. The results are undefined if a portable program mutates the list returned by this generic function.

**Methods:**

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**compute-applicable-methods-using-classes** (*generic-function* standard-generic-function) *arguments*](compute-applicable-methods-using-classes-standard-generic-function.md)
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Remarks:**

This generic function exists to allow user extensions which alter method lookup rules, but which base the new rules only on the classes of the required arguments, to take advantage of the class-based method lookup memoization found in many implementations. (There is of course no requirement for an implementation to provide this optimization.)

Such an extension can be implemented by two methods, one on this generic function and one on [compute-applicable-methods](compute-applicable-methods.md). Whenever the user extension is in effect, the first method will return a second value of true. This should allow the implementation to absorb these cases into its own memoization scheme.

To get appropriate performance, other kinds of extensions may require methods on [compute-discriminating-function](compute-discriminating-function.md) which implement their own memoization scheme.
