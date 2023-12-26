**numerator, denominator** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"numerator"}><b>numerator</b></DictionaryLink> *rational → numerator* 



<DictionaryLink  term={"denominator"}><b>denominator</b></DictionaryLink> *rational → denominator* 



**Arguments and Values:** 



<ClLinks  term={"rational"}><i>rational</i></ClLinks>—a <ClLinks  term={"rational"}><i>rational</i></ClLinks>. 



*numerator*—an *integer* . 



*denominator*—a positive *integer* . 



**Description:** 



<DictionaryLink  term={"numerator"}><b>numerator</b></DictionaryLink> and <DictionaryLink  term={"denominator"}><b>denominator</b></DictionaryLink> reduce <ClLinks  term={"rational"}><i>rational</i></ClLinks> to canonical form and compute the numerator or denominator of that number. 



<DictionaryLink  term={"numerator"}><b>numerator</b></DictionaryLink> and <DictionaryLink  term={"denominator"}><b>denominator</b></DictionaryLink> return the numerator or denominator of the canonical form of <ClLinks  term={"rational"}><i>rational</i></ClLinks>. 



If <ClLinks  term={"rational"}><i>rational</i></ClLinks> is an *integer* , <DictionaryLink  term={"numerator"}><b>numerator</b></DictionaryLink> returns <ClLinks  term={"rational"}><i>rational</i></ClLinks> and <DictionaryLink  term={"denominator"}><b>denominator</b></DictionaryLink> returns 1. 



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



