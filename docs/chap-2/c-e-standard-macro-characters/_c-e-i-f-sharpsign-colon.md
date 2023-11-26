**2.4.8.5 Sharpsign Colon** 

**Syntax:** #:&#10216;symbol-name&#10217; 

#: introduces an *uninterned symbol* whose *name* is *symbol-name*. Every time this syntax is encountered, a *distinct uninterned symbol* is created. The *symbol-name* must have the syntax of a *symbol* with no *package prefix* . 

For information on how the *Lisp reader* prints *uninterned symbols*, see Section 22.1.3.3 (Printing Symbols). 

