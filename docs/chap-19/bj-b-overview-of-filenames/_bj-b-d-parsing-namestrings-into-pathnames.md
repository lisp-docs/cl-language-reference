 



Parsing is the operation used to convert a <GlossaryTerm styled={true} term={"namestring"}><i>namestring</i></GlossaryTerm> into a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. Except in the case of parsing *logical pathname namestrings*, this operation is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, because the format of <GlossaryTerm styled={true} term={"namestring"}><i>namestrings</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



A *conforming implementation* is free to accommodate other *file system* features in its <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> representation and provides a parser that can process such specifications in <GlossaryTerm styled={true} term={"namestring"}><i>namestrings</i></GlossaryTerm>. *Conforming programs* must not depend on any such features, since those features will not be portable. 







 



 



