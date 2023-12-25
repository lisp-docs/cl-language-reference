**decode-float, scale-float, float-radix, float-sign, float-digits, float-precision, integer-decode-float** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"decode-float"}><b>decode-float</b></DictionaryLink> *float ! significand, exponent, sign* 



<DictionaryLink styled={true} term={"scale-float"}><b>scale-float</b></DictionaryLink> *float integer ! scaled-float* 



<DictionaryLink styled={true} term={"float-radix"}><b>float-radix</b></DictionaryLink> *float ! float-radix* 



<DictionaryLink styled={true} term={"float-sign"}><b>float-sign</b></DictionaryLink> *float-1* &amp;optional *float-2 ! signed-float* 



<DictionaryLink styled={true} term={"float-digits"}><b>float-digits</b></DictionaryLink> *float ! digits1* 



<DictionaryLink styled={true} term={"float-precision"}><b>float-precision</b></DictionaryLink> *float ! digits2* 



<DictionaryLink styled={true} term={"integer-decode-float"}><b>integer-decode-float</b></DictionaryLink> *float ! significand, exponent, integer-sign* 



**Arguments and Values:** 



*digits1*—a non-negative *integer* . 



*digits2*—a non-negative *integer* . 



*exponent*—an *integer* . 



<GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



*float-1*—a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



*float-2*—a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 







 



 



**decode-float, scale-float, float-radix, float-sign,** *...* 



*float-radix*—an *integer* . 



*integer*—a non-negative *integer* . 



*integer-sign*—the *integer* -1, or the *integer* 1. 



*scaled-float*—a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"sign"}><i>sign</i></GlossaryTerm>—A <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> but numerically equal to 1.0 or -1.0. 



*signed-float*—a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



*significand*—a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"decode-float"}><b>decode-float</b></DictionaryLink> computes three values that characterize <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. The first value is of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> and represents the significand. The second value represents the exponent to which the radix (notated in this description by *b*) must be raised to obtain the value that, when multiplied with the first result, produces the absolute value of <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is zero, any *integer* value may be returned, provided that the identity shown for <DictionaryLink styled={true} term={"scale-float"}><b>scale-float</b></DictionaryLink> holds. The third value is of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> and is 1.0 if <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is greater than or equal to zero or -1.0 otherwise. 



<DictionaryLink styled={true} term={"decode-float"}><b>decode-float</b></DictionaryLink> divides <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> by an integral power of *b* so as to bring its value between 1*/b* (inclusive) and 1 (exclusive), and returns the quotient as the first value. If <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is zero, however, the result equals the absolute value of <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> (that is, if there is a negative zero, its significand is considered to be a positive zero). 



<DictionaryLink styled={true} term={"scale-float"}><b>scale-float</b></DictionaryLink> returns (\* <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> (expt (float *b float<GlossaryTerm styled={true} term={"t"}><i>) </i></GlossaryTerm>integer*)), where *b* is the radix of the floating point representation. <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is not necessarily between 1*/b* and 1. 



<DictionaryLink styled={true} term={"float-radix"}><b>float-radix</b></DictionaryLink> returns the radix of <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"float-sign"}><b>float-sign</b></DictionaryLink> returns a number z such that z and *float-1* have the same sign and also such that z and *float-2* have the same absolute value. If *float-2* is not supplied, its value is (float 1 *float-1*). If an implementation has distinct representations for negative zero and positive zero, then (float-sign -0.0) *!* -1.0. 



<DictionaryLink styled={true} term={"float-digits"}><b>float-digits</b></DictionaryLink> returns the number of radix *b* digits used in the representation of <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> (including any implicit digits, such as a “hidden bit”). 



<DictionaryLink styled={true} term={"float-precision"}><b>float-precision</b></DictionaryLink> returns the number of significant radix *b* digits present in <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>; if <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> zero, then the result is an *integer* zero. 



