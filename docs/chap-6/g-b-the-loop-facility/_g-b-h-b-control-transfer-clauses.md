 



The named construct establishes a name for an *implicit block* surrounding the entire <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> so that the <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> *special operator* can be used to return values from or to exit <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>. Only one name per <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> can be assigned. If used, the named construct must be the first clause in the loop expression. 



The return construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Any <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> are immediately returned by the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> form. This construct is similar to the <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> *special operator* and the <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. The return construct does not execute any finally clause that the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is given. 



