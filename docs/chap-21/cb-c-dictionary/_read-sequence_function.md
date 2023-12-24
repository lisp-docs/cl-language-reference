**read-sequence** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"read-sequence"}><b>read-sequence</b></ClLinks> *sequence stream* &amp;key *start end → position* 



*sequence*—a *sequence*. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—an *input stream*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



*position*—an *integer* greater than or equal to zero, and less than or equal to the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of the *sequence*. 



**Description:** 



Destructively modifies *sequence* by replacing the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of *sequence bounded* by *start* and *end* with <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> read from <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



*Sequence* is destructively modified by copying successive <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> into it from <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. If the *end of file* for <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is reached before copying all <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the subsequence, then the extra <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> near the end of *sequence* are not updated. 







 



 



*Position* is the index of the first <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of *sequence* that was not updated, which might be less than *end* because the *end of file* was reached. 



**Examples:**
```lisp

(defvar \*data\* (make-array 15 :initial-element nil)) 
(values (read-sequence \*data\* (make-string-input-stream "test string")) \*data\*) → 11, #(#\t #\e #\s #\t #\Space #\s #\t #\r #\i #\n #\g NIL NIL NIL NIL) 

```
**Side Effects:** 



Modifies <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> and *sequence*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*. Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *start* is not a non-negative *integer* . Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *end* is not a non-negative *integer* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



Might signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> read from the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is not a member of the *element type* of the *sequence*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), <ClLinks styled={true} term={"write-sequence"}><b>write-sequence</b></ClLinks>, <ClLinks styled={true} term={"read-line"}><b>read-line</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"read-sequence"}><b>read-sequence</b></ClLinks> is identical in effect to iterating over the indicated subsequence and reading one <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> at a time from <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> and storing it into *sequence*, but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the *sequence* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with the same *element type* as the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



