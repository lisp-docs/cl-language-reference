 



<GlossaryTerm  term={"stream"}><i>Streams</i></GlossaryTerm> are either <GlossaryTerm  term={"open"}><i>open</i></GlossaryTerm> or <GlossaryTerm  term={"closed"}><i>closed</i></GlossaryTerm>. 



Except as explicitly specified otherwise, operations that create and return <GlossaryTerm  term={"stream"}><i>streams</i></GlossaryTerm> return *open streams*. 



The action of *closing* a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> marks the end of its use as a source or sink of data, permitting the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to reclaim its internal data structures, and to free any external resources which might have been locked by the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> when it was opened. 



Except as explicitly specified otherwise, the consequences are undefined when a *closed stream* is used where a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is called for. 



Coercion of <GlossaryTerm  term={"stream"}><i>streams</i></GlossaryTerm> to <GlossaryTerm  term={"pathname"}><i>pathnames</i></GlossaryTerm> is permissible for *closed streams*; in some situations, such as for a <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm> computation, the result might be different for an *open stream* and for that same <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> once it has been <GlossaryTerm  term={"closed"}><i>closed</i></GlossaryTerm>. 



