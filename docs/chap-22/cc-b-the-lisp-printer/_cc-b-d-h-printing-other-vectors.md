 



If <ClLinks styled={true} term={"print-array"}><b>\*print-array\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> and <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, any <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> other than a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or *bit vector* is printed using general-vector syntax; this means that information about specialized vector representations does not appear. The printed representation of a zero-length <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> is #(). The printed representation of a non-zero-length <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> begins with #(. Following that, the first element of the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> is printed. If there are any other elements, they are printed in turn, with each such additional element preceded by a <ClLinks styled={true} term={"space"}><i>space</i></ClLinks> if <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, or <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>1</sub> if <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. A <ClLinks styled={true} term={"right-parenthesis"}><i>right-parenthesis</i></ClLinks> after the last element terminates the printed representation of the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> . The printing of <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks> is affected by **\*print-level\*** and <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>. If the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> has a *fill pointer* , then only those elements below the *fill pointer* are printed. 



If both <ClLinks styled={true} term={"print-array"}><b>\*print-array\*</b></ClLinks> and <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> are <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> is not printed as described above, but in a format (using #&lt;) that is concise but not readable. 



If <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> prints in an <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> manner; see the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks>. 



For information on how the *Lisp reader* parses these “other <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks>,” see Section 2.4.8.3 (Sharpsign Left-Parenthesis). 







 



 



