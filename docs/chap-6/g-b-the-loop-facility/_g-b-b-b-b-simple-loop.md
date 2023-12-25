
 



A simple <DictionaryLink  term={"loop"}><b>loop</b></DictionaryLink> <ClLinks >form</ClLinks> is one that has a body containing only *compound forms*. Each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is *evaluated* in turn from left to right. When the last <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> has been *evaluated*, then the first <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated again, and so on, in a never-ending cycle. A simple <DictionaryLink  term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> establishes an *implicit block* named 



<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The execution of a simple <DictionaryLink  term={"loop"}><b>loop</b></DictionaryLink> can be terminated by explicitly transfering control to the *implicit block* (using <DictionaryLink  term={"return"}><b>return</b></DictionaryLink> or <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink>) or to some *exit point* outside of the <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> (*e.g.*, using <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink>, <DictionaryLink  term={"go"}><b>go</b></DictionaryLink>, or <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink>). 



