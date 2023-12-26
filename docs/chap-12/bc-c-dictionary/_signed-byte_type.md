**signed-byte** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks  term={"signed-byte"}><b>signed-byte</b></ClLinks>, <ClLinks  term={"integer"}><b>integer</b></ClLinks>, <ClLinks  term={"rational"}><b>rational</b></ClLinks>, <ClLinks  term={"real"}><b>real</b></ClLinks>, <ClLinks  term={"number"}><b>number</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The atomic <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> <ClLinks  term={"signed-byte"}><b>signed-byte</b></ClLinks> denotes the same type as is denoted by the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> <ClLinks  term={"integer"}><b>integer</b></ClLinks>; however, the list forms of these two <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> have different semantics. 







 



 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(signed-byte [*s |* **\***]) 



**Compound Type Specifier Arguments:** 



*s*—a positive *integer* . 



**Compound Type Specifier Description:** 



This denotes the set of <i>integers</i> that can be represented in two’s-complement form in a <i>byte</i> of <i>s</i> bits. This is equivalent to (integer <i>−</i>2<sup><i>s−</i>1</sup> 2<sup><i>s−</i>1</sup> <i>−</i> 1). The type <b>signed-byte</b> or the type (signed-byte *) is the same as the <i>type</i> <b>integer</b>. 



