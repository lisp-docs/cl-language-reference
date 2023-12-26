**parse-integer** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"parse-integer"}><b>parse-integer</b></DictionaryLink> <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end radix junk-allowed → integer, pos* 



**Arguments and Values:** 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm>—a <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm> . The default is 10. 



*junk-allowed*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 







 



 



*integer*—an *integer* or <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



*pos*—a <GlossaryTerm styled={true} term={"bounding index"}><i>bounding index</i></GlossaryTerm> of <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"parse-integer"}><b>parse-integer</b></DictionaryLink> parses an *integer* in the specified <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm> from the substring of <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> delimited by *start* and *end*. 



<DictionaryLink  term={"parse-integer"}><b>parse-integer</b></DictionaryLink> expects an optional sign (+ or -) followed by a a non-empty sequence of digits to be interpreted in the specified <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm>. Optional leading and trailing <GlossaryTerm  term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>1</sub> is ignored. 



<DictionaryLink  term={"parse-integer"}><b>parse-integer</b></DictionaryLink> does not recognize the syntactic radix-specifier prefixes #O, #B, #X, and #*n*R, nor does it recognize a trailing decimal point. 



If *junk-allowed* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"parse-error"}><b>parse-error</b></DictionaryLink> is signaled if substring does not consist entirely of the representation of a signed *integer* , possibly surrounded on either side by <GlossaryTerm  term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>1</sub> <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>. 



The first <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> returned is either the *integer* that was parsed, or else <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if no syntactically correct *integer* was seen but *junk-allowed* was <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



The second <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> is either the index into the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> of the delimiter that terminated the parse, or the upper <GlossaryTerm styled={true} term={"bounding index"}><i>bounding index</i></GlossaryTerm> of the substring if the parse terminated at the end of the substring (as is always the case if *junk-allowed* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>). 



**Examples:**
```lisp
(parse-integer "123") → 123, 3 
(parse-integer "123" :start 1 :radix 5) → 13, 3 
(parse-integer "no-integer" :junk-allowed t) → NIL, 0 
```
**Exceptional Situations:** 



If *junk-allowed* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, an error is signaled if substring does not consist entirely of the representation of an *integer* , possibly surrounded on either side by <GlossaryTerm  term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>1</sub> characters. 



