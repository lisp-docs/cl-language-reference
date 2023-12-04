**get-internal-run-time** *Function* 



**Syntax:** 



**get-internal-run-time** *hno argumentsi → internal-time* 



**Arguments and Values:** 



*internal-time*—a non-negative *integer* . 



**Description:** 



Returns as an *integer* the current run time in *internal time units*. The precise meaning of this quantity is *implementation-defined*; it may measure real time, run time, CPU cycles, or some other quantity. The intent is that the difference between the values of two calls to this function be the amount of time between the two calls during which computational effort was expended on behalf of the executing program. 



**Affected By:** 



The *implementation*, the time of day (*i.e.*, the passage of time). 



**See Also:** 



**internal-time-units-per-second** 



**Notes:** 



Depending on the *implementation*, paging time and garbage collection time might be included in this measurement. Also, in a multitasking environment, it might not be possible to show the time for just the running process, so in some *implementations*, time taken by other processes during the same time interval might be included in this measurement as well. 







 



 



