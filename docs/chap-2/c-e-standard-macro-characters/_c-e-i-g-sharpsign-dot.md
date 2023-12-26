 



#.*foo* is read as the *object* resulting from the evaluation of the *object* represented by *foo*. The evaluation is done during the **read** process, when the #. notation is encountered. The #. syntax therefore performs a read-time evaluation of *foo*. 



The normal effect of #. is inhibited when the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*read-eval\*** is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. In that situation, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled. 



For an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that does not have a convenient printed representation, a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that computes the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> can be given using the #. notation. 



