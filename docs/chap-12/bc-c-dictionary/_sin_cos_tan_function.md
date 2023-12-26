**sin, cos, tan** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"sin"}><b>sin</b></DictionaryLink> *radians → number* 



<DictionaryLink  term={"cos"}><b>cos</b></DictionaryLink> *radians → number* 



<DictionaryLink  term={"tan"}><b>tan</b></DictionaryLink> *radians → number* 



**Arguments and Values:** 



*radians*—a <ClLinks  term={"number"}><i>number</i></ClLinks> given in radians. 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



**Description:** 



<DictionaryLink  term={"sin"}><b>sin</b></DictionaryLink>, <DictionaryLink  term={"cos"}><b>cos</b></DictionaryLink>, and <DictionaryLink  term={"tan"}><b>tan</b></DictionaryLink> return the sine, cosine, and tangent, respectively, of *radians*. 



**Examples:**
```lisp
(sin 0) → 0.0 
(cos 0.7853982) → 0.707107 
(tan #c(0 1)) → #C(0.0 0.761594) 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *radians* is not a <ClLinks  term={"number"}><i>number</i></ClLinks> . Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"asin"}><b>asin</b></DictionaryLink>, <DictionaryLink  term={"acos"}><b>acos</b></DictionaryLink>, <DictionaryLink  term={"atan"}><b>atan</b></DictionaryLink>, Section 12.1.3.3 (Rule of Float Substitutability) 







 



 



<DictionaryLink styled={true} term={"asin, acos, atan"}><b>asin, acos, atan</b></DictionaryLink> 



