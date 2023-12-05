 



The next *arg* is printed as a *float* in either fixed-format or exponential notation as appropriate. 



 



 



The full form is ~<i>w</i>,<i>d</i>,<i>e</i>,<i>k</i>,<i>overflowchar</i>,<i>padchar</i>,<i>exponentchar</i>G. The format in which to print <i>arg</i> depends on the magnitude (absolute value) of the <i>arg</i>. Let <i>n</i> be an integer such that 10<sup><i>n−</i>1</sup> <i>≤ |arg|</i> &lt; 10<i><sup>n</sup></i>. Let <i>ee</i> equal <i>e</i>+2, or 4 if <i>e</i> is omitted. Let <i>ww</i> equal <i>w−ee</i>, or <b>nil</b> if <i>w</i> is omitted. If <i>d</i> is omitted, first let <i>q</i> be the number of digits needed to print <i>arg</i> with no loss of information and without leading or trailing zeros; then let <i>d</i> equal (max <i>q</i> (min <i>n</i> 7)). Let <i>dd</i> equal <i>d−n</i>. 



If 0 *≤ dd ≤ d*, then *arg* is printed as if by the format directives 



~*ww*,*dd*„*overflowchar*,*padchar*F~*ee*@T 



Note that the scale factor *k* is not passed to the ~F directive. For all other values of *dd*, *arg* is printed as if by the format directive 



~*w*,*d*,*e*,*k*,*overflowchar*,*padchar*,*exponentchar*E 



In either case, an @ modifier is supplied to the ~F or ~E directive if and only if one was supplied to the ~G directive. 



~G binds **\*print-escape\*** to *false* and **\*print-readably\*** to *false*. 



