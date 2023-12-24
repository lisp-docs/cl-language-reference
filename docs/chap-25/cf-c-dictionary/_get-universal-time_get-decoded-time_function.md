**get-universal-time, get-decoded-time** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"get-universal-time"}><b>get-universal-time</b></ClLinks> *⟨no arguments⟩ → universal-time* 



<ClLinks styled={true} term={"get-decoded-time"}><b>get-decoded-time</b></ClLinks> *⟨no arguments⟩* 



*→ second, minute, hour, date, month, year, day, daylight-p, zone* 



**Arguments and Values:** 



*universal-time*—a *universal time*. 



*second*, *minute*, *hour*, *date*, *month*, *year*, *day*, *daylight-p*, *zone*—a *decoded time*. 







 



 



**Description:** 



<ClLinks styled={true} term={"get-universal-time"}><b>get-universal-time</b></ClLinks> returns the current time, represented as a *universal time*. 



<ClLinks styled={true} term={"get-decoded-time"}><b>get-decoded-time</b></ClLinks> returns the current time, represented as a *decoded time*. 



**Examples:**
```lisp

;; At noon on July 4, 1976 in Eastern Daylight Time. 
(get-decoded-time) → 0, 0, 12, 4, 7, 1976, 6, *true*, 5 
;; At exactly the same instant. 
(get-universal-time) → 2414332800 
;; Exactly five minutes later. 
(get-universal-time) → 2414333100 
;; The difference is 300 seconds (five minutes) 
(- \* \*\*) → 300 

```
**Affected By:** 



The time of day (*i.e.*, the passage of time), the system clock’s ability to keep accurate time, and the accuracy of the system clock’s initial setting. 



**Exceptional Situations:** 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> might be signaled if the current time cannot be determined. 



**See Also:** 



<ClLinks styled={true} term={"decode-universal-time"}><b>decode-universal-time</b></ClLinks>, <ClLinks styled={true} term={"encode-universal-time"}><b>encode-universal-time</b></ClLinks>, Section 25.1.4 (Time) 



**Notes:** 



(get-decoded-time) *≡* (decode-universal-time (get-universal-time)) 



No <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is required to have a way to verify that the time returned is correct. However, if an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> provides a validity check (*e.g.*, the failure to have properly initialized the system clock can be reliably detected) and that validity check fails, the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is strongly encouraged (but not required) to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> (rather than, for example, returning a known-to-be-wrong value) that is <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks> by allowing the user to interactively set the correct time. 



