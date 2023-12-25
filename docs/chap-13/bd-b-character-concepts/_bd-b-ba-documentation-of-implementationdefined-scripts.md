 



An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> must document the *character scripts* it supports. For each *character script* supported, the documentation must describe at least the following: 



*•* Character labels, glyphs, and descriptions. Character labels must be uniquely named using only Latin capital letters A–Z, hyphen (-), and digits 0–9. 



*•* Reader canonicalization. Any mechanisms by which <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> treats <GlossaryTerm styled={true} term={"different"}><i>different</i></GlossaryTerm> characters as equivalent must be documented. 



*•* The impact on <DictionaryLink styled={true} term={"char-upcase"}><b>char-upcase</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-downcase"}><b>char-downcase</b></DictionaryLink>, and the case-sensitive *format directives*. In particular, for each <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>, whether it is <GlossaryTerm styled={true} term={"uppercase"}><i>uppercase</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"lowercase"}><i>lowercase</i></GlossaryTerm>, and which <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is its equivalent in the opposite case. 



*•* The behavior of the case-insensitive <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"char-equal"}><b>char-equal</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-not-equal"}><b>char-not-equal</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-lessp"}><b>char-lessp</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-greaterp"}><b>char-greaterp</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-not-greaterp"}><b>char-not-greaterp</b></DictionaryLink>, and <DictionaryLink styled={true} term={"char-not-lessp"}><b>char-not-lessp</b></DictionaryLink>. 



*•* The behavior of any *character predicates*; in particular, the effects of <DictionaryLink styled={true} term={"alpha-char-p"}><b>alpha-char-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"lower-case-p"}><b>lower-case-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"upper-case-p"}><b>upper-case-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"both-case-p"}><b>both-case-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"graphic-char-p"}><b>graphic-char-p</b></DictionaryLink>, and <DictionaryLink styled={true} term={"alphanumericp"}><b>alphanumericp</b></DictionaryLink>. 



*•* The interaction with file I/O, in particular, the supported coded character sets (for example, ISO8859/1-1987) and external encoding schemes supported are documented. 







 



 



