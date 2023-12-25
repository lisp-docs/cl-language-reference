**/** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink> *number → reciprocal* 



<DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink> *numerator* &amp;rest *denominators*<sup>+</sup> *→ quotient* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>, *denominator*—a non-zero <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



*numerator*, *quotient*, *reciprocal*—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



**Description:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink> performs division or reciprocation. 



If no *denominators* are supplied, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink> returns the reciprocal of <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>. 



If at least one *denominator* is supplied, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink> divides the *numerator* by all of the *denominators* and returns the resulting *quotient*. 



If each <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is either an *integer* or a <GlossaryTerm styled={true} term={"ratio"}><i>ratio</i></GlossaryTerm>, and the result is not an *integer* , then it is a <GlossaryTerm styled={true} term={"ratio"}><i>ratio</i></GlossaryTerm>. 



 



 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink> performs necessary type conversions. 



If any <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> then the rules of floating-point contagion apply; see Section 12.1.4 (Floating-point Computations). 



**Examples:**
```lisp
 
(/ 12 4) *→* 3 
(/ 13 4) *→* 13/4 
(/ -8) *→* -1/8 
(/ 3 4 5) *→* 3/20 
(/ 0.5) *→* 2.0 
(/ 20 5) *→* 4 
(/ 5 20) *→* 1/4 
(/ 60 -2 3 5.0) *→* -2.0 
(/ 2 #c(2 2)) *→* #C(1/2 -1/2) 

```
**Exceptional Situations:** 



The consequences are unspecified if any <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> other than the first is zero. If there is only one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>, the consequences are unspecified if it is zero. 



Might signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if some <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink styled={true} term={"division-by-zero"}><b>division-by-zero</b></DictionaryLink> if division by zero is attempted. Might signal <DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"floor"}><b>floor</b></DictionaryLink>, <DictionaryLink styled={true} term={"ceiling"}><b>ceiling</b></DictionaryLink>, <DictionaryLink styled={true} term={"truncate"}><b>truncate</b></DictionaryLink>, <DictionaryLink styled={true} term={"round"}><b>round</b></DictionaryLink> 



**1+, 1***− Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"1+"}><b>1+</b></DictionaryLink> *number → successor* 



<DictionaryLink styled={true} term={"1"}><b>1*</b></DictionaryLink>− number → predecessor* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



*successor*, *predecessor*—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink styled={true} term={"1+"}><b>1+</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> that is one more than its argument <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>. **1-** returns a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> that is one less than its argument <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>. 







 



 



**Examples:**
```lisp

(1+ 99) *→* 100 
(1- 100) *→* 99 
(1+ (complex 0.0)) *→* #C(1.0 0.0) 
(1- 5/3) *→* 2/3 

```
**Exceptional Situations:** 



Might signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"incf"}><b>incf</b></DictionaryLink>, <DictionaryLink styled={true} term={"decf"}><b>decf</b></DictionaryLink> 



**Notes:** 



(1+ <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>) *≡* (+ <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> 1) 



(1- <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>) *≡* (- <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> 1) 



Implementors are encouraged to make the performance of both the previous expressions be the same. 



