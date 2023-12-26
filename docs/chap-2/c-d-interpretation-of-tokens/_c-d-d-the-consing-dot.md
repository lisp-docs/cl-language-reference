 



If a <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> consists solely of dots (with no escape characters), then an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled, except in one circumstance: if the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> is a single <GlossaryTerm  term={"dot"}><i>dot</i></GlossaryTerm> and appears in a situation where <GlossaryTerm styled={true} term={"dotted pair"}><i>dotted pair</i></GlossaryTerm> notation permits a <GlossaryTerm  term={"dot"}><i>dot</i></GlossaryTerm>, then it is accepted as part of such syntax and no error is signaled. See Section 2.4.1 (Left-Parenthesis). 











