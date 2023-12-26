**write-byte** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"write-byte"}><b>write-byte</b></DictionaryLink> *byte stream → byte* 



**Arguments and Values:** 



<GlossaryTerm  term={"byte"}><i>byte</i></GlossaryTerm>—an *integer* of the <GlossaryTerm styled={true} term={"stream element type"}><i>stream element type</i></GlossaryTerm> of <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a *binary output stream*. 



**Description:** 



<DictionaryLink  term={"write-byte"}><b>write-byte</b></DictionaryLink> writes one byte, <GlossaryTerm  term={"byte"}><i>byte</i></GlossaryTerm>, to <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



**Examples:**
```lisp
(with-open-file (s "temp-bytes" 
		   :direction :output 
		   :element-type ’unsigned-byte) 
  (write-byte 101 s)) → 101 
```
**Side Effects:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is modified. 



**Affected By:** 



The <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> of the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not a *binary output stream*. 



Might signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"byte"}><i>byte</i></GlossaryTerm> is not an *integer* of the <GlossaryTerm styled={true} term={"stream element type"}><i>stream element type</i></GlossaryTerm> of <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink>, <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink>, <DictionaryLink  term={"write-sequence"}><b>write-sequence</b></DictionaryLink> 







 



 



<DictionaryLink  term={"peek-char"}><b>peek-char</b></DictionaryLink> 



