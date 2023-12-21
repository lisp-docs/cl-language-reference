**readtable** *System Class* 



**Class Precedence List:** 



**readtable**, **t** 



**Description:** 



A *readtable* maps *characters* into *syntax types* for the *Lisp reader* ; see Chapter 2 (Syntax). A *readtable* also contains associations between *macro characters* and their *reader macro functions*, and records information about the case conversion rules to be used by the *Lisp reader* when parsing *symbols*. 



Each *simple character* must be representable in the *readtable*. It is *implementation-defined* whether *non-simple characters* can have syntax descriptions in the *readtable*. 



**See Also:** 



Section 2.1.1 (Readtables), Section 22.1.3.13 (Printing Other Objects) 



