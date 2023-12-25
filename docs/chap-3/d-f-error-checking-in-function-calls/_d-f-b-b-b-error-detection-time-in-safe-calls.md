 



If an error is signaled in a *safe call*, the exact point of the <GlossaryTerm styled={true} term={"signal"}><i>signal</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. In particular, it might be signaled at compile time or at run time, and if signaled at run time, it might be prior to, during, or after *executing* the <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm>. However, it is always prior to the execution of the body of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> being *called*. 



