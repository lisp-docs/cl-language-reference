 

The next *arg* is printed as a *float* in either fixed-format or exponential notation as appropriate. Printer **22–29**

 

 

The full form is ~&#60;i&#62;w&#60;/i&#62;,&#60;i&#62;d&#60;/i&#62;,&#60;i&#62;e&#60;/i&#62;,&#60;i&#62;k&#60;/i&#62;,&#60;i&#62;overflowchar&#60;/i&#62;,&#60;i&#62;padchar&#60;/i&#62;,&#60;i&#62;exponentchar&#60;/i&#62;G. The format in which to print &#60;i&#62;arg&#60;/i&#62; depends on the magnitude (absolute value) of the &#60;i&#62;arg&#60;/i&#62;. Let &#60;i&#62;n&#60;/i&#62; be an integer such that 10&#60;sup&#62;&#60;i&#62;n−&#60;/i&#62;1&#60;/sup&#62; &#60;i&#62;≤ |arg|&#60;/i&#62; &#60; 10&#60;i&#62;&#60;sup&#62;n&#60;/sup&#62;&#60;/i&#62;. Let &#60;i&#62;ee&#60;/i&#62; equal &#60;i&#62;e&#60;/i&#62;+2, or 4 if &#60;i&#62;e&#60;/i&#62; is omitted. Let &#60;i&#62;ww&#60;/i&#62; equal &#60;i&#62;w−ee&#60;/i&#62;, or &#60;b&#62;nil&#60;/b&#62; if &#60;i&#62;w&#60;/i&#62; is omitted. If &#60;i&#62;d&#60;/i&#62; is omitted, first let &#60;i&#62;q&#60;/i&#62; be the number of digits needed to print &#60;i&#62;arg&#60;/i&#62; with no loss of information and without leading or trailing zeros; then let &#60;i&#62;d&#60;/i&#62; equal (max &#60;i&#62;q&#60;/i&#62; (min &#60;i&#62;n&#60;/i&#62; 7)). Let &#60;i&#62;dd&#60;/i&#62; equal &#60;i&#62;d−n&#60;/i&#62;. 

If 0 *≤ dd ≤ d*, then *arg* is printed as if by the format directives 

~*ww*,*dd*„*overflowchar*,*padchar*F~*ee*@T 

Note that the scale factor *k* is not passed to the ~F directive. For all other values of *dd*, *arg* is printed as if by the format directive 

~*w*,*d*,*e*,*k*,*overflowchar*,*padchar*,*exponentchar*E 

In either case, an @ modifier is supplied to the ~F or ~E directive if and only if one was supplied to the ~G directive. 

~G binds **\*print-escape\*** to *false* and **\*print-readably\*** to *false*. 

