 



Parsing is the operation used to convert a <ClLinks  term={"namestring"}><i>namestring</i></ClLinks> into a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. Except in the case of parsing *logical pathname namestrings*, this operation is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, because the format of <ClLinks  term={"namestring"}><i>namestrings</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



A *conforming implementation* is free to accommodate other *file system* features in its <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> representation and provides a parser that can process such specifications in <ClLinks  term={"namestring"}><i>namestrings</i></ClLinks>. *Conforming programs* must not depend on any such features, since those features will not be portable. 







 



 



