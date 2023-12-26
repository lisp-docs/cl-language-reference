**encode-universal-time** <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"encode-universal-time"}><b>encode-universal-time</b></ClLinks> *second minute hour date month year* 



&amp;optional *time-zone* 



→ universal-time 



**Arguments and Values:** 



*second*, *minute*, *hour*, *date*, *month*, *year*, *time-zone*—the corresponding parts of a <GlossaryTerm styled={true} term={"decoded time"}><i>decoded time</i></GlossaryTerm>. (Note that some of the nine values in a full <GlossaryTerm styled={true} term={"decoded time"}><i>decoded time</i></GlossaryTerm> are redundant, and so are not used as inputs to this function.) 



*universal-time*—a <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm>. 



**Description:** 



<ClLinks styled={true} term={"encode-universal-time"}><b>encode-universal-time</b></ClLinks> converts a time from Decoded Time format to a <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm>. If *time-zone* is supplied, no adjustment for daylight savings time is performed. 



**Examples:**
```lisp
(encode-universal-time 0 0 0 1 1 1900 0) → 0 
(encode-universal-time 0 0 1 4 7 1976 5) → 2414296800 
;; The next example assumes Eastern Daylight Time. 
(encode-universal-time 0 0 1 4 7 1976) → 2414293200 
```
**See Also:** 



<ClLinks styled={true} term={"decode-universal-time"}><b>decode-universal-time</b></ClLinks>, <ClLinks styled={true} term={"get-decoded-time"}><b>get-decoded-time</b></ClLinks> 



