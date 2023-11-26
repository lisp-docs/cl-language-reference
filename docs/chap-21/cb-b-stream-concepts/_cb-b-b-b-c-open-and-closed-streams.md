 

*Streams* are either *open* or *closed*. 

Except as explicitly specified otherwise, operations that create and return *streams* return *open streams*. 

The action of *closing* a *stream* marks the end of its use as a source or sink of data, permitting the *implementation* to reclaim its internal data structures, and to free any external resources which might have been locked by the *stream* when it was opened. 

Except as explicitly specified otherwise, the consequences are undefined when a *closed stream* is used where a *stream* is called for. 

Coercion of *streams* to *pathnames* is permissible for *closed streams*; in some situations, such as for a *truename* computation, the result might be different for an *open stream* and for that same *stream* once it has been *closed*. 

