 



#.*foo* is read as the *object* resulting from the evaluation of the *object* represented by *foo*. The evaluation is done during the **read** process, when the #. notation is encountered. The #. syntax therefore performs a read-time evaluation of *foo*. 



The normal effect of #. is inhibited when the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*read-eval\*** is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. In that situation, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled. 



For an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that does not have a convenient printed representation, a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that computes the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> can be given using the #. notation. 



