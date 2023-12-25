**logbitp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"logbitp"}><b>logbitp</b></DictionaryLink> *index integer → generalized-boolean* 



**Arguments and Values:** 



*index*—a non-negative *integer* . 



*integer*—an *integer* . 



*generalized-boolean*—a *generalized boolean*. 







 



 



**Description:** 



<b>logbitp</b> is used to test the value of a particular bit in <i>integer</i>, that is treated as if it were binary. The value of <b>logbitp</b> is <i>true</i> if the bit in <i>integer</i> whose index is <i>index</i> (that is, its weight is 2<i><sup>index</sup></i> ) is a one-bit; otherwise it is <i>false</i>. 



Negative *integers* are treated as if they were in two’s-complement notation. 



**Examples:**
```lisp

(logbitp 1 1) *→ false* 
(logbitp 0 1) *→ true* 
(logbitp 3 10) *→ true* 
(logbitp 1000000 -1) *→ true* 
(logbitp 2 6) *→ true* 
(logbitp 0 6) *→ false* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *index* is not a non-negative *integer* . Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *integer* is not an *integer* . 



**Notes:** 



(logbitp *k n*) *≡* (ldb-test (byte 1 *k*) *n*) 



