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

This denotes the set of non-negative &#60;i&#62;integers&#60;/i&#62; that can be represented in a byte of size &#60;i&#62;s&#60;/i&#62; (bits). This is equivalent to (mod &#60;i&#62;m&#60;/i&#62;) for &#60;i&#62;m&#60;/i&#62; = 2&#60;i&#62;&#60;sup&#62;s&#60;/sup&#62;&#60;/i&#62;, or to (integer 0 &#60;i&#62;n&#60;/i&#62;) for &#60;i&#62;n&#60;/i&#62; = 2&#60;i&#62;&#60;sup&#62;s&#60;/sup&#62; −&#60;/i&#62;1. The &#60;i&#62;type&#60;/i&#62; &#60;b&#62;unsigned-byte&#60;/b&#62; or the type (unsigned-byte *) is the same as the type (integer 0 *), the set of non-negative &#60;i&#62;integers&#60;/i&#62;. 

**Notes:** 

The *type* (unsigned-byte 1) is also called **bit**. 



 

 

