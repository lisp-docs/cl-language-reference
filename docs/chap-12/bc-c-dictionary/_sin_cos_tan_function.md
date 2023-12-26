**sin, cos, tan** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"sin"}><b>sin</b></DictionaryLink> *radians → number* 



<DictionaryLink  term={"cos"}><b>cos</b></DictionaryLink> *radians → number* 



<DictionaryLink  term={"tan"}><b>tan</b></DictionaryLink> *radians → number* 



**Arguments and Values:** 



*radians*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> given in radians. 



<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink  term={"sin"}><b>sin</b></DictionaryLink>, <DictionaryLink  term={"cos"}><b>cos</b></DictionaryLink>, and <DictionaryLink  term={"tan"}><b>tan</b></DictionaryLink> return the sine, cosine, and tangent, respectively, of *radians*. 



**Examples:**
```lisp
(sin 0) → 0.0 
(cos 0.7853982) → 0.707107 
(tan #c(0 1)) → #C(0.0 0.761594) 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *radians* is not a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"asin"}><b>asin</b></DictionaryLink>, <DictionaryLink  term={"acos"}><b>acos</b></DictionaryLink>, <DictionaryLink  term={"atan"}><b>atan</b></DictionaryLink>, Section 12.1.3.3 (Rule of Float Substitutability) 







 



 



<DictionaryLink styled={true} term={"asin, acos, atan"}><b>asin, acos, atan</b></DictionaryLink> 



