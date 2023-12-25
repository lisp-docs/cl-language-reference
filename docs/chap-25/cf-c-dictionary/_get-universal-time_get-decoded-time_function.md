**get-universal-time, get-decoded-time** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"get-universal-time"}><b>get-universal-time</b></DictionaryLink> *hno argumentsi → universal-time* 



<DictionaryLink styled={true} term={"get-decoded-time"}><b>get-decoded-time</b></DictionaryLink> *hno argumentsi* 



*→ second, minute, hour, date, month, year, day, daylight-p, zone* 



**Arguments and Values:** 



*universal-time*—a *universal time*. 



*second*, *minute*, *hour*, *date*, *month*, *year*, *day*, *daylight-p*, *zone*—a *decoded time*. 







 



 



**Description:** 



<DictionaryLink styled={true} term={"get-universal-time"}><b>get-universal-time</b></DictionaryLink> returns the current time, represented as a *universal time*. 



<DictionaryLink styled={true} term={"get-decoded-time"}><b>get-decoded-time</b></DictionaryLink> returns the current time, represented as a *decoded time*. 



**Examples:**
```lisp

;; At noon on July 4, 1976 in Eastern Daylight Time. 
(get-decoded-time) *→* 0, 0, 12, 4, 7, 1976, 6, *true*, 5 
;; At exactly the same instant. 
(get-universal-time) *→* 2414332800 
;; Exactly five minutes later. 
(get-universal-time) *→* 2414333100 
;; The difference is 300 seconds (five minutes) 
(- \* \*\*) *→* 300 

```
**Affected By:** 



The time of day (*i.e.*, the passage of time), the system clock’s ability to keep accurate time, and the accuracy of the system clock’s initial setting. 



**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> might be signaled if the current time cannot be determined. 



**See Also:** 



<DictionaryLink styled={true} term={"decode-universal-time"}><b>decode-universal-time</b></DictionaryLink>, <DictionaryLink styled={true} term={"encode-universal-time"}><b>encode-universal-time</b></DictionaryLink>, Section 25.1.4 (Time) 



**Notes:** 



(get-decoded-time) *≡* (decode-universal-time (get-universal-time)) 



No <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is required to have a way to verify that the time returned is correct. However, if an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> provides a validity check (*e.g.*, the failure to have properly initialized the system clock can be reliably detected) and that validity check fails, the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is strongly encouraged (but not required) to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> (rather than, for example, returning a known-to-be-wrong value) that is <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm> by allowing the user to interactively set the correct time. 



