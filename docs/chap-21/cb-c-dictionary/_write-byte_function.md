**write-byte** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"write-byte"}><b>write-byte</b></ClLinks> *byte stream → byte* 



**Arguments and Values:** 



<ClLinks  term={"byte"}><i>byte</i></ClLinks>—an *integer* of the *stream element type* of <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a *binary output stream*. 



**Description:** 



<ClLinks  term={"write-byte"}><b>write-byte</b></ClLinks> writes one byte, <ClLinks  term={"byte"}><i>byte</i></ClLinks>, to <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**Examples:**
```lisp
(with-open-file (s "temp-bytes" 
		   :direction :output 
		   :element-type ’unsigned-byte) 
  (write-byte 101 s)) → 101 
```
**Side Effects:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks> is modified. 



**Affected By:** 



The *element type* of the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a *binary output stream*. 



Might signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"byte"}><i>byte</i></ClLinks> is not an *integer* of the *stream element type* of <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"read-byte"}><b>read-byte</b></ClLinks>, <ClLinks  term={"write-char"}><b>write-char</b></ClLinks>, <ClLinks  term={"write-sequence"}><b>write-sequence</b></ClLinks> 







 



 



<ClLinks  term={"peek-char"}><b>peek-char</b></ClLinks> 



