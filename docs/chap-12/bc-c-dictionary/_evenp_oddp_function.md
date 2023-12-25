**evenp, oddp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"evenp"}><b>evenp</b></DictionaryLink> *integer → generalized-boolean* 



<DictionaryLink styled={true} term={"oddp"}><b>oddp</b></DictionaryLink> *integer → generalized-boolean* 



**Arguments and Values:** 



*integer*—an *integer* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"evenp"}><b>evenp</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if *integer* is even (divisible by two); otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"oddp"}><b>oddp</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if *integer* is odd (not divisible by two); otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. **Examples:**
```lisp

(evenp 0) *→ true* 
(oddp 10000000000000000000000) *→ false* 
(oddp -1) *→ true* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *integer* is not an *integer* . 







 



 



**Notes:** 



(evenp *integer*) *≡* (not (oddp *integer*)) 



(oddp *integer*) *≡* (not (evenp *integer*)) 



