 



The second step of the update initializes the newly added <ClLinks  term={"slot"}><i>slots</i></ClLinks> and performs any other user-defined actions. This step is implemented by the generic function **update-instance-for-different-class**. The generic function **update-instance-for-different-class** is invoked by <ClLinks  term={"change-class"}><b>change-class</b></ClLinks> after the first step of the update has been completed. 



The generic function **update-instance-for-different-class** is invoked on arguments computed by <ClLinks  term={"change-class"}><b>change-class</b></ClLinks>. The first argument passed is a copy of the <ClLinks  term={"instance"}><i>instance</i></ClLinks> being updated and is an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of the class *C*<sub>from</sub>; this copy has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> within the generic function <ClLinks  term={"change-class"}><b>change-class</b></ClLinks>. The second argument is the <ClLinks  term={"instance"}><i>instance</i></ClLinks> as updated so far by <ClLinks  term={"change-class"}><b>change-class</b></ClLinks> and is an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of the class *C*<sub>to</sub>. The remaining arguments are an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



There is a system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for **update-instance-for-different-class** that has two parameter specializers, each of which is the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>. First this <ClLinks  term={"method"}><i>method</i></ClLinks> checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of 



Initialization Arguments).) Then it calls the generic function <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> with the following arguments: the new <ClLinks  term={"instance"}><i>instance</i></ClLinks>, a list of <ClLinks  term={"name"}><i>names</i></ClLinks> of the newly added <ClLinks  term={"slot"}><i>slots</i></ClLinks>, and the initialization arguments it received. 







 



 



