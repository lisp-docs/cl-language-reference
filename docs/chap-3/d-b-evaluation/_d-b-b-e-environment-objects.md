 



Some <ClLinks  term={"operator"}><i>operators</i></ClLinks> make use of an <ClLinks  term={"object"}><i>object</i></ClLinks>, called an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>, that represents the set of <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical bindings</i></GlossaryTerm> needed to perform semantic analysis on a <ClLinks  term={"form"}><i>form</i></ClLinks> in a given <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>. The set of <ClLinks  term={"binding"}><i>bindings</i></ClLinks> in an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> may be a subset of the <ClLinks  term={"binding"}><i>bindings</i></ClLinks> that would be needed to actually perform an <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks>; for example, <ClLinks  term={"value"}><i>values</i></ClLinks> associated with *variable names* and <GlossaryTerm styled={true} term={"function name"}><i>function names</i></GlossaryTerm> in the corresponding <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> might not be available in an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. 



The <ClLinks  term={"type"}><i>type</i></ClLinks> and nature of an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. The <ClLinks  term={"value"}><i>values</i></ClLinks> of <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameters</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"macro function"}><i>macro functions</i></GlossaryTerm> are examples of <GlossaryTerm styled={true} term={"environment object"}><i>environment objects</i></GlossaryTerm>. 



The <ClLinks  term={"object"}><i>object</i></ClLinks> <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> when used as an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> denotes the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm>; see Section 3.1.1.3.1 (The Null Lexical Environment). 



