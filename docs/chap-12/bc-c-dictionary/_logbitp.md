**logbitp** *Function* 

**Syntax:** 

**logbitp** *index integer → generalized-boolean* 

**Arguments and Values:** 

*index*—a non-negative *integer* . 

*integer*—an *integer* . 

*generalized-boolean*—a *generalized boolean*. 



 

 

**Description:** 

&#60;b&#62;logbitp&#60;/b&#62; is used to test the value of a particular bit in &#60;i&#62;integer&#60;/i&#62;, that is treated as if it were binary. The value of &#60;b&#62;logbitp&#60;/b&#62; is &#60;i&#62;true&#60;/i&#62; if the bit in &#60;i&#62;integer&#60;/i&#62; whose index is &#60;i&#62;index&#60;/i&#62; (that is, its weight is 2&#60;i&#62;&#60;sup&#62;index&#60;/sup&#62;&#60;/i&#62; ) is a one-bit; otherwise it is &#60;i&#62;false&#60;/i&#62;. 

Negative *integers* are treated as if they were in two’s-complement notation. 

**Examples:** 

(logbitp 1 1) *→ false* 

(logbitp 0 1) *→ true* 

(logbitp 3 10) *→ true* 

(logbitp 1000000 -1) *→ true* 

(logbitp 2 6) *→ true* 

(logbitp 0 6) *→ false* 

**Exceptional Situations:** 

Should signal an error of *type* **type-error** if *index* is not a non-negative *integer* . Should signal an error of *type* **type-error** if *integer* is not an *integer* . 

**Notes:** 

(logbitp *k n*) *≡* (ldb-test (byte 1 *k*) *n*) 

