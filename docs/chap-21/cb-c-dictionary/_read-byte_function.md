**read-byte** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink> <ClLinks  term={"stream"}><i>stream</i></ClLinks> &amp;optional *eof-error-p eof-value → byte* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a *binary input stream*. 



*eof-error-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<ClLinks  term={"byte"}><i>byte</i></ClLinks>—an *integer* , or the *eof-value*. 



**Description:** 



<DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink> reads and returns one byte from <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>2</sub> occurs and *eof-error-p* is <ClLinks  term={"false"}><i>false</i></ClLinks>, the *eof-value* is returned. 



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



Modifies <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a *binary input stream*. 



If there are no <ClLinks  term={"byte"}><i>bytes</i></ClLinks> remaining in the <ClLinks  term={"stream"}><i>stream</i></ClLinks> and *eof-error-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>, <DictionaryLink  term={"read-sequence"}><b>read-sequence</b></DictionaryLink>, <DictionaryLink  term={"write-byte"}><b>write-byte</b></DictionaryLink> 







 



 



