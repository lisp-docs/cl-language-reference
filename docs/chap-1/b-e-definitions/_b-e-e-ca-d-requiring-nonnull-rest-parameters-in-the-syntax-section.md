 



In some cases it is useful to refer to all arguments equally as a single aggregation using a <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> while at the same time requiring at least one argument. A variety of imperative and declarative means are available in <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> for expressing such a restriction, however they generally do not manifest themselves in a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>. For descriptive purposes within this specification, 



**F** &amp;rest <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks><sup>+</sup> 



means the same as 



**F** &amp;rest <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> 



but introduces the additional requirement that there be at least one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>. 



