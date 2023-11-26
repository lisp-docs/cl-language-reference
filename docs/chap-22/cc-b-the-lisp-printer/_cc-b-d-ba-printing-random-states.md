**22.1.3.10 Printing Random States** 

A specific syntax for printing *objects* of *type* **random-state** is not specified. However, every *implementation* must arrange to print a *random state object* in such a way that, within the same implementation, **read** can construct from the printed representation a copy of the *random state* object as if the copy had been made by **make-random-state**. 

If the type *random state* is effectively implemented by using the machinery for **defstruct**, the usual structure syntax can then be used for printing *random state* objects; one might look something like 

#S(RANDOM-STATE :DATA #(14 49 98436589 786345 8734658324 ... )) 

where the components are *implementation-dependent*. 

