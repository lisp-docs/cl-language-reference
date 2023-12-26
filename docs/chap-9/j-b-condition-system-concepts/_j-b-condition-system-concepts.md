 



Common Lisp constructs are described not only in terms of their behavior in situations during which they are intended to be used (see the “Description” part of each <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> specification), but in all other situations (see the “Exceptional Situations” part of each <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> specification). 



A situation is the evaluation of an expression in a specific context. A <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that represents a specific situation that has been detected. <ClLinks styled={true} term={"condition"}><i>Conditions</i></ClLinks> are <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instances</i></GlossaryTerm> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>. A hierarchy of <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> classes is defined in Common Lisp. A <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> has <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> that contain data relevant to the situation that the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> represents. 



An error is a situation in which normal program execution cannot continue correctly without some form of intervention (either interactively by the user or under program control). Not all errors are detected. When an error goes undetected, the effects can be <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>, unspecified, or undefined. See Section 1.4 (Definitions). All detected errors can be represented by <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks>, but not all <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> represent errors. 



Signaling is the process by which a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> can alter the flow of control in a program by raising the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> which can then be *handled*. The functions <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks>, <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks>, and <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks> are used to signal <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks>. 



The process of signaling involves the selection and invocation of a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> from a set of *active handlers*. A <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument (the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>) that is invoked to handle a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. Each <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> is associated with a *condition type*, and a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> will be invoked only on a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of the <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> ’s associated <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



*Active handlers* are *established* dynamically (see <ClLinks styled={true} term={"handler-bind"}><b>handler-bind</b></ClLinks> or <ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks>). <ClLinks styled={true} term={"handler"}><i>Handlers</i></ClLinks> are invoked in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> equivalent to that of the signaler, except that the set of *active handlers* is bound in such a way as to include only those that were <ClLinks styled={true} term={"active"}><i>active</i></ClLinks> at the time the <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> being invoked was *established*. Signaling a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> has no side-effect on the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>, and there is no dynamic state contained in a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



If a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> is invoked, it can address the <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> in one of three ways: 



**Decline** 



It can decline to <ClLinks styled={true} term={"handle"}><i>handle</i></ClLinks> the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. It does this by simply returning rather than transferring control. When this happens, any values returned by the handler are ignored and the next most recently established handler is invoked. If there is no such handler and the signaling function is <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> or <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks>, the debugger is entered in the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> of the signaler. If there is no such handler and the signaling function is either <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> or <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks>, the signaling function simply returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Handle** 



It can <ClLinks styled={true} term={"handle"}><i>handle</i></ClLinks> the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> by performing a non-local transfer of control. This can be done either primitively by using <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>, <ClLinks styled={true} term={"return"}><b>return</b></ClLinks>, <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> or more abstractly by using a function such as **abort** or <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>. 







 



 



**Defer** 



It can put off a decision about whether to <ClLinks styled={true} term={"handle"}><i>handle</i></ClLinks> or <ClLinks styled={true} term={"decline"}><i>decline</i></ClLinks>, by any of a number of actions, but most commonly by signaling another condition, resignaling the same condition, or forcing entry into the debugger. 



