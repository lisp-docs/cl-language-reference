**read-from-string** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"read-from-string"}><b>read-from-string</b></ClLinks> <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;optional *eof-error-p eof-value* 



&amp;key *start end preserve-whitespace* 



*→ object, position* 



**Arguments and Values:** 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



*eof-error-p*—a *generalized boolean*. The default is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*start*, *end*—*bounding index designators* of <ClLinks  term={"string"}><i>string</i></ClLinks>. The defaults for *start* and *end* are 0 and <ClLinks  term={"nil"}><b>nil</b></ClLinks>, respectively. 



*preserve-whitespace*—a *generalized boolean*. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks> (parsed by the *Lisp reader* ) or the *eof-value*. 



*position*—an *integer* greater than or equal to zero, and less than or equal to one more than the <ClLinks  term={"length"}><i>length</i></ClLinks> of the <ClLinks  term={"string"}><i>string</i></ClLinks>. 







 



 



**Description:** 



Parses the printed representation of an <ClLinks  term={"object"}><i>object</i></ClLinks> from the subsequence of *string bounded* by *start* and *end*, as if <ClLinks  term={"read"}><b>read</b></ClLinks> had been called on an *input stream* containing those same <ClLinks  term={"character"}><i>characters</i></ClLinks>. 



If *preserve-whitespace* is <ClLinks  term={"true"}><i>true</i></ClLinks>, the operation will preserve <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> as <ClLinks  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks> would do. 



If an <ClLinks  term={"object"}><i>object</i></ClLinks> is successfully parsed, the *primary value*, *object*, is the <ClLinks  term={"object"}><i>object</i></ClLinks> that was parsed. If *eof-error-p* is <ClLinks  term={"false"}><i>false</i></ClLinks> and if the end of the *substring* is reached, *eof-value* is returned. 



The *secondary value*, *position*, is the index of the first <ClLinks  term={"character"}><i>character</i></ClLinks> in the *bounded string* that was not read. The *position* may depend upon the value of *preserve-whitespace*. If the entire <ClLinks  term={"string"}><i>string</i></ClLinks> was read, the *position* returned is either the <ClLinks  term={"length"}><i>length</i></ClLinks> of the <ClLinks  term={"string"}><i>string</i></ClLinks> or one greater than the <ClLinks  term={"length"}><i>length</i></ClLinks> of the <ClLinks  term={"string"}><i>string</i></ClLinks>. 



**Examples:**
```lisp
(read-from-string " 1 3 5" t nil :start 2) → 3, 5 
(read-from-string "(a b c)") → (A B C), 7 
```
**Exceptional Situations:** 



If the end of the supplied substring occurs before an <ClLinks  term={"object"}><i>object</i></ClLinks> can be read, an error is signaled if *eof-error-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>. An error is signaled if the end of the *substring* occurs in the middle of an incomplete <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"read"}><b>read</b></ClLinks>, <ClLinks  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks> 



**Notes:** 



The reason that *position* is allowed to be beyond the <ClLinks  term={"length"}><i>length</i></ClLinks> of the <ClLinks  term={"string"}><i>string</i></ClLinks> is to permit (but not require) the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to work by simulating the effect of a trailing delimiter at the end of the *bounded string*. When *preserve-whitespace* is <ClLinks  term={"true"}><i>true</i></ClLinks>, the *position* might count the simulated delimiter. 



