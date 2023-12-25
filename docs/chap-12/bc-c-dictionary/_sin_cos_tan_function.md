**sin, cos, tan** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"sin"}><b>sin</b></ClLinks> *radians → number* 



<ClLinks  term={"cos"}><b>cos</b></ClLinks> *radians → number* 



<ClLinks  term={"tan"}><b>tan</b></ClLinks> *radians → number* 



**Arguments and Values:** 



*radians*—a <ClLinks  term={"number"}><i>number</i></ClLinks> given in radians. 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



**Description:** 



<ClLinks  term={"sin"}><b>sin</b></ClLinks>, <ClLinks  term={"cos"}><b>cos</b></ClLinks>, and <ClLinks  term={"tan"}><b>tan</b></ClLinks> return the sine, cosine, and tangent, respectively, of *radians*. 



**Examples:**
```lisp
(sin 0) → 0.0 
(cos 0.7853982) → 0.707107 
(tan #c(0 1)) → #C(0.0 0.761594) 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *radians* is not a <ClLinks  term={"number"}><i>number</i></ClLinks> . Might signal <ClLinks  term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"asin"}><b>asin</b></ClLinks>, <ClLinks  term={"acos"}><b>acos</b></ClLinks>, <ClLinks  term={"atan"}><b>atan</b></ClLinks>, Section 12.1.3.3 (Rule of Float Substitutability) 







 



 



**asin, acos, atan** 



