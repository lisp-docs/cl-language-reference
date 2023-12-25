**write-byte** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"write-byte"}><b>write-byte</b></DictionaryLink> *byte stream → byte* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"byte"}><i>byte</i></GlossaryTerm>—an *integer* of the *stream element type* of <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a *binary output stream*. 



**Description:** 



<DictionaryLink styled={true} term={"write-byte"}><b>write-byte</b></DictionaryLink> writes one byte, <GlossaryTerm styled={true} term={"byte"}><i>byte</i></GlossaryTerm>, to <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**Examples:**
```lisp

(with-open-file (s "temp-bytes" 
		   :direction :output 
		   :element-type ’unsigned-byte) 
  (write-byte 101 s)) *→* 101 

```
**Side Effects:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is modified. 



**Affected By:** 



The *element type* of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is not a *binary output stream*. 



Might signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"byte"}><i>byte</i></GlossaryTerm> is not an *integer* of the *stream element type* of <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"read-byte"}><b>read-byte</b></DictionaryLink>, <DictionaryLink styled={true} term={"write-char"}><b>write-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"write-sequence"}><b>write-sequence</b></DictionaryLink> 







 



 



<DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink> 



