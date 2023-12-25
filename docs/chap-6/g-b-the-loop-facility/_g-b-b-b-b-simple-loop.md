
 



A simple <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is one that has a body containing only *compound forms*. Each <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is *evaluated* in turn from left to right. When the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> has been *evaluated*, then the first <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated again, and so on, in a never-ending cycle. A simple <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> establishes an *implicit block* named 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The execution of a simple <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> can be terminated by explicitly transfering control to the *implicit block* (using <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> or <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>) or to some *exit point* outside of the <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> (*e.g.*, using <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>, <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>, or <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>). 



