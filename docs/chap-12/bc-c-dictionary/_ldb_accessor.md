**ldb** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink> *bytespec integer ! byte* 



**(setf (ldb** *bytespec place***)** *new-byte***)** 



**Pronunciation:** 



[ **lidib** ] or [ **lid***ε***b** ] or [ **el d—e b—e** ] 



**Arguments and Values:** 



*bytespec*—a *byte specifier* . 



*integer*—an *integer* . 



<GlossaryTerm styled={true} term={"byte"}><i>byte</i></GlossaryTerm>, *new-byte*—a non-negative *integer* . 



**Description:** 



<DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink> extracts and returns the <GlossaryTerm styled={true} term={"byte"}><i>byte</i></GlossaryTerm> of *integer* specified by *bytespec*. 



<b>ldb</b> returns an <i>integer</i> in which the bits with weights 2<sup>(<i>s</i>1)</sup> through 2<sup>0</sup> are the same as those in <i>integer</i> with weights 2<sup>(<i>p</i>+<i>s</i>1)</sup> through 2<i><sup>p</sup></i>, and all other bits zero; <i>s</i> is (byte-size <i>bytespec</i>) and <i>p</i> is (byte-position <i>bytespec</i>). 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> may be used with <DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink> to modify a byte within the *integer* that is stored in a given <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. The order of evaluation, when an <DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink> form is supplied to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>, is exactly left-to-right. The e↵ect is to perform a <DictionaryLink styled={true} term={"dpb"}><b>dpb</b></DictionaryLink> operation and then store the result back into the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



**Examples:**
```lisp

(ldb (byte 2 1) 10) *!* 1 
(setq a (list 8)) *!* (8) 
(setf (ldb (byte 2 1) (car a)) 1) *!* 1 
a *!* (10) 

```
**See Also:** 



<DictionaryLink styled={true} term={"byte"}><b>byte</b></DictionaryLink>, <DictionaryLink styled={true} term={"byte-position"}><b>byte-position</b></DictionaryLink>, <DictionaryLink styled={true} term={"byte-size"}><b>byte-size</b></DictionaryLink>, <DictionaryLink styled={true} term={"dpb"}><b>dpb</b></DictionaryLink> 







 



 



**Notes:** 



(logbitp *j* (ldb (byte *s p*) *n*)) 



*⌘* (and (&lt; *j s*) (logbitp (+ *j p*) *n*)) 



In general, 



(ldb (byte 0 *x*) *y*) *!* 0 



for all valid values of *x* and *y*. 



Historically, the name “ldb” comes from a DEC PDP-10 assembly language instruction meaning “load byte.” 



