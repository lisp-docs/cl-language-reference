**mask-field** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"mask-field"}><b>mask-field</b></DictionaryLink> *bytespec integer ! masked-integer* 



**(setf (mask-field** *bytespec place***)** *new-masked-integer***)** 



**Arguments and Values:** 



*bytespec*—a <GlossaryTerm styled={true} term={"byte specifier"}><i>byte specifier</i></GlossaryTerm> . 



*integer*—an *integer* . 



*masked-integer*, *new-masked-integer*—a non-negative *integer* . 



**Description:** 



<DictionaryLink  term={"mask-field"}><b>mask-field</b></DictionaryLink> performs a “mask” operation on *integer*. It returns an *integer* that has the same bits as *integer* in the <ClLinks  term={"byte"}><i>byte</i></ClLinks> specified by *bytespec*, but that has zero-bits everywhere else. 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> may be used with <DictionaryLink  term={"mask-field"}><b>mask-field</b></DictionaryLink> to modify a byte within the *integer* that is stored in a given <ClLinks  term={"place"}><i>place</i></ClLinks>. The e↵ect is to perform a <DictionaryLink  term={"deposit-field"}><b>deposit-field</b></DictionaryLink> operation and then store the result back into the <ClLinks  term={"place"}><i>place</i></ClLinks>. 



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



<DictionaryLink  term={"byte"}><b>byte</b></DictionaryLink>, <DictionaryLink  term={"ldb"}><b>ldb</b></DictionaryLink> 



**Notes:** 



(ldb *bs* (mask-field *bs n*)) *⌘* (ldb *bs n*) 



(logbitp *j* (mask-field (byte *s p*) *n*)) 



*⌘* (and (&gt;= *j p*) (&lt; *j s*) (logbitp *j n*)) 



(mask-field *bs n*) *⌘* (logand *n* (dpb -1 *bs* 0)) 







 



 



