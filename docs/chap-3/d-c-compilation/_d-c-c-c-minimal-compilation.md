 



*Minimal compilation* is defined as follows: 



*•* All *compiler macro* calls appearing in the *source code* being compiled are expanded, if at all, at compile time; they will not be expanded at run time. 



*•* All <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> and *symbol macro* calls appearing in the source code being compiled are expanded at compile time in such a way that they will not be expanded again at run time. <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> and <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> are effectively replaced by <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> corresponding to their bodies in which calls to <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> are replaced by their expansions. 



*•* The first <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> in a <DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in *source code* processed by <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> is *evaluated* at *compile time*; in *source code* processed by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, the compiler arranges for it to be *evaluated* at *load time*. In either case, the result of the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> is remembered and used later as the value of the <DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> at *execution time*. 