For *normalized floats*, the results of <DictionaryLink styled={true} term={"float-digits"}><b>float-digits</b></DictionaryLink> and <DictionaryLink styled={true} term={"float-precision"}><b>float-precision</b></DictionaryLink> are the same, but the precision is less than the number of representation digits for a <GlossaryTerm styled={true} term={"denormalized"}><i>denormalized</i></GlossaryTerm> or zero number. 



<DictionaryLink styled={true} term={"integer-decode-float"}><b>integer-decode-float</b></DictionaryLink> computes three values that characterize <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> - the significand scaled so as to be an *integer* , and the same last two values that are returned by <DictionaryLink styled={true} term={"decode-float"}><b>decode-float</b></DictionaryLink>. If <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is zero, <DictionaryLink styled={true} term={"integer-decode-float"}><b>integer-decode-float</b></DictionaryLink> returns zero as the first value. The second value bears the same relationship 







 



 



**decode-float, scale-float, float-radix, float-sign,** *...* 



to the first value as for <DictionaryLink styled={true} term={"decode-float"}><b>decode-float</b></DictionaryLink>: 



(multiple-value-bind (signif expon sign) 



(integer-decode-float f) 



(scale-float (float signif f) expon)) *⌘* (abs f) 



**Examples:**
```lisp

;; Note that since the purpose of this functionality is to expose 
;; details of the implementation, all of these examples are necessarily 
;; very implementation-dependent. Results may vary widely. 
;; Values shown here are chosen consistently from one particular implementation. (decode-float .5) *!* 0.5, 0, 1.0 
(decode-float 1.0) *!* 0.5, 1, 1.0 
(scale-float 1.0 1) *!* 2.0 
(scale-float 10.01 -2) *!* 2.5025 
(scale-float 23.0 0) *!* 23.0 
(float-radix 1.0) *!* 2 
(float-sign 5.0) *!* 1.0 
(float-sign -5.0) *!* -1.0 
(float-sign 0.0) *!* 1.0 
(float-sign 1.0 0.0) *!* 0.0 
(float-sign 1.0 -10.0) *!* 10.0 
(float-sign -1.0 10.0) *!* -10.0 
(float-digits 1.0) *!* 24 
(float-precision 1.0) *!* 24 
(float-precision least-positive-single-float) *!* 1 
(integer-decode-float 1.0) *!* 8388608, -23, 1 

```
**Aected By:** 



The implementation’s representation for <GlossaryTerm styled={true} term={"float"}><i>floats</i></GlossaryTerm>. 



**Exceptional Situations:** 



The functions <DictionaryLink styled={true} term={"decode-float"}><b>decode-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"float-radix"}><b>float-radix</b></DictionaryLink>, <DictionaryLink styled={true} term={"float-digits"}><b>float-digits</b></DictionaryLink>, <DictionaryLink styled={true} term={"float-precision"}><b>float-precision</b></DictionaryLink>, and <DictionaryLink styled={true} term={"integer-decode-float"}><b>integer-decode-float</b></DictionaryLink> should signal an error if their only argument is not a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"scale-float"}><b>scale-float</b></DictionaryLink> should signal an error if its first argument is not a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> or if its second argument is not an *integer* . 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"float-sign"}><b>float-sign</b></DictionaryLink> should signal an error if its first argument is not a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> or if its second argument is supplied but is not a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



**Notes:** 



The product of the first result of <DictionaryLink styled={true} term={"decode-float"}><b>decode-float</b></DictionaryLink> or <DictionaryLink styled={true} term={"integer-decode-float"}><b>integer-decode-float</b></DictionaryLink>, of the radix raised to the power of the second result, and of the third result is exactly equal to the value of <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



(multiple-value-bind (signif expon sign) 







 



 



(decode-float f) 



(scale-float signif expon)) 



*⌘* (abs f) 



and 



(multiple-value-bind (signif expon sign) 



(decode-float f) 



(\* (scale-float signif expon) sign)) 



*⌘* f 



