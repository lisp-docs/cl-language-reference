 



*Compiler macros* may be defined for *function names* that name <ClLinks  term={"macro"}><i>macros</i></ClLinks> as well as <ClLinks  term={"function"}><i>functions</i></ClLinks>. 



*Compiler macro* definitions are strictly global. There is no provision for defining local *compiler macros* in the way that <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> defines local <ClLinks  term={"macro"}><i>macros</i></ClLinks>. Lexical bindings of a function name shadow any compiler macro definition associated with the name as well as its global <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks> definition. 



Note that the presence of a compiler macro definition does not affect the values returned by functions that access <ClLinks  term={"function"}><i>function</i></ClLinks> definitions (*e.g.*, <ClLinks  term={"fboundp"}><b>fboundp</b></ClLinks>) or <ClLinks  term={"macro"}><i>macro</i></ClLinks> definitions (*e.g.*, <ClLinks  term={"macroexpand"}><b>macroexpand</b></ClLinks>).  







Compiler macros are global, and the function <ClLinks  term={"compiler-macro-function"}><b>compiler-macro-function</b></ClLinks> is sufficient to resolve their interaction with other lexical and global definitions. 



