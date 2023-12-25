**read-from-string** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"read-from-string"}><b>read-from-string</b></ClLinks> <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> &amp;optional *eof-error-p eof-value* 



&amp;key *start end preserve-whitespace* 



*→ object, position* 



**Arguments and Values:** 



<ClLinks styled={true} term={"string"}><i>string</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



*eof-error-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*start*, *end*—*bounding index designators* of <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



*preserve-whitespace*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> (parsed by the *Lisp reader* ) or the *eof-value*. 



*position*—an *integer* greater than or equal to zero, and less than or equal to one more than the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 







 



 



**Description:** 



Parses the printed representation of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> from the subsequence of *string bounded* by *start* and *end*, as if <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> had been called on an *input stream* containing those same <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks>. 



If *preserve-whitespace* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the operation will preserve <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> as <ClLinks styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks> would do. 



If an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is successfully parsed, the *primary value*, *object*, is the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that was parsed. If *eof-error-p* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> and if the end of the *substring* is reached, *eof-value* is returned. 



The *secondary value*, *position*, is the index of the first <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> in the *bounded string* that was not read. The *position* may depend upon the value of *preserve-whitespace*. If the entire <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> was read, the *position* returned is either the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or one greater than the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



**Examples:**
```lisp
(read-from-string " 1 3 5" t nil :start 2) → 3, 5 
(read-from-string "(a b c)") → (A B C), 7 
```
**Exceptional Situations:** 



If the end of the supplied substring occurs before an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> can be read, an error is signaled if *eof-error-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. An error is signaled if the end of the *substring* occurs in the middle of an incomplete <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"read"}><b>read</b></ClLinks>, <ClLinks styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks> 



**Notes:** 



The reason that *position* is allowed to be beyond the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> is to permit (but not require) the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to work by simulating the effect of a trailing delimiter at the end of the *bounded string*. When *preserve-whitespace* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the *position* might count the simulated delimiter. 



