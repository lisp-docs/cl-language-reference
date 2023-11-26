**13.1.2.1 Character Scripts** 

A *script* is one of possibly several sets that form an *exhaustive partition* of the type **character**. 

The number of such sets and boundaries between them is *implementation-defined*. Common Lisp does not require these sets to be *types*, but an *implementation* is permitted to define such *types* as an extension. Since no *character* from one *script* can ever be a member of another *script*, it is generally more useful to speak about *character repertoires*. 

Although the term “*script*” is chosen for definitional compatibility with ISO terminology, no *conforming implementation* is required to use any particular *scripts* standardized by ISO or by any other standards organization. 

Whether and how the *script* or *scripts* used by any given *implementation* are named is *implementation-dependent*. 

