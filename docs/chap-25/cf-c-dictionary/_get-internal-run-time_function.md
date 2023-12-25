**get-internal-run-time** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"get-internal-run-time"}><b>get-internal-run-time</b></DictionaryLink> *hno argumentsi → internal-time* 



**Arguments and Values:** 



*internal-time*—a non-negative *integer* . 



**Description:** 



Returns as an *integer* the current run time in *internal time units*. The precise meaning of this quantity is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>; it may measure real time, run time, CPU cycles, or some other quantity. The intent is that the difference between the values of two calls to this function be the amount of time between the two calls during which computational effort was expended on behalf of the executing program. 



**Affected By:** 



The <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, the time of day (*i.e.*, the passage of time). 



**See Also:** 



<DictionaryLink styled={true} term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></DictionaryLink> 



**Notes:** 



Depending on the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, paging time and garbage collection time might be included in this measurement. Also, in a multitasking environment, it might not be possible to show the time for just the running process, so in some <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm>, time taken by other processes during the same time interval might be included in this measurement as well. 







 



 



