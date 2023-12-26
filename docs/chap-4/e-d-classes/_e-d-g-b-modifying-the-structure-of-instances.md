 



The first step modifies the structure of <ClLinks  term={"instance"}><i>instances</i></ClLinks> of the redefined <ClLinks  term={"class"}><i>class</i></ClLinks> to conform to its new <ClLinks  term={"class"}><i>class</i></ClLinks> definition. <GlossaryTerm styled={true} term={"local slot"}><i>Local slots</i></GlossaryTerm> specified by the new <ClLinks  term={"class"}><i>class</i></ClLinks> definition that are not specified as either local or shared by the old <ClLinks  term={"class"}><i>class</i></ClLinks> are added, and <ClLinks  term={"slot"}><i>slots</i></ClLinks> not specified as either local or shared by the new <ClLinks  term={"class"}><i>class</i></ClLinks> definition that are specified as local by the old <ClLinks  term={"class"}><i>class</i></ClLinks> are discarded. The <ClLinks  term={"name"}><i>names</i></ClLinks> of these added and discarded <ClLinks  term={"slot"}><i>slots</i></ClLinks> are passed as arguments to **update-instance-for-redefined-class** as described in 



the next section. 



The values of <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> specified by both the new and old *classes* are retained. If such a <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm> was unbound, it remains unbound. 



The value of a <ClLinks  term={"slot"}><i>slot</i></ClLinks> that is specified as shared in the old <ClLinks  term={"class"}><i>class</i></ClLinks> and as local in the new <ClLinks  term={"class"}><i>class</i></ClLinks> is retained. If such a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm> was unbound, the <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm> is unbound.  







