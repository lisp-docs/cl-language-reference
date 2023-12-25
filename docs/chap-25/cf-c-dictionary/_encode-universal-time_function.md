**encode-universal-time** <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"encode-universal-time"}><b>encode-universal-time</b></DictionaryLink> *second minute hour date month year* 



&amp;optional *time-zone* 



*→ universal-time* 



**Arguments and Values:** 



*second*, *minute*, *hour*, *date*, *month*, *year*, *time-zone*—the corresponding parts of a *decoded time*. (Note that some of the nine values in a full *decoded time* are redundant, and so are not used as inputs to this function.) 



*universal-time*—a *universal time*. 



**Description:** 



<DictionaryLink styled={true} term={"encode-universal-time"}><b>encode-universal-time</b></DictionaryLink> converts a time from Decoded Time format to a *universal time*. If *time-zone* is supplied, no adjustment for daylight savings time is performed. 



**Examples:**
```lisp

(encode-universal-time 0 0 0 1 1 1900 0) *→* 0 
(encode-universal-time 0 0 1 4 7 1976 5) *→* 2414296800 
;; The next example assumes Eastern Daylight Time. 
(encode-universal-time 0 0 1 4 7 1976) *→* 2414293200 

```
**See Also:** 



<DictionaryLink styled={true} term={"decode-universal-time"}><b>decode-universal-time</b></DictionaryLink>, <DictionaryLink styled={true} term={"get-decoded-time"}><b>get-decoded-time</b></DictionaryLink> 



