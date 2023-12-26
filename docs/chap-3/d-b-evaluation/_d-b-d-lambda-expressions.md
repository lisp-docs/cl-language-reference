 



In a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>, the body is evaluated in a lexical <ClLinks  term={"environment"}><i>environment</i></ClLinks> that is formed by adding the <ClLinks  term={"binding"}><i>binding</i></ClLinks> of each <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> with the corresponding <ClLinks  term={"value"}><i>value</i></ClLinks> from the <ClLinks  term={"argument"}><i>arguments</i></ClLinks> to the current lexical <ClLinks  term={"environment"}><i>environment</i></ClLinks>. 



For further discussion of how <ClLinks  term={"binding"}><i>bindings</i></ClLinks> are *established* based on the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>, see Section 3.4 (Lambda Lists). 



The body of a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>; the <ClLinks  term={"value"}><i>values</i></ClLinks> it returns are returned by the <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>. 



