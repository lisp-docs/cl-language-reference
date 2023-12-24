 



The second step of the update initializes the newly added <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> and performs any other user-defined actions. This step is implemented by the generic function **update-instance-for-different-class**. The generic function **update-instance-for-different-class** is invoked by <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> after the first step of the update has been completed. 



The generic function **update-instance-for-different-class** is invoked on arguments computed by <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks>. The first argument passed is a copy of the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> being updated and is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of the class *C*<sub>from</sub>; this copy has *dynamic extent* within the generic function <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks>. The second argument is the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> as updated so far by <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> and is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of the class *C*<sub>to</sub>. The remaining arguments are an *initialization argument list*. 



There is a system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for **update-instance-for-different-class** that has two parameter specializers, each of which is the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>. First this <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of 



Initialization Arguments).) Then it calls the generic function <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> with the following arguments: the new <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, a list of <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> of the newly added <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks>, and the initialization arguments it received. 







 



 



