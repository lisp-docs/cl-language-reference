**bit**. The *type* (integer 0 \*) is also called **unsigned-byte**. **signed-byte** *Type* 



**Supertypes:** 



**signed-byte**, **integer**, **rational**, **real**, **number**, **t** 



**Description:** 



The atomic *type specifier* **signed-byte** denotes the same type as is denoted by the *type specifier* **integer**; however, the list forms of these two *type specifiers* have different semantics. 







 



 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(signed-byte [*s |* **\***]) 



**Compound Type Specifier Arguments:** 



*s*—a positive *integer* . 



**Compound Type Specifier Description:** 



This denotes the set of <i>integers</i> that can be represented in two’s-complement form in a <i>byte</i> of <i>s</i> bits. This is equivalent to (integer <i>−</i>2<sup><i>s−</i>1</sup> 2<sup><i>s−</i>1</sup> <i>−</i> 1). The type <b>signed-byte</b> or the type (signed-byte *) is the same as the <i>type</i> <b>integer</b>. 



