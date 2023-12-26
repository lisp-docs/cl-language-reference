 



The operation of the condition system depends on the ordering of active <GlossaryTerm styled={true} term={"applicable handler"}><i>applicable handlers</i></GlossaryTerm> from most recent to least recent. 



Each <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> is associated with a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> that must designate a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>. A <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> is said to be <ClLinks styled={true} term={"applicable"}><i>applicable</i></ClLinks> to a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> if that <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> designated by the associated <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



*Active handlers* are *established* by using <ClLinks styled={true} term={"handler-bind"}><b>handler-bind</b></ClLinks> (or an abstraction based on <ClLinks styled={true} term={"handler-bind"}><b>handler-bind</b></ClLinks>, such as <ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks> or <ClLinks styled={true} term={"ignore-errors"}><b>ignore-errors</b></ClLinks>). 



*Active handlers* can be *established* within the dynamic scope of other *active handlers*. At any point during program execution, there is a set of *active handlers*. When a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is signaled, the *most* 







 



 



*recent* active <GlossaryTerm styled={true} term={"applicable handler"}><i>applicable handler</i></GlossaryTerm> for that <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is selected from this set. Given a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>, the order of recentness of active <GlossaryTerm styled={true} term={"applicable handler"}><i>applicable handlers</i></GlossaryTerm> is defined by the following two rules: 



1\. Each handler in a set of active handlers *H*<sub>1</sub> is more recent than every handler in a set *H*<sub>2</sub> if the handlers in *H*<sub>2</sub> were active when the handlers in *H*<sub>1</sub> were established. 



2\. Let *h*<sub>1</sub> and *h*<sub>2</sub> be two applicable active handlers established by the same <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. Then *h*<sub>1</sub> is more recent than *h*<sub>2</sub> if *h*<sub>1</sub> was defined to the left of *h*<sub>2</sub> in the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that established them. 



Once a handler in a handler binding <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> (such as <ClLinks styled={true} term={"handler-bind"}><b>handler-bind</b></ClLinks> or <ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks>) has been selected, all handlers in that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> become inactive for the remainder of the signaling process. While the selected <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> runs, no other <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> established by that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is active. That is, if the <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> declines, no other handler established by that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> will be considered for possible invocation. 



Figure 9–4 shows <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> relating to the *handling* of <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks>. 



|**handler-bind handler-case ignore-errors**|

| :- |





**Figure 9–4. Operators relating to handling conditions.** 



