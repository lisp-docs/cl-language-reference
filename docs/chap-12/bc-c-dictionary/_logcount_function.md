**logcount** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"logcount"}><b>logcount</b></DictionaryLink> *integer → number-of-on-bits* 



**Arguments and Values:** 



*integer*—an *integer* . 



*number-of-on-bits*—a non-negative *integer* . 



**Description:** 



Computes and returns the number of bits in the two’s-complement binary representation of *integer* that are ‘on’ or ‘set’. If *integer* is negative, the 0 bits are counted; otherwise, the 1 bits are counted. 



**Examples:**
```lisp

(logcount 0) *→* 0 
(logcount -1) *→* 0 
(logcount 7) *→* 3 



(logcount 13) *→* 3 ;Two’s-complement binary: ...0001101 
(logcount -13) *→* 2 ;Two’s-complement binary: ...1110011 
(logcount 30) *→* 4 ;Two’s-complement binary: ...0011110 
(logcount -30) *→* 4 ;Two’s-complement binary: ...1100010 
(logcount (expt 2 100)) *→* 1 
(logcount (- (expt 2 100))) *→* 100 
(logcount (- (1+ (expt 2 100)))) *→* 1 

```
**Exceptional Situations:** 



Should signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an *integer* . 



**Notes:** 



Even if the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> does not represent *integers* internally in two’s complement binary, <DictionaryLink styled={true} term={"logcount"}><b>logcount</b></DictionaryLink> behaves as if it did. 



The following identity always holds: 



(logcount *x*) 



*≡* (logcount (- (+ *x* 1))) 



*≡* (logcount (lognot *x*)) 



