 



Parsing is the operation used to convert a <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks> into a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. Except in the case of parsing *logical pathname namestrings*, this operation is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, because the format of <ClLinks styled={true} term={"namestring"}><i>namestrings</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



A *conforming implementation* is free to accommodate other *file system* features in its <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> representation and provides a parser that can process such specifications in <ClLinks styled={true} term={"namestring"}><i>namestrings</i></ClLinks>. *Conforming programs* must not depend on any such features, since those features will not be portable. 







 



 



