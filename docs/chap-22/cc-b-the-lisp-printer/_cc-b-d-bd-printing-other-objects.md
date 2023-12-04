 



Other *objects* are printed in an *implementation-dependent* manner. It is not required that an *implementation* print those *objects readably*. 



For example, *hash tables*, *readtables*, *packages*, *streams*, and *functions* might not print *readably*. 



A common notation to use in this circumstance is #<...>. Since #< is not readable by the *Lisp reader* , the precise format of the text which follows is not important, but a common format to use is that provided by the **print-unreadable-object** *macro*. 



For information on how the *Lisp reader* treats this notation, see Section 2.4.8.20 (Sharpsign Less-Than-Sign). For information on how to notate *objects* that cannot be printed *readably*, see Section 2.4.8.6 (Sharpsign Dot). 



