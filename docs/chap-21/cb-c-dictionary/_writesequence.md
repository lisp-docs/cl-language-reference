**write-sequence** *Function* 



**Syntax:** 



**write-sequence** *sequence stream* &key *start end → sequence* 



*sequence*—a *sequence*. 



*stream*—an *output stream*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



**Description:** 



**write-sequence** writes the *elements* of the subsequence of *sequence bounded* by *start* and *end* to *stream*. 







 



 



**Examples:**
```lisp
 



(write-sequence "bookworms" \*standard-output\* :end 4) 



▷ book 



*→* "bookworms" 




```
**Side Effects:** 



Modifies *stream*. 



**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *sequence* is not a *proper sequence*. Should signal an error of *type* **type-error** if *start* is not a non-negative *integer* . Should signal an error of *type* **type-error** if *end* is not a non-negative *integer* or **nil**. 



Might signal an error of *type* **type-error** if an *element* of the *bounded sequence* is not a member of the *stream element type* of the *stream*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), **read-sequence**, **write-string**, **write-line** 



**Notes:** 



**write-sequence** is identical in effect to iterating over the indicated subsequence and writing one *element* at a time to *stream*, but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the *sequence* is a *vector* with the same *element type* as the *stream*. 



