**read-byte** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"read-byte"}><b>read-byte</b></DictionaryLink> <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> &amp;optional *eof-error-p eof-value → byte* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a *binary input stream*. 



*eof-error-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



*eof-value*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"byte"}><i>byte</i></GlossaryTerm>—an *integer* , or the *eof-value*. 



**Description:** 



<DictionaryLink styled={true} term={"read-byte"}><b>read-byte</b></DictionaryLink> reads and returns one byte from <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, the *eof-value* is returned. 



**Examples:**
```lisp

(with-open-file (s "temp-bytes" 
		   :direction :output 
		   :element-type ’unsigned-byte) 
  (write-byte 101 s)) *→* 101 
(with-open-file (s "temp-bytes" :element-type ’unsigned-byte) 
  (format t "~S ~S" (read-byte s) (read-byte s nil ’eof))) 
▷ 101 EOF 
*→* NIL 

```
**Side Effects:** 



Modifies <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is not a *binary input stream*. 



If there are no <GlossaryTerm styled={true} term={"byte"}><i>bytes</i></GlossaryTerm> remaining in the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> and *eof-error-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-sequence"}><b>read-sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"write-byte"}><b>write-byte</b></DictionaryLink> 







 



 



