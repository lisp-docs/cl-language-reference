 



The *Lisp printer* makes its determination of how to print an *object* as follows: 



If the *value* of **\*print-pretty\*** is *true*, printing is controlled by the *current pprint dispatch table*; see Section 22.2.1.4 (Pretty Print Dispatch Tables). 



Otherwise (if the *value* of **\*print-pretty\*** is *false*), the object’s **print-object** method is used; see Section 22.1.3 (Default Print-Object Methods). 



