**unsigned-byte** <GlossaryTerm  term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink  term={"unsigned-byte"}><b>unsigned-byte</b></DictionaryLink>, <DictionaryLink  term={"signed-byte"}><b>signed-byte</b></DictionaryLink>, <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink>, <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink>, <DictionaryLink  term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The atomic <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> <DictionaryLink  term={"unsigned-byte"}><b>unsigned-byte</b></DictionaryLink> denotes the same type as is denoted by the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> (integer 0 \*). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(unsigned-byte [*s |* **\***]) 



**Compound Type Specifier Arguments:** 



*s*—a positive *integer* . 



**Compound Type Specifier Description:** 



This denotes the set of non-negative <i>integers</i> that can be represented in a byte of size <i>s</i> (bits). This is equivalent to (mod <i>m</i>) for <i>m</i> = 2<i><sup>s</sup></i>, or to (integer 0 <i>n</i>) for <i>n</i> = 2<i><sup>s</sup> −</i>1. The <i>type</i> <b>unsigned-byte</b> or the type (unsigned-byte *) is the same as the type (integer 0 *), the set of non-negative <i>integers</i>. 



**Notes:** 



The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> (unsigned-byte 1) is also called <DictionaryLink  term={"bit"}><b>bit</b></DictionaryLink>. 







 



 



<DictionaryLink  term={"mod"}><b>mod</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(mod *n*) 



**Compound Type Specifier Arguments:** 



*n*—a positive *integer* . 



**Compound Type Specifier Description:** 



This denotes the set of non-negative *integers* less than *n*. This is equivalent to (integer 0 (*n*)) or to (integer 0 *m*), where *m* = *n −* 1. 



The argument is required, and cannot be **\***. 



The symbol <DictionaryLink  term={"mod"}><b>mod</b></DictionaryLink> is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



