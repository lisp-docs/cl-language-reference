**get-internal-real-time** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"get-internal-real-time"}><b>get-internal-real-time</b></ClLinks> *⟨no arguments⟩ → internal-time* 



**Arguments and Values:** 



*internal-time*—a non-negative *integer* . 



**Description:** 



<ClLinks styled={true} term={"get-internal-real-time"}><b>get-internal-real-time</b></ClLinks> returns as an *integer* the current time in *internal time units*, relative to an arbitrary time base. The difference between the values of two calls to this function is the amount of elapsed real time (*i.e.*, clock time) between the two calls. 



**Affected By:** 



Time of day (*i.e.*, the passage of time). The time base affects the result magnitude. 



 



 



**See Also:** 



<ClLinks styled={true} term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></ClLinks> 



