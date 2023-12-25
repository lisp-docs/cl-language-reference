 



If a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> consists solely of dots (with no escape characters), then an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled, except in one circumstance: if the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is a single <GlossaryTerm styled={true} term={"dot"}><i>dot</i></GlossaryTerm> and appears in a situation where *dotted pair* notation permits a <GlossaryTerm styled={true} term={"dot"}><i>dot</i></GlossaryTerm>, then it is accepted as part of such syntax and no error is signaled. See Section 2.4.1 (Left-Parenthesis). 











