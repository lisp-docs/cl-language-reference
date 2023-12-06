**get-universal-time, get-decoded-time** *Function* 



**Syntax:** 



**get-universal-time** *hno argumentsi → universal-time* 



**get-decoded-time** *hno argumentsi* 



*→ second, minute, hour, date, month, year, day, daylight-p, zone* 



**Arguments and Values:** 



*universal-time*—a *universal time*. 



*second*, *minute*, *hour*, *date*, *month*, *year*, *day*, *daylight-p*, *zone*—a *decoded time*. 







 



 



**Description:** 



**get-universal-time** returns the current time, represented as a *universal time*. 



**get-decoded-time** returns the current time, represented as a *decoded time*. 



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



An error of *type* **error** might be signaled if the current time cannot be determined. 



**See Also:** 



**decode-universal-time**, **encode-universal-time**, Section 25.1.4 (Time) 



**Notes:** 



(get-decoded-time) *≡* (decode-universal-time (get-universal-time)) 



No *implementation* is required to have a way to verify that the time returned is correct. However, if an *implementation* provides a validity check (*e.g.*, the failure to have properly initialized the system clock can be reliably detected) and that validity check fails, the *implementation* is strongly encouraged (but not required) to signal an error of *type* **error** (rather than, for example, returning a known-to-be-wrong value) that is *correctable* by allowing the user to interactively set the correct time. 



