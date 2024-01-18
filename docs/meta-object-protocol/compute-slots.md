compute-slots
=============

[*Generic Function* **COMPUTE-SLOTS**]()

**Syntax:**

**compute-slots** *class* => *effective-slot-definitions*

**Arguments and values:**

*class* -- A class metaobject.

*effective-slot-definitions* -- A list of effective slot definition metaobjects.

**Description:**

This generic function computes a set of effective slot definition metaobjects for the class *class*. The result is a list of effective slot definition metaobjects: one for each slot that will be accessible in instances of *class*.

This generic function proceeds in 3 steps:

1.  The first step collects the full set of direct slot definitions from the superclasses of *class*.
2.  [The direct slot definitions are then collected into individual lists, one list for each slot name associated with any of the direct slot definitions. The slot names are compared with]()[eql](http://www.lispworks.com/documentation/HyperSpec/Body/f_eql.htm). Each such list is then sorted into class precedence list order. Direct slot definitions coming from classes earlier in the class precedence list of *class* appear before those coming from classes later in the class precedence list. For each slot name, the generic function [compute-effective-slot-definition](compute-effective-slot-definition.md) is called to compute an effective slot definition. The result of [compute-slots](compute-slots.md) is a list of these effective slot definitions, in unspecified order.
3.  In the final step, the location for each effective slot definition is set. This is done by specified around-methods; portable methods cannot take over this behavior. For more information on the slot definition locations, see the section [``Instance Structure Protocol.''](instance-structure-protocol.md)

**Methods:**

  ------------------------------------------------------------------------------------------------------------------------
  [**compute-slots** (*class* standard-class)](compute-slots-standard-class.md)
  [**compute-slots** (*class* funcallable-standard-class)](compute-slots-funcallable-standard-class.md)
  [**compute-slots** `:around` (*class* standard-class)](compute-slots-around-standard-class.md)
  [**compute-slots** `:around` (*class* funcallable-standard-class)](compute-slots-around-funcallable-standard-class.md)
  ------------------------------------------------------------------------------------------------------------------------


