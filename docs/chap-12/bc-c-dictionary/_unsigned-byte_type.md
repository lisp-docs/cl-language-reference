**unsigned-byte** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks  term={"unsigned-byte"}><b>unsigned-byte</b></ClLinks>, <ClLinks  term={"signed-byte"}><b>signed-byte</b></ClLinks>, <ClLinks  term={"integer"}><b>integer</b></ClLinks>, <ClLinks  term={"rational"}><b>rational</b></ClLinks>, <ClLinks  term={"real"}><b>real</b></ClLinks>, <ClLinks  term={"number"}><b>number</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The atomic <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> <ClLinks  term={"unsigned-byte"}><b>unsigned-byte</b></ClLinks> denotes the same type as is denoted by the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> (integer 0 \*). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(unsigned-byte [*s |* **\***]) 



**Compound Type Specifier Arguments:** 



*s*—a positive *integer* . 



**Compound Type Specifier Description:** 



This denotes the set of non-negative <i>integers</i> that can be represented in a byte of size <i>s</i> (bits). This is equivalent to (mod <i>m</i>) for <i>m</i> = 2<i><sup>s</sup></i>, or to (integer 0 <i>n</i>) for <i>n</i> = 2<i><sup>s</sup> −</i>1. The <i>type</i> <b>unsigned-byte</b> or the type (unsigned-byte *) is the same as the type (integer 0 *), the set of non-negative <i>integers</i>. 



**Notes:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> (unsigned-byte 1) is also called <ClLinks  term={"bit"}><b>bit</b></ClLinks>. 







 



 



<ClLinks  term={"mod"}><b>mod</b></ClLinks> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(mod *n*) 



**Compound Type Specifier Arguments:** 



*n*—a positive *integer* . 



**Compound Type Specifier Description:** 



This denotes the set of non-negative *integers* less than *n*. This is equivalent to (integer 0 (*n*)) or to (integer 0 *m*), where *m* = *n −* 1. 



The argument is required, and cannot be **\***. 



The symbol <ClLinks  term={"mod"}><b>mod</b></ClLinks> is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



