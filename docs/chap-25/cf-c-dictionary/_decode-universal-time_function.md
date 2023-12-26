**decode-universal-time** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"decode-universal-time"}><b>decode-universal-time</b></ClLinks> *universal-time* &amp;optional *time-zone* 



*→ second, minute, hour, date, month, year, day, daylight-p, zone* 



**Arguments and Values:** 



*universal-time*—a <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm>. 



*time-zone*—a <GlossaryTerm styled={true} term={"time zone"}><i>time zone</i></GlossaryTerm>. 



*second*, *minute*, *hour*, *date*, *month*, *year*, *day*, *daylight-p*, *zone*—a <GlossaryTerm styled={true} term={"decoded time"}><i>decoded time</i></GlossaryTerm>. 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"decoded time"}><i>decoded time</i></GlossaryTerm> represented by the given <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm>. 



If *time-zone* is not supplied, it defaults to the current time zone adjusted for daylight saving time. If *time-zone* is supplied, daylight saving time information is ignored. The daylight saving time flag is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if *time-zone* is supplied. 



**Examples:**
```lisp
(decode-universal-time 0 0) → 0, 0, 0, 1, 1, 1900, 0, *false*, 0 
;; The next two examples assume Eastern Daylight Time. 
(decode-universal-time 2414296800 5) → 0, 0, 1, 4, 7, 1976, 6, *false*, 5 
(decode-universal-time 2414293200) → 0, 0, 1, 4, 7, 1976, 6, *true*, 5 
;; This example assumes that the time zone is Eastern Daylight Time 
;; (and that the time zone is constant throughout the example). 
(let\* ((here (nth 8 (multiple-value-list (get-decoded-time)))) ;Time zone 
	(recently (get-universal-time)) 
	(a (nthcdr 7 (multiple-value-list (decode-universal-time recently)))) 
	(b (nthcdr 7 (multiple-value-list (decode-universal-time recently here))))) 
       (list a b (equal a b))) → ((T 5) (NIL 5) NIL) 
```
**Affected By:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>Implementation-dependent</i></ClLinks> mechanisms for calculating when or if daylight savings time is in effect for any given session. 



**See Also:** 



<ClLinks styled={true} term={"encode-universal-time"}><b>encode-universal-time</b></ClLinks>, <ClLinks styled={true} term={"get-universal-time"}><b>get-universal-time</b></ClLinks>, Section 25.1.4 (Time) 







 



 



