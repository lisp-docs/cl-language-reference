 



In some cases it is useful to refer to all arguments equally as a single aggregation using a *rest parameter* while at the same time requiring at least one argument. A variety of imperative and declarative means are available in <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> for expressing such a restriction, however they generally do not manifest themselves in a *lambda list*. For descriptive purposes within this specification, 



**F** &amp;rest <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm><sup>+</sup> 



means the same as 



**F** &amp;rest <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> 



but introduces the additional requirement that there be at least one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. 



