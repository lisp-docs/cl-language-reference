 



While *case* is significant in the process of *interning* a *symbol*, the *Lisp reader* , by default, attempts to canonicalize the case of a *symbol* prior to interning; see Section 23.1.2 (Effect of Readtable Case on the Lisp Reader). As such, case in *symbols* is not, by default, significant. Throughout 











this document, except as explicitly noted otherwise, the case in which a *symbol* appears is not significant; that is, HELLO, Hello, hElLo, and hello are all equivalent ways to denote a symbol whose name is "HELLO". 



The characters *backslash* and *vertical-bar* are used to explicitly quote the *case* and other parsing related aspects of characters. As such, the notations |hello| and \h\e\l\l\o are equivalent ways to refer to a symbol whose name is "hello", and which is *distinct* from any symbol whose name is "HELLO". 



The *symbols* that correspond to Common Lisp *defined names* have *uppercase* names even though their names generally appear in *lowercase* in this document. 



