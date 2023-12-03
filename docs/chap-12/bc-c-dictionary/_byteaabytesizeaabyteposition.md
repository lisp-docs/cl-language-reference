**byte, byte-size, byte-position** *Function* 

**Syntax:** 

**byte** *size position → bytespec* 

**byte-size** *bytespec → size* 

**byte-position** *bytespec → position* 

**Arguments and Values:** 

*size*, *position*—a non-negative *integer* . 

*bytespec*—a *byte specifier* . 

**Description:** 

&#60;b&#62;byte&#60;/b&#62; returns a &#60;i&#62;byte specifier&#60;/i&#62; that indicates a &#60;i&#62;byte&#60;/i&#62; of width &#60;i&#62;size&#60;/i&#62; and whose bits have weights 2&#60;sup&#62;&#60;i&#62;position&#60;/i&#62;+&#60;i&#62;size−&#60;/i&#62;1&#60;/sup&#62;through 2&#60;i&#62;&#60;sup&#62;position&#60;/sup&#62;&#60;/i&#62;, and whose representation is &#60;i&#62;implementation-dependent&#60;/i&#62;. 

**byte-size** returns the number of bits specified by *bytespec*. 

**byte-position** returns the position specified by *bytespec*. 

**Examples:** 

(setq b (byte 100 200)) *→* #&#60;BYTE-SPECIFIER size 100 position 200&#62; 

(byte-size b) *→* 100 

(byte-position b) *→* 200 

**See Also:** 

**ldb**, **dpb** 



 

 

**Notes:** 

(byte-size (byte *j k*)) *≡ j* 

(byte-position (byte *j k*)) *≡ k* 

A *byte* of *size* of 0 is permissible; it refers to a *byte* of width zero. For example, 

(ldb (byte 0 3) #o7777) *→* 0 

(dpb #o7777 (byte 0 3) 0) *→* 0 

