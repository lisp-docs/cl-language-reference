**mask-field** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"mask-field"}><b>mask-field</b></ClLinks> *bytespec integer ! masked-integer* 



**(setf (mask-field** *bytespec place***)** *new-masked-integer***)** 



**Arguments and Values:** 



*bytespec*—a <GlossaryTerm styled={true} term={"byte specifier"}><i>byte specifier</i></GlossaryTerm> . 



*integer*—an *integer* . 



*masked-integer*, *new-masked-integer*—a non-negative *integer* . 



**Description:** 



<ClLinks  term={"mask-field"}><b>mask-field</b></ClLinks> performs a “mask” operation on *integer*. It returns an *integer* that has the same bits as *integer* in the <ClLinks  term={"byte"}><i>byte</i></ClLinks> specified by *bytespec*, but that has zero-bits everywhere else. 



<ClLinks  term={"setf"}><b>setf</b></ClLinks> may be used with <ClLinks  term={"mask-field"}><b>mask-field</b></ClLinks> to modify a byte within the *integer* that is stored in a given <ClLinks  term={"place"}><i>place</i></ClLinks>. The e↵ect is to perform a <ClLinks  term={"deposit-field"}><b>deposit-field</b></ClLinks> operation and then store the result back into the <ClLinks  term={"place"}><i>place</i></ClLinks>. 



**Examples:**
```lisp
(mask-field (byte 1 5) -1) *!* 32 
(setq a 15) *!* 15 
(mask-field (byte 2 0) a) *!* 3 
a *!* 15 
(setf (mask-field (byte 2 0) a) 1) *!* 1 
a *!* 13 
```
**See Also:** 



<ClLinks  term={"byte"}><b>byte</b></ClLinks>, <ClLinks  term={"ldb"}><b>ldb</b></ClLinks> 



**Notes:** 



(ldb *bs* (mask-field *bs n*)) *⌘* (ldb *bs n*) 



(logbitp *j* (mask-field (byte *s p*) *n*)) 



*⌘* (and (&gt;= *j p*) (&lt; *j s*) (logbitp *j n*)) 



(mask-field *bs n*) *⌘* (logand *n* (dpb -1 *bs* 0)) 







 



 



