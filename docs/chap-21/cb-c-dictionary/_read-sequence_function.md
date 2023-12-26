**read-sequence** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"read-sequence"}><b>read-sequence</b></DictionaryLink> *sequence stream* &amp;key *start end → position* 



*sequence*—a *sequence*. 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—an *input stream*. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*position*—an *integer* greater than or equal to zero, and less than or equal to the <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of the *sequence*. 



**Description:** 



Destructively modifies *sequence* by replacing the <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of *sequence bounded* by *start* and *end* with <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> read from <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



*Sequence* is destructively modified by copying successive <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> into it from <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. If the <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm> for <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is reached before copying all <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of the subsequence, then the extra <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> near the end of *sequence* are not updated. 







 



 



*Position* is the index of the first <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of *sequence* that was not updated, which might be less than *end* because the <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm> was reached. 



**Examples:**
```lisp
(defvar \*data\* (make-array 15 :initial-element nil)) 
(values (read-sequence \*data\* (make-string-input-stream "test string")) \*data\*) → 11, #(#\t #\e #\s #\t #\Space #\s #\t #\r #\i #\n #\g NIL NIL NIL NIL) 
```
**Side Effects:** 



Modifies <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> and *sequence*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *start* is not a non-negative *integer* . Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *end* is not a non-negative *integer* or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



Might signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> read from the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not a member of the <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> of the *sequence*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), <DictionaryLink  term={"write-sequence"}><b>write-sequence</b></DictionaryLink>, <DictionaryLink  term={"read-line"}><b>read-line</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"read-sequence"}><b>read-sequence</b></DictionaryLink> is identical in effect to iterating over the indicated subsequence and reading one <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> at a time from <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> and storing it into *sequence*, but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the *sequence* is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> with the same <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> as the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



