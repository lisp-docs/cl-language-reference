**unsigned-byte** *Type* 



**Supertypes:** 



**unsigned-byte**, **signed-byte**, **integer**, **rational**, **real**, **number**, **t** 



**Description:** 



The atomic *type specifier* **unsigned-byte** denotes the same type as is denoted by the *type specifier* (integer 0 \*). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(unsigned-byte [*s |* **\***]) 



**Compound Type Specifier Arguments:** 



*s*—a positive *integer* . 



**Compound Type Specifier Description:** 



This denotes the set of non-negative <i>integers</i> that can be represented in a byte of size <i>s</i> (bits). This is equivalent to (mod <i>m</i>) for <i>m</i> = 2<i><sup>s</sup></i>, or to (integer 0 <i>n</i>) for <i>n</i> = 2<i><sup>s</sup> −</i>1. The <i>type</i> <b>unsigned-byte</b> or the type (unsigned-byte *) is the same as the type (integer 0 *), the set of non-negative <i>integers</i>. 



**Notes:** 



The *type* (unsigned-byte 1) is also called **bit**. 







 



 



