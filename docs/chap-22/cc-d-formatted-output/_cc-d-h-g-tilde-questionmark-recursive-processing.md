 

The next *arg* must be a *format control*, and the one after it a *list*; both are consumed by the ~? directive. The two are processed as a *control-string*, with the elements of the *list* as the arguments. Once the recursive processing has been finished, the processing of the control string containing the ~? directive is resumed. Example: 

(format nil "~? ~D" "&#60;~A ~D&#62;" ’("Foo" 5) 7) *→* "&#60;Foo 5&#62; 7" 

(format nil "~? ~D" "&#60;~A ~D&#62;" ’("Foo" 5 14) 7) *→* "&#60;Foo 5&#62; 7" 

Note that in the second example three arguments are supplied to the *format string* "&#60;~A ~D&#62;", but only two are processed and the third is therefore ignored. 

With the @ modifier, only one *arg* is directly consumed. The *arg* must be a *string*; it is processed as part of the control string as if it had appeared in place of the ~@? construct, and any directives in the recursively processed control string may consume arguments of the control string containing the ~@? directive. Example: 

(format nil "~@? ~D" "&#60;~A ~D&#62;" "Foo" 5 7) *→* "&#60;Foo 5&#62; 7" 

(format nil "~@? ~D" "&#60;~A ~D&#62;" "Foo" 5 14 7) *→* "&#60;Foo 5&#62; 14" 



 

 

