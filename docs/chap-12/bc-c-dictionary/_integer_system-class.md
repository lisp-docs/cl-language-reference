**integer** *System Class* 



**Class Precedence List:** 



**integer**, **rational**, **real**, **number**, **t** 



**Description:** 



An *integer* is a mathematical integer. There is no limit on the magnitude of an *integer* . The *types* **fixnum** and **bignum** form an *exhaustive partition* of *type* **integer**. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(integer [*lower-limit* [*upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—*interval designators* for *type* **integer**. The defaults for each of *lower-limit* and *upper-limit* is the *symbol* **\***. 



**Compound Type Specifier Description:** 



This denotes the *integers* on the interval described by *lower-limit* and *upper-limit*. 



**See Also:** 



Figure 2–9, Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.1 (Printing Integers) 



**Notes:** 



The *type* (integer *lower upper*), where *lower* and *upper* are **most-negative-fixnum** and **most-positive-fixnum**, respectively, is also called **fixnum**. 



The *type* (integer 0 1) is also called **bit**. The *type* (integer 0 \*) is also called **unsigned-byte**. 