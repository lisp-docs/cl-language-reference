 



The description of a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> includes descriptions of the <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> that are defined on that <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> by the standard. A method signature is used to describe the <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> for each <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> defined for the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> must be of the form described by the *method signature*. 



**F** (*x class*) (*y t*) &amp;optional *z* &amp;key *k* 



This <GlossaryTerm styled={true} term={"signature"}><i>signature</i></GlossaryTerm> indicates that this method on the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> **F** has two <GlossaryTerm styled={true} term={"required parameter"}><i>required parameters</i></GlossaryTerm>: *x*, which must be a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of the *class class*; and *y*, which can be any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> (*i.e.*, a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>). In addition, there is an *optional parameter z* and a *keyword parameter k*. This <GlossaryTerm styled={true} term={"signature"}><i>signature</i></GlossaryTerm> also indicates that this method on F is a <GlossaryTerm styled={true} term={"primary method"}><i>primary method</i></GlossaryTerm> and has no <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>. 



For each <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> , the <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> supplied must be in the intersection of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> specified in the description of the corresponding <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> given in the <GlossaryTerm styled={true} term={"signature"}><i>signature</i></GlossaryTerm> of some <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> (including not only those <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> defined in this specification, but also <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> or user-defined <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> in situations where the definition of such <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> is permitted). 



