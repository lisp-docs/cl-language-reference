**write-sequence** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"write-sequence"}><b>write-sequence</b></DictionaryLink> *sequence stream* &amp;key *start end → sequence* 



*sequence*—a *sequence*. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—an *output stream*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



**Description:** 



<DictionaryLink styled={true} term={"write-sequence"}><b>write-sequence</b></DictionaryLink> writes the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the subsequence of *sequence bounded* by *start* and *end* to <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 







 



 



**Examples:**
```lisp

(write-sequence "bookworms" \*standard-output\* :end 4) 
▷ book 
*→* "bookworms" 

```
**Side Effects:** 



Modifies <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *start* is not a non-negative *integer* . Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *end* is not a non-negative *integer* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



Might signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the *bounded sequence* is not a member of the *stream element type* of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), <DictionaryLink styled={true} term={"read-sequence"}><b>read-sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"write-string"}><b>write-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"write-line"}><b>write-line</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"write-sequence"}><b>write-sequence</b></DictionaryLink> is identical in effect to iterating over the indicated subsequence and writing one <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> at a time to <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with the same *element type* as the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



