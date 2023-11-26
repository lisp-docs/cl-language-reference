**22.3.4.3 Tilde W: Write** 

An argument, any *object*, is printed obeying every printer control variable (as by **write**). In addition, ~W interacts correctly with depth abbreviation, by not resetting the depth counter to zero. ~W does not accept parameters. If given the *colon* modifier, ~W binds **\*print-pretty\*** to *true*. If given the *at-sign* modifier, ~W binds **\*print-level\*** and **\*print-length\*** to **nil**. 

~W provides automatic support for the detection of circularity and sharing. If the *value* of **\*print-circle\*** is not **nil** and ~W is applied to an argument that is a circular (or shared) reference, an appropriate #*n*# marker is inserted in the output instead of printing the argument. 

