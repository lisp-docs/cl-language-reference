 



<ClLinks  term={"stream"}><i>Streams</i></ClLinks> are either <ClLinks  term={"open"}><i>open</i></ClLinks> or <ClLinks  term={"closed"}><i>closed</i></ClLinks>. 



Except as explicitly specified otherwise, operations that create and return <ClLinks  term={"stream"}><i>streams</i></ClLinks> return *open streams*. 



The action of *closing* a <ClLinks  term={"stream"}><i>stream</i></ClLinks> marks the end of its use as a source or sink of data, permitting the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to reclaim its internal data structures, and to free any external resources which might have been locked by the <ClLinks  term={"stream"}><i>stream</i></ClLinks> when it was opened. 



Except as explicitly specified otherwise, the consequences are undefined when a *closed stream* is used where a <ClLinks  term={"stream"}><i>stream</i></ClLinks> is called for. 



Coercion of <ClLinks  term={"stream"}><i>streams</i></ClLinks> to <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks> is permissible for *closed streams*; in some situations, such as for a <ClLinks  term={"truename"}><i>truename</i></ClLinks> computation, the result might be different for an *open stream* and for that same <ClLinks  term={"stream"}><i>stream</i></ClLinks> once it has been <ClLinks  term={"closed"}><i>closed</i></ClLinks>. 



