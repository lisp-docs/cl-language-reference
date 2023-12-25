 



In a *lambda expression*, the body is evaluated in a lexical <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> that is formed by adding the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> in the *lambda list* with the corresponding <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> from the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to the current lexical <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 



For further discussion of how <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> are *established* based on the *lambda list*, see Section 3.4 (Lambda Lists). 



The body of a *lambda expression* is an *implicit progn*; the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> it returns are returned by the *lambda expression*. 



