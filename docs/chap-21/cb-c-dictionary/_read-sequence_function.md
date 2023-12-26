**read-sequence** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"read-sequence"}><b>read-sequence</b></DictionaryLink> *sequence stream* &amp;key *start end → position* 



*sequence*—a *sequence*. 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—an *input stream*. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*position*—an *integer* greater than or equal to zero, and less than or equal to the <ClLinks  term={"length"}><i>length</i></ClLinks> of the *sequence*. 



**Description:** 



Destructively modifies *sequence* by replacing the <ClLinks  term={"element"}><i>elements</i></ClLinks> of *sequence bounded* by *start* and *end* with <ClLinks  term={"element"}><i>elements</i></ClLinks> read from <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*Sequence* is destructively modified by copying successive <ClLinks  term={"element"}><i>elements</i></ClLinks> into it from <ClLinks  term={"stream"}><i>stream</i></ClLinks>. If the <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm> for <ClLinks  term={"stream"}><i>stream</i></ClLinks> is reached before copying all <ClLinks  term={"element"}><i>elements</i></ClLinks> of the subsequence, then the extra <ClLinks  term={"element"}><i>elements</i></ClLinks> near the end of *sequence* are not updated. 







 



 



*Position* is the index of the first <ClLinks  term={"element"}><i>element</i></ClLinks> of *sequence* that was not updated, which might be less than *end* because the <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm> was reached. 



**Examples:**
```lisp
(defvar \*data\* (make-array 15 :initial-element nil)) 
(values (read-sequence \*data\* (make-string-input-stream "test string")) \*data\*) → 11, #(#\t #\e #\s #\t #\Space #\s #\t #\r #\i #\n #\g NIL NIL NIL NIL) 
```
**Side Effects:** 



Modifies <ClLinks  term={"stream"}><i>stream</i></ClLinks> and *sequence*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *start* is not a non-negative *integer* . Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *end* is not a non-negative *integer* or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



Might signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if an <ClLinks  term={"element"}><i>element</i></ClLinks> read from the <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a member of the <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> of the *sequence*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), <DictionaryLink  term={"write-sequence"}><b>write-sequence</b></DictionaryLink>, <DictionaryLink  term={"read-line"}><b>read-line</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"read-sequence"}><b>read-sequence</b></DictionaryLink> is identical in effect to iterating over the indicated subsequence and reading one <ClLinks  term={"element"}><i>element</i></ClLinks> at a time from <ClLinks  term={"stream"}><i>stream</i></ClLinks> and storing it into *sequence*, but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with the same <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> as the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



