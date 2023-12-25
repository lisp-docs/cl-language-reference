**sin, cos, tan** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"sin"}><b>sin</b></DictionaryLink> *radians → number* 



<DictionaryLink styled={true} term={"cos"}><b>cos</b></DictionaryLink> *radians → number* 



<DictionaryLink styled={true} term={"tan"}><b>tan</b></DictionaryLink> *radians → number* 



**Arguments and Values:** 



*radians*—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> given in radians. 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink styled={true} term={"sin"}><b>sin</b></DictionaryLink>, <DictionaryLink styled={true} term={"cos"}><b>cos</b></DictionaryLink>, and <DictionaryLink styled={true} term={"tan"}><b>tan</b></DictionaryLink> return the sine, cosine, and tangent, respectively, of *radians*. 



**Examples:**
```lisp

(sin 0) *→* 0.0 
(cos 0.7853982) *→* 0.707107 
(tan #c(0 1)) *→* #C(0.0 0.761594) 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *radians* is not a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"asin"}><b>asin</b></DictionaryLink>, <DictionaryLink styled={true} term={"acos"}><b>acos</b></DictionaryLink>, <DictionaryLink styled={true} term={"atan"}><b>atan</b></DictionaryLink>, Section 12.1.3.3 (Rule of Float Substitutability) 







 



 



**asin, acos, atan** 



