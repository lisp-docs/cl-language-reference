 



The first step modifies the structure of <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of the redefined <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> to conform to its new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> definition. <GlossaryTerm styled={true} term={"local slot"}><i>Local slots</i></GlossaryTerm> specified by the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> definition that are not specified as either local or shared by the old <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> are added, and <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> not specified as either local or shared by the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> definition that are specified as local by the old <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> are discarded. The <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> of these added and discarded <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are passed as arguments to **update-instance-for-redefined-class** as described in 



the next section. 



The values of <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> specified by both the new and old *classes* are retained. If such a <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm> was unbound, it remains unbound. 



The value of a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> that is specified as shared in the old <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> and as local in the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is retained. If such a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm> was unbound, the <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm> is unbound.  







