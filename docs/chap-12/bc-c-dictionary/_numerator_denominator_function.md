**numerator, denominator** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"numerator"}><b>numerator</b></DictionaryLink> *rational → numerator* 



<DictionaryLink styled={true} term={"denominator"}><b>denominator</b></DictionaryLink> *rational → denominator* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>. 



*numerator*—an *integer* . 



*denominator*—a positive *integer* . 



**Description:** 



<DictionaryLink styled={true} term={"numerator"}><b>numerator</b></DictionaryLink> and <DictionaryLink styled={true} term={"denominator"}><b>denominator</b></DictionaryLink> reduce <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> to canonical form and compute the numerator or denominator of that number. 



<DictionaryLink styled={true} term={"numerator"}><b>numerator</b></DictionaryLink> and <DictionaryLink styled={true} term={"denominator"}><b>denominator</b></DictionaryLink> return the numerator or denominator of the canonical form of <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>. 



If <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> is an *integer* , <DictionaryLink styled={true} term={"numerator"}><b>numerator</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> and <DictionaryLink styled={true} term={"denominator"}><b>denominator</b></DictionaryLink> returns 1. 



**Examples:**
```lisp

(numerator 1/2) *→* 1 
(denominator 12/36) *→* 3 
(numerator -1) *→* -1 
(denominator (/ -33)) *→* 33 
(numerator (/ 8 -6)) *→* -4 
(denominator (/ 8 -6)) *→* 3 

```
**See Also:** 



<DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink> 







 



 



**Notes:** 



(gcd (numerator x) (denominator x)) *→* 1 



