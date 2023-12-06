**read-from-string** *Function* 



**Syntax:** 



**read-from-string** *string* &amp;optional *eof-error-p eof-value* 



&amp;key *start end preserve-whitespace* 



*→ object, position* 



**Arguments and Values:** 



*string*—a *string*. 



*eof-error-p*—a *generalized boolean*. The default is *true*. 



*eof-value*—an *object*. The default is **nil**. 



*start*, *end*—*bounding index designators* of *string*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*preserve-whitespace*—a *generalized boolean*. The default is *false*. 



*object*—an *object* (parsed by the *Lisp reader* ) or the *eof-value*. 



*position*—an *integer* greater than or equal to zero, and less than or equal to one more than the *length* of the *string*. 







 



 



**Description:** 



Parses the printed representation of an *object* from the subsequence of *string bounded* by *start* and *end*, as if **read** had been called on an *input stream* containing those same *characters*. 



If *preserve-whitespace* is *true*, the operation will preserve *whitespace*<sub>2</sub> as **read-preserving-whitespace** would do. 



If an *object* is successfully parsed, the *primary value*, *object*, is the *object* that was parsed. If *eof-error-p* is *false* and if the end of the *substring* is reached, *eof-value* is returned. 



The *secondary value*, *position*, is the index of the first *character* in the *bounded string* that was not read. The *position* may depend upon the value of *preserve-whitespace*. If the entire *string* was read, the *position* returned is either the *length* of the *string* or one greater than the *length* of the *string*. 



**Examples:**
```lisp
 



(read-from-string " 1 3 5" t nil :start 2) *→* 3, 5 



(read-from-string "(a b c)") *→* (A B C), 7 




```
**Exceptional Situations:** 



If the end of the supplied substring occurs before an *object* can be read, an error is signaled if *eof-error-p* is *true*. An error is signaled if the end of the *substring* occurs in the middle of an incomplete *object*. 



**See Also:** 



**read**, **read-preserving-whitespace** 



**Notes:** 



The reason that *position* is allowed to be beyond the *length* of the *string* is to permit (but not require) the *implementation* to work by simulating the effect of a trailing delimiter at the end of the *bounded string*. When *preserve-whitespace* is *true*, the *position* might count the simulated delimiter. 



