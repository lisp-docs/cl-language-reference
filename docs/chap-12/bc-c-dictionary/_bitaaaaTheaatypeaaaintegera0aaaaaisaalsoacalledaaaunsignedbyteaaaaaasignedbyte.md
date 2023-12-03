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

This denotes the set of &#60;i&#62;integers&#60;/i&#62; that can be represented in two’s-complement form in a &#60;i&#62;byte&#60;/i&#62; of &#60;i&#62;s&#60;/i&#62; bits. This is equivalent to (integer &#60;i&#62;−&#60;/i&#62;2&#60;sup&#62;&#60;i&#62;s−&#60;/i&#62;1&#60;/sup&#62; 2&#60;sup&#62;&#60;i&#62;s−&#60;/i&#62;1&#60;/sup&#62; &#60;i&#62;−&#60;/i&#62; 1). The type &#60;b&#62;signed-byte&#60;/b&#62; or the type (signed-byte *) is the same as the &#60;i&#62;type&#60;/i&#62; &#60;b&#62;integer&#60;/b&#62;. 

