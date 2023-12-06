**subseq** *Accessor* 



**Syntax:** 



**subseq** *sequence start* &amp;optional *end → subsequence* 



**(setf (subseq** *sequence start* &amp;optional *end***)** *new-subsequence***)** 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*start*, *end*—*bounding index designators* of *sequence*. The default for *end* is **nil**. 



*subsequence*—a *proper sequence*. 



*new-subsequence*—a *proper sequence*. 



**Description:** 



**subseq** creates a *sequence* that is a copy of the subsequence of *sequence bounded* by *start* and *end*. 



*Start* specifies an offset into the original *sequence* and marks the beginning position of the subsequence. *end* marks the position following the last element of the subsequence. 



**subseq** always allocates a new *sequence* for a result; it never shares storage with an old *sequence*. The result subsequence is always of the same *type* as *sequence*. 



If *sequence* is a *vector* , the result is a *fresh simple array* of *rank* one that has the same *actual array element type* as *sequence*. If *sequence* is a *list*, the result is a *fresh list*. 



**setf** may be used with **subseq** to destructively replace *elements* of a subsequence with *elements* taken from a *sequence* of new values. If the subsequence and the new sequence are not of equal 







 



 



length, the shorter length determines the number of elements that are replaced. The remaining *elements* at the end of the longer sequence are not modified in the operation. 



**Examples:**
```lisp
 

(setq str "012345") *→* "012345" 

(subseq str 2) *→* "2345" 

(subseq str 3 5) *→* "34" 

(setf (subseq str 4) "abc") *→* "abc" 

str *→* "0123ab" 

(setf (subseq str 0 2) "A") *→* "A" 

str *→* "A123ab" 


```
**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *sequence* is not a *proper sequence*. Should be prepared to signal an error of *type* **type-error** if *new-subsequence* is not a *proper sequence*. 



**See Also:** 



**replace** 



