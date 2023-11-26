 

The COMMON-LISP *package* contains the primitives of the Common Lisp system as defined by this specification. Its *external symbols* include all of the *defined names* (except for *defined names* in the KEYWORD *package*) that are present in the Common Lisp system, such as **car**, **cdr**, **\*package\***, etc. The COMMON-LISP *package* has the *nickname* CL. 

The COMMON-LISP *package* has as *external symbols* those symbols enumerated in the figures in Section 1.9 (Symbols in the COMMON-LISP Package), and no others. These *external symbols* are *present* in the COMMON-LISP *package* but their *home package* need not be the COMMON-LISP *package*. 

For example, the symbol HELP cannot be an *external symbol* of the COMMON-LISP *package* because it is not mentioned in Section 1.9 (Symbols in the COMMON-LISP Package). In contrast, the *symbol* 



 

 

**variable** must be an *external symbol* of the COMMON-LISP *package* even though it has no definition because it is listed in that section (to support its use as a valid second *argument* to the *function* **documentation**). 

The COMMON-LISP *package* can have additional *internal symbols*. 

