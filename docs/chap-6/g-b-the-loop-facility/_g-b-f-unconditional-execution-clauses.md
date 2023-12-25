 



The do and doing constructs evaluate the supplied <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> wherever they occur in the expanded form of <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>. The <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> argument can be any *compound form*. Each <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated in every iteration. Because every loop clause must begin with a *loop keyword*, the keyword do is used when no control action other than execution is required. 



The return construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Any <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> are immediately returned by the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> form. It is equivalent to the clause do (return-from *block-name value*), where *block-name* is the name specified in a named clause, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there is no named clause. 







 



 



