**read-byte** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"read-byte"}><b>read-byte</b></ClLinks> <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> &amp;optional *eof-error-p eof-value → byte* 



**Arguments and Values:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a *binary input stream*. 



*eof-error-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"byte"}><i>byte</i></ClLinks>—an *integer* , or the *eof-value*. 



**Description:** 



<ClLinks styled={true} term={"read-byte"}><b>read-byte</b></ClLinks> reads and returns one byte from <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, the *eof-value* is returned. 



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



Modifies <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> if <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is not a *binary input stream*. 



If there are no <ClLinks styled={true} term={"byte"}><i>bytes</i></ClLinks> remaining in the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> and *eof-error-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks>, <ClLinks styled={true} term={"read-sequence"}><b>read-sequence</b></ClLinks>, <ClLinks styled={true} term={"write-byte"}><b>write-byte</b></ClLinks> 







 



 



