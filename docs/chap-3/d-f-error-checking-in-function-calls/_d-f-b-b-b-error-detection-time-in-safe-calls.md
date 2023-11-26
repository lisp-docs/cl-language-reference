**3.5.1.1.1 Error Detection Time in Safe Calls** 

If an error is signaled in a *safe call*, the exact point of the *signal* is *implementation-dependent*. In particular, it might be signaled at compile time or at run time, and if signaled at run time, it might be prior to, during, or after *executing* the *call*. However, it is always prior to the execution of the body of the *function* being *called*. 

