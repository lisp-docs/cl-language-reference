 



This section describes how to use the *defined name* in code. The “Syntax” description for a *generic function* describes the *lambda list* of the *generic function* itself, while the “Method Signatures” describe the *lambda lists* of the defined <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>. The “Syntax” description for an *ordinary function*, a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, or a *special operator* describes its <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks>. 



For example, an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> description might say: 



**F** *x y* &amp;optional *z* &amp;key *k* 



This description indicates that the function **F** has two required parameters, *x* and *y*. In addition, there is an optional parameter *z* and a keyword parameter *k*. 



For <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> and *special operators*, syntax is given in modified BNF notation; see Section 1.4.1.2 (Modified BNF Syntax). For <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> a *lambda list* is given. In both cases, however, the outermost parentheses are omitted, and default value information is omitted. 



