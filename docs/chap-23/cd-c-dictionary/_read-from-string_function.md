**read-from-string** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"read-from-string"}><b>read-from-string</b></DictionaryLink> <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> &amp;optional *eof-error-p eof-value* 



&amp;key *start end preserve-whitespace* 



*→ object, position* 



**Arguments and Values:** 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



*eof-error-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



*eof-value*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*preserve-whitespace*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> (parsed by the *Lisp reader* ) or the *eof-value*. 



*position*—an *integer* greater than or equal to zero, and less than or equal to one more than the <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 







 



 



**Description:** 



Parses the printed representation of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> from the subsequence of *string bounded* by *start* and *end*, as if <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> had been called on an *input stream* containing those same <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>. 



If *preserve-whitespace* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, the operation will preserve <GlossaryTerm  term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> as <DictionaryLink  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> would do. 



If an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is successfully parsed, the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, is the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that was parsed. If *eof-error-p* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> and if the end of the *substring* is reached, *eof-value* is returned. 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *position*, is the index of the first <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> in the *bounded string* that was not read. The *position* may depend upon the value of *preserve-whitespace*. If the entire <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> was read, the *position* returned is either the <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> or one greater than the <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



**Examples:**
```lisp
(read-from-string " 1 3 5" t nil :start 2) → 3, 5 
(read-from-string "(a b c)") → (A B C), 7 
```
**Exceptional Situations:** 



If the end of the supplied substring occurs before an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> can be read, an error is signaled if *eof-error-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. An error is signaled if the end of the *substring* occurs in the middle of an incomplete <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"read"}><b>read</b></DictionaryLink>, <DictionaryLink  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> 



**Notes:** 



The reason that *position* is allowed to be beyond the <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is to permit (but not require) the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to work by simulating the effect of a trailing delimiter at the end of the *bounded string*. When *preserve-whitespace* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, the *position* might count the simulated delimiter. 



