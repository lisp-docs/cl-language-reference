 



The following terminology is used in this section. 



The <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> is a utility that translates code into an <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> form that might be represented or executed efficiently. The term <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> refers to both of the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>. 



The term <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> refers to <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> representing compiled programs, such as <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> constructed by <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> or by <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> when *loading* a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>. 



The term <GlossaryTerm styled={true} term={"implicit compilation"}><i>implicit compilation</i></GlossaryTerm> refers to <GlossaryTerm  term={"compilation"}><i>compilation</i></GlossaryTerm> performed during <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm>. 



The term *literal object* refers to a quoted <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"self-evaluating object"}><i>self-evaluating object</i></GlossaryTerm> or an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is a substructure of such an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm> is not itself a *literal object*. 



The term <GlossaryTerm  term={"coalesce"}><i>coalesce</i></GlossaryTerm> is defined as follows. Suppose A and B are two *literal constants* in the <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm>, and that A’ and B’ are the corresponding <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm>. If A’ and B’ are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> but A and B are not <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, then it is said that A and B have been coalesced by the compiler. 



The term <GlossaryTerm styled={true} term={"minimal compilation"}><i>minimal compilation</i></GlossaryTerm> refers to actions the compiler must take at <GlossaryTerm styled={true} term={"compile time"}><i>compile time</i></GlossaryTerm>. These actions are specified in Section 3.2.2 (Compilation Semantics). 



The verb <GlossaryTerm  term={"process"}><i>process</i></GlossaryTerm> refers to performing <GlossaryTerm styled={true} term={"minimal compilation"}><i>minimal compilation</i></GlossaryTerm>, determining the time of evaluation for a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, and possibly *evaluating* that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> (if required). 



The term <GlossaryTerm styled={true} term={"further compilation"}><i>further compilation</i></GlossaryTerm> refers to <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> compilation beyond <GlossaryTerm styled={true} term={"minimal compilation"}><i>minimal compilation</i></GlossaryTerm>. That is, *processing* does not imply complete compilation. Block compilation and generation of machine-specific instructions are examples of further compilation. Further compilation is permitted to take place at <GlossaryTerm styled={true} term={"run time"}><i>run time</i></GlossaryTerm>. 



Four different <GlossaryTerm  term={"environment"}><i>environments</i></GlossaryTerm> relevant to compilation are distinguished: the <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm> is the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> of the *Lisp image* from which the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> was invoked. 



The <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> is maintained by the compiler and is used to hold definitions and declarations to be used internally by the compiler. Only those parts of a definition needed for correct compilation are saved. The <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> is used as the *environment argument* to macro expanders called by the compiler. It is unspecified whether a definition available in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> can be used in an <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> initiated in the <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm> in which macro expanders and code specified by <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink> to be evaluated are evaluated. All evaluations initiated by the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm>  







take place in the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm> is the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> in which the program being compiled will be executed. 



The <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> inherits from the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> might be <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> inherits from the <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> might be <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>. 



The term <GlossaryTerm styled={true} term={"compile time"}><i>compile time</i></GlossaryTerm> refers to the duration of time that the compiler is processing <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm>. At <GlossaryTerm styled={true} term={"compile time"}><i>compile time</i></GlossaryTerm>, only the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> are available. 



The term *compile-time definition* refers to a definition in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm>. For example, when compiling a file, the definition of a function might be retained in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> if it is declared <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink>. This definition might not be available in the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm>. 



The term <GlossaryTerm styled={true} term={"run time"}><i>run time</i></GlossaryTerm> refers to the duration of time that the loader is loading compiled code or compiled code is being executed. At run time, only the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm> is available. 



The term <GlossaryTerm styled={true} term={"run-time definition"}><i>run-time definition</i></GlossaryTerm> refers to a definition in the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm>. 



The term <GlossaryTerm styled={true} term={"run-time compiler"}><i>run-time compiler</i></GlossaryTerm> refers to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> or <GlossaryTerm styled={true} term={"implicit compilation"}><i>implicit compilation</i></GlossaryTerm>, for which the compilation and run-time <GlossaryTerm  term={"environment"}><i>environments</i></GlossaryTerm> are maintained in the same *Lisp image*. Note that when the <GlossaryTerm styled={true} term={"run-time compiler"}><i>run-time compiler</i></GlossaryTerm> is used, the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm> are the same. 



