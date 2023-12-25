**deposit-field** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"deposit-field"}><b>deposit-field</b></DictionaryLink> *newbyte bytespec integer → result-integer* 



**Arguments and Values:** 



*newbyte*—an *integer* . 



*bytespec*—a *byte specifier* . 



*integer*—an *integer* . 



*result-integer*—an *integer* . 



**Description:** 



Replaces a field of bits within *integer*; specifically, returns an *integer* that contains the bits of *newbyte* within the <GlossaryTerm styled={true} term={"byte"}><i>byte</i></GlossaryTerm> specified by *bytespec*, and elsewhere contains the bits of *integer*. 



**Examples:**
```lisp

(deposit-field 7 (byte 2 1) 0) *→* 6 
(deposit-field -1 (byte 4 0) 0) *→* 15 
(deposit-field 0 (byte 2 1) -3) *→* -7 

```
**See Also:** 



<DictionaryLink styled={true} term={"byte"}><b>byte</b></DictionaryLink>, <DictionaryLink styled={true} term={"dpb"}><b>dpb</b></DictionaryLink> 



**Notes:** 



(logbitp *j* (deposit-field *m* (byte *s p*) *n*)) 



*≡* (if (and (&gt;= *j p*) (&lt; *j* (+ *p s*))) 



(logbitp *j m*) 



(logbitp *j n*)) 







 



 



<DictionaryLink styled={true} term={"deposit-field"}><b>deposit-field</b></DictionaryLink> is to <DictionaryLink styled={true} term={"mask-field"}><b>mask-field</b></DictionaryLink> as <DictionaryLink styled={true} term={"dpb"}><b>dpb</b></DictionaryLink> is to <DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink>. 



