 



**Syntax:** #\*⟨bits⟩ 



A <GlossaryTerm styled={true} term={"simple bit vector"}><i>simple bit vector</i></GlossaryTerm> is constructed containing the indicated <ClLinks  term={"bit"}><i>bits</i></ClLinks> (0’s and 1’s), where the leftmost <ClLinks  term={"bit"}><i>bit</i></ClLinks> has index zero and the subsequent <ClLinks  term={"bit"}><i>bits</i></ClLinks> have increasing indices. 



**Syntax:** #⟨n⟩\*⟨bits⟩ 



With an argument *n*, the <ClLinks  term={"vector"}><i>vector</i></ClLinks> to be created is of *length n*. If the number of <ClLinks  term={"bit"}><i>bits</i></ClLinks> is less than *n* but greater than zero, the last bit is used to fill all remaining bits of the <GlossaryTerm styled={true} term={"bit vector"}><i>bit vector</i></GlossaryTerm> . 



The notations #\* and #0\* each denote an empty <GlossaryTerm styled={true} term={"bit vector"}><i>bit vector</i></GlossaryTerm> . 



Regardless of whether the optional numeric argument *n* is provided, the <ClLinks  term={"token"}><i>token</i></ClLinks> that follows the <ClLinks  term={"asterisk"}><i>asterisk</i></ClLinks> is delimited by a normal <ClLinks  term={"token"}><i>token</i></ClLinks> delimiter. However, (unless the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> is <ClLinks  term={"true"}><i>true</i></ClLinks>) an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled if that <ClLinks  term={"token"}><i>token</i></ClLinks> is not composed entirely of 0’s and 1’s, or if *n* was supplied and the <ClLinks  term={"token"}><i>token</i></ClLinks> is composed of more than *n bits*, or if *n* is greater than one, but no <ClLinks  term={"bit"}><i>bits</i></ClLinks> were specified. Neither a <GlossaryTerm styled={true} term={"single escape"}><i>single escape</i></GlossaryTerm> nor a <GlossaryTerm styled={true} term={"multiple escape"}><i>multiple escape</i></GlossaryTerm> is permitted in this <ClLinks  term={"token"}><i>token</i></ClLinks>. 



For information on how the *Lisp printer* prints <GlossaryTerm styled={true} term={"bit vector"}><i>bit vectors</i></GlossaryTerm>, see Section 22.1.3.6 (Printing Bit Vectors). 



