**ldb** *Accessor* 



**Syntax:** 



**ldb** *bytespec integer ! byte* 



**(setf (ldb** *bytespec place***)** *new-byte***)** 



**Pronunciation:** 



[ **lidib** ] or [ **lid***✏***b** ] or [ **el d—e b—e** ] 



**Arguments and Values:** 



*bytespec*—a *byte specifier* . 



*integer*—an *integer* . 



*byte*, *new-byte*—a non-negative *integer* . 



**Description:** 



**ldb** extracts and returns the *byte* of *integer* specified by *bytespec*. 



<b>ldb</b> returns an <i>integer</i> in which the bits with weights 2<sup>(<i>s</i>1)</sup> through 2<sup>0</sup> are the same as those in <i>integer</i> with weights 2<sup>(<i>p</i>+<i>s</i>1)</sup> through 2<i><sup>p</sup></i>, and all other bits zero; <i>s</i> is (byte-size <i>bytespec</i>) and <i>p</i> is (byte-position <i>bytespec</i>). 



**setf** may be used with **ldb** to modify a byte within the *integer* that is stored in a given *place*. The order of evaluation, when an **ldb** form is supplied to **setf**, is exactly left-to-right. The e↵ect is to perform a **dpb** operation and then store the result back into the *place*. 



**Examples:**
```lisp
 



(ldb (byte 2 1) 10) *!* 1 



(setq a (list 8)) *!* (8) 



(setf (ldb (byte 2 1) (car a)) 1) *!* 1 



a *!* (10) 




```
**See Also:** 



**byte**, **byte-position**, **byte-size**, **dpb** 







 



 



**Notes:** 



(logbitp *j* (ldb (byte *s p*) *n*)) 



*⌘* (and (&lt; *j s*) (logbitp (+ *j p*) *n*)) 



In general, 



(ldb (byte 0 *x*) *y*) *!* 0 



for all valid values of *x* and *y*. 



Historically, the name “ldb” comes from a DEC PDP-10 assembly language instruction meaning “load byte.” 



