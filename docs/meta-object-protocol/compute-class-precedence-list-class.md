compute-class-precedence-list-class
===================================

[*Method* **COMPUTE-CLASS-PRECEDENCE-LIST**]()

**Syntax:**

**compute-class-precedence-list** *(class* class) => *precedence-list*

**Description:**

[This is a method on the generic function]()[compute-class-precedence-list](compute-class-precedence-list.md).

This method computes the class precedence list according to the rules described in the section of the CLOS Specification called [``Determining the Class Precedence List.''](http://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node274.md#SECTION003215000000000000000)

This method signals an error if *class* or any of its superclasses is a forward referenced class.

This method can be overridden.
