**3.1.1.2 Dynamic Environments** 

A *dynamic environment* for *evaluation* is that part of an *environment* that contains *bindings* whose duration is bounded by points of *establishment* and *disestablishment* within the execution of the *form* that established the *binding*. A *dynamic environment* contains, among other things, the following: 

*• bindings* for *dynamic variables*. 

*•* information about *active catch tags*. 

*•* information about *exit points* established by **unwind-protect**. 

*•* information about *active handlers* and *restarts*. 

The *dynamic environment* that is active at any given point in the *execution* of a *program* is referred to by definite reference as “the current *dynamic environment*,” or sometimes as just “the *dynamic environment*.” 

Within a given *namespace*, a *name* is said to be *bound* in a *dynamic environment* if there is a *binding* associated with its *name* in the *dynamic environment* or, if not, there is a *binding* associated with its name in the *global environment*. 

