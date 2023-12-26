**evenp, oddp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"evenp"}><b>evenp</b></DictionaryLink> *integer → generalized-boolean* 



<DictionaryLink  term={"oddp"}><b>oddp</b></DictionaryLink> *integer → generalized-boolean* 



**Arguments and Values:** 



*integer*—an *integer* . 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"evenp"}><b>evenp</b></DictionaryLink> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if *integer* is even (divisible by two); otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<DictionaryLink  term={"oddp"}><b>oddp</b></DictionaryLink> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if *integer* is odd (not divisible by two); otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 

**Examples:**
```lisp
(evenp 0) → true 
(oddp 10000000000000000000000) → false 
(oddp -1) → true 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *integer* is not an *integer* . 







 



 



**Notes:** 



(evenp *integer*) *≡* (not (oddp *integer*)) 



(oddp *integer*) *≡* (not (evenp *integer*)) 



