 



The following terminology is used in this section. 



The <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> is a utility that translates code into an <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> form that might be represented or executed efficiently. The term <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> refers to both of the <ClLinks  term={"function"}><i>functions</i></ClLinks> <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>. 



The term <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> refers to <ClLinks  term={"object"}><i>objects</i></ClLinks> representing compiled programs, such as <ClLinks  term={"object"}><i>objects</i></ClLinks> constructed by <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> or by <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> when *loading* a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>. 



The term <GlossaryTerm styled={true} term={"implicit compilation"}><i>implicit compilation</i></GlossaryTerm> refers to <ClLinks  term={"compilation"}><i>compilation</i></ClLinks> performed during <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks>. 



The term *literal object* refers to a quoted <ClLinks  term={"object"}><i>object</i></ClLinks> or a <GlossaryTerm styled={true} term={"self-evaluating object"}><i>self-evaluating object</i></GlossaryTerm> or an <ClLinks  term={"object"}><i>object</i></ClLinks> that is a substructure of such an <ClLinks  term={"object"}><i>object</i></ClLinks>. A <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm> is not itself a *literal object*. 



The term <ClLinks  term={"coalesce"}><i>coalesce</i></ClLinks> is defined as follows. Suppose A and B are two *literal constants* in the <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm>, and that A’ and B’ are the corresponding <ClLinks  term={"object"}><i>objects</i></ClLinks> in the <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm>. If A’ and B’ are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> but A and B are not <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, then it is said that A and B have been coalesced by the compiler. 



The term <GlossaryTerm styled={true} term={"minimal compilation"}><i>minimal compilation</i></GlossaryTerm> refers to actions the compiler must take at <GlossaryTerm styled={true} term={"compile time"}><i>compile time</i></GlossaryTerm>. These actions are specified in Section 3.2.2 (Compilation Semantics). 



The verb <ClLinks  term={"process"}><i>process</i></ClLinks> refers to performing <GlossaryTerm styled={true} term={"minimal compilation"}><i>minimal compilation</i></GlossaryTerm>, determining the time of evaluation for a <ClLinks  term={"form"}><i>form</i></ClLinks>, and possibly *evaluating* that <ClLinks  term={"form"}><i>form</i></ClLinks> (if required). 



The term <GlossaryTerm styled={true} term={"further compilation"}><i>further compilation</i></GlossaryTerm> refers to <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> compilation beyond <GlossaryTerm styled={true} term={"minimal compilation"}><i>minimal compilation</i></GlossaryTerm>. That is, *processing* does not imply complete compilation. Block compilation and generation of machine-specific instructions are examples of further compilation. Further compilation is permitted to take place at <GlossaryTerm styled={true} term={"run time"}><i>run time</i></GlossaryTerm>. 



Four different <ClLinks  term={"environment"}><i>environments</i></ClLinks> relevant to compilation are distinguished: the <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm> is the <ClLinks  term={"environment"}><i>environment</i></ClLinks> of the *Lisp image* from which the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> was invoked. 



The <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> is maintained by the compiler and is used to hold definitions and declarations to be used internally by the compiler. Only those parts of a definition needed for correct compilation are saved. The <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> is used as the *environment argument* to macro expanders called by the compiler. It is unspecified whether a definition available in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> can be used in an <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> initiated in the <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm> in which macro expanders and code specified by <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink> to be evaluated are evaluated. All evaluations initiated by the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks>  







take place in the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm> is the <ClLinks  term={"environment"}><i>environment</i></ClLinks> in which the program being compiled will be executed. 



The <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> inherits from the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> might be <ClLinks  term={"identical"}><i>identical</i></ClLinks>. The <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> inherits from the <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> might be <ClLinks  term={"identical"}><i>identical</i></ClLinks>. 



The term <GlossaryTerm styled={true} term={"compile time"}><i>compile time</i></GlossaryTerm> refers to the duration of time that the compiler is processing <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm>. At <GlossaryTerm styled={true} term={"compile time"}><i>compile time</i></GlossaryTerm>, only the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> are available. 



The term *compile-time definition* refers to a definition in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm>. For example, when compiling a file, the definition of a function might be retained in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> if it is declared <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink>. This definition might not be available in the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm>. 



The term <GlossaryTerm styled={true} term={"run time"}><i>run time</i></GlossaryTerm> refers to the duration of time that the loader is loading compiled code or compiled code is being executed. At run time, only the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm> is available. 



The term <GlossaryTerm styled={true} term={"run-time definition"}><i>run-time definition</i></GlossaryTerm> refers to a definition in the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm>. 



The term <GlossaryTerm styled={true} term={"run-time compiler"}><i>run-time compiler</i></GlossaryTerm> refers to the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> or <GlossaryTerm styled={true} term={"implicit compilation"}><i>implicit compilation</i></GlossaryTerm>, for which the compilation and run-time <ClLinks  term={"environment"}><i>environments</i></ClLinks> are maintained in the same *Lisp image*. Note that when the <GlossaryTerm styled={true} term={"run-time compiler"}><i>run-time compiler</i></GlossaryTerm> is used, the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"startup environment"}><i>startup environment</i></GlossaryTerm> are the same. 



