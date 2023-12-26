**read-from-string** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"read-from-string"}><b>read-from-string</b></DictionaryLink> <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;optional *eof-error-p eof-value* 



&amp;key *start end preserve-whitespace* 



*→ object, position* 



**Arguments and Values:** 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



*eof-error-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of <ClLinks  term={"string"}><i>string</i></ClLinks>. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*preserve-whitespace*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks> (parsed by the *Lisp reader* ) or the *eof-value*. 



*position*—an *integer* greater than or equal to zero, and less than or equal to one more than the <ClLinks  term={"length"}><i>length</i></ClLinks> of the <ClLinks  term={"string"}><i>string</i></ClLinks>. 







 



 



**Description:** 



Parses the printed representation of an <ClLinks  term={"object"}><i>object</i></ClLinks> from the subsequence of *string bounded* by *start* and *end*, as if <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> had been called on an *input stream* containing those same <ClLinks  term={"character"}><i>characters</i></ClLinks>. 



If *preserve-whitespace* is <ClLinks  term={"true"}><i>true</i></ClLinks>, the operation will preserve <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> as <DictionaryLink  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> would do. 



If an <ClLinks  term={"object"}><i>object</i></ClLinks> is successfully parsed, the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, is the <ClLinks  term={"object"}><i>object</i></ClLinks> that was parsed. If *eof-error-p* is <ClLinks  term={"false"}><i>false</i></ClLinks> and if the end of the *substring* is reached, *eof-value* is returned. 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *position*, is the index of the first <ClLinks  term={"character"}><i>character</i></ClLinks> in the *bounded string* that was not read. The *position* may depend upon the value of *preserve-whitespace*. If the entire <ClLinks  term={"string"}><i>string</i></ClLinks> was read, the *position* returned is either the <ClLinks  term={"length"}><i>length</i></ClLinks> of the <ClLinks  term={"string"}><i>string</i></ClLinks> or one greater than the <ClLinks  term={"length"}><i>length</i></ClLinks> of the <ClLinks  term={"string"}><i>string</i></ClLinks>. 



**Examples:**
```lisp
(read-from-string " 1 3 5" t nil :start 2) → 3, 5 
(read-from-string "(a b c)") → (A B C), 7 
```
**Exceptional Situations:** 



If the end of the supplied substring occurs before an <ClLinks  term={"object"}><i>object</i></ClLinks> can be read, an error is signaled if *eof-error-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>. An error is signaled if the end of the *substring* occurs in the middle of an incomplete <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"read"}><b>read</b></DictionaryLink>, <DictionaryLink  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> 



**Notes:** 



The reason that *position* is allowed to be beyond the <ClLinks  term={"length"}><i>length</i></ClLinks> of the <ClLinks  term={"string"}><i>string</i></ClLinks> is to permit (but not require) the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to work by simulating the effect of a trailing delimiter at the end of the *bounded string*. When *preserve-whitespace* is <ClLinks  term={"true"}><i>true</i></ClLinks>, the *position* might count the simulated delimiter. 



