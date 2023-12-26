 



If an error is signaled in a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm>, the exact point of the <GlossaryTerm  term={"signal"}><i>signal</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. In particular, it might be signaled at compile time or at run time, and if signaled at run time, it might be prior to, during, or after *executing* the <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm>. However, it is always prior to the execution of the body of the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> being *called*. 



