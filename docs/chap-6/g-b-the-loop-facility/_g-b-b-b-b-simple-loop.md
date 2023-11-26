**6.1.1.1.1 Simple Loop**

 

A simple **loop** *form* is one that has a body containing only *compound forms*. Each *form* is *evaluated* in turn from left to right. When the last *form* has been *evaluated*, then the first *form* is evaluated again, and so on, in a never-ending cycle. A simple **loop** *form* establishes an *implicit block* named 

**nil**. The execution of a simple **loop** can be terminated by explicitly transfering control to the *implicit block* (using **return** or **return-from**) or to some *exit point* outside of the *block* (*e.g.*, using **throw**, **go**, or **return-from**). 

