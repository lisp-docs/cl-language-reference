class-precedence-list
=====================

*Generic Function* **CLASS-PRECEDENCE-LIST**

**Syntax:**

**class-precedence-list** *class* => *precedence-list*

**Arguments and values:**

*class* -- A class metaobject.

*precedence-list* -- List of class metaobjects.

**Description:**

Returns the class precedence list of *class*. The elements of this list are class metaobjects.

During class finalization[finalize-inheritance](/docs/meta-object-protocol/finalize-inheritance) calls [compute-class-precedence-list](/docs/meta-object-protocol/compute-class-precedence-list) calls to compute the class precedence list of the class. That value is associated with the class metaobject and is returned by **class-precedence-list**.

This generic function signals an error if *class* has not been finalized.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------------
  [**class-precedence-list** (*class* standard-class)](/docs/meta-object-protocol/class-precedence-list-standard-class)
  [**class-precedence-list** (*class* funcallable-standard-class)](/docs/meta-object-protocol/class-precedence-list-funcallable-standard-class)
  [**class-precedence-list** (*class* forward-referenced-class)](/docs/meta-object-protocol/class-precedence-list-forward-referenced-class)
  [**class-precedence-list** (*class* built-in-class)](/docs/meta-object-protocol/class-precedence-list-built-in-class)
  -----------------------------------------------------------------------------------------------------------------------


