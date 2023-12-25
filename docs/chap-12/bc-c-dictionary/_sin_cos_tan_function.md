**sin, cos, tan** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"sin"}><b>sin</b></ClLinks> *radians → number* 



<ClLinks styled={true} term={"cos"}><b>cos</b></ClLinks> *radians → number* 



<ClLinks styled={true} term={"tan"}><b>tan</b></ClLinks> *radians → number* 



**Arguments and Values:** 



*radians*—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> given in radians. 



<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



**Description:** 



<ClLinks styled={true} term={"sin"}><b>sin</b></ClLinks>, <ClLinks styled={true} term={"cos"}><b>cos</b></ClLinks>, and <ClLinks styled={true} term={"tan"}><b>tan</b></ClLinks> return the sine, cosine, and tangent, respectively, of *radians*. 



**Examples:**
```lisp
(sin 0) → 0.0 
(cos 0.7853982) → 0.707107 
(tan #c(0 1)) → #C(0.0 0.761594) 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *radians* is not a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . Might signal <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"asin"}><b>asin</b></ClLinks>, <ClLinks styled={true} term={"acos"}><b>acos</b></ClLinks>, <ClLinks styled={true} term={"atan"}><b>atan</b></ClLinks>, Section 12.1.3.3 (Rule of Float Substitutability) 







 



 



**asin, acos, atan** 



