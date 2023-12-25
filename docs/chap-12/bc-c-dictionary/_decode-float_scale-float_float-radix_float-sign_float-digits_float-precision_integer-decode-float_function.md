**decode-float, scale-float, float-radix, float-sign, float-digits, float-precision, integer-decode-float** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"decode-float"}><b>decode-float</b></ClLinks> *float ! significand, exponent, sign* 



<ClLinks  term={"scale-float"}><b>scale-float</b></ClLinks> *float integer ! scaled-float* 



<ClLinks  term={"float-radix"}><b>float-radix</b></ClLinks> *float ! float-radix* 



<ClLinks  term={"float-sign"}><b>float-sign</b></ClLinks> *float-1* &amp;optional *float-2 ! signed-float* 



<ClLinks  term={"float-digits"}><b>float-digits</b></ClLinks> *float ! digits1* 



<ClLinks  term={"float-precision"}><b>float-precision</b></ClLinks> *float ! digits2* 



<ClLinks  term={"integer-decode-float"}><b>integer-decode-float</b></ClLinks> *float ! significand, exponent, integer-sign* 



**Arguments and Values:** 



*digits1*—a non-negative *integer* . 



*digits2*—a non-negative *integer* . 



*exponent*—an *integer* . 



<ClLinks  term={"float"}><i>float</i></ClLinks>—a <ClLinks  term={"float"}><i>float</i></ClLinks>. 



*float-1*—a <ClLinks  term={"float"}><i>float</i></ClLinks>. 



*float-2*—a <ClLinks  term={"float"}><i>float</i></ClLinks>. 







 



 



**decode-float, scale-float, float-radix, float-sign,** *...* 



*float-radix*—an *integer* . 



*integer*—a non-negative *integer* . 



*integer-sign*—the *integer* -1, or the *integer* 1. 



*scaled-float*—a <ClLinks  term={"float"}><i>float</i></ClLinks>. 



<ClLinks  term={"sign"}><i>sign</i></ClLinks>—A <ClLinks  term={"float"}><i>float</i></ClLinks> of the same <ClLinks  term={"type"}><i>type</i></ClLinks> as <ClLinks  term={"float"}><i>float</i></ClLinks> but numerically equal to 1.0 or -1.0. 



*signed-float*—a <ClLinks  term={"float"}><i>float</i></ClLinks>. 



*significand*—a <ClLinks  term={"float"}><i>float</i></ClLinks>. 



**Description:** 



<ClLinks  term={"decode-float"}><b>decode-float</b></ClLinks> computes three values that characterize <ClLinks  term={"float"}><i>float</i></ClLinks>. The first value is of the same <ClLinks  term={"type"}><i>type</i></ClLinks> as <ClLinks  term={"float"}><i>float</i></ClLinks> and represents the significand. The second value represents the exponent to which the radix (notated in this description by *b*) must be raised to obtain the value that, when multiplied with the first result, produces the absolute value of <ClLinks  term={"float"}><i>float</i></ClLinks>. If <ClLinks  term={"float"}><i>float</i></ClLinks> is zero, any *integer* value may be returned, provided that the identity shown for <ClLinks  term={"scale-float"}><b>scale-float</b></ClLinks> holds. The third value is of the same <ClLinks  term={"type"}><i>type</i></ClLinks> as <ClLinks  term={"float"}><i>float</i></ClLinks> and is 1.0 if <ClLinks  term={"float"}><i>float</i></ClLinks> is greater than or equal to zero or -1.0 otherwise. 



<ClLinks  term={"decode-float"}><b>decode-float</b></ClLinks> divides <ClLinks  term={"float"}><i>float</i></ClLinks> by an integral power of *b* so as to bring its value between 1*/b* (inclusive) and 1 (exclusive), and returns the quotient as the first value. If <ClLinks  term={"float"}><i>float</i></ClLinks> is zero, however, the result equals the absolute value of <ClLinks  term={"float"}><i>float</i></ClLinks> (that is, if there is a negative zero, its significand is considered to be a positive zero). 



