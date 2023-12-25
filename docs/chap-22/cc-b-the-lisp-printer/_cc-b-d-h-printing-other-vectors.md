 



If <DictionaryLink styled={true} term={"print-array"}><b>\*print-array\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, any <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> other than a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or *bit vector* is printed using general-vector syntax; this means that information about specialized vector representations does not appear. The printed representation of a zero-length <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> is #(). The printed representation of a non-zero-length <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> begins with #(. Following that, the first element of the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> is printed. If there are any other elements, they are printed in turn, with each such additional element preceded by a <GlossaryTerm styled={true} term={"space"}><i>space</i></GlossaryTerm> if <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>1</sub> if <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"right-parenthesis"}><i>right-parenthesis</i></GlossaryTerm> after the last element terminates the printed representation of the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . The printing of <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> is affected by **\*print-level\*** and <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>. If the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> has a *fill pointer* , then only those elements below the *fill pointer* are printed. 



If both <DictionaryLink styled={true} term={"print-array"}><b>\*print-array\*</b></DictionaryLink> and <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> are <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> is not printed as described above, but in a format (using #&lt;) that is concise but not readable. 



If <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> prints in an <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> manner; see the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink>. 



For information on how the *Lisp reader* parses these “other <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm>,” see Section 2.4.8.3 (Sharpsign Left-Parenthesis). 







 



 



