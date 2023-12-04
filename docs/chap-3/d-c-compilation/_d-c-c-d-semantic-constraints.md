 



All *conforming programs* must obey the following constraints, which are designed to minimize the observable differences between compiled and interpreted programs: 



*•* Definitions of any referenced *macros* must be present in the *compilation environment*. Any *form* that is a *list* beginning with a *symbol* that does not name a *special operator* or a *macro* defined in the *compilation environment* is treated by the compiler as a function call. 



*•* **Special** proclamations for *dynamic variables* must be made in the *compilation environment*. Any *binding* for which there is no **special** declaration or proclamation in the *compilation environment* is treated by the compiler as a *lexical binding*. 



*•* The definition of a function that is defined and declared **inline** in the *compilation environment* must be the same at run time. 



*•* Within a *function* named *F*, the compiler may (but is not required to) assume that an apparent recursive call to a *function* named *F* refers to the same definition of *F*, unless that function has been declared **notinline**. The consequences of redefining such a recursively defined *function F* while it is executing are undefined. 



*•* A call within a file to a named function that is defined in the same file refers to that function, unless that function has been declared **notinline**. The consequences are unspecified if functions are redefined individually at run time or multiply defined in the same file. 



*•* The argument syntax and number of return values for all functions whose **ftype** is declared at compile time must remain the same at run time.  







*• Constant variables* defined in the *compilation environment* must have a *similar* value at run time. A reference to a *constant variable* in *source code* is equivalent to a reference to a *literal object* that is the *value* of the *constant variable*. 



*•* Type definitions made with **deftype** or **defstruct** in the *compilation environment* must retain the same definition at run time. Classes defined by **defclass** in the *compilation environment* must be defined at run time to have the same *superclasses* and same *metaclass*. 



This implies that *subtype*/*supertype* relationships of *type specifiers* must not change between *compile time* and *run time*. 



*•* Type declarations present in the compilation *environment* must accurately describe the corresponding values at run time; otherwise, the consequences are undefined. It is permissible for an unknown *type* to appear in a declaration at compile time, though a warning might be signaled in such a case. 



*•* Except in the situations explicitly listed above, a *function* defined in the *evaluation environment* is permitted to have a different definition or a different *signature* at run time, and the run-time definition prevails. 



*Conforming programs* should not be written using any additional assumptions about consistency between the run-time *environment* and the startup, evaluation, and compilation *environments*. 



Except where noted, when a compile-time and a run-time definition are different, one of the following occurs at run time: 



*•* an error of *type* **error** is signaled 



*•* the compile-time definition prevails 



*•* the run-time definition prevails 



If the *compiler* processes a *function form* whose *operator* is not defined at compile time, no error is signaled at compile time. 



