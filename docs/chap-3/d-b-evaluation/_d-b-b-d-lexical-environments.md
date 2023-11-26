 

A *lexical environment* for *evaluation* at some position in a *program* is that part of the *environment* that contains information having *lexical scope* within the *forms* containing that position. A *lexical environment* contains, among other things, the following: 

*• bindings* of *lexical variables* and *symbol macros*. 

*• bindings* of *functions* and *macros*. (Implicit in this is information about those *compiler macros* that are locally disabled.) 

*• bindings* of *block tags*. 

*• bindings* of *go tags*. 

*•* information about *declarations*. 

The *lexical environment* that is active at any given position in a *program* being semantically processed is referred to by definite reference as “the current *lexical environment*,” or sometimes as just “the *lexical environment*.” 

Within a given *namespace*, a *name* is said to be *bound* in a *lexical environment* if there is a *binding* associated with its *name* in the *lexical environment* or, if not, there is a *binding* associated with its name in the *global environment*.  



