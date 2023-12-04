**read-sequence** *Function* 



**Syntax:** 



**read-sequence** *sequence stream* &key *start end → position* 



*sequence*—a *sequence*. 



*stream*—an *input stream*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*position*—an *integer* greater than or equal to zero, and less than or equal to the *length* of the *sequence*. 



**Description:** 



Destructively modifies *sequence* by replacing the *elements* of *sequence bounded* by *start* and *end* with *elements* read from *stream*. 



*Sequence* is destructively modified by copying successive *elements* into it from *stream*. If the *end of file* for *stream* is reached before copying all *elements* of the subsequence, then the extra *elements* near the end of *sequence* are not updated. 







 



 



*Position* is the index of the first *element* of *sequence* that was not updated, which might be less than *end* because the *end of file* was reached. 



**Examples:**
```lisp
 



(defvar \*data\* (make-array 15 :initial-element nil)) 



(values (read-sequence \*data\* (make-string-input-stream "test string")) \*data\*) *→* 11, #(#\t #\e #\s #\t #\Space #\s #\t #\r #\i #\n #\g NIL NIL NIL NIL) 




```
**Side Effects:** 



Modifies *stream* and *sequence*. 



**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *sequence* is not a *proper sequence*. Should signal an error of *type* **type-error** if *start* is not a non-negative *integer* . Should signal an error of *type* **type-error** if *end* is not a non-negative *integer* or **nil**. 



Might signal an error of *type* **type-error** if an *element* read from the *stream* is not a member of the *element type* of the *sequence*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), **write-sequence**, **read-line** 



**Notes:** 



**read-sequence** is identical in effect to iterating over the indicated subsequence and reading one *element* at a time from *stream* and storing it into *sequence*, but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the *sequence* is a *vector* with the same *element type* as the *stream*. 



