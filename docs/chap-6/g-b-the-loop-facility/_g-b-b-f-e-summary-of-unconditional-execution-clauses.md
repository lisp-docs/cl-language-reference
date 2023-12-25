 



The do (or doing) construct evaluates all <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in its clause. 



The return construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Any <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> are immediately returned by the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> form. It is equivalent to the clause do (return-from *block-name value*), where *block-name* is the name specified in a named clause, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there is no named clause. 



For more information, see Section 6.1.5 (Unconditional Execution Clauses). 



