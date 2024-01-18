allocate-instance
=================

*Generic Function* **ALLOCATE-INSTANCE**

**Syntax:**

**allocate-instance** *class* *`&rest`* *initargs* => *instance*

**Arguments and values:**

*class* -- A class metaobject.

*initargs* -- A list of alternating initialization argument names and values.

*instance* -- A newly allocated instance of *class*.

**Description:**

This generic function is called to create a new, uninitialized instance of a class. The interpretation of the concept of an ``uninitialized'' instance depends on the class metaobject class.

Before allocating the new instance,[class-finalized-p](/meta-object-protocol/class-finalized-p) is called to see if *class* has been finalized. If it has not been finalized, [finalize-inheritance](/meta-object-protocol/finalize-inheritance) is called before the new instance is allocated.

**Methods:**

  ------------------------------------------------------------------------------------------------------------------------------------
  [**allocate-instance** (*class* standard-class) *`&rest`* *initargs*](/meta-object-protocol/allocate-instance-standard-class)
  [**allocate-instance** (*class* funcallable-standard-class) *`&rest`* *initargs*](/meta-object-protocol/allocate-instance-funcallable-standard-class)
  [**allocate-instance** (*class* built-in-class) *`&rest`* *initargs*](/meta-object-protocol/allocate-instance-built-in-class)
  ------------------------------------------------------------------------------------------------------------------------------------

**Comments and remarks:**

See also the [description of this function in the Common Lisp HyperSpec](http://www.lispworks.com/documentation/HyperSpec/Body/f_alloca.htm#allocate-instance).

The description above suggests that `allocate-instance` checks to see whether the class is finalized and if not, calls [finalize-inheritance](/meta-object-protocol/finalize-inheritance). However, the *initargs* passed to `allocate-instance` should be the defaulted initargs, and computing those initargs requires the class to be finalized. Therefore, [finalize-inheritance](/meta-object-protocol/finalize-inheritance) must be called *before* `allocate-instance` is called. Peeking at PCL source confirms that [finalize-inheritance](/meta-object-protocol/finalize-inheritance) is called from [make-instance](/meta-object-protocol/make-instance) before `allocate-instance` is called.
