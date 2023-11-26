 

Certain variables, called *constant variables*, are reserved as “named constants.” The consequences are undefined if an attempt is made to assign a value to, or create a *binding* for a *constant variable*, except that a ‘compatible’ redefinition of a *constant variable* using **defconstant** is permitted; see the *macro* **defconstant**. 

*Keywords*, *symbols* defined by Common Lisp or the *implementation* as constant (such as **nil**, **t**, and **pi**), and *symbols* declared as constant using **defconstant** are *constant variables*. 

