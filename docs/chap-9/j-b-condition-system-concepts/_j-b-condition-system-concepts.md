 



Common Lisp constructs are described not only in terms of their behavior in situations during which they are intended to be used (see the “Description” part of each <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> specification), but in all other situations (see the “Exceptional Situations” part of each <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> specification). 



A situation is the evaluation of an expression in a specific context. A <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that represents a specific situation that has been detected. <GlossaryTerm styled={true} term={"condition"}><i>Conditions</i></GlossaryTerm> are *generalized instances* of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>. A hierarchy of <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> classes is defined in Common Lisp. A <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> that contain data relevant to the situation that the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> represents. 



An error is a situation in which normal program execution cannot continue correctly without some form of intervention (either interactively by the user or under program control). Not all errors are detected. When an error goes undetected, the effects can be <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>, unspecified, or undefined. See Section 1.4 (Definitions). All detected errors can be represented by <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm>, but not all <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> represent errors. 



Signaling is the process by which a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> can alter the flow of control in a program by raising the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> which can then be *handled*. The functions <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink>, <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink>, and <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink> are used to signal <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm>. 



The process of signaling involves the selection and invocation of a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> from a set of *active handlers*. A <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument (the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>) that is invoked to handle a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. Each <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> is associated with a *condition type*, and a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> will be invoked only on a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> ’s associated <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



*Active handlers* are *established* dynamically (see <DictionaryLink styled={true} term={"handler-bind"}><b>handler-bind</b></DictionaryLink> or <DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink>). <GlossaryTerm styled={true} term={"handler"}><i>Handlers</i></GlossaryTerm> are invoked in a *dynamic environment* equivalent to that of the signaler, except that the set of *active handlers* is bound in such a way as to include only those that were <GlossaryTerm styled={true} term={"active"}><i>active</i></GlossaryTerm> at the time the <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> being invoked was *established*. Signaling a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> has no side-effect on the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>, and there is no dynamic state contained in a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



If a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> is invoked, it can address the <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> in one of three ways: 



**Decline** 



It can decline to <GlossaryTerm styled={true} term={"handle"}><i>handle</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. It does this by simply returning rather than transferring control. When this happens, any values returned by the handler are ignored and the next most recently established handler is invoked. If there is no such handler and the signaling function is <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink>, the debugger is entered in the *dynamic environment* of the signaler. If there is no such handler and the signaling function is either <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> or <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink>, the signaling function simply returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Handle** 



It can <GlossaryTerm styled={true} term={"handle"}><i>handle</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> by performing a non-local transfer of control. This can be done either primitively by using <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>, <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink>, <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> or more abstractly by using a function such as **abort** or <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>. 







 



 



**Defer** 



It can put off a decision about whether to <GlossaryTerm styled={true} term={"handle"}><i>handle</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"decline"}><i>decline</i></GlossaryTerm>, by any of a number of actions, but most commonly by signaling another condition, resignaling the same condition, or forcing entry into the debugger. 



