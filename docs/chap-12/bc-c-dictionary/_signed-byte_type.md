**signed-byte** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<DictionaryLink  term={"signed-byte"}><b>signed-byte</b></DictionaryLink>, <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink>, <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink>, <DictionaryLink  term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The atomic <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> <DictionaryLink  term={"signed-byte"}><b>signed-byte</b></DictionaryLink> denotes the same type as is denoted by the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink>; however, the list forms of these two <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> have different semantics. 







 



 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(signed-byte [*s |* **\***]) 



**Compound Type Specifier Arguments:** 



*s*—a positive *integer* . 



**Compound Type Specifier Description:** 



This denotes the set of <i>integers</i> that can be represented in two’s-complement form in a <i>byte</i> of <i>s</i> bits. This is equivalent to (integer <i>−</i>2<sup><i>s−</i>1</sup> 2<sup><i>s−</i>1</sup> <i>−</i> 1). The type <b>signed-byte</b> or the type (signed-byte *) is the same as the <i>type</i> <b>integer</b>. 



