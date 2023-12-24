**write-sequence** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"write-sequence"}><b>write-sequence</b></ClLinks> *sequence stream* &amp;key *start end → sequence* 



*sequence*—a *sequence*. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—an *output stream*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



**Description:** 



<ClLinks styled={true} term={"write-sequence"}><b>write-sequence</b></ClLinks> writes the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the subsequence of *sequence bounded* by *start* and *end* to <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 







 



 



**Examples:**
```lisp

(write-sequence "bookworms" \*standard-output\* :end 4) 
▷ book 
→ "bookworms" 

```
**Side Effects:** 



Modifies <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*. Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *start* is not a non-negative *integer* . Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *end* is not a non-negative *integer* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



Might signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the *bounded sequence* is not a member of the *stream element type* of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), <ClLinks styled={true} term={"read-sequence"}><b>read-sequence</b></ClLinks>, <ClLinks styled={true} term={"write-string"}><b>write-string</b></ClLinks>, <ClLinks styled={true} term={"write-line"}><b>write-line</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"write-sequence"}><b>write-sequence</b></ClLinks> is identical in effect to iterating over the indicated subsequence and writing one <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> at a time to <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the *sequence* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with the same *element type* as the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



