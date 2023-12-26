 



<GlossaryTerm styled={true} term={"minimal compilation"}><i>Minimal compilation</i></GlossaryTerm> is defined as follows: 



*•* All <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> calls appearing in the <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> being compiled are expanded, if at all, at compile time; they will not be expanded at run time. 



*•* All <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> calls appearing in the source code being compiled are expanded at compile time in such a way that they will not be expanded again at run time. <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> and <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> are effectively replaced by <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> corresponding to their bodies in which calls to <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> are replaced by their expansions. 



*•* The first <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> in a <DictionaryLink  term={"load-time-value"}><b>load-time-value</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> processed by <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> is *evaluated* at <GlossaryTerm styled={true} term={"compile time"}><i>compile time</i></GlossaryTerm>; in <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> processed by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, the compiler arranges for it to be *evaluated* at <GlossaryTerm styled={true} term={"load time"}><i>load time</i></GlossaryTerm>. In either case, the result of the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> is remembered and used later as the value of the <DictionaryLink  term={"load-time-value"}><b>load-time-value</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> at *execution time*. 



