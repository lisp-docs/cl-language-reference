 



The following terminology is used in this section. 



The <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> is a utility that translates code into an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> form that might be represented or executed efficiently. The term <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> refers to both of the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>. 



The term *compiled code* refers to <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> representing compiled programs, such as <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> constructed by <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> or by <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> when *loading* a *compiled file*. 



The term *implicit compilation* refers to <GlossaryTerm styled={true} term={"compilation"}><i>compilation</i></GlossaryTerm> performed during <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm>. 



The term *literal object* refers to a quoted <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> or a *self-evaluating object* or an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is a substructure of such an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. A *constant variable* is not itself a *literal object*. 



The term <GlossaryTerm styled={true} term={"coalesce"}><i>coalesce</i></GlossaryTerm> is defined as follows. Suppose A and B are two *literal constants* in the *source code*, and that A’ and B’ are the corresponding <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in the *compiled code*. If A’ and B’ are <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> but A and B are not <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, then it is said that A and B have been coalesced by the compiler. 



The term *minimal compilation* refers to actions the compiler must take at *compile time*. These actions are specified in Section 3.2.2 (Compilation Semantics). 



The verb <GlossaryTerm styled={true} term={"process"}><i>process</i></GlossaryTerm> refers to performing *minimal compilation*, determining the time of evaluation for a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, and possibly *evaluating* that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> (if required). 



The term *further compilation* refers to <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> compilation beyond *minimal compilation*. That is, *processing* does not imply complete compilation. Block compilation and generation of machine-specific instructions are examples of further compilation. Further compilation is permitted to take place at *run time*. 



Four different <GlossaryTerm styled={true} term={"environment"}><i>environments</i></GlossaryTerm> relevant to compilation are distinguished: the *startup environment*, the *compilation environment*, the *evaluation environment*, and the *run-time environment*. 



The *startup environment* is the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> of the *Lisp image* from which the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> was invoked. 



The *compilation environment* is maintained by the compiler and is used to hold definitions and declarations to be used internally by the compiler. Only those parts of a definition needed for correct compilation are saved. The *compilation environment* is used as the *environment argument* to macro expanders called by the compiler. It is unspecified whether a definition available in the *compilation environment* can be used in an <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> initiated in the *startup environment* or *evaluation environment*. 



The *evaluation environment* is a *run-time environment* in which macro expanders and code specified by <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> to be evaluated are evaluated. All evaluations initiated by the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm>  







take place in the *evaluation environment*. 



The *run-time environment* is the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> in which the program being compiled will be executed. 



The *compilation environment* inherits from the *evaluation environment*, and the *compilation environment* and *evaluation environment* might be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>. The *evaluation environment* inherits from the *startup environment*, and the *startup environment* and *evaluation environment* might be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>. 



The term *compile time* refers to the duration of time that the compiler is processing *source code*. At *compile time*, only the *compilation environment* and the *evaluation environment* are available. 



The term *compile-time definition* refers to a definition in the *compilation environment*. For example, when compiling a file, the definition of a function might be retained in the *compilation environment* if it is declared <DictionaryLink styled={true} term={"inline"}><b>inline</b></DictionaryLink>. This definition might not be available in the *evaluation environment*. 



The term *run time* refers to the duration of time that the loader is loading compiled code or compiled code is being executed. At run time, only the *run-time environment* is available. 



The term *run-time definition* refers to a definition in the *run-time environment*. 



The term *run-time compiler* refers to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> or *implicit compilation*, for which the compilation and run-time <GlossaryTerm styled={true} term={"environment"}><i>environments</i></GlossaryTerm> are maintained in the same *Lisp image*. Note that when the *run-time compiler* is used, the *run-time environment* and *startup environment* are the same. 



