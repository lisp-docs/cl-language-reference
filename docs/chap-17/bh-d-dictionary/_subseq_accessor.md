**subseq** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"subseq"}><b>subseq</b></ClLinks> *sequence start* &amp;optional *end → subsequence* 



**(setf (subseq** *sequence start* &amp;optional *end***)** *new-subsequence***)** 



**Arguments and Values:** 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The default for *end* is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*subsequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



*new-subsequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"subseq"}><b>subseq</b></ClLinks> creates a *sequence* that is a copy of the subsequence of *sequence bounded* by *start* and *end*. 



*Start* specifies an offset into the original *sequence* and marks the beginning position of the subsequence. *end* marks the position following the last element of the subsequence. 



<ClLinks  term={"subseq"}><b>subseq</b></ClLinks> always allocates a new *sequence* for a result; it never shares storage with an old *sequence*. The result subsequence is always of the same <ClLinks  term={"type"}><i>type</i></ClLinks> as *sequence*. 



If *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> , the result is a *fresh simple array* of <ClLinks  term={"rank"}><i>rank</i></ClLinks> one that has the same <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> as *sequence*. If *sequence* is a <ClLinks  term={"list"}><i>list</i></ClLinks>, the result is a *fresh list*. 



<ClLinks  term={"setf"}><b>setf</b></ClLinks> may be used with <ClLinks  term={"subseq"}><b>subseq</b></ClLinks> to destructively replace <ClLinks  term={"element"}><i>elements</i></ClLinks> of a subsequence with <ClLinks  term={"element"}><i>elements</i></ClLinks> taken from a *sequence* of new values. If the subsequence and the new sequence are not of equal 







 



 



length, the shorter length determines the number of elements that are replaced. The remaining <ClLinks  term={"element"}><i>elements</i></ClLinks> at the end of the longer sequence are not modified in the operation. 



**Examples:**
```lisp
(setq str "012345") → "012345" 
(subseq str 2) → "2345" 
(subseq str 3 5) → "34" 
(setf (subseq str 4) "abc") → "abc" 
str → "0123ab" 
(setf (subseq str 0 2) "A") → "A" 
str → "A123ab" 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *new-subsequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



<ClLinks  term={"replace"}><b>replace</b></ClLinks> 



