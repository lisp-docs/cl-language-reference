**evenp, oddp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"evenp"}><b>evenp</b></DictionaryLink> *integer → generalized-boolean* 



<DictionaryLink  term={"oddp"}><b>oddp</b></DictionaryLink> *integer → generalized-boolean* 



**Arguments and Values:** 



*integer*—an *integer* . 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"evenp"}><b>evenp</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if *integer* is even (divisible by two); otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink  term={"oddp"}><b>oddp</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if *integer* is odd (not divisible by two); otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 

**Examples:**
```lisp
(evenp 0) → true 
(oddp 10000000000000000000000) → false 
(oddp -1) → true 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *integer* is not an *integer* . 







 



 



**Notes:** 



(evenp *integer*) *≡* (not (oddp *integer*)) 



(oddp *integer*) *≡* (not (evenp *integer*)) 



