class-direct-superclasses
=========================

*Generic Function* **CLASS-DIRECT-SUPERCLASSES**

**Syntax:**

**class-direct-superclasses** *class* => *superclasses*

**Arguments and values:**

*class* -- A class metaobject.

*superclasses* -- List of class metaobjects.

**Description:**

Returns a list of the direct superclasses of *class*. The elements of this list are class metaobjects. The empty list is returned if *class* has no direct superclasses. This is the defaulted value of the `:direct-superclasses` initialization argument that was associated with the class during initialization or reinitialization.

**Methods:**

  -------------------------------------------------------------------------------------------------------------------------------
  [**class-direct-superclasses** (*class* standard-class)](/meta-object-protocol/class-direct-superclasses-standard-class)
  [**class-direct-superclasses** (*class* funcallable-standard-class)](/meta-object-protocol/class-direct-superclasses-funcallable-standard-class)
  [**class-direct-superclasses** (*class* forward-referenced-class)](/meta-object-protocol/class-direct-superclasses-forward-referenced-class)
  [**class-direct-superclasses** (*class* built-in-class)](/meta-object-protocol/class-direct-superclasses-built-in-class)
  -------------------------------------------------------------------------------------------------------------------------------


