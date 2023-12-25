 



**Syntax:** #\*⟨bits⟩ 



A *simple bit vector* is constructed containing the indicated <GlossaryTerm styled={true} term={"bit"}><i>bits</i></GlossaryTerm> (0’s and 1’s), where the leftmost <GlossaryTerm styled={true} term={"bit"}><i>bit</i></GlossaryTerm> has index zero and the subsequent <GlossaryTerm styled={true} term={"bit"}><i>bits</i></GlossaryTerm> have increasing indices. 



**Syntax:** #⟨n⟩\*⟨bits⟩ 



With an argument *n*, the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> to be created is of *length n*. If the number of <GlossaryTerm styled={true} term={"bit"}><i>bits</i></GlossaryTerm> is less than *n* but greater than zero, the last bit is used to fill all remaining bits of the *bit vector* . 



The notations #\* and #0\* each denote an empty *bit vector* . 



Regardless of whether the optional numeric argument *n* is provided, the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> that follows the <GlossaryTerm styled={true} term={"asterisk"}><i>asterisk</i></GlossaryTerm> is delimited by a normal <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> delimiter. However, (unless the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>) an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled if that <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is not composed entirely of 0’s and 1’s, or if *n* was supplied and the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is composed of more than *n bits*, or if *n* is greater than one, but no <GlossaryTerm styled={true} term={"bit"}><i>bits</i></GlossaryTerm> were specified. Neither a *single escape* nor a *multiple escape* is permitted in this <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>. 



For information on how the *Lisp printer* prints *bit vectors*, see Section 22.1.3.6 (Printing Bit Vectors). 



