 



In a *lambda expression*, the body is evaluated in a lexical <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> that is formed by adding the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> of each <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> in the *lambda list* with the corresponding <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> from the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> to the current lexical <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. 



For further discussion of how <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> are *established* based on the *lambda list*, see Section 3.4 (Lambda Lists). 



The body of a *lambda expression* is an *implicit progn*; the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> it returns are returned by the *lambda expression*. 



