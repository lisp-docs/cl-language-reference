 



**Syntax:** #\*⟨bits⟩ 



A *simple bit vector* is constructed containing the indicated <ClLinks styled={true} term={"bit"}><i>bits</i></ClLinks> (0’s and 1’s), where the leftmost <ClLinks styled={true} term={"bit"}><i>bit</i></ClLinks> has index zero and the subsequent <ClLinks styled={true} term={"bit"}><i>bits</i></ClLinks> have increasing indices. 



**Syntax:** #⟨n⟩\*⟨bits⟩ 



With an argument *n*, the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> to be created is of *length n*. If the number of <ClLinks styled={true} term={"bit"}><i>bits</i></ClLinks> is less than *n* but greater than zero, the last bit is used to fill all remaining bits of the *bit vector* . 



The notations #\* and #0\* each denote an empty *bit vector* . 



Regardless of whether the optional numeric argument *n* is provided, the <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> that follows the <ClLinks styled={true} term={"asterisk"}><i>asterisk</i></ClLinks> is delimited by a normal <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> delimiter. However, (unless the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>) an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"reader-error"}><b>reader-error</b></ClLinks> is signaled if that <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> is not composed entirely of 0’s and 1’s, or if *n* was supplied and the <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> is composed of more than *n bits*, or if *n* is greater than one, but no <ClLinks styled={true} term={"bit"}><i>bits</i></ClLinks> were specified. Neither a *single escape* nor a *multiple escape* is permitted in this <ClLinks styled={true} term={"token"}><i>token</i></ClLinks>. 



For information on how the *Lisp printer* prints *bit vectors*, see Section 22.1.3.6 (Printing Bit Vectors). 



