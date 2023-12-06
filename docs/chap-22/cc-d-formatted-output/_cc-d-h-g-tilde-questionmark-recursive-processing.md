 



The next *arg* must be a *format control*, and the one after it a *list*; both are consumed by the &#126;? directive. The two are processed as a *control-string*, with the elements of the *list* as the arguments. Once the recursive processing has been finished, the processing of the control string containing the &#126;? directive is resumed. Example: 



(format nil "&#126;? &#126;D" "&lt;&#126;A &#126;D&gt;" ’("Foo" 5) 7) *→* "\<foo 5=""> 7" 



(format nil "&#126;? &#126;D" "&lt;&#126;A &#126;D&gt;" ’("Foo" 5 14) 7) *→* "\<foo 5=""> 7" 



Note that in the second example three arguments are supplied to the *format string* "&lt;&#126;A &#126;D&gt;", but only two are processed and the third is therefore ignored. 



With the @ modifier, only one *arg* is directly consumed. The *arg* must be a *string*; it is processed as part of the control string as if it had appeared in place of the &#126;@? construct, and any directives in the recursively processed control string may consume arguments of the control string containing the &#126;@? directive. Example: 



(format nil "&#126;@? &#126;D" "&lt;&#126;A &#126;D&gt;" "Foo" 5 7) *→* "\<foo 5=""> 7" 



(format nil "&#126;@? &#126;D" "&lt;&#126;A &#126;D&gt;" "Foo" 5 14 7) *→* "\<foo 5=""> 14" 







 



 



