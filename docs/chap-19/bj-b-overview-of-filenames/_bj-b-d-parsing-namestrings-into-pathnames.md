 



Parsing is the operation used to convert a <ClLinks  term={"namestring"}><i>namestring</i></ClLinks> into a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. Except in the case of parsing *logical pathname namestrings*, this operation is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, because the format of <ClLinks  term={"namestring"}><i>namestrings</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



A <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> is free to accommodate other <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> features in its <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> representation and provides a parser that can process such specifications in <ClLinks  term={"namestring"}><i>namestrings</i></ClLinks>. <GlossaryTerm styled={true} term={"conforming program"}><i>Conforming programs</i></GlossaryTerm> must not depend on any such features, since those features will not be portable. 







 



 



