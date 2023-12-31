**read-byte** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink> <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> &amp;optional *eof-error-p eof-value → byte* 



**Arguments and Values:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a *binary input stream*. 



*eof-error-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



*eof-value*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm  term={"byte"}><i>byte</i></GlossaryTerm>—an *integer* , or the *eof-value*. 



**Description:** 



<DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink> reads and returns one byte from <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>2</sub> occurs and *eof-error-p* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, the *eof-value* is returned. 



**Examples:**
```lisp
(with-open-file (s "temp-bytes" 
		   :direction :output 
		   :element-type ’unsigned-byte) 
  (write-byte 101 s)) → 101 
(with-open-file (s "temp-bytes" :element-type ’unsigned-byte) 
  (format t "~S ~S" (read-byte s) (read-byte s nil ’eof))) 
▷ 101 EOF 
→ NIL 
```
**Side Effects:** 



Modifies <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not a *binary input stream*. 



If there are no <GlossaryTerm  term={"byte"}><i>bytes</i></GlossaryTerm> remaining in the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> and *eof-error-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>, <DictionaryLink  term={"read-sequence"}><b>read-sequence</b></DictionaryLink>, <DictionaryLink  term={"write-byte"}><b>write-byte</b></DictionaryLink> 







 



 



