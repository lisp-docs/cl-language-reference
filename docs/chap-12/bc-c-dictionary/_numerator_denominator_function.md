**numerator, denominator** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"numerator"}><b>numerator</b></ClLinks> *rational → numerator* 



<ClLinks  term={"denominator"}><b>denominator</b></ClLinks> *rational → denominator* 



**Arguments and Values:** 



<ClLinks  term={"rational"}><i>rational</i></ClLinks>—a <ClLinks  term={"rational"}><i>rational</i></ClLinks>. 



*numerator*—an *integer* . 



*denominator*—a positive *integer* . 



**Description:** 



<ClLinks  term={"numerator"}><b>numerator</b></ClLinks> and <ClLinks  term={"denominator"}><b>denominator</b></ClLinks> reduce <ClLinks  term={"rational"}><i>rational</i></ClLinks> to canonical form and compute the numerator or denominator of that number. 



<ClLinks  term={"numerator"}><b>numerator</b></ClLinks> and <ClLinks  term={"denominator"}><b>denominator</b></ClLinks> return the numerator or denominator of the canonical form of <ClLinks  term={"rational"}><i>rational</i></ClLinks>. 



If <ClLinks  term={"rational"}><i>rational</i></ClLinks> is an *integer* , <ClLinks  term={"numerator"}><b>numerator</b></ClLinks> returns <ClLinks  term={"rational"}><i>rational</i></ClLinks> and <ClLinks  term={"denominator"}><b>denominator</b></ClLinks> returns 1. 



**Examples:**
```lisp
(numerator 1/2) → 1 
(denominator 12/36) → 3 
(numerator -1) → -1 
(denominator (/ -33)) → 33 
(numerator (/ 8 -6)) → -4 
(denominator (/ 8 -6)) → 3 
```
**See Also:** 



<ClLinks  term={"/"}><b>/</b></ClLinks> 







 



 



**Notes:** 



(gcd (numerator x) (denominator x)) → 1 



