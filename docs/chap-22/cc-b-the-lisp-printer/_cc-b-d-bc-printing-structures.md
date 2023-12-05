 



By default, a *structure* of type *S* is printed using #S syntax. This behavior can be customized by specifying a :print-function or :print-object option to the **defstruct** *form* that defines *S*, or by writing a **print-object** *method* that is *specialized* for *objects* of type *S*. 



Different structures might print out in different ways; the default notation for structures is: #S(*structure-name \{slot-key slot-value\}*\*) 



where #S indicates structure syntax, *structure-name* is a *structure name*, each *slot-key* is an initialization argument *name* for a *slot* in the *structure*, and each corresponding *slot-value* is a representation of the *object* in that *slot*. 



For information on how the *Lisp reader* parses *structures*, see Section 2.4.8.13 (Sharpsign S). 



 



 



