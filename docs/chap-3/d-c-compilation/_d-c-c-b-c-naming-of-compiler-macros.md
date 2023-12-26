 



<GlossaryTerm styled={true} term={"compiler macro"}><i>Compiler macros</i></GlossaryTerm> may be defined for <GlossaryTerm styled={true} term={"function name"}><i>function names</i></GlossaryTerm> that name <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> as well as <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"compiler macro"}><i>Compiler macro</i></GlossaryTerm> definitions are strictly global. There is no provision for defining local <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> in the way that <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> defines local <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm>. Lexical bindings of a function name shadow any compiler macro definition associated with the name as well as its global <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> definition. 



Note that the presence of a compiler macro definition does not affect the values returned by functions that access <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> definitions (*e.g.*, <DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink>) or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> definitions (*e.g.*, <DictionaryLink  term={"macroexpand"}><b>macroexpand</b></DictionaryLink>).  







Compiler macros are global, and the function <DictionaryLink  term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink> is sufficient to resolve their interaction with other lexical and global definitions. 



