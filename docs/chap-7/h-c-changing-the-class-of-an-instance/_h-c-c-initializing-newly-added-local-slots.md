 



The second step of the update initializes the newly added <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> and performs any other user-defined actions. This step is implemented by the generic function **update-instance-for-different-class**. The generic function **update-instance-for-different-class** is invoked by <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink> after the first step of the update has been completed. 



The generic function **update-instance-for-different-class** is invoked on arguments computed by <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink>. The first argument passed is a copy of the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> being updated and is an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the class *C*<sub>from</sub>; this copy has *dynamic extent* within the generic function <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink>. The second argument is the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> as updated so far by <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink> and is an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the class *C*<sub>to</sub>. The remaining arguments are an *initialization argument list*. 



There is a system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for **update-instance-for-different-class** that has two parameter specializers, each of which is the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>. First this <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of 



Initialization Arguments).) Then it calls the generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the new <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, a list of <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of the newly added <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>, and the initialization arguments it received. 







 



 