<ClLinks  term={"scale-float"}><b>scale-float</b></ClLinks> returns (\* <ClLinks  term={"float"}><i>float</i></ClLinks> (expt (float *b float<ClLinks  term={"t"}><i>) </i></ClLinks>integer*)), where *b* is the radix of the floating point representation. <ClLinks  term={"float"}><i>float</i></ClLinks> is not necessarily between 1*/b* and 1. 



<ClLinks  term={"float-radix"}><b>float-radix</b></ClLinks> returns the radix of <ClLinks  term={"float"}><i>float</i></ClLinks>. 



<ClLinks  term={"float-sign"}><b>float-sign</b></ClLinks> returns a number z such that z and *float-1* have the same sign and also such that z and *float-2* have the same absolute value. If *float-2* is not supplied, its value is (float 1 *float-1*). If an implementation has distinct representations for negative zero and positive zero, then (float-sign -0.0) *!* -1.0. 



<ClLinks  term={"float-digits"}><b>float-digits</b></ClLinks> returns the number of radix *b* digits used in the representation of <ClLinks  term={"float"}><i>float</i></ClLinks> (including any implicit digits, such as a “hidden bit”). 



<ClLinks  term={"float-precision"}><b>float-precision</b></ClLinks> returns the number of significant radix *b* digits present in <ClLinks  term={"float"}><i>float</i></ClLinks>; if <ClLinks  term={"float"}><i>float</i></ClLinks> is a <ClLinks  term={"float"}><i>float</i></ClLinks> zero, then the result is an *integer* zero. 



For *normalized floats*, the results of <ClLinks  term={"float-digits"}><b>float-digits</b></ClLinks> and <ClLinks  term={"float-precision"}><b>float-precision</b></ClLinks> are the same, but the precision is less than the number of representation digits for a <ClLinks  term={"denormalized"}><i>denormalized</i></ClLinks> or zero number. 



<ClLinks  term={"integer-decode-float"}><b>integer-decode-float</b></ClLinks> computes three values that characterize <ClLinks  term={"float"}><i>float</i></ClLinks> - the significand scaled so as to be an *integer* , and the same last two values that are returned by <ClLinks  term={"decode-float"}><b>decode-float</b></ClLinks>. If <ClLinks  term={"float"}><i>float</i></ClLinks> is zero, <ClLinks  term={"integer-decode-float"}><b>integer-decode-float</b></ClLinks> returns zero as the first value. The second value bears the same relationship 







 



 



**decode-float, scale-float, float-radix, float-sign,** *...* 



to the first value as for <ClLinks  term={"decode-float"}><b>decode-float</b></ClLinks>: 



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



The implementation’s representation for <ClLinks  term={"float"}><i>floats</i></ClLinks>. 



**Exceptional Situations:** 



The functions <ClLinks  term={"decode-float"}><b>decode-float</b></ClLinks>, <ClLinks  term={"float-radix"}><b>float-radix</b></ClLinks>, <ClLinks  term={"float-digits"}><b>float-digits</b></ClLinks>, <ClLinks  term={"float-precision"}><b>float-precision</b></ClLinks>, and <ClLinks  term={"integer-decode-float"}><b>integer-decode-float</b></ClLinks> should signal an error if their only argument is not a <ClLinks  term={"float"}><i>float</i></ClLinks>. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"scale-float"}><b>scale-float</b></ClLinks> should signal an error if its first argument is not a <ClLinks  term={"float"}><i>float</i></ClLinks> or if its second argument is not an *integer* . 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"float-sign"}><b>float-sign</b></ClLinks> should signal an error if its first argument is not a <ClLinks  term={"float"}><i>float</i></ClLinks> or if its second argument is supplied but is not a <ClLinks  term={"float"}><i>float</i></ClLinks>. 



**Notes:** 



The product of the first result of <ClLinks  term={"decode-float"}><b>decode-float</b></ClLinks> or <ClLinks  term={"integer-decode-float"}><b>integer-decode-float</b></ClLinks>, of the radix raised to the power of the second result, and of the third result is exactly equal to the value of <ClLinks  term={"float"}><i>float</i></ClLinks>. 



(multiple-value-bind (signif expon sign) 







 



 



(decode-float f) 



(scale-float signif expon)) 



*⌘* (abs f) 



and 



(multiple-value-bind (signif expon sign) 



(decode-float f) 



(\* (scale-float signif expon) sign)) 



*⌘* f 



