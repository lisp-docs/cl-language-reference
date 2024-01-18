class-precedence-list
=====================

[*Generic Function* **CLASS-PRECEDENCE-LIST**]()

**Syntax:**

**class-precedence-list** *class* => *precedence-list*

**Arguments and values:**

*class* -- A class metaobject.

*precedence-list* -- List of class metaobjects.

**Description:**

Returns the class precedence list of *class*. The elements of this list are class metaobjects.

[During class finalization]()[finalize-inheritance](finalize-inheritance.md) calls [compute-class-precedence-list](compute-class-precedence-list.md) calls to compute the class precedence list of the class. That value is associated with the class metaobject and is returned by **class-precedence-list**.

This generic function signals an error if *class* has not been finalized.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------------
  [**class-precedence-list** (*class* standard-class)](class-precedence-list-standard-class.md)
  [**class-precedence-list** (*class* funcallable-standard-class)](class-precedence-list-funcallable-standard-class.md)
  [**class-precedence-list** (*class* forward-referenced-class)](class-precedence-list-forward-referenced-class.md)
  [**class-precedence-list** (*class* built-in-class)](class-precedence-list-built-in-class.md)
  -----------------------------------------------------------------------------------------------------------------------


