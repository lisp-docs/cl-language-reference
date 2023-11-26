**22.3.10.1 Nesting of FORMAT Operations** 

The case-conversion, conditional, iteration, and justification constructs can contain other formatting constructs by bracketing them. These constructs must nest properly with respect to each other. For example, it is not legitimate to put the start of a case-conversion construct in each arm of a conditional and the end of the case-conversion construct outside the conditional: 

(format nil "~:[abc~:@(def~;ghi~ 

:@(jkl~]mno~)" x) ;Invalid! 

This notation is invalid because the ~[...~;...~] and ~(...~) constructs are not properly nested. 

The processing indirection caused by the ~? directive is also a kind of nesting for the purposes of this rule of proper nesting. It is not permitted to start a bracketing construct within a string processed under control of a ~? directive and end the construct at some point after the ~? construct in the string containing that construct, or vice versa. For example, this situation is invalid: 

(format nil "~@?ghi~)" "abc~@(def") ;Invalid! 

This notation is invalid because the ~? and ~(...~) constructs are not properly nested. 

