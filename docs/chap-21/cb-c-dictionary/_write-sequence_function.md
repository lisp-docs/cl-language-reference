**write-sequence** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"write-sequence"}><b>write-sequence</b></DictionaryLink> *sequence stream* &amp;key *start end → sequence* 



*sequence*—a *sequence*. 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—an *output stream*. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



**Description:** 



<DictionaryLink  term={"write-sequence"}><b>write-sequence</b></DictionaryLink> writes the <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of the subsequence of *sequence bounded* by *start* and *end* to <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 







 



 



**Examples:**
```lisp
(write-sequence "bookworms" \*standard-output\* :end 4) 
▷ book 
→ "bookworms" 
```
**Side Effects:** 



Modifies <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *start* is not a non-negative *integer* . Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *end* is not a non-negative *integer* or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



Might signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of the *bounded sequence* is not a member of the <GlossaryTerm styled={true} term={"stream element type"}><i>stream element type</i></GlossaryTerm> of the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), <DictionaryLink  term={"read-sequence"}><b>read-sequence</b></DictionaryLink>, <DictionaryLink  term={"write-string"}><b>write-string</b></DictionaryLink>, <DictionaryLink  term={"write-line"}><b>write-line</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"write-sequence"}><b>write-sequence</b></DictionaryLink> is identical in effect to iterating over the indicated subsequence and writing one <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> at a time to <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the *sequence* is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> with the same <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> as the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



