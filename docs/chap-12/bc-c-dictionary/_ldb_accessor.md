**ldb** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"ldb"}><b>ldb</b></ClLinks> *bytespec integer ! byte* 



**(setf (ldb** *bytespec place***)** *new-byte***)** 



**Pronunciation:** 



[ **lidib** ] or [ **lid***ε***b** ] or [ **el d—e b—e** ] 



**Arguments and Values:** 



*bytespec*—a <GlossaryTerm styled={true} term={"byte specifier"}><i>byte specifier</i></GlossaryTerm> . 



*integer*—an *integer* . 



<ClLinks  term={"byte"}><i>byte</i></ClLinks>, *new-byte*—a non-negative *integer* . 



**Description:** 



<ClLinks  term={"ldb"}><b>ldb</b></ClLinks> extracts and returns the <ClLinks  term={"byte"}><i>byte</i></ClLinks> of *integer* specified by *bytespec*. 



<b>ldb</b> returns an <i>integer</i> in which the bits with weights 2<sup>(<i>s</i>1)</sup> through 2<sup>0</sup> are the same as those in <i>integer</i> with weights 2<sup>(<i>p</i>+<i>s</i>1)</sup> through 2<i><sup>p</sup></i>, and all other bits zero; <i>s</i> is (byte-size <i>bytespec</i>) and <i>p</i> is (byte-position <i>bytespec</i>). 



<ClLinks  term={"setf"}><b>setf</b></ClLinks> may be used with <ClLinks  term={"ldb"}><b>ldb</b></ClLinks> to modify a byte within the *integer* that is stored in a given <ClLinks  term={"place"}><i>place</i></ClLinks>. The order of evaluation, when an <ClLinks  term={"ldb"}><b>ldb</b></ClLinks> form is supplied to <ClLinks  term={"setf"}><b>setf</b></ClLinks>, is exactly left-to-right. The e↵ect is to perform a <ClLinks  term={"dpb"}><b>dpb</b></ClLinks> operation and then store the result back into the <ClLinks  term={"place"}><i>place</i></ClLinks>. 



**Examples:**
```lisp
(ldb (byte 2 1) 10) *!* 1 
(setq a (list 8)) *!* (8) 
(setf (ldb (byte 2 1) (car a)) 1) *!* 1 
a *!* (10) 
```
**See Also:** 



<ClLinks  term={"byte"}><b>byte</b></ClLinks>, <ClLinks  term={"byte-position"}><b>byte-position</b></ClLinks>, <ClLinks  term={"byte-size"}><b>byte-size</b></ClLinks>, <ClLinks  term={"dpb"}><b>dpb</b></ClLinks> 







 



 



**Notes:** 



(logbitp *j* (ldb (byte *s p*) *n*)) 



*⌘* (and (&lt; *j s*) (logbitp (+ *j p*) *n*)) 



In general, 



(ldb (byte 0 *x*) *y*) *!* 0 



for all valid values of *x* and *y*. 



Historically, the name “ldb” comes from a DEC PDP-10 assembly language instruction meaning “load byte.” 



