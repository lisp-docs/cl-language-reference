 



#.*foo* is read as the *object* resulting from the evaluation of the *object* represented by *foo*. The evaluation is done during the **read** process, when the #. notation is encountered. The #. syntax therefore performs a read-time evaluation of *foo*. 



The normal effect of #. is inhibited when the <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*read-eval\*** is <ClLinks  term={"false"}><i>false</i></ClLinks>. In that situation, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled. 



For an <ClLinks  term={"object"}><i>object</i></ClLinks> that does not have a convenient printed representation, a <ClLinks  term={"form"}><i>form</i></ClLinks> that computes the <ClLinks  term={"object"}><i>object</i></ClLinks> can be given using the #. notation. 



