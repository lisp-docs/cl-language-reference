**get-internal-real-time** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"get-internal-real-time"}><b>get-internal-real-time</b></DictionaryLink> *hno argumentsi → internal-time* 



**Arguments and Values:** 



*internal-time*—a non-negative *integer* . 



**Description:** 



<DictionaryLink styled={true} term={"get-internal-real-time"}><b>get-internal-real-time</b></DictionaryLink> returns as an *integer* the current time in *internal time units*, relative to an arbitrary time base. The difference between the values of two calls to this function is the amount of elapsed real time (*i.e.*, clock time) between the two calls. 



**Affected By:** 



Time of day (*i.e.*, the passage of time). The time base affects the result magnitude. 



 



 



**See Also:** 



<DictionaryLink styled={true} term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></DictionaryLink> 



