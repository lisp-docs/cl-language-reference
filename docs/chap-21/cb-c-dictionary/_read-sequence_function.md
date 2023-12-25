**read-sequence** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"read-sequence"}><b>read-sequence</b></DictionaryLink> *sequence stream* &amp;key *start end → position* 



*sequence*—a *sequence*. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—an *input stream*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*position*—an *integer* greater than or equal to zero, and less than or equal to the <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of the *sequence*. 



**Description:** 



Destructively modifies *sequence* by replacing the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of *sequence bounded* by *start* and *end* with <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> read from <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



*Sequence* is destructively modified by copying successive <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> into it from <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. If the *end of file* for <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is reached before copying all <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the subsequence, then the extra <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> near the end of *sequence* are not updated. 







 



 



*Position* is the index of the first <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of *sequence* that was not updated, which might be less than *end* because the *end of file* was reached. 



**Examples:**
```lisp

(defvar \*data\* (make-array 15 :initial-element nil)) 
(values (read-sequence \*data\* (make-string-input-stream "test string")) \*data\*) *→* 11, #(#\t #\e #\s #\t #\Space #\s #\t #\r #\i #\n #\g NIL NIL NIL NIL) 

```
**Side Effects:** 



Modifies <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> and *sequence*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *start* is not a non-negative *integer* . Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *end* is not a non-negative *integer* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



Might signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> read from the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is not a member of the *element type* of the *sequence*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), <DictionaryLink styled={true} term={"write-sequence"}><b>write-sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-line"}><b>read-line</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"read-sequence"}><b>read-sequence</b></DictionaryLink> is identical in effect to iterating over the indicated subsequence and reading one <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> at a time from <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> and storing it into *sequence*, but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with the same *element type* as the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



