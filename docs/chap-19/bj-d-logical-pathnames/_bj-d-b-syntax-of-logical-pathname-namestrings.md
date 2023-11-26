**19.3.1 Syntax of Logical Pathname Namestrings** 

The syntax of a *logical pathname namestring* is as follows. (Note that unlike many notational descriptions in this document, this is a syntactic description of character sequences, not a structural description of *objects*.) 

*logical-pathname::*=[*↓host host-marker*] 

[*↓relative-directory-marker*] *\{↓directory directory-marker\}*\* 

[*↓name*] [*type-marker ↓type* [*version-marker ↓version*]] 

*host::*=*↓word* 

*directory::*=*↓word | ↓wildcard-word | ↓wild-inferiors-word* 

*name::*=*↓word | ↓wildcard-word* 

*type::*=*↓word | ↓wildcard-word* 

*version::*=*↓pos-int | newest-word | wildcard-version* 

*host-marker*—a *colon*. 

*relative-directory-marker*—a *semicolon*. 

*directory-marker*—a *semicolon*. 

*type-marker*—a *dot*. 

*version-marker*—a *dot*. 

*wild-inferiors-word*—The two character sequence “\*\*” (two *asterisks*). 

*newest-word*—The six character sequence “newest” or the six character sequence “NEWEST”. *wildcard-version*—an *asterisk*. 

*wildcard-word*—one or more *asterisks*, uppercase letters, digits, and hyphens, including at least one *asterisk*, with no two *asterisks* adjacent. 

*word*—one or more uppercase letters, digits, and hyphens. 

*pos-int*—a positive *integer* . 



 

 

