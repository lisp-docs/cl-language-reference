 

The following terminology is used in this section. 

The *compiler* is a utility that translates code into an *implementation-dependent* form that might be represented or executed efficiently. The term *compiler* refers to both of the *functions* **compile** and **compile-file**. 

The term *compiled code* refers to *objects* representing compiled programs, such as *objects* constructed by **compile** or by **load** when *loading* a *compiled file*. 

The term *implicit compilation* refers to *compilation* performed during *evaluation*. 

The term *literal object* refers to a quoted *object* or a *self-evaluating object* or an *object* that is a substructure of such an *object*. A *constant variable* is not itself a *literal object*. 

The term *coalesce* is defined as follows. Suppose A and B are two *literal constants* in the *source code*, and that A’ and B’ are the corresponding *objects* in the *compiled code*. If A’ and B’ are **eql** but A and B are not **eql**, then it is said that A and B have been coalesced by the compiler. 

The term *minimal compilation* refers to actions the compiler must take at *compile time*. These actions are specified in Section 3.2.2 (Compilation Semantics). 

The verb *process* refers to performing *minimal compilation*, determining the time of evaluation for a *form*, and possibly *evaluating* that *form* (if required). 

The term *further compilation* refers to *implementation-dependent* compilation beyond *minimal compilation*. That is, *processing* does not imply complete compilation. Block compilation and generation of machine-specific instructions are examples of further compilation. Further compilation is permitted to take place at *run time*. 

Four different *environments* relevant to compilation are distinguished: the *startup environment*, the *compilation environment*, the *evaluation environment*, and the *run-time environment*. 

The *startup environment* is the *environment* of the *Lisp image* from which the *compiler* was invoked. 

The *compilation environment* is maintained by the compiler and is used to hold definitions and declarations to be used internally by the compiler. Only those parts of a definition needed for correct compilation are saved. The *compilation environment* is used as the *environment argument* to macro expanders called by the compiler. It is unspecified whether a definition available in the *compilation environment* can be used in an *evaluation* initiated in the *startup environment* or *evaluation environment*. 

The *evaluation environment* is a *run-time environment* in which macro expanders and code specified by **eval-when** to be evaluated are evaluated. All evaluations initiated by the *compiler*  



take place in the *evaluation environment*. 

The *run-time environment* is the *environment* in which the program being compiled will be executed. 

The *compilation environment* inherits from the *evaluation environment*, and the *compilation environment* and *evaluation environment* might be *identical*. The *evaluation environment* inherits from the *startup environment*, and the *startup environment* and *evaluation environment* might be *identical*. 

The term *compile time* refers to the duration of time that the compiler is processing *source code*. At *compile time*, only the *compilation environment* and the *evaluation environment* are available. 

The term *compile-time definition* refers to a definition in the *compilation environment*. For example, when compiling a file, the definition of a function might be retained in the *compilation environment* if it is declared **inline**. This definition might not be available in the *evaluation environment*. 

The term *run time* refers to the duration of time that the loader is loading compiled code or compiled code is being executed. At run time, only the *run-time environment* is available. 

The term *run-time definition* refers to a definition in the *run-time environment*. 

The term *run-time compiler* refers to the *function* **compile** or *implicit compilation*, for which the compilation and run-time *environments* are maintained in the same *Lisp image*. Note that when the *run-time compiler* is used, the *run-time environment* and *startup environment* are the same. 

