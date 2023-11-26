 

*Loop keywords* are not true *keywords*\<sub\>1\</sub\>; they are special *symbols*, recognized by *name* rather than *object* identity, that are meaningful only to the **loop** facility. A *loop keyword* is a *symbol* but is recognized by its *name* (not its identity), regardless of the *packages* in which it is *accessible*. 

In general, *loop keywords* are not *external symbols* of the COMMON-LISP *package*, except in the coincidental situation that a *symbol* with the same name as a *loop keyword* was needed for some other purpose in Common Lisp. For example, there is a *symbol* in the COMMON-LISP *package* whose *name* is "UNLESS" but not one whose *name* is "UNTIL". 

If no *loop keywords* are supplied in a **loop** *form*, the Loop Facility executes the loop body repeatedly; see Section 6.1.1.1.1 (Simple Loop). 

Iteration **6–1**

 

 

