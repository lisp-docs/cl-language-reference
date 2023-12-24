 



#.*foo* is read as the *object* resulting from the evaluation of the *object* represented by *foo*. The evaluation is done during the **read** process, when the #. notation is encountered. The #. syntax therefore performs a read-time evaluation of *foo*. 



The normal effect of #. is inhibited when the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*read-eval\*** is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. In that situation, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"reader-error"}><b>reader-error</b></ClLinks> is signaled. 



For an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that does not have a convenient printed representation, a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that computes the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> can be given using the #. notation. 



