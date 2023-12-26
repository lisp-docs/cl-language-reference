 



**Syntax:** #\*⟨bits⟩ 



A <GlossaryTerm styled={true} term={"simple bit vector"}><i>simple bit vector</i></GlossaryTerm> is constructed containing the indicated <GlossaryTerm  term={"bit"}><i>bits</i></GlossaryTerm> (0’s and 1’s), where the leftmost <GlossaryTerm  term={"bit"}><i>bit</i></GlossaryTerm> has index zero and the subsequent <GlossaryTerm  term={"bit"}><i>bits</i></GlossaryTerm> have increasing indices. 



**Syntax:** #⟨n⟩\*⟨bits⟩ 



With an argument *n*, the <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> to be created is of *length n*. If the number of <GlossaryTerm  term={"bit"}><i>bits</i></GlossaryTerm> is less than *n* but greater than zero, the last bit is used to fill all remaining bits of the <GlossaryTerm styled={true} term={"bit vector"}><i>bit vector</i></GlossaryTerm> . 



The notations #\* and #0\* each denote an empty <GlossaryTerm styled={true} term={"bit vector"}><i>bit vector</i></GlossaryTerm> . 



Regardless of whether the optional numeric argument *n* is provided, the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> that follows the <GlossaryTerm  term={"asterisk"}><i>asterisk</i></GlossaryTerm> is delimited by a normal <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> delimiter. However, (unless the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>) an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled if that <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> is not composed entirely of 0’s and 1’s, or if *n* was supplied and the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> is composed of more than *n bits*, or if *n* is greater than one, but no <GlossaryTerm  term={"bit"}><i>bits</i></GlossaryTerm> were specified. Neither a <GlossaryTerm styled={true} term={"single escape"}><i>single escape</i></GlossaryTerm> nor a <GlossaryTerm styled={true} term={"multiple escape"}><i>multiple escape</i></GlossaryTerm> is permitted in this <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm>. 



For information on how the *Lisp printer* prints <GlossaryTerm styled={true} term={"bit vector"}><i>bit vectors</i></GlossaryTerm>, see Section 22.1.3.6 (Printing Bit Vectors). 



