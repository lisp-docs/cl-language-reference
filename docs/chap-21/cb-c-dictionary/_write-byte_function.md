**write-byte** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"write-byte"}><b>write-byte</b></DictionaryLink> *byte stream → byte* 



**Arguments and Values:** 



<ClLinks  term={"byte"}><i>byte</i></ClLinks>—an *integer* of the <GlossaryTerm styled={true} term={"stream element type"}><i>stream element type</i></GlossaryTerm> of <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a *binary output stream*. 



**Description:** 



<DictionaryLink  term={"write-byte"}><b>write-byte</b></DictionaryLink> writes one byte, <ClLinks  term={"byte"}><i>byte</i></ClLinks>, to <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



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



The <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> of the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a *binary output stream*. 



Might signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"byte"}><i>byte</i></ClLinks> is not an *integer* of the <GlossaryTerm styled={true} term={"stream element type"}><i>stream element type</i></GlossaryTerm> of <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink>, <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink>, <DictionaryLink  term={"write-sequence"}><b>write-sequence</b></DictionaryLink> 







 



 



<DictionaryLink  term={"peek-char"}><b>peek-char</b></DictionaryLink> 



