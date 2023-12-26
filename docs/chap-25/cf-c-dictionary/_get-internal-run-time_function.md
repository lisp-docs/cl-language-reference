**get-internal-run-time** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"get-internal-run-time"}><b>get-internal-run-time</b></ClLinks> *⟨no arguments⟩ → internal-time* 



**Arguments and Values:** 



*internal-time*—a non-negative *integer* . 



**Description:** 



Returns as an *integer* the current run time in <GlossaryTerm styled={true} term={"internal time unit"}><i>internal time units</i></GlossaryTerm>. The precise meaning of this quantity is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>; it may measure real time, run time, CPU cycles, or some other quantity. The intent is that the difference between the values of two calls to this function be the amount of time between the two calls during which computational effort was expended on behalf of the executing program. 



**Affected By:** 



The <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, the time of day (*i.e.*, the passage of time). 



**See Also:** 



<ClLinks styled={true} term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></ClLinks> 



**Notes:** 



Depending on the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, paging time and garbage collection time might be included in this measurement. Also, in a multitasking environment, it might not be possible to show the time for just the running process, so in some <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks>, time taken by other processes during the same time interval might be included in this measurement as well. 







 



 



