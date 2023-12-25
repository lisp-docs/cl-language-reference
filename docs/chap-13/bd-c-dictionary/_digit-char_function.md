**digit-char** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"digit-char"}><b>digit-char</b></DictionaryLink> *weight* &amp;optional *radix → char* 



**Arguments and Values:** 



*weight*—a non-negative *integer* . 



<GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> . The default is 10. 



*char*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Description:** 



If *weight* is less than <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm>, <DictionaryLink styled={true} term={"digit-char"}><b>digit-char</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> which has that *weight* when considered as a digit in the specified radix. If the resulting <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is to be an <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>1</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , it will be an uppercase <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



If *weight* is greater than or equal to <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm>, <DictionaryLink styled={true} term={"digit-char"}><b>digit-char</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(digit-char 0) *→* #\0 
(digit-char 10 11) *→* #\A 
(digit-char 10 10) *→ false* 
(digit-char 7) *→* #\7 
(digit-char 12) *→ false* 
(digit-char 12 16) *→* #\C ;not #\c 
(digit-char 6 2) *→ false* 
(digit-char 1 2) *→* #\1 

```
**See Also:** 



<DictionaryLink styled={true} term={"digit-char-p"}><b>digit-char-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"graphic-char-p"}><b>graphic-char-p</b></DictionaryLink>, Section 2.1 (Character Syntax) 



**Notes:** 



