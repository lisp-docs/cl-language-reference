**parse-integer** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"parse-integer"}><b>parse-integer</b></ClLinks> <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> &amp;key *start end radix junk-allowed → integer, pos* 



**Arguments and Values:** 



<ClLinks styled={true} term={"string"}><i>string</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



*start*, *end*—*bounding index designators* of <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



<ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks>—a <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> . The default is 10. 



*junk-allowed*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 







 



 



*integer*—an *integer* or <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



*pos*—a *bounding index* of <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"parse-integer"}><b>parse-integer</b></ClLinks> parses an *integer* in the specified <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> from the substring of <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> delimited by *start* and *end*. 



<ClLinks styled={true} term={"parse-integer"}><b>parse-integer</b></ClLinks> expects an optional sign (+ or -) followed by a a non-empty sequence of digits to be interpreted in the specified <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks>. Optional leading and trailing <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>1</sub> is ignored. 



<ClLinks styled={true} term={"parse-integer"}><b>parse-integer</b></ClLinks> does not recognize the syntactic radix-specifier prefixes #O, #B, #X, and #*n*R, nor does it recognize a trailing decimal point. 



If *junk-allowed* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"parse-error"}><b>parse-error</b></ClLinks> is signaled if substring does not consist entirely of the representation of a signed *integer* , possibly surrounded on either side by <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>1</sub> <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks>. 



The first <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> returned is either the *integer* that was parsed, or else <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if no syntactically correct *integer* was seen but *junk-allowed* was <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



The second <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is either the index into the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> of the delimiter that terminated the parse, or the upper *bounding index* of the substring if the parse terminated at the end of the substring (as is always the case if *junk-allowed* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>). 



**Examples:**
```lisp

(parse-integer "123") → 123, 3 
(parse-integer "123" :start 1 :radix 5) → 13, 3 
(parse-integer "no-integer" :junk-allowed t) → NIL, 0 

```
**Exceptional Situations:** 



If *junk-allowed* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, an error is signaled if substring does not consist entirely of the representation of an *integer* , possibly surrounded on either side by <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>1</sub> characters. 



