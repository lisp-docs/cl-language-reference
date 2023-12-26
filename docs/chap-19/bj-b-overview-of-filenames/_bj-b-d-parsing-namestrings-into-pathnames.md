 



Parsing is the operation used to convert a <GlossaryTerm  term={"namestring"}><i>namestring</i></GlossaryTerm> into a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>. Except in the case of parsing *logical pathname namestrings*, this operation is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, because the format of <GlossaryTerm  term={"namestring"}><i>namestrings</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> is free to accommodate other <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> features in its <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> representation and provides a parser that can process such specifications in <GlossaryTerm  term={"namestring"}><i>namestrings</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"conforming program"}><i>Conforming programs</i></GlossaryTerm> must not depend on any such features, since those features will not be portable. 







 



 



