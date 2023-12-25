**byte, byte-size, byte-position** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"byte"}><b>byte</b></DictionaryLink> *size position → bytespec* 



<DictionaryLink styled={true} term={"byte-size"}><b>byte-size</b></DictionaryLink> *bytespec → size* 



<DictionaryLink styled={true} term={"byte-position"}><b>byte-position</b></DictionaryLink> *bytespec → position* 



**Arguments and Values:** 



*size*, *position*—a non-negative *integer* . 



*bytespec*—a *byte specifier* . 



**Description:** 



<b>byte</b> returns a <i>byte specifier</i> that indicates a <i>byte</i> of width <i>size</i> and whose bits have weights 2<sup><i>position</i>+<i>size−</i>1</sup>through 2<i><sup>position</sup></i>, and whose representation is <i>implementation-dependent</i>. 



<DictionaryLink styled={true} term={"byte-size"}><b>byte-size</b></DictionaryLink> returns the number of bits specified by *bytespec*. 



<DictionaryLink styled={true} term={"byte-position"}><b>byte-position</b></DictionaryLink> returns the position specified by *bytespec*. 



**Examples:**
```lisp

(setq b (byte 100 200)) *→* #<BYTE-SPECIFIER size 100 position 200> 
(byte-size b) *→* 100 
(byte-position b) *→* 200 

```
**See Also:** 



<DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink>, <DictionaryLink styled={true} term={"dpb"}><b>dpb</b></DictionaryLink> 







 



 



**Notes:** 



(byte-size (byte *j k*)) *≡ j* 



(byte-position (byte *j k*)) *≡ k* 



A <GlossaryTerm styled={true} term={"byte"}><i>byte</i></GlossaryTerm> of *size* of 0 is permissible; it refers to a <GlossaryTerm styled={true} term={"byte"}><i>byte</i></GlossaryTerm> of width zero. For example, 



(ldb (byte 0 3) #o7777) *→* 0 



(dpb #o7777 (byte 0 3) 0) *→* 0 



