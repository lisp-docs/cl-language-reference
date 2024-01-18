compute-class-precedence-list
=============================

*Generic Function* **COMPUTE-CLASS-PRECEDENCE-LIST**

**Syntax:**

**compute-class-precedence-list** *class* => *precedence-list*

**Arguments and values:**

*class* -- A class metaobject.

*precedence-list* -- List of class metaobjects.

**Description:**

This generic-function is called to determine the class precedence list of a class.

The result is a list which contains each of *class* and its superclasses once and only once. The first element of the list is *class* and the last element is the class named **t**.

All methods on this generic function must compute the class precedence list as a function of the ordered direct superclasses of the superclasses of *class*. The results are undefined if the rules used to compute the class precedence list depend on any other factors.

When a class is finalized,[finalize-inheritance](/docs/meta-object-protocol/finalize-inheritance) calls this generic function and associates the returned value with the class metaobject. The value can then be accessed by calling [class-precedence-list](/docs/meta-object-protocol/class-precedence-list).

**Methods:**

  ---------------------------------------------------------------------------------------------
  [**compute-class-precedence-list** (*class* class)](/docs/meta-object-protocol/compute-class-precedence-list-class)
  ---------------------------------------------------------------------------------------------


