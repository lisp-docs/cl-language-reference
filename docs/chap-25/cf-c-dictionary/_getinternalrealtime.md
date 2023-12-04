**get-internal-real-time** *Function* 



**Syntax:** 



**get-internal-real-time** *hno argumentsi → internal-time* 



**Arguments and Values:** 



*internal-time*—a non-negative *integer* . 



**Description:** 



**get-internal-real-time** returns as an *integer* the current time in *internal time units*, relative to an arbitrary time base. The difference between the values of two calls to this function is the amount of elapsed real time (*i.e.*, clock time) between the two calls. 



**Affected By:** 



Time of day (*i.e.*, the passage of time). The time base affects the result magnitude. 



 



 



**See Also:** 



**internal-time-units-per-second** 



