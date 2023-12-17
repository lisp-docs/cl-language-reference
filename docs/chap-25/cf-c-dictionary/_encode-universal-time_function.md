**encode-universal-time** *function* 



**Syntax:** 



**encode-universal-time** *second minute hour date month year* 



&amp;optional *time-zone* 



→ universal-time 



**Arguments and Values:** 



*second*, *minute*, *hour*, *date*, *month*, *year*, *time-zone*—the corresponding parts of a *decoded time*. (Note that some of the nine values in a full *decoded time* are redundant, and so are not used as inputs to this function.) 



*universal-time*—a *universal time*. 



**Description:** 



**encode-universal-time** converts a time from Decoded Time format to a *universal time*. If *time-zone* is supplied, no adjustment for daylight savings time is performed. 



**Examples:**
```lisp

(encode-universal-time 0 0 0 1 1 1900 0) → 0 
(encode-universal-time 0 0 1 4 7 1976 5) → 2414296800 
;; The next example assumes Eastern Daylight Time. 
(encode-universal-time 0 0 1 4 7 1976) → 2414293200 

```
**See Also:** 



**decode-universal-time**, **get-decoded-time** 



