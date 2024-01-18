class-direct-default-initargs
=============================

[*Generic Function* **CLASS-DIRECT-DEFAULT-INITARGS**]()

**Syntax:**

**class-direct-default-initargs** *class* => *initargs*

**Arguments and values:**

*class* -- A class metaobject.

*initargs* -- List of initialization arguments.

**Description:**

Returns a list of the direct default initialization arguments for *class*. Each element of this list is a canonicalized default initialization argument. The empty list is returned if *class* has no direct default initialization arguments. This is the defaulted value of the `:direct-default-initargs` initialization argument that was associated with the class during initialization or reinitialization.

**Methods:**

  ---------------------------------------------------------------------------------------------------------------------------------------
  [**class-direct-default-initargs** (*class* standard-class)](class-direct-default-initargs-standard-class.md)
  [**class-direct-default-initargs** (*class* funcallable-standard-class)](class-direct-default-initargs-funcallable-standard-class.md)
  [**class-direct-default-initargs** (*class* forward-referenced-class)](class-direct-default-initargs-forward-referenced-class.md)
  [**class-direct-default-initargs** (*class* built-in-class)](class-direct-default-initargs-built-in-class.md)
  ---------------------------------------------------------------------------------------------------------------------------------------


