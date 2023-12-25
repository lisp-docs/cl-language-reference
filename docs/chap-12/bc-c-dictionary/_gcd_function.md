**gcd** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"gcd"}><b>gcd</b></ClLinks> &amp;rest *integers → greatest-common-denominator* 



**Arguments and Values:** 



*integer*—an *integer* . 







 



 



*greatest-common-denominator*—a non-negative *integer* . 



**Description:** 



Returns the greatest common divisor of *integers*. If only one *integer* is supplied, its absolute value is returned. If no *integers* are given, <ClLinks styled={true} term={"gcd"}><b>gcd</b></ClLinks> returns 0, which is an identity for this operation. 



**Examples:**
```lisp
(gcd) → 0 
(gcd 60 42) → 6 
(gcd 3333 -33 101) → 1 
(gcd 3333 -33 1002001) → 11 
(gcd 91 -49) → 7 
(gcd 63 -42 35) → 7 
(gcd 5) → 5 
(gcd -4) → 4 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if any *integer* is not an *integer* . 



**See Also:** 



<ClLinks styled={true} term={"lcm"}><b>lcm</b></ClLinks> 



**Notes:** 



For three or more arguments, 



(gcd b c ... z) *≡* (gcd (gcd a b) c ... z) 



