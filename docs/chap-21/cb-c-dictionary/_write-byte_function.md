**write-byte** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"write-byte"}><b>write-byte</b></ClLinks> *byte stream → byte* 



**Arguments and Values:** 



<ClLinks styled={true} term={"byte"}><i>byte</i></ClLinks>—an *integer* of the *stream element type* of <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a *binary output stream*. 



**Description:** 



<ClLinks styled={true} term={"write-byte"}><b>write-byte</b></ClLinks> writes one byte, <ClLinks styled={true} term={"byte"}><i>byte</i></ClLinks>, to <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**Examples:**
```lisp

(with-open-file (s "temp-bytes" 
		   :direction :output 
		   :element-type ’unsigned-byte) 
  (write-byte 101 s)) → 101 

```
**Side Effects:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is modified. 



**Affected By:** 



The *element type* of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> if <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is not a *binary output stream*. 



Might signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"byte"}><i>byte</i></ClLinks> is not an *integer* of the *stream element type* of <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"read-byte"}><b>read-byte</b></ClLinks>, <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks>, <ClLinks styled={true} term={"write-sequence"}><b>write-sequence</b></ClLinks> 







 



 



<ClLinks styled={true} term={"peek-char"}><b>peek-char</b></ClLinks> 



