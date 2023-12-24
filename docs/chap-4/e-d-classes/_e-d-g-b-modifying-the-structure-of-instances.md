 



The first step modifies the structure of <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of the redefined <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> to conform to its new <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> definition. *Local slots* specified by the new <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> definition that are not specified as either local or shared by the old <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> are added, and <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> not specified as either local or shared by the new <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> definition that are specified as local by the old <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> are discarded. The <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> of these added and discarded <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> are passed as arguments to **update-instance-for-redefined-class** as described in 



the next section. 



The values of *local slots* specified by both the new and old *classes* are retained. If such a *local slot* was unbound, it remains unbound. 



The value of a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> that is specified as shared in the old <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and as local in the new <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is retained. If such a *shared slot* was unbound, the *local slot* is unbound.  







