**subseq** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"subseq"}><b>subseq</b></DictionaryLink> *sequence start* &amp;optional *end → subsequence* 



**(setf (subseq** *sequence start* &amp;optional *end***)** *new-subsequence***)** 



**Arguments and Values:** 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The default for *end* is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*subsequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



*new-subsequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"subseq"}><b>subseq</b></DictionaryLink> creates a *sequence* that is a copy of the subsequence of *sequence bounded* by *start* and *end*. 



*Start* specifies an offset into the original *sequence* and marks the beginning position of the subsequence. *end* marks the position following the last element of the subsequence. 



<DictionaryLink  term={"subseq"}><b>subseq</b></DictionaryLink> always allocates a new *sequence* for a result; it never shares storage with an old *sequence*. The result subsequence is always of the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> as *sequence*. 



If *sequence* is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> , the result is a *fresh simple array* of <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> one that has the same <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> as *sequence*. If *sequence* is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, the result is a *fresh list*. 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> may be used with <DictionaryLink  term={"subseq"}><b>subseq</b></DictionaryLink> to destructively replace <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of a subsequence with <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> taken from a *sequence* of new values. If the subsequence and the new sequence are not of equal 







 



 



length, the shorter length determines the number of elements that are replaced. The remaining <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> at the end of the longer sequence are not modified in the operation. 



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



Should be prepared to signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. Should be prepared to signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *new-subsequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"replace"}><b>replace</b></DictionaryLink> 



