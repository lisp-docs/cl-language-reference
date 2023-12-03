 

When a transfer of control is initiated by **go**, **return-from**, or **throw** the following events occur in order to accomplish the transfer of control. Note that for **go**, the *exit point* is the *form* within the **tagbody** that is being executed at the time the **go** is performed; for **return-from**, the *exit point* is the corresponding **block** *form*; and for **throw**, the *exit point* is the corresponding **catch** *form*. 

1\. Intervening *exit points* are “abandoned” (*i.e.*, their *extent* ends and it is no longer valid to attempt to transfer control through them). 

2\. The cleanup clauses of any intervening **unwind-protect** clauses are evaluated. 

3\. Intervening dynamic *bindings* of **special** variables, *catch tags*, *condition handlers*, and *restarts* are undone. 

4\. The *extent* of the *exit point* being invoked ends, and control is passed to the target. 

The extent of an exit being “abandoned” because it is being passed over ends as soon as the transfer of control is initiated. That is, event 1 occurs at the beginning of the initiation of the transfer of control. The consequences are undefined if an attempt is made to transfer control to an *exit point* whose *dynamic extent* has ended. 

Events 2 and 3 are actually performed interleaved, in the order corresponding to the reverse order in which they were established. The effect of this is that the cleanup clauses of an **unwind-protect** see the same dynamic *bindings* of variables and *catch tags* as were visible when the **unwind-protect** was entered. 

Event 4 occurs at the end of the transfer of control. 

Data and Control 





