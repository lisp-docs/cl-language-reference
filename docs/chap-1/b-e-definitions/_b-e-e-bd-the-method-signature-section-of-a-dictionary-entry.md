 



The description of a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> includes descriptions of the <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> that are defined on that <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> by the standard. A method signature is used to describe the <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks> and <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> for each <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. <ClLinks styled={true} term={"method"}><i>Methods</i></ClLinks> defined for the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> must be of the form described by the *method signature*. 



**F** (*x class*) (*y t*) &amp;optional *z* &amp;key *k* 



This <ClLinks styled={true} term={"signature"}><i>signature</i></ClLinks> indicates that this method on the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> **F** has two <GlossaryTerm styled={true} term={"required parameter"}><i>required parameters</i></GlossaryTerm>: *x*, which must be a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of the *class class*; and *y*, which can be any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> (*i.e.*, a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>). In addition, there is an *optional parameter z* and a *keyword parameter k*. This <ClLinks styled={true} term={"signature"}><i>signature</i></ClLinks> also indicates that this method on F is a <GlossaryTerm styled={true} term={"primary method"}><i>primary method</i></GlossaryTerm> and has no <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>. 



For each <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> , the <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> supplied must be in the intersection of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> specified in the description of the corresponding <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> and the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> given in the <ClLinks styled={true} term={"signature"}><i>signature</i></ClLinks> of some <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> (including not only those <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> defined in this specification, but also <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> or user-defined <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> in situations where the definition of such <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> is permitted). 



