**decode-universal-time** *Function* 



**Syntax:** 



**decode-universal-time** *universal-time* &optional *time-zone* 



*→ second, minute, hour, date, month, year, day, daylight-p, zone* 



**Arguments and Values:** 



*universal-time*—a *universal time*. 



*time-zone*—a *time zone*. 



*second*, *minute*, *hour*, *date*, *month*, *year*, *day*, *daylight-p*, *zone*—a *decoded time*. 



**Description:** 



Returns the *decoded time* represented by the given *universal time*. 



If *time-zone* is not supplied, it defaults to the current time zone adjusted for daylight saving time. If *time-zone* is supplied, daylight saving time information is ignored. The daylight saving time flag is **nil** if *time-zone* is supplied. 



**Examples:**
```lisp
 



(decode-universal-time 0 0) *→* 0, 0, 0, 1, 1, 1900, 0, *false*, 0 



;; The next two examples assume Eastern Daylight Time. 



(decode-universal-time 2414296800 5) *→* 0, 0, 1, 4, 7, 1976, 6, *false*, 5 



(decode-universal-time 2414293200) *→* 0, 0, 1, 4, 7, 1976, 6, *true*, 5 



;; This example assumes that the time zone is Eastern Daylight Time 



;; (and that the time zone is constant throughout the example). 



(let\* ((here (nth 8 (multiple-value-list (get-decoded-time)))) ;Time zone 



(recently (get-universal-time)) 



(a (nthcdr 7 (multiple-value-list (decode-universal-time recently)))) 



(b (nthcdr 7 (multiple-value-list (decode-universal-time recently here))))) 



(list a b (equal a b))) *→* ((T 5) (NIL 5) NIL) 




```
**Affected By:** 



*Implementation-dependent* mechanisms for calculating when or if daylight savings time is in effect for any given session. 



**See Also:** 



**encode-universal-time**, **get-universal-time**, Section 25.1.4 (Time) 







 



 



**encode-universal-time** *function* 



**Syntax:** 



**encode-universal-time** *second minute hour date month year* 



&optional *time-zone* 



*→ universal-time* 



**Arguments and Values:** 



*second*, *minute*, *hour*, *date*, *month*, *year*, *time-zone*—the corresponding parts of a *decoded time*. (Note that some of the nine values in a full *decoded time* are redundant, and so are not used as inputs to this function.) 



*universal-time*—a *universal time*. 



**Description:** 



**encode-universal-time** converts a time from Decoded Time format to a *universal time*. If *time-zone* is supplied, no adjustment for daylight savings time is performed. 



**Examples:** 



(encode-universal-time 0 0 0 1 1 1900 0) *→* 0 



(encode-universal-time 0 0 1 4 7 1976 5) *→* 2414296800 



;; The next example assumes Eastern Daylight Time. 



(encode-universal-time 0 0 1 4 7 1976) *→* 2414293200 



**See Also:** 



**decode-universal-time**, **get-decoded-time** 



