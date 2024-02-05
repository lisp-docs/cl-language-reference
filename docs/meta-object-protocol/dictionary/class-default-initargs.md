class-default-initargs
======================

*Generic Function* **CLASS-DEFAULT-INITARGS**

**Syntax:**

**class-default-initargs** *class* => *initargs*

**Arguments and values:**

*class* -- A class metaobject.

*initargs* -- List of initialization arguments.

**Description:**

Returns a list of the default initialization arguments for *class*. Each element of this list is a canonicalized default initialization argument. The empty list is returned if *class* has no default initialization arguments.

During finalization[finalize-inheritance](/meta-object-protocol/finalize-inheritance) calls [compute-default-initargs](/meta-object-protocol/compute-default-initargs) to compute the default initialization arguments for the class. That value is associated with the class metaobject and is returned by **class-default-initargs**.

This generic function signals an error if *class* has not been finalized.

**Methods:**

  -------------------------------------------------------------------------------------------------------------------------
  [**class-default-initargs** (*class* standard-class)](/meta-object-protocol/class-default-initargs-standard-class)
  [**class-default-initargs** (*class* funcallable-standard-class)](/meta-object-protocol/class-default-initargs-funcallable-standard-class)
  [**class-default-initargs** (*class* forward-referenced-class)](/meta-object-protocol/class-default-initargs-forward-referenced-class)
  [**class-default-initargs** (*class* built-in-class)](/meta-object-protocol/class-default-initargs-built-in-class)
  -------------------------------------------------------------------------------------------------------------------------


