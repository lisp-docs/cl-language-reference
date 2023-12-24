 



The syntax of a *logical pathname namestring* is as follows. (Note that unlike many notational descriptions in this document, this is a syntactic description of character sequences, not a structural description of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>.) 



*logical-pathname::*=[*↓host host-marker*] 



[*↓relative-directory-marker*] *\{↓directory directory-marker\}*\* 



[<ClLinks styled={true} term={"name"}><i>↓name</i></ClLinks>] [*type-marker ↓type* [*version-marker ↓version*]] 



*host::*=*↓word* 



*directory::*=*↓word | ↓wildcard-word | ↓wild-inferiors-word* 



<ClLinks styled={true} term={"name"}><i>name::</i></ClLinks>=*↓word | ↓wildcard-word* 



<ClLinks styled={true} term={"type"}><i>type::</i></ClLinks>=*↓word | ↓wildcard-word* 



*version::*=*↓pos-int | newest-word | wildcard-version* 



*host-marker*—a <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks>. 



*relative-directory-marker*—a <ClLinks styled={true} term={"semicolon"}><i>semicolon</i></ClLinks>. 



*directory-marker*—a <ClLinks styled={true} term={"semicolon"}><i>semicolon</i></ClLinks>. 



*type-marker*—a <ClLinks styled={true} term={"dot"}><i>dot</i></ClLinks>. 



*version-marker*—a <ClLinks styled={true} term={"dot"}><i>dot</i></ClLinks>. 



*wild-inferiors-word*—The two character sequence “\*\*” (two <ClLinks styled={true} term={"asterisk"}><i>asterisks</i></ClLinks>). 



*newest-word*—The six character sequence “newest” or the six character sequence “NEWEST”. *wildcard-version*—an <ClLinks styled={true} term={"asterisk"}><i>asterisk</i></ClLinks>. 



*wildcard-word*—one or more <ClLinks styled={true} term={"asterisk"}><i>asterisks</i></ClLinks>, uppercase letters, digits, and hyphens, including at least one <ClLinks styled={true} term={"asterisk"}><i>asterisk</i></ClLinks>, with no two <ClLinks styled={true} term={"asterisk"}><i>asterisks</i></ClLinks> adjacent. 



*word*—one or more uppercase letters, digits, and hyphens. 



*pos-int*—a positive *integer* . 







 



 



