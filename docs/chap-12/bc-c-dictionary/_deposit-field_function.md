**deposit-field** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"deposit-field"}><b>deposit-field</b></ClLinks> *newbyte bytespec integer → result-integer* 



**Arguments and Values:** 



*newbyte*—an *integer* . 



*bytespec*—a <GlossaryTerm styled={true} term={"byte specifier"}><i>byte specifier</i></GlossaryTerm> . 



*integer*—an *integer* . 



*result-integer*—an *integer* . 



**Description:** 



Replaces a field of bits within *integer*; specifically, returns an *integer* that contains the bits of *newbyte* within the <ClLinks  term={"byte"}><i>byte</i></ClLinks> specified by *bytespec*, and elsewhere contains the bits of *integer*. 



**Examples:**
```lisp
(deposit-field 7 (byte 2 1) 0) → 6 
(deposit-field -1 (byte 4 0) 0) → 15 
(deposit-field 0 (byte 2 1) -3) → -7 
```
**See Also:** 



<ClLinks  term={"byte"}><b>byte</b></ClLinks>, <ClLinks  term={"dpb"}><b>dpb</b></ClLinks> 



**Notes:** 



(logbitp *j* (deposit-field *m* (byte *s p*) *n*)) 



*≡* (if (and (&gt;= *j p*) (&lt; *j* (+ *p s*))) 



(logbitp *j m*) 



(logbitp *j n*)) 







 



 



<ClLinks  term={"deposit-field"}><b>deposit-field</b></ClLinks> is to <ClLinks  term={"mask-field"}><b>mask-field</b></ClLinks> as <ClLinks  term={"dpb"}><b>dpb</b></ClLinks> is to <ClLinks  term={"ldb"}><b>ldb</b></ClLinks>. 



