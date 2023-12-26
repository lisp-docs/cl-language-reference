 



This section describes how to use the <GlossaryTerm styled={true} term={"defined name"}><i>defined name</i></GlossaryTerm> in code. The “Syntax” description for a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> describes the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> itself, while the “Method Signatures” describe the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda lists</i></GlossaryTerm> of the defined <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>. The “Syntax” description for an <GlossaryTerm styled={true} term={"ordinary function"}><i>ordinary function</i></GlossaryTerm>, a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> describes its <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks>. 



For example, an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> description might say: 



**F** *x y* &amp;optional *z* &amp;key *k* 



This description indicates that the function **F** has two required parameters, *x* and *y*. In addition, there is an optional parameter *z* and a keyword parameter *k*. 



For <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> and <GlossaryTerm styled={true} term={"special operator"}><i>special operators</i></GlossaryTerm>, syntax is given in modified BNF notation; see Section 1.4.1.2 (Modified BNF Syntax). For <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> is given. In both cases, however, the outermost parentheses are omitted, and default value information is omitted. 



