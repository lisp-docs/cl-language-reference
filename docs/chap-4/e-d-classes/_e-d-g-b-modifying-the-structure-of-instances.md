 



The first step modifies the structure of <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of the redefined <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> to conform to its new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> definition. *Local slots* specified by the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> definition that are not specified as either local or shared by the old <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> are added, and <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> not specified as either local or shared by the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> definition that are specified as local by the old <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> are discarded. The <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of these added and discarded <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are passed as arguments to **update-instance-for-redefined-class** as described in 



the next section. 



The values of *local slots* specified by both the new and old *classes* are retained. If such a *local slot* was unbound, it remains unbound. 



The value of a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> that is specified as shared in the old <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and as local in the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is retained. If such a *shared slot* was unbound, the *local slot* is unbound.  







