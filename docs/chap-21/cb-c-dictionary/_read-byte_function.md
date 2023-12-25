**read-byte** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"read-byte"}><b>read-byte</b></ClLinks> <ClLinks  term={"stream"}><i>stream</i></ClLinks> &amp;optional *eof-error-p eof-value → byte* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a *binary input stream*. 



*eof-error-p*—a *generalized boolean*. The default is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks  term={"byte"}><i>byte</i></ClLinks>—an *integer* , or the *eof-value*. 



**Description:** 



<ClLinks  term={"read-byte"}><b>read-byte</b></ClLinks> reads and returns one byte from <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is <ClLinks  term={"false"}><i>false</i></ClLinks>, the *eof-value* is returned. 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a *binary input stream*. 



If there are no <ClLinks  term={"byte"}><i>bytes</i></ClLinks> remaining in the <ClLinks  term={"stream"}><i>stream</i></ClLinks> and *eof-error-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"read-char"}><b>read-char</b></ClLinks>, <ClLinks  term={"read-sequence"}><b>read-sequence</b></ClLinks>, <ClLinks  term={"write-byte"}><b>write-byte</b></ClLinks> 







 



 



