**byte, byte-size, byte-position** *Function* 



**Syntax:** 



**byte** *size position → bytespec* 



**byte-size** *bytespec → size* 



**byte-position** *bytespec → position* 



**Arguments and Values:** 



*size*, *position*—a non-negative *integer* . 



*bytespec*—a *byte specifier* . 



**Description:** 



<b>byte</b> returns a <i>byte specifier</i> that indicates a <i>byte</i> of width <i>size</i> and whose bits have weights 2<sup><i>position</i>+<i>size−</i>1</sup>through 2<i><sup>position</sup></i>, and whose representation is <i>implementation-dependent</i>. 



**byte-size** returns the number of bits specified by *bytespec*. 



**byte-position** returns the position specified by *bytespec*. 



**Examples:**
```lisp
 

(setq b (byte 100 200)) *→* #<BYTE-SPECIFIER size 100 position 200> 

(byte-size b) *→* 100 

(byte-position b) *→* 200 


```
**See Also:** 



**ldb**, **dpb** 







 



 



**Notes:** 



(byte-size (byte *j k*)) *≡ j* 



(byte-position (byte *j k*)) *≡ k* 



A *byte* of *size* of 0 is permissible; it refers to a *byte* of width zero. For example, 



(ldb (byte 0 3) #o7777) *→* 0 



(dpb #o7777 (byte 0 3) 0) *→* 0 



