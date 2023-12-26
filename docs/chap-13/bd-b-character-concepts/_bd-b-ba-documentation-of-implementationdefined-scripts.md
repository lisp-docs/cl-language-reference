 



An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> must document the *character scripts* it supports. For each *character script* supported, the documentation must describe at least the following: 



*•* Character labels, glyphs, and descriptions. Character labels must be uniquely named using only Latin capital letters A–Z, hyphen (-), and digits 0–9. 



*•* Reader canonicalization. Any mechanisms by which <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> treats <ClLinks styled={true} term={"different"}><i>different</i></ClLinks> characters as equivalent must be documented. 



*•* The impact on <ClLinks styled={true} term={"char-upcase"}><b>char-upcase</b></ClLinks>, <ClLinks styled={true} term={"char-downcase"}><b>char-downcase</b></ClLinks>, and the case-sensitive <GlossaryTerm styled={true} term={"format directive"}><i>format directives</i></GlossaryTerm>. In particular, for each <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> with <ClLinks styled={true} term={"case"}><i>case</i></ClLinks>, whether it is <ClLinks styled={true} term={"uppercase"}><i>uppercase</i></ClLinks> or <ClLinks styled={true} term={"lowercase"}><i>lowercase</i></ClLinks>, and which <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is its equivalent in the opposite case. 



*•* The behavior of the case-insensitive <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"char-equal"}><b>char-equal</b></ClLinks>, <ClLinks styled={true} term={"char-not-equal"}><b>char-not-equal</b></ClLinks>, <ClLinks styled={true} term={"char-lessp"}><b>char-lessp</b></ClLinks>, <ClLinks styled={true} term={"char-greaterp"}><b>char-greaterp</b></ClLinks>, <ClLinks styled={true} term={"char-not-greaterp"}><b>char-not-greaterp</b></ClLinks>, and <ClLinks styled={true} term={"char-not-lessp"}><b>char-not-lessp</b></ClLinks>. 



*•* The behavior of any *character predicates*; in particular, the effects of <ClLinks styled={true} term={"alpha-char-p"}><b>alpha-char-p</b></ClLinks>, <ClLinks styled={true} term={"lower-case-p"}><b>lower-case-p</b></ClLinks>, <ClLinks styled={true} term={"upper-case-p"}><b>upper-case-p</b></ClLinks>, <ClLinks styled={true} term={"both-case-p"}><b>both-case-p</b></ClLinks>, <ClLinks styled={true} term={"graphic-char-p"}><b>graphic-char-p</b></ClLinks>, and <ClLinks styled={true} term={"alphanumericp"}><b>alphanumericp</b></ClLinks>. 



*•* The interaction with file I/O, in particular, the supported coded character sets (for example, ISO8859/1-1987) and external encoding schemes supported are documented. 







 



 



