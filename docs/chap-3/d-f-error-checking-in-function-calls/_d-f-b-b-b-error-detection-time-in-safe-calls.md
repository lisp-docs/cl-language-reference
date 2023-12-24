 



If an error is signaled in a *safe call*, the exact point of the <ClLinks styled={true} term={"signal"}><i>signal</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. In particular, it might be signaled at compile time or at run time, and if signaled at run time, it might be prior to, during, or after *executing* the <ClLinks styled={true} term={"call"}><i>call</i></ClLinks>. However, it is always prior to the execution of the body of the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> being *called*. 



