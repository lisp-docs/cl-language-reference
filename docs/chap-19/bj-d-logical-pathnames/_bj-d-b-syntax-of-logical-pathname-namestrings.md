 



The syntax of a *logical pathname namestring* is as follows. (Note that unlike many notational descriptions in this document, this is a syntactic description of character sequences, not a structural description of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>.) 



*logical-pathname::*=[*↓host host-marker*] 



[*↓relative-directory-marker*] *\{↓directory directory-marker\}*\* 



[<GlossaryTerm styled={true} term={"name"}><i>↓name</i></GlossaryTerm>] [*type-marker ↓type* [*version-marker ↓version*]] 



*host::*=*↓word* 



*directory::*=*↓word | ↓wildcard-word | ↓wild-inferiors-word* 



<GlossaryTerm styled={true} term={"name"}><i>name::</i></GlossaryTerm>=*↓word | ↓wildcard-word* 



<GlossaryTerm styled={true} term={"type"}><i>type::</i></GlossaryTerm>=*↓word | ↓wildcard-word* 



*version::*=*↓pos-int | newest-word | wildcard-version* 



*host-marker*—a <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm>. 



*relative-directory-marker*—a <GlossaryTerm styled={true} term={"semicolon"}><i>semicolon</i></GlossaryTerm>. 



*directory-marker*—a <GlossaryTerm styled={true} term={"semicolon"}><i>semicolon</i></GlossaryTerm>. 



*type-marker*—a <GlossaryTerm styled={true} term={"dot"}><i>dot</i></GlossaryTerm>. 



*version-marker*—a <GlossaryTerm styled={true} term={"dot"}><i>dot</i></GlossaryTerm>. 



*wild-inferiors-word*—The two character sequence “\*\*” (two <GlossaryTerm styled={true} term={"asterisk"}><i>asterisks</i></GlossaryTerm>). 



*newest-word*—The six character sequence “newest” or the six character sequence “NEWEST”. *wildcard-version*—an <GlossaryTerm styled={true} term={"asterisk"}><i>asterisk</i></GlossaryTerm>. 



*wildcard-word*—one or more <GlossaryTerm styled={true} term={"asterisk"}><i>asterisks</i></GlossaryTerm>, uppercase letters, digits, and hyphens, including at least one <GlossaryTerm styled={true} term={"asterisk"}><i>asterisk</i></GlossaryTerm>, with no two <GlossaryTerm styled={true} term={"asterisk"}><i>asterisks</i></GlossaryTerm> adjacent. 



*word*—one or more uppercase letters, digits, and hyphens. 



*pos-int*—a positive *integer* . 







 



 



