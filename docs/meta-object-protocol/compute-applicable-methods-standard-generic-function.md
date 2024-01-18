compute-applicable-methods-standard-generic-function
====================================================

*Method* **COMPUTE-APPLICABLE-METHODS**

**Syntax:**

**compute-applicable-methods** *(generic-function* standard-generic-function) *arguments* => *methods*

**Description:**

This is a method on the generic function[compute-applicable-methods](compute-applicable-methods.md).

This method signals an error if any method of the generic function has a specializer which is neither a class metaobject nor an **eql** specializer metaobject.

Otherwise, this method computes the sorted list of applicable methods according to the rules described in the section of the CLOS Specification called [``Method Selection and Combination.''](http://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node283.md#SECTION003217000000000000000)

This method can be overridden. Because of the consistency requirements between this generic function and [compute-applicable-methods-using-classes](compute-applicable-methods-using-classes.md), doing so may require also overriding [compute-applicable-methods-using-classes (standard-generic-function t)](compute-applicable-methods-using-classes-standard-generic-function.md).
