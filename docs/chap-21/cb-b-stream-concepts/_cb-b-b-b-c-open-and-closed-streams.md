 



<ClLinks styled={true} term={"stream"}><i>Streams</i></ClLinks> are either <ClLinks styled={true} term={"open"}><i>open</i></ClLinks> or <ClLinks styled={true} term={"closed"}><i>closed</i></ClLinks>. 



Except as explicitly specified otherwise, operations that create and return <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks> return *open streams*. 



The action of *closing* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> marks the end of its use as a source or sink of data, permitting the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to reclaim its internal data structures, and to free any external resources which might have been locked by the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> when it was opened. 



Except as explicitly specified otherwise, the consequences are undefined when a *closed stream* is used where a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is called for. 



Coercion of <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks> to <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks> is permissible for *closed streams*; in some situations, such as for a <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> computation, the result might be different for an *open stream* and for that same <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> once it has been <ClLinks styled={true} term={"closed"}><i>closed</i></ClLinks>. 



