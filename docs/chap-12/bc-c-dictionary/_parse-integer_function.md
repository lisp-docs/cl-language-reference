**parse-integer** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"parse-integer"}><b>parse-integer</b></DictionaryLink> <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end radix junk-allowed → integer, pos* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



*start*, *end*—*bounding index designators* of <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> . The default is 10. 



*junk-allowed*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 







 



 



*integer*—an *integer* or <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



*pos*—a *bounding index* of <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"parse-integer"}><b>parse-integer</b></DictionaryLink> parses an *integer* in the specified <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> from the substring of <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> delimited by *start* and *end*. 



<DictionaryLink styled={true} term={"parse-integer"}><b>parse-integer</b></DictionaryLink> expects an optional sign (+ or -) followed by a a non-empty sequence of digits to be interpreted in the specified <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm>. Optional leading and trailing <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>1</sub> is ignored. 



<DictionaryLink styled={true} term={"parse-integer"}><b>parse-integer</b></DictionaryLink> does not recognize the syntactic radix-specifier prefixes #O, #B, #X, and #*n*R, nor does it recognize a trailing decimal point. 



If *junk-allowed* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"parse-error"}><b>parse-error</b></DictionaryLink> is signaled if substring does not consist entirely of the representation of a signed *integer* , possibly surrounded on either side by <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>1</sub> <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>. 



The first <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> returned is either the *integer* that was parsed, or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no syntactically correct *integer* was seen but *junk-allowed* was <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



The second <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is either the index into the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> of the delimiter that terminated the parse, or the upper *bounding index* of the substring if the parse terminated at the end of the substring (as is always the case if *junk-allowed* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>). 



**Examples:**
```lisp

(parse-integer "123") *→* 123, 3 
(parse-integer "123" :start 1 :radix 5) *→* 13, 3 
(parse-integer "no-integer" :junk-allowed t) *→* NIL, 0 

```
**Exceptional Situations:** 



If *junk-allowed* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, an error is signaled if substring does not consist entirely of the representation of an *integer* , possibly surrounded on either side by <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>1</sub> characters. 



