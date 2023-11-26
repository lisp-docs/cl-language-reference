**1.4.4.20.3 Requiring Non-Null Rest Parameters in the “Syntax” Section** 

In some cases it is useful to refer to all arguments equally as a single aggregation using a *rest parameter* while at the same time requiring at least one argument. A variety of imperative and declarative means are available in *code* for expressing such a restriction, however they generally do not manifest themselves in a *lambda list*. For descriptive purposes within this specification, 

**F** &rest *arguments*\<sup\>+\</sup\> 

means the same as 

**F** &rest *arguments* 

but introduces the additional requirement that there be at least one *argument*. 

