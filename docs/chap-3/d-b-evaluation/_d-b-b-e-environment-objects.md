 

Some *operators* make use of an *object*, called an *environment object*, that represents the set of *lexical bindings* needed to perform semantic analysis on a *form* in a given *lexical environment*. The set of *bindings* in an *environment object* may be a subset of the *bindings* that would be needed to actually perform an *evaluation*; for example, *values* associated with *variable names* and *function names* in the corresponding *lexical environment* might not be available in an *environment object*. 

The *type* and nature of an *environment object* is *implementation-dependent*. The *values* of *environment parameters* to *macro functions* are examples of *environment objects*. 

The *object* **nil** when used as an *environment object* denotes the *null lexical environment*; see Section 3.1.1.3.1 (The Null Lexical Environment). 

