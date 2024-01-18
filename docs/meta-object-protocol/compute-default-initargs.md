compute-default-initargs
========================

*Generic Function* **COMPUTE-DEFAULT-INITARGS**

**Syntax:**

**compute-default-initargs** *class* => *initargs*

**Arguments and values:**

*class* -- A class metaobject.

*initargs* -- List of canonicalized default initialization arguments.

**Description:**

This generic-function is called to determine the default initialization arguments for a class.

The result is a list of canonicalized default initialization arguments, with no duplication among initialization argument names.

All methods on this generic function must compute the default initialization arguments as a function of only: (i) the class precedence list of *class*, and (ii) the direct default initialization arguments of each class in that list. The results are undefined if the rules used to compute the default initialization arguments depend on any other factors.

When a class is finalized,[finalize-inheritance](/docs/meta-object-protocol/finalize-inheritance) calls this generic function and associates the returned value with the class metaobject. The value can then be accessed by calling [class-default-initargs](/docs/meta-object-protocol/class-default-initargs).

The list returned by this generic function will not be mutated by the implementation. The results are undefined if a portable program mutates the list returned by this generic function.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------------------
  [**compute-default-initargs** (*class* standard-class)](/docs/meta-object-protocol/compute-default-initargs-standard-class)
  [**compute-default-initargs** (*class* funcallable-standard-class)](/docs/meta-object-protocol/compute-default-initargs-funcallable-standard-class)
  -----------------------------------------------------------------------------------------------------------------------------


