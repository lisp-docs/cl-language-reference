**byte, byte-size, byte-position** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"byte"}><b>byte</b></DictionaryLink> *size position → bytespec* 



<DictionaryLink  term={"byte-size"}><b>byte-size</b></DictionaryLink> *bytespec → size* 



<DictionaryLink  term={"byte-position"}><b>byte-position</b></DictionaryLink> *bytespec → position* 



**Arguments and Values:** 



*size*, *position*—a non-negative *integer* . 



*bytespec*—a <GlossaryTerm styled={true} term={"byte specifier"}><i>byte specifier</i></GlossaryTerm> . 



**Description:** 



<b>byte</b> returns a <i>byte specifier</i> that indicates a <i>byte</i> of width <i>size</i> and whose bits have weights 2<sup><i>position</i>+<i>size−</i>1</sup>through 2<i><sup>position</sup></i>, and whose representation is <i>implementation-dependent</i>. 



<DictionaryLink  term={"byte-size"}><b>byte-size</b></DictionaryLink> returns the number of bits specified by *bytespec*. 



<DictionaryLink  term={"byte-position"}><b>byte-position</b></DictionaryLink> returns the position specified by *bytespec*. 



**Examples:**
```lisp
(setq b (byte 100 200)) → #<BYTE-SPECIFIER size 100 position 200> 
(byte-size b) → 100 
(byte-position b) → 200 
```
**See Also:** 



<DictionaryLink  term={"ldb"}><b>ldb</b></DictionaryLink>, <DictionaryLink  term={"dpb"}><b>dpb</b></DictionaryLink> 







 



 



**Notes:** 



(byte-size (byte *j k*)) *≡ j* 



(byte-position (byte *j k*)) *≡ k* 



A <ClLinks  term={"byte"}><i>byte</i></ClLinks> of *size* of 0 is permissible; it refers to a <ClLinks  term={"byte"}><i>byte</i></ClLinks> of width zero. For example, 



(ldb (byte 0 3) #o7777) → 0 



(dpb #o7777 (byte 0 3) 0) → 0 



