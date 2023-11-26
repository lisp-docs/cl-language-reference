 

The object system provides a number of predefined *metaclasses*. These include the *classes* **standard-class**, **built-in-class**, and **structure-class**: 

*•* The *class* **standard-class** is the default *class* of *classes* defined by **defclass**. 

*•* The *class* **built-in-class** is the *class* whose *instances* are *classes* that have special implementations with restricted capabilities. Any *class* that corresponds to a standard *type* might be an *instance* of **built-in-class**. The predefined *type* specifiers that are required to have corresponding *classes* are listed in Figure 4–8. It is *implementation-dependent* whether each of these *classes* is implemented as a *built-in class*. 

*•* All *classes* defined by means of **defstruct** are *instances* of the *class* **structure-class**. 





