 



The following terminology is used in this section. 



The <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> is a utility that translates code into an <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> form that might be represented or executed efficiently. The term <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> refers to both of the <ClLinks  term={"function"}><i>functions</i></ClLinks> <ClLinks  term={"compile"}><b>compile</b></ClLinks> and <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>. 



The term *compiled code* refers to <ClLinks  term={"object"}><i>objects</i></ClLinks> representing compiled programs, such as <ClLinks  term={"object"}><i>objects</i></ClLinks> constructed by <ClLinks  term={"compile"}><b>compile</b></ClLinks> or by <ClLinks  term={"load"}><b>load</b></ClLinks> when *loading* a *compiled file*. 



The term *implicit compilation* refers to <ClLinks  term={"compilation"}><i>compilation</i></ClLinks> performed during <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks>. 



The term *literal object* refers to a quoted <ClLinks  term={"object"}><i>object</i></ClLinks> or a *self-evaluating object* or an <ClLinks  term={"object"}><i>object</i></ClLinks> that is a substructure of such an <ClLinks  term={"object"}><i>object</i></ClLinks>. A *constant variable* is not itself a *literal object*. 



The term <ClLinks  term={"coalesce"}><i>coalesce</i></ClLinks> is defined as follows. Suppose A and B are two *literal constants* in the *source code*, and that A’ and B’ are the corresponding <ClLinks  term={"object"}><i>objects</i></ClLinks> in the *compiled code*. If A’ and B’ are <ClLinks  term={"eql"}><b>eql</b></ClLinks> but A and B are not <ClLinks  term={"eql"}><b>eql</b></ClLinks>, then it is said that A and B have been coalesced by the compiler. 



The term *minimal compilation* refers to actions the compiler must take at *compile time*. These actions are specified in Section 3.2.2 (Compilation Semantics). 



The verb <ClLinks  term={"process"}><i>process</i></ClLinks> refers to performing *minimal compilation*, determining the time of evaluation for a <ClLinks  term={"form"}><i>form</i></ClLinks>, and possibly *evaluating* that <ClLinks  term={"form"}><i>form</i></ClLinks> (if required). 



The term *further compilation* refers to <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> compilation beyond *minimal compilation*. That is, *processing* does not imply complete compilation. Block compilation and generation of machine-specific instructions are examples of further compilation. Further compilation is permitted to take place at *run time*. 



Four different <ClLinks  term={"environment"}><i>environments</i></ClLinks> relevant to compilation are distinguished: the *startup environment*, the *compilation environment*, the *evaluation environment*, and the *run-time environment*. 



The *startup environment* is the <ClLinks  term={"environment"}><i>environment</i></ClLinks> of the *Lisp image* from which the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> was invoked. 



The *compilation environment* is maintained by the compiler and is used to hold definitions and declarations to be used internally by the compiler. Only those parts of a definition needed for correct compilation are saved. The *compilation environment* is used as the *environment argument* to macro expanders called by the compiler. It is unspecified whether a definition available in the *compilation environment* can be used in an <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> initiated in the *startup environment* or *evaluation environment*. 



The *evaluation environment* is a *run-time environment* in which macro expanders and code specified by <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> to be evaluated are evaluated. All evaluations initiated by the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks>  







take place in the *evaluation environment*. 



The *run-time environment* is the <ClLinks  term={"environment"}><i>environment</i></ClLinks> in which the program being compiled will be executed. 



The *compilation environment* inherits from the *evaluation environment*, and the *compilation environment* and *evaluation environment* might be <ClLinks  term={"identical"}><i>identical</i></ClLinks>. The *evaluation environment* inherits from the *startup environment*, and the *startup environment* and *evaluation environment* might be <ClLinks  term={"identical"}><i>identical</i></ClLinks>. 



The term *compile time* refers to the duration of time that the compiler is processing *source code*. At *compile time*, only the *compilation environment* and the *evaluation environment* are available. 



The term *compile-time definition* refers to a definition in the *compilation environment*. For example, when compiling a file, the definition of a function might be retained in the *compilation environment* if it is declared <ClLinks  term={"inline"}><b>inline</b></ClLinks>. This definition might not be available in the *evaluation environment*. 



The term *run time* refers to the duration of time that the loader is loading compiled code or compiled code is being executed. At run time, only the *run-time environment* is available. 



The term *run-time definition* refers to a definition in the *run-time environment*. 



The term *run-time compiler* refers to the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"compile"}><b>compile</b></ClLinks> or *implicit compilation*, for which the compilation and run-time <ClLinks  term={"environment"}><i>environments</i></ClLinks> are maintained in the same *Lisp image*. Note that when the *run-time compiler* is used, the *run-time environment* and *startup environment* are the same. 



