 

The functions **eval** and **compile** are required to ensure that *literal objects* referenced within the resulting interpreted or compiled code objects are the *same* as the corresponding *objects* in the *source code*. **compile-file**, on the other hand, must produce a *compiled file* that, when loaded with **load**, constructs the *objects* defined by the *source code* and produces references to them. 

In the case of **compile-file**, *objects* constructed by **load** of the *compiled file* cannot be spoken of as being the *same* as the *objects* constructed at compile time, because the *compiled file* may be loaded into a different *Lisp image* than the one in which it was compiled. This section defines the concept of *similarity* which relates *objects* in the *evaluation environment* to the corresponding *objects* in 

the *run-time environment*. 

The constraints on *literal objects* described in this section apply only to **compile-file**; **eval** and **compile** do not copy or coalesce constants. 

