**signed-byte** <GlossaryTerm styled={true} term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink styled={true} term={"signed-byte"}><b>signed-byte</b></DictionaryLink>, <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink>, <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink>, <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The atomic *type specifier* <DictionaryLink styled={true} term={"signed-byte"}><b>signed-byte</b></DictionaryLink> denotes the same type as is denoted by the *type specifier* <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink>; however, the list forms of these two *type specifiers* have different semantics. 







 



 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(signed-byte [*s |* **\***]) 



**Compound Type Specifier Arguments:** 



*s*—a positive *integer* . 



**Compound Type Specifier Description:** 



This denotes the set of <i>integers</i> that can be represented in two’s-complement form in a <i>byte</i> of <i>s</i> bits. This is equivalent to (integer <i>−</i>2<sup><i>s−</i>1</sup> 2<sup><i>s−</i>1</sup> <i>−</i> 1). The type <b>signed-byte</b> or the type (signed-byte *) is the same as the <i>type</i> <b>integer</b>. 



