 



An argument, any *object*, is printed obeying every printer control variable (as by **write**). In addition, &#126;W interacts correctly with depth abbreviation, by not resetting the depth counter to zero. &#126;W does not accept parameters. If given the *colon* modifier, &#126;W binds **\*print-pretty\*** to *true*. If given the *at-sign* modifier, &#126;W binds **\*print-level\*** and **\*print-length\*** to **nil**. 



&#126;W provides automatic support for the detection of circularity and sharing. If the *value* of **\*print-circle\*** is not **nil** and &#126;W is applied to an argument that is a circular (or shared) reference, an appropriate #*n*# marker is inserted in the output instead of printing the argument. 



