**write-sequence** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"write-sequence"}><b>write-sequence</b></ClLinks> *sequence stream* &amp;key *start end → sequence* 



*sequence*—a *sequence*. 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—an *output stream*. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks  term={"nil"}><b>nil</b></ClLinks>, respectively. 



**Description:** 



<ClLinks  term={"write-sequence"}><b>write-sequence</b></ClLinks> writes the <ClLinks  term={"element"}><i>elements</i></ClLinks> of the subsequence of *sequence bounded* by *start* and *end* to <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 







 



 



**Examples:**
```lisp
(write-sequence "bookworms" \*standard-output\* :end 4) 
▷ book 
→ "bookworms" 
```
**Side Effects:** 



Modifies <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *start* is not a non-negative *integer* . Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *end* is not a non-negative *integer* or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



Might signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if an <ClLinks  term={"element"}><i>element</i></ClLinks> of the *bounded sequence* is not a member of the <GlossaryTerm styled={true} term={"stream element type"}><i>stream element type</i></GlossaryTerm> of the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), <ClLinks  term={"read-sequence"}><b>read-sequence</b></ClLinks>, <ClLinks  term={"write-string"}><b>write-string</b></ClLinks>, <ClLinks  term={"write-line"}><b>write-line</b></ClLinks> 



**Notes:** 



<ClLinks  term={"write-sequence"}><b>write-sequence</b></ClLinks> is identical in effect to iterating over the indicated subsequence and writing one <ClLinks  term={"element"}><i>element</i></ClLinks> at a time to <ClLinks  term={"stream"}><i>stream</i></ClLinks>, but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with the same <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> as the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



