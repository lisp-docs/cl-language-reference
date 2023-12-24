**mask-field** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"mask-field"}><b>mask-field</b></ClLinks> *bytespec integer ! masked-integer* 



**(setf (mask-field** *bytespec place***)** *new-masked-integer***)** 



**Arguments and Values:** 



*bytespec*—a *byte specifier* . 



*integer*—an *integer* . 



*masked-integer*, *new-masked-integer*—a non-negative *integer* . 



**Description:** 



<ClLinks styled={true} term={"mask-field"}><b>mask-field</b></ClLinks> performs a “mask” operation on *integer*. It returns an *integer* that has the same bits as *integer* in the <ClLinks styled={true} term={"byte"}><i>byte</i></ClLinks> specified by *bytespec*, but that has zero-bits everywhere else. 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> may be used with <ClLinks styled={true} term={"mask-field"}><b>mask-field</b></ClLinks> to modify a byte within the *integer* that is stored in a given <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. The e↵ect is to perform a <ClLinks styled={true} term={"deposit-field"}><b>deposit-field</b></ClLinks> operation and then store the result back into the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



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



<ClLinks styled={true} term={"byte"}><b>byte</b></ClLinks>, <ClLinks styled={true} term={"ldb"}><b>ldb</b></ClLinks> 



**Notes:** 



(ldb *bs* (mask-field *bs n*)) *⌘* (ldb *bs n*) 



(logbitp *j* (mask-field (byte *s p*) *n*)) 



*⌘* (and (&gt;= *j p*) (&lt; *j s*) (logbitp *j n*)) 



(mask-field *bs n*) *⌘* (logand *n* (dpb -1 *bs* 0)) 







 



 



