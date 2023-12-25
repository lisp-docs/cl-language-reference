**gcd** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"gcd"}><b>gcd</b></DictionaryLink> &amp;rest *integers → greatest-common-denominator* 



**Arguments and Values:** 



*integer*—an *integer* . 







 



 



*greatest-common-denominator*—a non-negative *integer* . 



**Description:** 



Returns the greatest common divisor of *integers*. If only one *integer* is supplied, its absolute value is returned. If no *integers* are given, <DictionaryLink styled={true} term={"gcd"}><b>gcd</b></DictionaryLink> returns 0, which is an identity for this operation. 



**Examples:**
```lisp

(gcd) *→* 0 
(gcd 60 42) *→* 6 
(gcd 3333 -33 101) *→* 1 
(gcd 3333 -33 1002001) *→* 11 
(gcd 91 -49) *→* 7 
(gcd 63 -42 35) *→* 7 
(gcd 5) *→* 5 
(gcd -4) *→* 4 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if any *integer* is not an *integer* . 



**See Also:** 



<DictionaryLink styled={true} term={"lcm"}><b>lcm</b></DictionaryLink> 



**Notes:** 



For three or more arguments, 



(gcd b c ... z) *≡* (gcd (gcd a b) c ... z) 



