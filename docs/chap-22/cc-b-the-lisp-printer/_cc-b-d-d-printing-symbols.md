**22.1.3.3 Printing Symbols** 

When *printer escaping* is disabled, only the characters of the *symbol*’s *name* are output (but the case in which to print characters in the *name* is controlled by **\*print-case\***; see Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp Printer)). 

The remainder of this section applies only when *printer escaping* is enabled. 

When printing a *symbol*, the printer inserts enough *single escape* and/or *multiple escape* characters (*backslashes* and/or *vertical-bars*) so that if **read** were called with the same **\*readtable\*** and with **\*read-base\*** bound to the *current output base*, it would return the same *symbol* (if it is not *apparently uninterned*) or an *uninterned symbol* with the same *print name* (otherwise). 

For example, if the *value* of **\*print-base\*** were 16 when printing the symbol face, it would have to be printed as \FACE or \Face or |FACE|, because the token face would be read as a hexadecimal number (decimal value 64206) if the *value* of **\*read-base\*** were 16. 

For additional restrictions concerning characters with nonstandard *syntax types* in the *current readtable*, see the *variable* **\*print-readably\*** 

For information about how the *Lisp reader* parses *symbols*, see Section 2.3.4 (Symbols as Tokens) and Section 2.4.8.5 (Sharpsign Colon). 

**nil** might be printed as () when **\*print-pretty\*** is *true* and *printer escaping* is enabled. 

 

 

