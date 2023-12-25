 



<GlossaryTerm styled={true} term={"stream"}><i>Streams</i></GlossaryTerm> are either <GlossaryTerm styled={true} term={"open"}><i>open</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm>. 



Except as explicitly specified otherwise, operations that create and return <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm> return *open streams*. 



The action of *closing* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> marks the end of its use as a source or sink of data, permitting the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to reclaim its internal data structures, and to free any external resources which might have been locked by the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> when it was opened. 



Except as explicitly specified otherwise, the consequences are undefined when a *closed stream* is used where a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is called for. 



Coercion of <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> is permissible for *closed streams*; in some situations, such as for a <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm> computation, the result might be different for an *open stream* and for that same <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> once it has been <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm>. 



