 



*Compiler macros* may be defined for *function names* that name <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> as well as <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>. 



*Compiler macro* definitions are strictly global. There is no provision for defining local *compiler macros* in the way that <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> defines local <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>. Lexical bindings of a function name shadow any compiler macro definition associated with the name as well as its global <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> definition. 



Note that the presence of a compiler macro definition does not affect the values returned by functions that access <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> definitions (*e.g.*, <DictionaryLink styled={true} term={"fboundp"}><b>fboundp</b></DictionaryLink>) or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> definitions (*e.g.*, <DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink>).  







Compiler macros are global, and the function <DictionaryLink styled={true} term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink> is sufficient to resolve their interaction with other lexical and global definitions. 



