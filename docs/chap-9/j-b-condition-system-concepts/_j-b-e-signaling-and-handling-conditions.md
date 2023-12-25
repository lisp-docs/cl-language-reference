 



The operation of the condition system depends on the ordering of active *applicable handlers* from most recent to least recent. 



Each <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> is associated with a *type specifier* that must designate a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>. A <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> is said to be <GlossaryTerm styled={true} term={"applicable"}><i>applicable</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> if that <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> designated by the associated *type specifier* . 



*Active handlers* are *established* by using <DictionaryLink styled={true} term={"handler-bind"}><b>handler-bind</b></DictionaryLink> (or an abstraction based on <DictionaryLink styled={true} term={"handler-bind"}><b>handler-bind</b></DictionaryLink>, such as <DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink> or <DictionaryLink styled={true} term={"ignore-errors"}><b>ignore-errors</b></DictionaryLink>). 



*Active handlers* can be *established* within the dynamic scope of other *active handlers*. At any point during program execution, there is a set of *active handlers*. When a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is signaled, the *most* 







 



 



*recent* active *applicable handler* for that <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is selected from this set. Given a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>, the order of recentness of active *applicable handlers* is defined by the following two rules: 



1\. Each handler in a set of active handlers *H*<sub>1</sub> is more recent than every handler in a set *H*<sub>2</sub> if the handlers in *H*<sub>2</sub> were active when the handlers in *H*<sub>1</sub> were established. 



2\. Let *h*<sub>1</sub> and *h*<sub>2</sub> be two applicable active handlers established by the same <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Then *h*<sub>1</sub> is more recent than *h*<sub>2</sub> if *h*<sub>1</sub> was defined to the left of *h*<sub>2</sub> in the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that established them. 



Once a handler in a handler binding <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> (such as <DictionaryLink styled={true} term={"handler-bind"}><b>handler-bind</b></DictionaryLink> or <DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink>) has been selected, all handlers in that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> become inactive for the remainder of the signaling process. While the selected <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> runs, no other <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> established by that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is active. That is, if the <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> declines, no other handler established by that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> will be considered for possible invocation. 



Figure 9–4 shows <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> relating to the *handling* of <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm>. 



|**handler-bind handler-case ignore-errors**|

| :- |





**Figure 9–4. Operators relating to handling conditions.** 



