**byte, byte-size, byte-position** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"byte"}><b>byte</b></ClLinks> *size position → bytespec* 



<ClLinks styled={true} term={"byte-size"}><b>byte-size</b></ClLinks> *bytespec → size* 



<ClLinks styled={true} term={"byte-position"}><b>byte-position</b></ClLinks> *bytespec → position* 



**Arguments and Values:** 



*size*, *position*—a non-negative *integer* . 



*bytespec*—a *byte specifier* . 



**Description:** 



<b>byte</b> returns a <i>byte specifier</i> that indicates a <i>byte</i> of width <i>size</i> and whose bits have weights 2<sup><i>position</i>+<i>size−</i>1</sup>through 2<i><sup>position</sup></i>, and whose representation is <i>implementation-dependent</i>. 



<ClLinks styled={true} term={"byte-size"}><b>byte-size</b></ClLinks> returns the number of bits specified by *bytespec*. 



<ClLinks styled={true} term={"byte-position"}><b>byte-position</b></ClLinks> returns the position specified by *bytespec*. 



**Examples:**
```lisp

(setq b (byte 100 200)) → #<BYTE-SPECIFIER size 100 position 200> 
(byte-size b) → 100 
(byte-position b) → 200 

```
**See Also:** 



<ClLinks styled={true} term={"ldb"}><b>ldb</b></ClLinks>, <ClLinks styled={true} term={"dpb"}><b>dpb</b></ClLinks> 







 



 



**Notes:** 



(byte-size (byte *j k*)) *≡ j* 



(byte-position (byte *j k*)) *≡ k* 



A <ClLinks styled={true} term={"byte"}><i>byte</i></ClLinks> of *size* of 0 is permissible; it refers to a <ClLinks styled={true} term={"byte"}><i>byte</i></ClLinks> of width zero. For example, 



(ldb (byte 0 3) #o7777) → 0 



(dpb #o7777 (byte 0 3) 0) → 0 



